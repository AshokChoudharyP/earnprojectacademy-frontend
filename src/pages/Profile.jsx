import { useEffect, useState } from "react";
import API from "../api/axios";
import StudentLayout from "../components/layout/StudentLayout";
import toast from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile/me");
        setUser(res.data);
        setName(res.data.name);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  const updateProfile = async () => {
    try {
      await API.put("/profile/update", { name });
      toast.success("Profile updated");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (!user) return null;

  return (
    <StudentLayout>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6">My Profile</h2>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Editable Name */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mt-1"
          />
        </div>

        {/* Read-only fields */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <input
            value={user.email}
            disabled
            className="w-full border rounded-lg px-4 py-2 mt-1 bg-gray-100"
          />
        </div>

        <button
          onClick={updateProfile}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </StudentLayout>
  );
};

export default Profile;