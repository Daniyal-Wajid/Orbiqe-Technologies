const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. Save to Database (Priority)
    const contact = new Contact({ name, email, message });
    await contact.save();

    // 2. Try sending emails (Optional / Best Effort)
    try {
      const mailOptionsToBusiness = {
        from: email,
        to: "info@orbiqetech.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`,
      };

      const mailOptionsToUser = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for contacting us!",
        text: `Dear ${name},\n\nThank you for reaching out. We'll get back to you soon.\n\nRegards,\nOrbiqe Technologies Team`,
      };

      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptionsToBusiness);
        await transporter.sendMail(mailOptionsToUser);
      } else {
        console.log("Skipping email: No credentials configured.");
      }

    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
      // We do NOT fail the request if email fails, as DB save was successful
    }

    res.status(200).json({ message: "Contact request submitted successfully" });
  } catch (err) {
    console.error("Contact submission error:", err);
    res.status(500).json({ message: "Error saving contact request" });
  }
};
