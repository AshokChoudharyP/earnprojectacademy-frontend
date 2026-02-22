import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Freelance Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "EarnProjectAcademy helped me understand real client expectations. I stopped guessing and started working professionally."
  },
  {
    name: "Nisha Verma",
    role: "Freelance Digital Marketer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The mentor-led sessions gave me clarity and confidence. I now handle client conversations without fear."
  },
  {
    name: "Rahul Mehta",
    role: "Consultant & Freelancer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "This program focuses on long-term growth. No shortcuts, just solid professional guidance."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Student Reviews & Testimonials
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Hear directly from learners who transformed their freelancing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                “{item.review}”
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;