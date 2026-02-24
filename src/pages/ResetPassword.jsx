import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api/axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await API.post(`/auth/reset-password/${token}`, {
        password,
      });

      toast.success("Password reset successful");

      // Redirect to login after success
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid or expired token"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* New Password */}
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-600"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-600"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>

        </form>

        <p className="text-sm text-center mt-6">
          Back to{" "}
          <Link to="/login" className="text-indigo-600 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ResetPassword;