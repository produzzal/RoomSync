import React from "react";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
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

      {/* Contact Information */}
      <section className="flex flex-col sm:flex-row sm:justify-around sm:items-start mb-12 text-gray-700 gap-6">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-base sm:text-lg font-semibold mb-2">Email</h2>
          <p className="text-sm sm:text-base">support@roomsync.com</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-base sm:text-lg font-semibold mb-2">Phone</h2>
          <p className="text-sm sm:text-base">+1 (123) 456-7890</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-base sm:text-lg font-semibold mb-2">
            Office Address
          </h2>
          <p className="text-sm sm:text-base">
            123 Business Street, Suite 456, Tech City
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-center text-[#003B95] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <form className="space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
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
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
