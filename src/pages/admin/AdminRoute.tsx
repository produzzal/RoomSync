import React from "react";
import { useAppSelector } from "../../redux/hooks"; // Assuming you're using custom hooks for Redux
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { token, user } = useAppSelector((state: RootState) => state.user);
  const isAuthenticated = !!token;
  const isAdmin = user?.role === "admin"; // Check if user role is admin

  // If not authenticated or not an admin, redirect to unauthorized page
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
