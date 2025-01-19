import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-red-600">Unauthorized Access</h1>
      <p className="mt-2">You do not have permission to view this page.</p>
      <Link to="/" className="mt-4 inline-block text-blue-600">
        Go Back to Home
      </Link>
    </div>
  );
};

export default UnAuthorized;
