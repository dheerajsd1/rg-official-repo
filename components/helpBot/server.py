from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq
from docx import Document
import os

# Load Groq API key from environment variable
load_dotenv() 
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Load context from Word document at startup
def extract_context_from_docx(docx_path):
    doc = Document(docx_path)
    return "\n".join(p.text for p in doc.paragraphs if p.text.strip())

CONTEXT = extract_context_from_docx("Info(About_RGC) - Updated.docx")

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    user_query = data.get('message', '').strip()
    if not user_query:
        return "Please provide a valid message.", 400

     # Keywords to trigger contact form redirect
    contact_intent = ['contact me', 'get in touch', 'reach out to me', 'please call me', 'connect with me', 'call me', 'email me']
    if any(phrase in user_query.lower() for phrase in contact_intent):
        return "Sure! If you'd like us to get in touch with you, kindly fill out [this form below](#get-in-touch). __REDIRECT_TO_GET_IN_TOUCH__"

    prompt = f"""
    You are Michelle — a smart, helpful, and human-like assistant (female), fluent in English, Hindi, Kannada, Marathi, Gujarati, Assamese and Tamil.
    You have over 5 years of experience at this company and your role is Sr. Business Advisor.

    Do **not** introduce yourself unless the user explicitly asks about your name or identity.
    If asked whether you are a bot, respond confidently that your name is Michelle and you are here to help.

    You must **never** mention or imply that you are using a document, context, source, or any external material to answer.
    Respond as if the information is already known to you through your experience.

    Always detect and reply in the **same language** the user used in their input.
    Make your response natural, native-sounding, and professional in that language. Do not translate or switch to another language unless explicitly asked.

    If relevant or asked, you may share these official company links:

    - [🔗 Reddington Global Consultancy on LinkedIn](https://in.linkedin.com/company/reddington-global-consultancy-pvt-ltd)
    - [🔗 Immergix on Instagram](https://www.instagram.com/_rg_immergix/)
    - [🔗 Immergix on LinkedIn](https://www.linkedin.com/company/immergixthefuture/)


    Context:
    {CONTEXT}

    User question:
    {user_query}

    Respond clearly, concisely, and confidently — as if you already know the information.
    Avoid all phrases like "Based on the information", "It appears that", "According to the document", or anything similar. Do not hedge. Just answer the question directly.

    If you are unable to answer the question accurately, do not guess or make anything up.
    In such cases, respond exactly with:
    "If you'd like more information, please contact us:
    - 📞 Phone: +91 9818224495
    - 📧 Email (Sales): Sales@reddingtonglobal.com
    - 📧 Email (Careers): Careers@reddingtonglobal.com"
    """



    try:
        response = client.chat.completions.create(
            model="llama3-70b-8192",  # Use the correct Groq model name
            messages=[{"role": "user", "content": prompt}],
            temperature=0.5,
        )
        answer = response.choices[0].message.content.strip()
        return answer
    except Exception as e:
        print("Error:", e)
        return "Sorry, we are unable to answer your question. Please ask your query at +91 9818224495", 500

if __name__ == "__main__":
    app.run(port=3001, debug=True)