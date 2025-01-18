import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        New here?{" "}
        <Link
          to="/sign-up"
          className="text-blue-500 hover:underline font-medium"
        >
          Go to Signup Page
        </Link>
      </p>
    </div>
  );
};

export default Login;
