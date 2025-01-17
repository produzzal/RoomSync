const BookingProcess: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-[#003B95] mb-8">How It Works</h2>
      <p className="text-lg text-gray-600 mb-8">
        Follow these simple steps to book your ideal meeting room.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">
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
          <h3 className="text-xl font-semibold">Step 1: Select a Room</h3>
          <p className="text-sm text-gray-500">
            Choose the room that suits your needs.
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
          <h3 className="text-xl font-semibold">Step 2: Choose Date & Time</h3>
          <p className="text-sm text-gray-500">
            Pick the most convenient time for your meeting.
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
          <h3 className="text-xl font-semibold">Step 3: Confirm Booking</h3>
          <p className="text-sm text-gray-500">
            Review and confirm your booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
