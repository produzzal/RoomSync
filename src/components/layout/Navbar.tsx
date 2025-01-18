import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/UserSlice";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { token, user } = useAppSelector((state: RootState) => state.user);
  const isAuthenticated = !!token;
  const isAdmin = user?.role === "admin";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Toggle dropdown menu
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown
  const closeDropdown = () => setIsDropdownOpen(false);

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="navbar bg-[#003B95] text-white px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          {isDropdownOpen && (
            <ul
              className="menu menu-sm dropdown-content mt-3 z-[9999] bg-base-100 rounded-box w-52 p-2 shadow text-black sm:w-56 sm:max-w-[250px] md:w-[320px] lg:w-auto whitespace-normal"
              onClick={closeDropdown}
            >
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
          )}
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          RoomSync
        </a>
      </div>

      {/* Navbar Center */}
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

      {/* Navbar End */}
      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              onClick={toggleDropdown}
            >
              <div className="w-10 rounded-full">
                <img src="https://via.placeholder.com/150" alt="User Avatar" />
              </div>
            </label>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow text-black sm:w-56 sm:max-w-[250px] md:w-[320px] lg:w-auto whitespace-normal"
                onClick={closeDropdown}
              >
                {isAdmin ? (
                  <>
                    <li>
                      <Link to="/admin-dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/my-bookings">My Bookings</Link>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
