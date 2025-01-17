const CustomerTestimonials: React.FC = () => {
  return (
    <div className="py-16 bg-[#f8f9fa]">
      <h2 className="text-3xl font-bold text-[#003B95] text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Customer"
              className="w-24 h-24 rounded-full border-4 border-[#003B95] p-2"
            />
          </div>
          <p className="text-lg text-gray-600 mb-4">
            "Booking a room with RoomSync has been incredibly easy and
            efficient. I love the seamless process!"
          </p>
          <div className="flex justify-center items-center">
            <h4 className="font-semibold text-[#003B95]">John Doe</h4>
            <span className="text-sm text-gray-500 ml-2">
              CEO, Example Inc.
            </span>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Customer"
              className="w-24 h-24 rounded-full border-4 border-[#003B95] p-2"
            />
          </div>
          <p className="text-lg text-gray-600 mb-4">
            "The 24/7 support team helped us every time we needed assistance.
            Exceptional service!"
          </p>
          <div className="flex justify-center items-center">
            <h4 className="font-semibold text-[#003B95]">Jane Smith</h4>
            <span className="text-sm text-gray-500 ml-2">
              Marketing Manager, ABC Corp.
            </span>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex justify-center mb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Customer"
              className="w-24 h-24 rounded-full border-4 border-[#003B95] p-2"
            />
          </div>
          <p className="text-lg text-gray-600 mb-4">
            "RoomSync provides the most user-friendly platform for booking
            meeting rooms. We couldn't ask for more!"
          </p>
          <div className="flex justify-center items-center">
            <h4 className="font-semibold text-[#003B95]">Alice Johnson</h4>
            <span className="text-sm text-gray-500 ml-2">
              Project Lead, Tech Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
