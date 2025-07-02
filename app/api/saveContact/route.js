// route.js
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Schema for Contact (stored in 'git' collection)
const ContactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
}, { collection: "git" });

const ContactMessage = mongoose.models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);

// Schema for Newsletter Subscribers (stored in 'newsletter subscribers' collection)
const NewsletterSubscriberSchema = new mongoose.Schema({
  name: String,
  email: String,
  subscribedAt: { type: Date, default: Date.now },
}, { collection: "newsletter subscribers" });

const NewsletterSubscriber = mongoose.models["newsletter subscribers"] || mongoose.model("newsletter subscribers", NewsletterSubscriberSchema);

// Route handler
export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    if (body?.type === "Newsletter") {
      // Newsletter form submission
      const { name, email } = body;
      await NewsletterSubscriber.create({ name, email });
    } else {
      // Contact form submission
      const { name, email, phone, subject, message } = body;
      await ContactMessage.create({ name, email, phone, subject, message });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving to database:", error);
    return new Response(JSON.stringify({ error: "Failed to save data" }), { status: 500 });
  }
}
