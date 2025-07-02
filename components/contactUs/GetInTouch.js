"use client";
import { Form, Input, Select } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactImg from "/public/assets/images/contactUsFormi.jpg";

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

const companyContacts = [
  { label: "Sales", email: "Sales@reddingtonglobal.com" },
  { label: "Careers", email: "Careers@reddingtonglobal.com" },
  { label: "Phone", phone: "+91 9818224495" },
];

const GetInTouch = () => {
  const [form] = Form.useForm();
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [phoneLength, setPhoneLength] = useState(countryCodes[0].length);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    const phone = `${values.countryCode} ${values.phone}`;
    const submitValues = { ...values, phone };

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
        emailjs
          .send(
            serviceId,
            templateId,
            {
              name: submitValues.fullName,
              email: submitValues.email,
              phone: submitValues.phone,
              subject: submitValues.subject,
              message: submitValues.message,
            },
            publicKey
          )
          .then(
            () => {
              form.resetFields();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 4000);
            },
            () => {
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

  const validateName = (_, value) => {
    if (!value || /^[A-Za-z\s]+$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Name must contain letters and spaces only");
  };

  const validatePhone = (_, value) => {
    const codeObj = countryCodes.find((c) => c.code === selectedCode);
    const maxLength = codeObj ? codeObj.length : 15;
    if (!value) return Promise.reject();
    if (!/^\d+$/.test(value)) return Promise.reject("Enter a valid number");
    if (value.length !== maxLength)
      return Promise.reject(`Phone number must be ${maxLength} digits`);
    return Promise.resolve();
  };

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
    form.setFieldsValue({ phone: "" });
  };

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .filter(Boolean)
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  };

  const handleInputBlur = (field) => (e) => {
    let value = e.target.value.trim();
    if (field === "email") {
      value = value.toLowerCase();
    } else if (field === "phone") {
      value = value.replace(/\D/g, "");
    } else {
      value = capitalizeWords(value);
    }
    form.setFieldsValue({ [field]: value });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // 3D Card Animation
  const card3D = {
    rest: { rotateY: 0, scale: 1, boxShadow: "0 8px 32px #6366f133" },
    hover: {
      rotateY: 8,
      scale: 1.03,
      boxShadow: "0 16px 48px #6366f155",
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    tap: {
      rotateY: -8,
      scale: 0.98,
      boxShadow: "0 4px 16px #6366f122",
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  // Animated background bubbles
  const bubbles = Array.from({ length: 12 }).map((_, i) => ({
    size: Math.random() * 80 + 40,
    left: Math.random() * 90 + "%",
    top: Math.random() * 90 + "%",
    delay: Math.random() * 10,
    opacity: Math.random() * 0.25 + 0.08,
    blur: Math.random() * 8 + 2,
    color: [
      "#6366f1",
      "#60a5fa",
      "#f472b6",
      "#a7f3d0",
      "#fbbf24",
      "#f87171",
    ][i % 6],
  }));

  return (
    <div
      id="get-in-touch"
      className="relative min-h-[700px] flex items-center justify-center bg-[#F6F6F6] py-12 px-2 overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, #6366f1 0%, #60a5fa 50%, #f472b6 100%)",
          backgroundSize: "200% 200%",
          opacity: 0.13,
          filter: "blur(2px)",
        }}
      />
      {/* Animated floating bubbles for 3D effect */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full z-0"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            background: b.color,
            opacity: b.opacity,
            filter: `blur(${b.blur}px)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12 + b.delay,
            delay: b.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Confetti animation on submit */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/90 rounded-2xl px-8 py-6 shadow-2xl border-2 border-[#6366f1] flex flex-col items-center"
            >
              <svg width="60" height="60" fill="none" viewBox="0 0 24 24">
                <motion.circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    type: "spring",
                  }}
                />
                <motion.path
                  d="M7 13l3 3 7-7"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                    type: "spring",
                  }}
                />
              </svg>
              <div className="mt-4 text-lg font-semibold text-[#00224C] text-center">
                Thank you!<br />
                Your message has been sent.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        {/* Left: Image with animation and company contacts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center w-full md:w-1/2 mb-8 md:mb-0"
        >
          <motion.div
            variants={card3D}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full"
          >
            <Image
              src={contactImg}
              alt="Contact Us"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl object-cover w-full h-[220px] sm:h-[320px] md:h-[420px] max-h-[500px] border-4 border-[#e0e7ff] transition-transform duration-300"
              priority
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(99,102,241,0.15), 0 1.5px 8px 0 rgba(96,165,250,0.10)",
              }}
            />
          </motion.div>
          {/* Company Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 md:mt-8 w-full flex flex-col items-center"
          >
            <div className="bg-gradient-to-r from-[#6366f1]/80 to-[#60a5fa]/80 rounded-xl shadow-lg px-4 py-4 md:px-6 md:py-5 w-full max-w-xs sm:max-w-sm md:max-w-md text-white text-center space-y-2 border border-[#e0e7ff] backdrop-blur-md"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(99,102,241,0.15), 0 1.5px 8px 0 rgba(96,165,250,0.10)",
              }}
            >
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-semibold">Sales Email: </span>
                  <a
                    href="mailto:Sales@reddingtonglobal.com"
                    className="underline hover:text-[#f472b6] transition break-all"
                  >
                    Sales@reddingtonglobal.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Careers Email: </span>
                  <a
                    href="mailto:Careers@reddingtonglobal.com"
                    className="underline hover:text-[#f472b6] transition break-all"
                  >
                    Careers@reddingtonglobal.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Phone: </span>
                  <a
                    href="tel:+91 9818224495"
                    className="underline hover:text-[#f472b6] transition"
                  >
                    +91 9818224495
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Right: Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 border border-[#e0e7ff] backdrop-blur-lg"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(99,102,241,0.15), 0 1.5px 8px 0 rgba(96,165,250,0.10)",
          }}
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="uppercase text-[#00224C] text-4xl font-extrabold tracking-wide mb-2 text-center drop-shadow-lg"
          >
            Get in Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg text-[#4B5563] font-medium text-center mb-8"
          >
            Our friendly team would love to hear from you.
          </motion.p>
          <Form
            form={form}
            className="space-y-6"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {/* Full Name Section */}
            <div className="flex flex-col gap-4 w-full">
              <Form.Item
                className="w-full"
                name="fullName"
                rules={[
                  { required: true, message: "Please enter your Full Name" },
                  { min: 2, message: "Full name must be at least 2 characters" },
                  { validator: validateName },
                ]}
              >
                <Input
                  placeholder="Full Name*"
                  className="px-[30px] py-[18px] rounded-lg border border-[#c7d2fe] focus:border-[#6366f1] transition"
                  maxLength={50}
                  onBlur={handleInputBlur("fullName")}
                />
              </Form.Item>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <Form.Item
                className="w-full md:w-1/2"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                  { pattern: /@/, message: "Email must contain @" },
                ]}
              >
                <Input
                  placeholder="Enter your email*"
                  className="px-[30px] py-[18px] rounded-lg border border-[#c7d2fe] focus:border-[#6366f1] transition"
                  maxLength={100}
                  onBlur={handleInputBlur("email")}
                />
              </Form.Item>
              <Form.Item
                className="w-full md:w-1/2"
                name="subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input
                  placeholder="Subject"
                  className="px-[30px] py-[18px] rounded-lg border border-[#c7d2fe] focus:border-[#6366f1] transition"
                  maxLength={100}
                  onBlur={handleInputBlur("subject")}
                />
              </Form.Item>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <Form.Item
                className="w-1/3"
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
                  className="rounded-lg border border-[#c7d2fe] focus:border-[#6366f1] transition"
                />
              </Form.Item>
              <Form.Item
                className="w-2/3"
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  { validator: validatePhone },
                ]}
              >
                <Input
                  placeholder="Phone No*"
                  className="px-[30px] py-[18px] rounded-lg border border-[#c7d2fe] focus:border-[#6366f1] transition"
                  maxLength={phoneLength}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    form.setFieldsValue({ phone: value });
                  }}
                  onBlur={handleInputBlur("phone")}
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
                className="px-[30px] py-[18px] rounded-lg border border-[#c7d2fe] focus:border-[#6366f1] transition resize-none"
                rows={4}
                maxLength={2000}
                showCount
                onBlur={(e) => {
                  let value = e.target.value.trim();
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
                  scale: 1.08,
                  background:
                    "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
                  color: "#fff",
                  boxShadow: "0px 8px 24px #6366f155",
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow: "0px 4px 12px #6366f133",
                }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden uppercase font-bold bg-gradient-to-r from-[#6366f1] to-[#60a5fa] text-white py-3 px-10 w-full md:w-[180px] h-[55px] rounded-lg shadow-lg float-right transition-all focus:outline-none"
                type="submit"
              >
                <span className="relative z-10">Submit</span>
                <span className="absolute inset-0 pointer-events-none animate-pulse bg-gradient-to-r from-[#6366f1]/30 to-[#60a5fa]/30 opacity-0 group-hover:opacity-100 transition" />
              </motion.button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
