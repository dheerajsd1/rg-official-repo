"use client";
import { Form, Input, Select } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { cardVariantsLeft, cardVariantsRight } from "../common/animation/variation";

const countryCodes = [
  { code: "+91", label: "India (+91)", length: 10 },
  { code: "+1", label: "USA (+1)", length: 10 },
  { code: "+7", label: "Russia (+7)", length: 10 },
  { code: "+20", label: "Egypt (+20)", length: 10 },
  { code: "+27", label: "South Africa (+27)", length: 9 },
  { code: "+30", label: "Greece (+30)", length: 10 },
  { code: "+31", label: "Netherlands (+31)", length: 9 },
  { code: "+32", label: "Belgium (+32)", length: 8 },
  { code: "+33", label: "France (+33)", length: 9 },
  { code: "+34", label: "Spain (+34)", length: 9 },
  { code: "+36", label: "Hungary (+36)", length: 9 },
  { code: "+39", label: "Italy (+39)", length: 10 },
  { code: "+40", label: "Romania (+40)", length: 9 },
  { code: "+41", label: "Switzerland (+41)", length: 9 },
  { code: "+43", label: "Austria (+43)", length: 10 },
  { code: "+44", label: "UK (+44)", length: 10 },
  { code: "+45", label: "Denmark (+45)", length: 8 },
  { code: "+46", label: "Sweden (+46)", length: 9 },
  { code: "+47", label: "Norway (+47)", length: 8 },
  { code: "+48", label: "Poland (+48)", length: 9 },
  { code: "+49", label: "Germany (+49)", length: 10 },
  { code: "+52", label: "Mexico (+52)", length: 10 },
  { code: "+54", label: "Argentina (+54)", length: 10 },
  { code: "+55", label: "Brazil (+55)", length: 10 },
  { code: "+56", label: "Chile (+56)", length: 9 },
  { code: "+57", label: "Colombia (+57)", length: 10 },
  { code: "+58", label: "Venezuela (+58)", length: 10 },
  { code: "+60", label: "Malaysia (+60)", length: 9 },
  { code: "+61", label: "Australia (+61)", length: 9 },
  { code: "+62", label: "Indonesia (+62)", length: 10 },
  { code: "+63", label: "Philippines (+63)", length: 10 },
  { code: "+64", label: "New Zealand (+64)", length: 9 },
  { code: "+65", label: "Singapore (+65)", length: 8 },
  { code: "+66", label: "Thailand (+66)", length: 9 },
  { code: "+81", label: "Japan (+81)", length: 9 },
  { code: "+82", label: "South Korea (+82)", length: 9 },
  { code: "+84", label: "Vietnam (+84)", length: 9 },
  { code: "+86", label: "China (+86)", length: 10 },
  { code: "+90", label: "Turkey (+90)", length: 10 },
  
  { code: "+92", label: "Pakistan (+92)", length: 10 },
  { code: "+93", label: "Afghanistan (+93)", length: 9 },
  { code: "+94", label: "Sri Lanka (+94)", length: 9 },
  { code: "+95", label: "Myanmar (+95)", length: 9 },
  { code: "+98", label: "Iran (+98)", length: 10 },
  { code: "+211", label: "South Sudan (+211)", length: 9 },
  { code: "+212", label: "Morocco (+212)", length: 9 },
  { code: "+213", label: "Algeria (+213)", length: 9 },
  { code: "+216", label: "Tunisia (+216)", length: 8 },
  { code: "+218", label: "Libya (+218)", length: 9 },
  { code: "+220", label: "Gambia (+220)", length: 7 },
  { code: "+221", label: "Senegal (+221)", length: 9 },
  { code: "+222", label: "Mauritania (+222)", length: 8 },
  { code: "+223", label: "Mali (+223)", length: 8 },
  { code: "+224", label: "Guinea (+224)", length: 9 },
  { code: "+225", label: "Ivory Coast (+225)", length: 8 },
  { code: "+226", label: "Burkina Faso (+226)", length: 8 },
  { code: "+227", label: "Niger (+227)", length: 8 },
  { code: "+228", label: "Togo (+228)", length: 8 },
  { code: "+229", label: "Benin (+229)", length: 8 },
  { code: "+230", label: "Mauritius (+230)", length: 8 },
  { code: "+231", label: "Liberia (+231)", length: 8 },
  { code: "+232", label: "Sierra Leone (+232)", length: 8 },
  { code: "+233", label: "Ghana (+233)", length: 9 },
  { code: "+234", label: "Nigeria (+234)", length: 10 },
  { code: "+235", label: "Chad (+235)", length: 8 },
  { code: "+236", label: "Central African Republic (+236)", length: 8 },
  { code: "+237", label: "Cameroon (+237)", length: 9 },
  { code: "+238", label: "Cape Verde (+238)", length: 7 },
  { code: "+239", label: "Sao Tome and Principe (+239)", length: 7 },
  { code: "+240", label: "Equatorial Guinea (+240)", length: 9 },
  { code: "+241", label: "Gabon (+241)", length: 9 },
  { code: "+242", label: "Congo (+242)", length: 9 },
  { code: "+243", label: "DR Congo (+243)", length: 9 },
  { code: "+244", label: "Angola (+244)", length: 9 },
  { code: "+245", label: "Guinea-Bissau (+245)", length: 7 },
  { code: "+246", label: "British Indian Ocean Territory (+246)", length: 7 },
  { code: "+248", label: "Seychelles (+248)", length: 7 },
  { code: "+249", label: "Sudan (+249)", length: 9 },
  { code: "+250", label: "Rwanda (+250)", length: 9 },
  { code: "+251", label: "Ethiopia (+251)", length: 9 },
  { code: "+252", label: "Somalia (+252)", length: 8 },
  { code: "+253", label: "Djibouti (+253)", length: 8 },
  { code: "+254", label: "Kenya (+254)", length: 9 },
  { code: "+255", label: "Tanzania (+255)", length: 9 },
  { code: "+256", label: "Uganda (+256)", length: 9 },
  { code: "+257", label: "Burundi (+257)", length: 8 },
  { code: "+258", label: "Mozambique (+258)", length: 9 },
  { code: "+260", label: "Zambia (+260)", length: 9 },
  { code: "+261", label: "Madagascar (+261)", length: 9 },
  { code: "+262", label: "Reunion (+262)", length: 9 },
  { code: "+263", label: "Zimbabwe (+263)", length: 9 },
  { code: "+264", label: "Namibia (+264)", length: 9 },
  { code: "+265", label: "Malawi (+265)", length: 9 },
  { code: "+266", label: "Lesotho (+266)", length: 8 },
  { code: "+267", label: "Botswana (+267)", length: 8 },
  { code: "+268", label: "Eswatini (+268)", length: 8 },
  { code: "+269", label: "Comoros (+269)", length: 7 },
  { code: "+290", label: "Saint Helena (+290)", length: 5 },
  { code: "+291", label: "Eritrea (+291)", length: 7 },
  { code: "+297", label: "Aruba (+297)", length: 7 },
  { code: "+298", label: "Faroe Islands (+298)", length: 6 },
  { code: "+299", label: "Greenland (+299)", length: 6 },
  { code: "+350", label: "Gibraltar (+350)", length: 8 },
  { code: "+351", label: "Portugal (+351)", length: 9 },
  { code: "+352", label: "Luxembourg (+352)", length: 9 },
  { code: "+353", label: "Ireland (+353)", length: 9 },
  { code: "+354", label: "Iceland (+354)", length: 7 },
  { code: "+355", label: "Albania (+355)", length: 9 },
  { code: "+356", label: "Malta (+356)", length: 8 },
  { code: "+357", label: "Cyprus (+357)", length: 8 },
  { code: "+358", label: "Finland (+358)", length: 10 },
  { code: "+359", label: "Bulgaria (+359)", length: 9 },
  { code: "+370", label: "Lithuania (+370)", length: 8 },
  { code: "+371", label: "Latvia (+371)", length: 8 },
  { code: "+372", label: "Estonia (+372)", length: 7 },
  { code: "+373", label: "Moldova (+373)", length: 8 },
  { code: "+374", label: "Armenia (+374)", length: 8 },
  { code: "+375", label: "Belarus (+375)", length: 9 },
  { code: "+376", label: "Andorra (+376)", length: 6 },
  { code: "+377", label: "Monaco (+377)", length: 8 },
  { code: "+378", label: "San Marino (+378)", length: 10 },
  { code: "+380", label: "Ukraine (+380)", length: 9 },
  { code: "+381", label: "Serbia (+381)", length: 8 },
  { code: "+382", label: "Montenegro (+382)", length: 8 },
  { code: "+383", label: "Kosovo (+383)", length: 8 },
  { code: "+385", label: "Croatia (+385)", length: 9 },
  { code: "+386", label: "Slovenia (+386)", length: 8 },
  { code: "+387", label: "Bosnia and Herzegovina (+387)", length: 8 },
  { code: "+389", label: "North Macedonia (+389)", length: 8 },
  { code: "+420", label: "Czech Republic (+420)", length: 9 },
  { code: "+421", label: "Slovakia (+421)", length: 9 },
  { code: "+423", label: "Liechtenstein (+423)", length: 7 },
  { code: "+852", label: "Hong Kong (+852)", length: 8 },
  { code: "+853", label: "Macau (+853)", length: 8 },
  { code: "+855", label: "Cambodia (+855)", length: 9 },
  { code: "+856", label: "Laos (+856)", length: 9 },
  { code: "+880", label: "Bangladesh (+880)", length: 10 },
  { code: "+886", label: "Taiwan (+886)", length: 9 },
  { code: "+960", label: "Maldives (+960)", length: 7 },
  { code: "+961", label: "Lebanon (+961)", length: 8 },
  { code: "+962", label: "Jordan (+962)", length: 9 },
  { code: "+963", label: "Syria (+963)", length: 9 },
  { code: "+964", label: "Iraq (+964)", length: 10 },
  { code: "+965", label: "Kuwait (+965)", length: 8 },
  { code: "+966", label: "Saudi Arabia (+966)", length: 9 },
  { code: "+967", label: "Yemen (+967)", length: 9 },
  { code: "+968", label: "Oman (+968)", length: 8 },
  { code: "+970", label: "Palestine (+970)", length: 9 },
  { code: "+971", label: "UAE (+971)", length: 9 },
  { code: "+972", label: "Israel (+972)", length: 9 },
  { code: "+973", label: "Bahrain (+973)", length: 8 },
  { code: "+974", label: "Qatar (+974)", length: 8 },
  { code: "+975", label: "Bhutan (+975)", length: 8 },
  { code: "+976", label: "Mongolia (+976)", length: 8 },
  { code: "+977", label: "Nepal (+977)", length: 10 },
  { code: "+992", label: "Tajikistan (+992)", length: 9 },
  { code: "+993", label: "Turkmenistan (+993)", length: 8 },
  { code: "+994", label: "Azerbaijan (+994)", length: 9 },
  { code: "+995", label: "Georgia (+995)", length: 9 },
  { code: "+996", label: "Kyrgyzstan (+996)", length: 9 },
  { code: "+998", label: "Uzbekistan (+998)", length: 9 }
];


const GetInTouch = () => {
  const [form] = Form.useForm();
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [phoneLength, setPhoneLength] = useState(countryCodes[0].length);

  // Only send email using EmailJS
const onFinish = async (values) => {
  const phone = `${values.countryCode} ${values.phone}`;
  const submitValues = { ...values, phone };

  // Get EmailJS credentials from environment variables
   const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  try {
    const response = await fetch("/api/saveContact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitValues),
    });

    if (response.ok) {
      emailjs.send(
        serviceId,
        templateId,
        {
          name: submitValues.name,
          email: submitValues.email,
          phone: submitValues.phone,
          subject: submitValues.subject,
          message: submitValues.message,
        },
        publicKey
      ).then(
        (result) => {
          form.resetFields();
          alert("Your message has been sent and saved!");
        },
        (error) => {
          alert("Saved to database, but failed to send email.");
        }
      );
    } else {
      alert("There was an error saving your message. Please try again later.");
    }
  } catch (err) {
    alert("There was an error. Please try again later.");
  }
};

  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
  };

  // Name: letters and spaces only
  const validateName = (_, value) => {
    if (!value || /^[A-Za-z\s]+$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Name must contain letters and spaces only");
  };

  // Phone: only digits, length based on country
  const validatePhone = (_, value) => {
    const codeObj = countryCodes.find((c) => c.code === selectedCode);
    const maxLength = codeObj ? codeObj.length : 15;
    if (!value) return Promise.reject();
    if (!/^\d+$/.test(value)) return Promise.reject("Enter a valid number");
    if (value.length !== maxLength)
      return Promise.reject(`Phone number must be ${maxLength} digits`);
    return Promise.resolve();
  };

  // Message: alphanumeric, 50-2000 chars
  const validateMessage = (_, value) => {
    if (!value) return Promise.reject();
    if (value.length < 50)
      return Promise.reject("Message must be at least 50 characters");
    if (value.length > 2000)
      return Promise.reject("Message must be at most 2000 characters");
    if (
      !/^[\w\s.,!?@#&()\-'"$%:;*+=/\\[\]{}|<>`~^]*$/i.test(value)
    ) {
      return Promise.reject(
        "Message can only contain alphanumeric characters and common punctuation"
      );
    }
    return Promise.resolve();
  };

  const handleCountryChange = (value) => {
    setSelectedCode(value);
    const codeObj = countryCodes.find((c) => c.code === value);
    setPhoneLength(codeObj ? codeObj.length : 10);
    // Reset phone field when country changes
    form.setFieldsValue({ phone: "" });
  };

  // Capitalize each word, trim trailing spaces
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Capitalize and trim for all user input fields
  const handleInputBlur = (field) => (e) => {
    let value = e.target.value.trim();
    if (field === "email") {
      // For email, just trim and lowercase
      value = value.toLowerCase();
    } else if (field === "phone") {
      // For phone, only digits, no spaces
      value = value.replace(/\D/g, "");
    } else {
      // For name and subject, capitalize words
      value = capitalizeWords(value);
    }
    form.setFieldsValue({ [field]: value });
  };

  return (
    <div
      id="get-in-touch"
      className='md:bg-[url("/assets/images/get_in_touch.png")] bg-[url("/assets/images/get_in_touch.png")] 2xl:bg-center md:bg-[center_left_45%] bg-top md:bg-cover bg-contain bg-no-repeat bg-[#F6F6F6] min-h-[650px]'
    >
      <div className="container flex md:flex-row flex-col justify-between md:min-h-[650px] items-center gap-5">
        <div className="text-white flex flex-col justify-center h-full md:w-1/2 w-full md:min-h-auto min-h-[300px]">
          <h3 className="capitalize text-[39px] font-semibold">get in touch</h3>
          <p>Get Free Business Consultation Today!</p>
        </div>
        <div className="md:w-1/2 w-full mb-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsRight()}
            className="hide_mobile_animation"
          >
            <h3 className="uppercase text-[#00224C] text-4xl font-semibold py-10">
              ask your questions
            </h3>
            <Form
              form={form}
              className="placeholder_color_black border_none h-full"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="flex gap-4 w-full">
                <Form.Item
                  className="w-1/2"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your Full Name" },
                    { min: 2, message: "Name must be at least 2 characters" },
                    { validator: validateName },
                  ]}
                >
                  <Input
                    placeholder="Enter your Full Name*"
                    className="px-[30px] py-[18px]"
                    maxLength={50}
                    onBlur={handleInputBlur("name")}
                  />
                </Form.Item>
                <Form.Item
                  className="w-1/2"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                    { pattern: /@/, message: "Email must contain @" },
                  ]}
                >
                  <Input
                    placeholder="Enter your email*"
                    className="px-[30px] py-[18px]"
                    maxLength={100}
                    onBlur={handleInputBlur("email")}
                  />
                </Form.Item>
              </div>
              <div className="flex gap-4 w-full">
                <Form.Item
                  className="w-1/4"
                  name="countryCode"
                  rules={[{ required: true, message: "Select country code" }]}
                  initialValue={countryCodes[0].code}
                >
                  <Select
                    showSearch
                    placeholder="Code"
                    optionFilterProp="children"
                    onChange={handleCountryChange}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={countryCodes.map((c) => ({
                      value: c.code,
                      label: c.label,
                    }))}
                  />
                </Form.Item>
                <Form.Item
                  className="w-1/2"
                  name="phone"
                  rules={[
                    { required: true, message: "Please enter your phone number" },
                    { validator: validatePhone },
                  ]}
                >
                  <Input
                    placeholder="Phone No*"
                    className="px-[30px] py-[18px]"
                    maxLength={phoneLength}
                    onChange={(e) => {
                      // Only allow digits
                      const value = e.target.value.replace(/\D/g, "");
                      form.setFieldsValue({ phone: value });
                    }}
                    onBlur={handleInputBlur("phone")}
                  />
                </Form.Item>
                <Form.Item
                  className="w-1/4"
                  name="subject"
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input
                    placeholder="Subject"
                    className="px-[30px] py-[18px]"
                    maxLength={100}
                    onBlur={handleInputBlur("subject")}
                  />
                </Form.Item>
              </div>
              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                  { validator: validateMessage },
                ]}
              >
                <Input.TextArea
                  placeholder="Message"
                  className="px-[30px] py-[18px]"
                  rows={4}
                  maxLength={2000}
                  showCount
                  onBlur={e => {
                    let value = e.target.value.trim();
                    // Capitalize only the first word, leave the rest unchanged
                    if (value.length > 0) {
                      const firstSpace = value.indexOf(" ");
                      if (firstSpace === -1) {
                        value = value.charAt(0).toUpperCase() + value.slice(1);
                      } else {
                        value =
                          value.charAt(0).toUpperCase() +
                          value.slice(1, firstSpace) +
                          value.slice(firstSpace);
                      }
                    }
                    form.setFieldsValue({ message: value });
                  }}
                />
              </Form.Item>
              <Form.Item>
                <motion.button
                  whileHover={{
                    opacity: 1,
                    scale: 1.1,
                    boxShadow: "0px 10px 16px #ccc",
                  }}
                  whileTap={{
                    opacity: 1,
                    scale: 1.05,
                    boxShadow: "0px 5px 8px #ccc",
                  }}
                  transition={{ duration: 0.6 }}
                  className="hide_mobile_animation uppercase bg-[#00224C] text-white py-2 px-10 w-[157px] h-[55px] float-right"
                  type="submit"
                >
                  submit
                </motion.button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;