import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";

interface AdminRouteProps {
  children: React.ReactNode;
}

const UserRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { token, user } = useAppSelector((state: RootState) => state.user);
  const isAuthenticated = !!token;
  const isUser = user?.role === "user"; // Check if user role is admin

  // If not authenticated or not an admin, redirect to unauthorized page
  if (!isAuthenticated || !isUser) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default UserRoute;
