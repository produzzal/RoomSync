import React from "react";
import { motion } from "framer-motion";
import "animate.css";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Our Mission Section */}
      <section className="text-center mb-16 px-6 md:px-16">
        <motion.h2
          className="text-4xl font-bold mb-4 text-[#003B95]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Our mission at RoomSync is to provide innovative and reliable
          solutions to empower modern businesses. We aim to simplify processes,
          enhance productivity, and drive success through our state-of-the-art
          meeting room booking system.
        </motion.p>
      </section>

      {/* Meet the Team Section */}
      <section className="text-center mb-16">
        <motion.h2
          className="text-4xl font-bold mb-4 text-[#003B95]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet the Team
        </motion.h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Team Member 1 */}
          <motion.div
            className="w-64 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300"
            whileHover={{ rotate: 5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="https://i.ibb.co/5hm6VPT/360-F-243123463-z-Tooub557x-EWABDLk0j-Jkl-Dy-LSGl2jrr.jpg"
              alt="John Doe"
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#003B95]">John Doe</h3>
              <p className="text-gray-600">CEO</p>
              <p className="text-gray-500 text-sm mt-2">
                John leads RoomSync with over 10 years of experience in the tech
                industry, focusing on creating innovative solutions for
                businesses.
              </p>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="w-64 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300"
            whileHover={{ rotate: -5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img
              src="https://i.ibb.co/3hpj7hf/ey-Jid-WNr-ZXQi-Oi-Jjb250-ZW50-Lmhzd3-N0-YXRp-Yy5jb20i-LCJr-ZXki-Oi-Jna-WZc-L3-Bs-YXlc-Lz-Bi-N2-Y0-Z.webp"
              alt="Jane Smith"
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#003B95]">
                Jane Smith
              </h3>
              <p className="text-gray-600">CTO</p>
              <p className="text-gray-500 text-sm mt-2">
                Jane is the brain behind RoomSync’s technical development, with
                a passion for building robust, scalable platforms.
              </p>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="w-64 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300"
            whileHover={{ rotate: 5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <img
              src="https://i.ibb.co/996B8TL/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg"
              alt="Sara Lee"
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#003B95]">Sara Lee</h3>
              <p className="text-gray-600">COO</p>
              <p className="text-gray-500 text-sm mt-2">
                Sara brings operational excellence to RoomSync, ensuring the
                smooth running of our services and a top-notch client
                experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="text-center mb-16 px-6 md:px-16">
        <motion.h2
          className="text-4xl font-bold mb-4 text-[#003B95]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          RoomSync was founded in 2020 by a group of passionate innovators who
          wanted to solve the challenges businesses face when booking meeting
          spaces. With a clear vision in mind, we set out to create a seamless,
          reliable, and flexible meeting room booking system that would cater to
          businesses of all sizes.
        </motion.p>
      </section>

      {/* Contact Button Section */}
      <section className="text-center mt-16">
        <motion.button
          className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/contact-us")}
        >
          Contact Us Today to Learn More!
        </motion.button>
        <p className="text-gray-600 mt-4 text-sm">
          Reach out to us to see how RoomSync can transform your business
          operations!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
