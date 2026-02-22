 import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("form"); // form | otp
  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    course: "",
  });


  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (step === "otp" && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  /* ---------------- INPUT CHANGE ---------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ---------------- VALIDATION ---------------- */
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("All fields are required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  /* =====================================================
     STEP 1 → SEND OTP
  ===================================================== */
  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await API.post("/api/auth/send-otp", formData);
     

      toast.success("OTP sent to your email");
      setStep("otp");
      setTimer(60);

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     STEP 2 → VERIFY OTP & REGISTER
  ===================================================== */
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/api/auth/verify-otp", {
        ...formData,
        otp,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Account created successfully");
      navigate("/login");

    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     UI
  ===================================================== */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* ================= FORM STEP ================= */}
        {step === "form" && (
          <form onSubmit={handleSendOtp} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl"
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl"
            >
              <option value="">Select Course</option>
              <option value="Freelancing">Freelancing</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 rounded-xl"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* ================= OTP STEP ================= */}
        {step === "otp" && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">

            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border px-4 py-2 rounded-xl"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-xl"
            >
              {loading ? "Verifying..." : "Verify OTP & Signup"}
            </button>

            {timer > 0 ? (
              <p className="text-sm text-center text-gray-500">
                Resend OTP in {timer}s
              </p>
            ) : (
              <button
                type="button"
                onClick={handleSendOtp}
                className="text-indigo-600 text-sm text-center w-full"
              >
                Resend OTP
              </button>
            )}
          </form>
        )}

        <p className="text-sm text-center mt-6">
          Already registered?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;