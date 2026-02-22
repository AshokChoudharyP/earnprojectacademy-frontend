import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Data Analyst",
    text: "This program helped me secure my first freelance project within 2 months!",
  },
  {
    name: "Anjali Verma",
    role: "Working Professional",
    text: "Mentor guidance was exceptional. Structured and practical learning.",
  },
  {
    name: "Aman Gupta",
    role: "Freelancer",
    text: "Best decision for building sustainable freelance income.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>

        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <p className="text-gray-600 mb-4">
            "{testimonials[index].text}"
          </p>
          <h4 className="font-bold">
            {testimonials[index].name}
          </h4>
          <p className="text-sm text-gray-500">
            {testimonials[index].role}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;