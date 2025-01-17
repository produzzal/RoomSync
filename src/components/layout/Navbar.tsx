import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  // Mock check for authentication state, replace this with actual logic
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  // Example of how you might check authentication on component mount
  useEffect(() => {
    // Check localStorage/sessionStorage or an API for user authentication
    const user = localStorage.getItem("user"); // or any other check
    if (user) {
      setIsAuthenticated(true); // User is logged in
    }
  }, []);

  const isAdmin = true; // Example: Adjust based on your app's logic for admin

  return (
    <div className="navbar bg-[#003B95] text-white">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl">
          RoomSync
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/meeting-rooms">Meeting Rooms</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="https://via.placeholder.com/150" alt="User Avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {isAdmin ? (
                <>
                  <li>
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="/my-bookings">My Bookings</a>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        ) : (
          <a href="/login-register" className="btn">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
