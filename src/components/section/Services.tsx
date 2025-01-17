import React from "react";

const Services: React.FC = () => {
  return (
    <section className="bg-[#F1F1F1] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#003B95] mb-8 ">
          Discover the Benefits of Our Service
        </h2>
        <p className="text-lg mb-12 text-gray-600">
          Experience effortless meeting room bookings with our advanced
          features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-[#003B95] mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9h3m-3 4h3m4-4h3m-3 4h3m-7-7h1a2 2 0 012 2v12a2 2 0 01-2 2h-1a2 2 0 01-2-2V8a2 2 0 012-2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#003B95] mb-2">
              Real-Time Availability
            </h3>
            <p className="text-gray-600">
              Instantly check room availability for your next meeting.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-[#003B95] mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9l2 2-2 2m-6-6l2 2-2 2m-4-4l2 2-2 2M12 3v6m0 0l2 2-2 2M12 9v12m0-12h4"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#003B95] mb-2">
              Instant Booking Confirmation
            </h3>
            <p className="text-gray-600">
              Get immediate booking confirmation with no delays.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-[#003B95] mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#003B95] mb-2">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600">
              Easily adjust your meeting times to suit your needs.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-[#003B95] mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4 1.792 4 4 4zm0 0c5.164 0 8 2.836 8 6v2a8 8 0 01-8 8H4a8 8 0 01-8-8v-2c0-3.164 2.836-6 8-6zm0 0V8"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#003B95] mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Our support team is available anytime to assist you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
