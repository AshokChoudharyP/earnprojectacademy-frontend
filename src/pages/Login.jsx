import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!formData.email || !formData.password) {
      return "All fields are required";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "Enter valid email address";
    }

    return "";
  };

const handleLogin = async (e) => {
  e.preventDefault();

  // 1️⃣ Frontend validation
  const validationError = validate();
  if (validationError) {
    toast.error(validationError);
    return;
  }

  try {
    setLoading(true);

    // 2️⃣ Call backend login API
    const res = await API.post("/api/auth/login", formData);

    // 3️⃣ Safety check (important)
    if (!res.data?.token || !res.data?.user) {
      throw new Error("Invalid server response");
    }

    // 4️⃣ Clear any old auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 5️⃣ Save new auth data
    localStorage.setItem("token", res.data.token);
    login(res.data.user); // Context login

    toast.success("Login successful!");

    // 6️⃣ Role-based redirect (SAFE)
    const role = res.data.user?.role;

    if (role === "admin") {
      navigate("/admin/dashboard", { replace: true });
    } else {
      navigate("/", { replace: true }); // student → Home
    }

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      error.message ||
      "Login failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-600"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-600"
          />

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link
              to="/forgot-password"
              className="text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-sm text-center mt-6">
          Not registered?{" "}
          <Link to="/register" className="text-indigo-600 font-medium">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;