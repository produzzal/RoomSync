import React from "react";

const Header: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-white ">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-[#333333]">
            Book Your Ideal Meeting Room with Ease
          </h1>
          <p className="mb-5 text-lg text-[#333333]">
            Efficient, hassle-free room booking for all your meeting needs.
          </p>
          <a
            href="/meeting-rooms"
            className="btn bg-[#005FA8] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#004C8C] hover:shadow-xl transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
