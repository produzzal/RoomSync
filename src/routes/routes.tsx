import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AdminRoute from "../pages/admin/AdminRoute";
import AddRoom from "../pages/Room/AddRoom";
import UnAuthorized from "../pages/UnAuthorized";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UpdateRoom from "../pages/Room/UpdateRoom";
import MeetingRoom from "../pages/MeetingRoom";
import AddSlot from "../pages/Slot/AddSlot";
import UpdateSlot from "../pages/Slot/UpdateSlot";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "meeting-rooms",
        element: <MeetingRoom />,
      },
      {
        path: "/unauthorized",
        element: <UnAuthorized />,
      },
      {
        path: "admin/add-room",
        element: (
          <AdminRoute>
            <AddRoom />
          </AdminRoute>
        ),
      },
      {
        path: "admin/update-room/:roomId",
        element: (
          <AdminRoute>
            <UpdateRoom />
          </AdminRoute>
        ),
      },
      {
        path: "admin/add-slot",
        element: (
          <AdminRoute>
            <AddSlot />
          </AdminRoute>
        ),
      },
      {
        path: "admin/update-slot/:slotId",
        element: (
          <AdminRoute>
            <UpdateSlot />
          </AdminRoute>
        ),
      },
      {
        path: "admin/dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
