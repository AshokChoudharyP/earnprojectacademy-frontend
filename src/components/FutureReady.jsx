import { Link } from "react-router-dom";
const FutureReady = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">
          Transform Your Career with Future-Ready Freelancing Skills
        </h2>

        <p className="text-slate-600 max-w-3xl mx-auto mb-14">
          Mentor-led programs designed to help skilled professionals and students
          build sustainable freelance income through real-world execution,
          professional communication, and ethical practices.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          
          <div className="p-8 border rounded-xl">
            <h3 className="text-xl font-medium mb-3">
              Career-Relevant Skills
            </h3>
            <p className="text-slate-600">
              Learn skills aligned with current client expectations and market demand,
              not outdated theory.
            </p>
          </div>

          <div className="p-8 border rounded-xl">
            <h3 className="text-xl font-medium mb-3">
              Professional Execution
            </h3>
            <p className="text-slate-600">
              Build real workflows, communication habits, and delivery standards
              used by successful freelancers.
            </p>
          </div>

          <div className="p-8 border rounded-xl">
            <h3 className="text-xl font-medium mb-3">
              Long-Term Career Growth
            </h3>
            <p className="text-slate-600">
              Focus on sustainable income, reputation building, and repeat clients
              — not one-time gigs.
            </p>
          </div>

        </div>

        <div className="mt-16">
          <Link
            to="/Courses"
             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
            Explore Program
         </Link>
        </div>

      </div>
    </section>
  );
};

export default FutureReady;