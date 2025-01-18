import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { setEmail, setPassword } from "../redux/features/SignUpSlice";
import { Link, useNavigate } from "react-router-dom";
import { setLoggedIn } from "../redux/features/LoginSlice";
import { setToken, setUser } from "../redux/features/UserSlice";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode function

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = await login({ email, password }).unwrap();
      toast.success("Login successful!"); // Success toast

      // Ensure that user.token is available
      if (user.token) {
        try {
          // Decode the JWT token
          const decoded = jwtDecode(user.token);

          // Dispatch token and user info to Redux
          dispatch(setToken(user.token));
          dispatch(setUser(decoded));

          // Store the token and user info in localStorage
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(decoded));

          setTimeout(() => {
            dispatch(setLoggedIn(true));
            navigate("/"); // Redirect to home after successful login
          }, 2000);
        } catch (decodeError) {
          console.error("Error decoding the token:", decodeError);
          toast.error("Invalid token. Please try again.");
        }
      } else {
        toast.error("No token received. Please try again.");
      }
    } catch (err: any) {
      toast.error("Login failed. Please check your password."); // Error toast
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))} // Dispatching the action
              placeholder="Enter your email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#005FA8]"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))} // Dispatching the action
              placeholder="Enter your password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#005FA8]"
            />
          </div>

          <button className="block w-full text-center bg-[#005FA8] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#002766] transition-colors transform hover:scale-110 active:scale-95">
            Login
          </button>

          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-[#005FA8] hover:underline">
                Go to Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default LoginForm;
