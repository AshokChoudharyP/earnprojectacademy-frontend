import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import StudentLayout from "../components/layout/StudentLayout";

const CourseContent = () => {
  const { courseId } = useParams();

  const [modules, setModules] = useState([]);
  const [progress, setProgress] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [openModuleId, setOpenModuleId] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await API.get(`/course-content/${courseId}`);
      setModules(res.data.modules);
      setProgress(res.data.progress);

      if (res.data.progress?.lastAccessedLesson) {
        for (const m of res.data.modules) {
          const l = m.lessons.find(
            x => x._id === res.data.progress.lastAccessedLesson
          );
          if (l) {
            setActiveLesson(l);
            setOpenModuleId(m._id);
          }
        }
      }
    };
    fetchContent();
  }, [courseId]);

  const isCompleted = lessonId =>
    progress?.completedLessons?.includes(lessonId);

  const isLocked = (module, index) =>
    index > 0 && !isCompleted(module.lessons[index - 1]._id);

  const markComplete = async () => {
    await API.post("/course-content/complete", {
      courseId,
      lessonId: activeLesson._id,
      totalLessons: modules.reduce((a, m) => a + m.lessons.length, 0),
    });
    window.location.reload();
  };

  return (
    <StudentLayout>
      <div className="flex h-[calc(100vh-80px)] bg-gray-50">

        {/* SIDEBAR */}
        <aside className="w-80 bg-white border-r overflow-y-auto p-4">
          <h3 className="font-semibold text-gray-700 mb-4">Course Content</h3>

          {modules.map(module => (
            <div key={module._id} className="mb-3">
              <button
                onClick={() =>
                  setOpenModuleId(
                    openModuleId === module._id ? null : module._id
                  )
                }
                className="w-full flex justify-between items-center px-3 py-2 bg-gray-100 rounded-lg font-medium"
              >
                {module.title}
                <span>{openModuleId === module._id ? "−" : "+"}</span>
              </button>

              {openModuleId === module._id && (
                <div className="mt-2 space-y-1 pl-2">
                  {module.lessons.map((lesson, idx) => {
                    const completed = isCompleted(lesson._id);
                    const locked = isLocked(module, idx);

                    return (
                      <button
                        key={lesson._id}
                        disabled={locked}
                        onClick={() => setActiveLesson(lesson)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl
                         transition-all duration-200
                          ${
                            activeLesson?._id === lesson._id
                              ? "bg-indigo-100 text-indigo-700 scale-[1.01]"
                              : "hover:bg-gray-100"
                          }
                          ${locked && "opacity-50 cursor-not-allowed"}
                        `}
                      >
                        <span>{lesson.title}</span>
                        {completed && <span className="text-green-600 text-sm">✔</span>}
                        {locked && <span className="text-gray-400 text-sm">🔒</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progress?.progressPercentage || 0}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${progress?.progressPercentage || 0}%` }}
              />
            </div>
          </div>

          {!activeLesson ? (
            <div className="bg-white rounded-xl p-8 text-center shadow">
              <h3 className="text-xl font-semibold mb-2">
                Ready to learn? 🚀
              </h3>
              <p className="text-gray-500">
                Select a lesson from the left to continue your journey.
              </p>
            </div>
          ) : (
            <>
              {activeLesson.type === "LIVE" && (
                <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6">
                  🔴 Live Class • Scheduled
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">
                {activeLesson.title}
              </h2>

              <p className="text-sm text-gray-500 mb-6">
                Week {activeLesson.week} • {activeLesson.durationMinutes} mins •{" "}
                {activeLesson.type}
              </p>

              {activeLesson.type === "LIVE" && activeLesson.liveLink && (
                <a
                  href={activeLesson.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg mb-6"
                >
                  Join Live Class
                </a>
              )}
              <div className="bg-white rounded-xl p-5 shadow-sm border">
  <h3 className="font-semibold text-gray-700 mb-2">
    📅 Today’s Class
  </h3> : 
 
  
</div>

              <button
                onClick={markComplete}
                className="block bg-indigo-600 text-white px-6 py-3 rounded-lg"
              >
                Mark as Complete
              </button>
            </>
          )}
        </main>
      </div>
    </StudentLayout>
  );
};

export default CourseContent;