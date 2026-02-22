import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProgramIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
               India’s Most Structured, Mentor-Led <br />
               <span className="text-blue-600">Freelancing Career Program</span>
          </h2>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg">
               A 6-month professional program designed to help skilled professionals and
               students build real, ethical, long-term freelance careers — through mentor-led
               guidance, real client standards, and practical execution.
          </p>

          <div className="mt-8 flex justify-center gap-4">
             <Link
            to="/freelance-income-accelerator"
             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
            View Program Details
         </Link>

            <Link
            to="/Contact"
             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
             Talk to a Mentor
         </Link>
          </div>
        </motion.div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="border rounded-xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">Program Format</h3>
            <p className="text-slate-600">
              6 Months · Online · Live Mentor-Led Weekend Sessions
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="border rounded-xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">Who It’s For</h3>
            <p className="text-slate-600">
              Early & mid-career professionals, skilled students, and working
              individuals seeking ethical freelancing growth.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="border rounded-xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">Our Focus</h3>
            <p className="text-slate-600">
              Real client expectations, professional communication, and
              repeatable systems — no shortcuts, no false promises.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramIntro;