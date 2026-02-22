import { Link } from "react-router-dom";
const CoursesPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-6">
          Our Flagship Program
        </h2>

        <p className="text-slate-600 max-w-3xl mx-auto mb-12">
          EarnProjectAcademy focuses on structured, mentor-led programs
          designed to align learners with real client expectations and
          professional freelancing standards.
        </p>

        <div className="max-w-3xl mx-auto border rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Freelance Income Accelerator™
          </h3>

          <p className="text-slate-600 mb-6">
            A 6-month professional program for skilled professionals
            and students to build clarity, confidence, and a repeatable
            freelancing process.
          </p>

          <ul className="text-slate-600 text-left mb-6 space-y-2">
            <li>• Mentor-led weekend live sessions</li>
            <li>• Professional profile & proposal guidance</li>
            <li>• Real client expectations & execution</li>
            <li>• Long-term freelancing strategy</li>
          </ul>

          <Link
            to="/freelance-income-accelerator"
             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
            View Program Details
         </Link>
        </div>

      </div>
    </section>
  );
};

export default CoursesPreview;