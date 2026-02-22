import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import StudentLayout from "../components/layout/StudentLayout";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [todayLive, setTodayLive] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
const Badge = ({ text, color }) => (
  <span className={`text-xs px-2 py-1 rounded-full font-medium
    ${color === "green" && "bg-green-100 text-green-700"}
    ${color === "red" && "bg-red-100 text-red-700"}
    ${color === "gray" && "bg-gray-200 text-gray-600"}
  `}>
    {text}
  </span>
);
  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await API.get("/dashboard/student");
      setCourses(res.data.courses || []);
      setTodayLive(res.data.todayLive || null);
      setAnnouncements(res.data.announcements || []);
    };
    fetchDashboard();
  }, []);

  return (
    <StudentLayout>
      <div className="space-y-10">

        {/* CONTINUE LEARNING */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Continue <span className="text-indigo-600">Learning</span>
          </h2>

          {courses.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow">
  <h3 className="text-xl font-semibold mb-2">
    You’re not enrolled yet
  </h3>
  <p className="text-gray-500 mb-6">
    Enroll in a course to start learning 🚀
  </p>
  <button
    onClick={() => navigate("/courses")}
    className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
  >
    Browse Courses
  </button>
  </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map(course => (
                <div
                  key={course._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl
                     hover:-translate-y-1 transition-all duration-300 p-6"
                >
                  <h3 className="font-semibold text-lg mb-1">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">
                    {course.duration}
                  </p>

                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={() =>
                      navigate(`/course/${course._id}`)
                    }
                    className="bg-indigo-600 hover:bg-indigo-700
                   hover:shadow-lg text-white px-4 py-2
                   rounded-lg flex items-center gap-2">
                       ▶ Resume Learning
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* TODAY'S LIVE CLASS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Today’s <span className="text-indigo-600">Live Class</span>
          </h2>

          {!todayLive ? (
            <div className="bg-white rounded-xl p-6 text-gray-500 shadow">
              No live classes today.
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-1">
                🔴 {todayLive.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {todayLive.time}
              </p>
              <a
                href={todayLive.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg"
              >
                Join Live Class
              </a>
              <div className="flex items-center gap-2 mb-2">
               <Badge text="LIVE" color="red" />
          <Badge text="WEEKEND ONLY" color="gray" />
</div>
            </div>
          )}
        </section>

        {/* ANNOUNCEMENTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Announcements
          </h2>

          {announcements.length === 0 ? (
            <p className="text-gray-500">No announcements</p>
          ) : (
            <div className="space-y-4">
              {announcements.slice(0, 3).map(a => (
                <div
                  key={a._id}
                  className="bg-white rounded-xl p-4 shadow"
                >
                  <h4 className="font-medium mb-1">{a.title}</h4>
                  <p className="text-sm text-gray-600">
                    {a.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
