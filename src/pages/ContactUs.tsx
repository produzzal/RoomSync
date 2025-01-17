import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify"; // Importing Toastify and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // To handle loading state

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      toast.error("All fields are required!"); // Error message toast
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address!"); // Error message toast
      return false;
    }
    return true;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true); // Start loading

    const form = event.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_cpnpfci", // Hardcoded Service ID
        "template_5bejvmd", // Hardcoded Template ID
        form,
        "gCv1qx4g2YjUZpvXg" // Hardcoded User ID
      )
      .then(
        (result) => {
          console.log(result.text); // Success message
          setIsLoading(false); // Stop loading
          toast.success("Your message has been sent successfully!"); // Success toast
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form data
        },
        (error) => {
          console.log(error.text); // Error message
          setIsLoading(false); // Stop loading
          toast.error("Something went wrong, please try again!"); // Error toast
        }
      );
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-16">
      {/* Page Header */}
      <section className="text-center mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-[#003B95]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-2 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          We're here to help. Get in touch with us!
        </motion.p>
      </section>

      {/* Contact Information Section */}
      <section className="text-center mb-12">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-[#003B95]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Information
        </motion.h2>
        <motion.div
          className="mt-6 space-y-4 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <p>
            Email:{" "}
            <a href="mailto:info@example.com" className="text-blue-600">
              support@roomsync.com
            </a>
          </p>
          <p>
            Phone: <span className="text-blue-600">+880 1865701039</span>
          </p>
          <p>
            Address:{" "}
            <span className="text-blue-600">Uttara, Dhaka, Bangladesh</span>
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-center text-[#003B95] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B95]"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B95]"
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B95]"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B95]"
              rows={5}
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              type="submit"
              className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-[#003B95] text-white font-semibold rounded-md shadow-md hover:bg-[#002766] transition-colors"
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </form>
      </section>

      {/* ToastContainer for Toastify */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactUs;
