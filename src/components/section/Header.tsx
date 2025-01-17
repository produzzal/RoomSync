import React from "react";

const Header: React.FC = () => {
  return (
    <div
      className="hero bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://i.ibb.co.com/8m4YLtJ/240-F-80911186-Ro-BCsy-Lr-NTr-G7-Y1-EOy-Csa-CJO5-Dy-Hg-Tox.jpg")', // Your background image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Overlay for contrast */}
      <div className="hero-content text-center text-neutral-content relative z-10 px-6 sm:px-8 lg:px-16 py-12">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white text-shadow-md">
            Book Your Ideal Meeting Room with Ease
          </h1>
          <p className="mb-5 text-lg text-white text-shadow-md">
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
