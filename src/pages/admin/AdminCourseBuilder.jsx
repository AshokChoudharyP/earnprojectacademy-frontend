import { useState } from "react";
import API from "../../api/axios";
import toast from "react-hot-toast";

const AdminCourseBuilder = () => {
  const [courseId] = useState("6992ae60ed33b71367414813"); // current course
  const [moduleTitle, setModuleTitle] = useState("");
  const [moduleId, setModuleId] = useState("");

  const [lesson, setLesson] = useState({
    title: "",
    type: "video",
    content: "",
  });

  const createModule = async () => {
    try {
      const res = await API.post("/admin/content/module", {
        courseId,
        title: moduleTitle,
      });

      setModuleId(res.data._id);
      toast.success("Module created");
    } catch {
      toast.error("Failed to create module");
    }
  };

  const addLesson = async () => {
    try {
      await API.post("/admin/content/lesson", {
        moduleId,
        ...lesson,
      });

      toast.success("Lesson added");
      setLesson({ title: "", type: "video", content: "" });
    } catch {
      toast.error("Failed to add lesson");
    }
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Admin Course Builder
      </h1>

      {/* MODULE CREATION */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Create Module</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Module title"
          value={moduleTitle}
          onChange={(e) => setModuleTitle(e.target.value)}
        />
        <button
          onClick={createModule}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Create Module
        </button>
      </div>

      {/* LESSON CREATION */}
      {moduleId && (
        <div>
          <h2 className="font-semibold mb-2">Add Lesson</h2>

          <input
            className="border p-2 w-full mb-2"
            placeholder="Lesson title"
            value={lesson.title}
            onChange={(e) =>
              setLesson({ ...lesson, title: e.target.value })
            }
          />

          <select
            className="border p-2 w-full mb-2"
            value={lesson.type}
            onChange={(e) =>
              setLesson({ ...lesson, type: e.target.value })
            }
          >
            <option value="video">Video</option>
            <option value="text">Text</option>
          </select>

          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Video URL or text content"
            value={lesson.content}
            onChange={(e) =>
              setLesson({ ...lesson, content: e.target.value })
            }
          />

          <button
            onClick={addLesson}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Lesson
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminCourseBuilder;