import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

const Enroll = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    education: "",
    experience: "",
    currentRole: "",
    skills: "",
    expectations: "",
  });

  // Fixed course (Freelance Income Accelerator)
  const courseId = "6998ae687dfd2a478a6a784c";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await API.post("/enrollments", {
        courseId,
        ...formData,
      });

      toast.success("Enrollment created successfully");
      navigate(`/payment/${res.data.enrollmentId}`);
    } catch (error) {
      const data = error.response?.data;

      if (data?.enrollmentId) {
        toast.success("Continuing existing enrollment");
        navigate(`/payment/${data.enrollmentId}`);
      } else {
        toast.error(data?.message || "Enrollment failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Enrollment Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="education"
            placeholder="Highest Education"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience (Fresher / Years)"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="currentRole"
            placeholder="Current Role (Student / Professional)"
            value={formData.currentRole}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            name="expectations"
            placeholder="What do you expect from this program?"
            value={formData.expectations}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
