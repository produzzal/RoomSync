import React from "react";
import "animate.css"; // Make sure to import animate.css for animations

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Our Mission Section */}
      <section className="text-center mb-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold mb-4 text-[#003B95] animate__animated animate__zoomIn animate__delay-1s">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          Our mission at RoomSync is to provide innovative and reliable
          solutions to empower modern businesses. We aim to simplify processes,
          enhance productivity, and drive success through our state-of-the-art
          meeting room booking system.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-[#003B95] animate__animated animate__bounceInLeft animate__delay-1s">
          Meet the Team
        </h2>
        <div className="flex justify-center gap-8 flex-wrap animate__animated animate__fadeIn animate__delay-2s">
          {/* Team Member 1 */}
          <div className="w-48 h-48 bg-white rounded-full shadow-lg overflow-hidden animate__animated animate__flipInX animate__delay-2s hover:scale-110 hover:shadow-xl transition-transform duration-300">
            <img
              src="https://i.ibb.co.com/5hm6VPT/360-F-243123463-z-Tooub557x-EWABDLk0j-Jkl-Dy-LSGl2jrr.jpg"
              alt="Team Member 1"
              className="object-cover w-full h-full transition-all duration-300"
            />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold text-[#003B95]">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-48 h-48 bg-white rounded-full shadow-lg overflow-hidden animate__animated animate__flipInX animate__delay-1s hover:scale-110 hover:shadow-xl transition-transform duration-300">
            <img
              src="https://i.ibb.co.com/3hpj7hf/ey-Jid-WNr-ZXQi-Oi-Jjb250-ZW50-Lmhzd3-N0-YXRp-Yy5jb20i-LCJr-ZXki-Oi-Jna-WZc-L3-Bs-YXlc-Lz-Bi-N2-Y0-Z.webp"
              alt="Team Member 2"
              className="object-cover w-full h-full transition-all duration-300"
            />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold text-[#003B95]">
                Jane Smith
              </h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="w-48 h-48 bg-white rounded-full shadow-lg overflow-hidden animate__animated animate__flipInX animate__delay-2s hover:scale-110 hover:shadow-xl transition-transform duration-300">
            <img
              src="https://i.ibb.co.com/996B8TL/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg"
              alt="Team Member 3"
              className="object-cover w-full h-full transition-all duration-300"
            />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold text-[#003B95]">Sara Lee</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="text-center mb-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold mb-4 text-[#003B95] animate__animated animate__jackInTheBox animate__delay-3s">
          Our Story
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-4s">
          RoomSync was founded in 2020 by a group of passionate innovators who
          wanted to solve the challenges businesses face when booking meeting
          spaces. With a clear vision in mind, we set out to create a seamless,
          reliable, and flexible meeting room booking system that would cater to
          businesses of all sizes.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-5s">
          Since our inception, RoomSync has rapidly expanded, with businesses
          across the globe utilizing our platform. Through continuous innovation
          and feedback from our users, we've evolved our system to ensure the
          highest level of efficiency, flexibility, and user satisfaction. Our
          story is a testament to our team's hard work, perseverance, and
          commitment to making a difference in the world of business operations.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
