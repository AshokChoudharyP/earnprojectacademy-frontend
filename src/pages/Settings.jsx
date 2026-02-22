import { useState } from "react";
import API from "../api/axios";
import StudentLayout from "../components/layout/StudentLayout";



const Settings = () => {
  // ✅ DEFINE STATE (THIS WAS MISSING)
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordUpdate = async () => {
    if (!newPassword) {
      alert("Password cannot be empty");
      return;
    }

    try {
      setLoading(true);

      await API.put("/auth/change-password", {
        newPassword,
      });

      alert("Password updated successfully");
      setNewPassword("");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StudentLayout>
      <div className="max-w-xl bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>

        <label className="block text-sm font-medium mb-2">
          New Password
        </label>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mb-4"
          placeholder="Enter new password"
        />

        <button
          onClick={handlePasswordUpdate}
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </StudentLayout>
  );
};

export default Settings;