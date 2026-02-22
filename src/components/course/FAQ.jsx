import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Is income guaranteed?",
      answer: "No. Results depend on effort and consistency.",
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes, if you have at least one market-ready skill.",
    },
    {
      question: "Are classes live?",
      answer: "Yes, weekend live mentor-led sessions.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-xl shadow">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left p-4 font-semibold"
            >
              {faq.question}
            </button>

            {open === index && (
              <div className="p-4 border-t text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;