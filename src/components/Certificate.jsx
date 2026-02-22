import React from "react";
import certificateImg from "../assets/certificate/certificate.preview.png"; // replace with your actual image

const CertificateSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#4f83f1] to-[#8fb9ff] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: Certificate Image */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md">
            <img
              src={certificateImg}
              alt="Certificate of Completion"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="text-[#0b1c39]">
          <p className="uppercase tracking-widest text-sm font-semibold text-blue-700 mb-3">
            Certification
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Certificate <span className="text-indigo-600">Certificate of Completion </span>
          </h2>

          <p className="text-lg text-[#1f2d4d] mb-8 max-w-xl">
            Earn a professional Certificate of Completion after successfully
            finishing the program. This certificate validates your learning
            journey and real-world freelancing exposure.
          </p>

          {/* Feature List */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">✓</span>
              <p>Issued by <strong>EarnProjectAcademy</strong></p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">✓</span>
              <p>Shareable on LinkedIn & resumes</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">✓</span>
              <p>Recognized for skill validation </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-blue-600 text-xl">✓</span>
              <p>Suitable for Indian & global freelancing platforms</p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-[#2d3b5f] mt-8 max-w-xl">
            *This certificate represents skill completion and professional
            training. It is not a university degree or government-recognized
            diploma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;