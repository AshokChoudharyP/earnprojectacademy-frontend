import React, { useState } from "react";

const faqs = [
  {
    question: "What types of programs are offered at EarnProjectAcademy?",
    answer:
      "EarnProjectAcademy offers project-based programs focused on AI tools, freelancing skills, real-world workflows, and career-ready practical learning.",
  },
  {
    question: "Is EarnProjectAcademy beginner-friendly?",
    answer:
      "Yes. Our programs are designed for beginners as well as working professionals. We start from fundamentals and gradually move to advanced real-world projects.",
  },
  {
    question: "Do I need any prior experience to enroll?",
    answer:
      "No prior experience is required. All essential concepts, tools, and workflows are taught from scratch with guided practice.",
  },
  {
    question: "How is EarnProjectAcademy different from regular online courses?",
    answer:
      "Unlike theory-heavy courses, EarnProjectAcademy focuses on hands-on projects, real freelancing scenarios, AI tools usage, and practical execution.",
  },
  {
    question: "Will I work on real-world projects?",
    answer:
      "Yes. You will work on real-world, industry-relevant projects designed to simulate actual freelancing and client-based workflows.",
  },
  {
    question: "Do I receive a Certificate of Completion?",
    answer:
      "Yes. After successfully completing the program, you will receive a professional Certificate of Completion issued by EarnProjectAcademy.",
  },
  {
    question: "Is the certificate valid for freelancing platforms and LinkedIn?",
    answer:
      "Yes. The certificate can be shared on LinkedIn, added to resumes, and used to showcase skill validation on freelancing platforms.",
  },
  {
    question: "Does EarnProjectAcademy help with freelancing or job readiness?",
    answer:
      "Yes. We provide career guidance, freelancing workflows, AI toolkits, and practical exposure to help you become career-ready.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="border border-gray-200 rounded-xl hover:bg-gray-50 transition">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0b1c39]">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about learning with EarnProjectAcademy
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 shadow-sm ${
                activeIndex === index
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      activeIndex === index
                        ? "text-gray-900"
                        : "text-gray-600"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <span className="text-2xl text-blue-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 pl-[4.5rem] text-gray-600 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;