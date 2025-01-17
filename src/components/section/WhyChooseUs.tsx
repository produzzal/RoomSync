import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold text-[#003B95] mb-4 md:mb-8">
        Why Choose Us?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Enjoy a seamless booking experience with our suite of services.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[#003B95] text-white rounded-full flex items-center justify-center mb-4">
            {/* Add Icon */}
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <path d="M12 6v12m6-6H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Real-Time Availability</h3>
          <p className="text-sm text-gray-500">
            Check room availability instantly.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[#003B95] text-white rounded-full flex items-center justify-center mb-4">
            {/* Add Icon */}
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <path d="M12 6v12m6-6H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">
            Instant Booking Confirmation
          </h3>
          <p className="text-sm text-gray-500">
            Get instant confirmation once you book a room.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[#003B95] text-white rounded-full flex items-center justify-center mb-4">
            {/* Add Icon */}
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <path d="M12 6v12m6-6H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
          <p className="text-sm text-gray-500">
            Choose a time that works best for you.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[#003B95] text-white rounded-full flex items-center justify-center mb-4">
            {/* Add Icon */}
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <path d="M12 6v12m6-6H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p className="text-sm text-gray-500">
            We're available to help whenever you need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
