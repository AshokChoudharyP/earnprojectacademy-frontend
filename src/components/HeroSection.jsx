import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 text-white">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Build Skills. <br />
          Create Income. <br />
          Grow with{" "}
          <span className="text-sky-300">EarnProjectAcademy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto"
        >
          A structured, mentor-led platform helping students and working
          professionals build sustainable freelance and remote income —
          ethically and professionally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <Link
            to="/freelance-income-accelerator"
             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
            Explore Program
         </Link>

          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Free Career Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;