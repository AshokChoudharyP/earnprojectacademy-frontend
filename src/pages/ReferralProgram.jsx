import React from "react";

const ReferralProgram = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        EarnProjectAcademy – Referral Program
      </h1>

      <p className="mb-6">
        At EarnProjectAcademy, we value the trust and recommendations of our
        learners and community members. To recognize your support, we offer a
        simple and rewarding referral program.
      </p>

      {/* Referral Form */}
      <div className="bg-gray-100 p-6 rounded-lg mb-10">

        <h2 className="text-xl font-semibold mb-4">Submit Referral</h2>

        <h3 className="font-semibold mt-4 mb-2">Your Details</h3>

        <input
          className="w-full p-2 border mb-3"
          placeholder="Your Name"
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Email ID"
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Phone Number"
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Graduation Year"
        />

        <select className="w-full p-2 border mb-4">
          <option>Enrolled at EarnProjectAcademy?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <h3 className="font-semibold mt-4 mb-2">Referral Details</h3>

        <input
          className="w-full p-2 border mb-3"
          placeholder="Referral Name"
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Referral Email"
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Referral Phone"
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Referral Graduation Year"
        />

        <select className="w-full p-2 border mb-4">
          <option>Select Course Interested In</option>
          <option>Digital Marketing</option>
          <option>Freelancing Mastery</option>
          <option>AI Tools & Automation</option>
        </select>

        <p className="text-sm mb-4">
          By continuing, you agree to EarnProjectAcademy's Terms and Policy.
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Submit Referral
        </button>

      </div>

      {/* Referral Reward */}
      <h2 className="text-xl font-semibold mt-6">Referral Reward</h2>

      <p className="mb-4">
        You will earn a referral bonus of <strong>₹1,000</strong> when someone
        you refer successfully enrolls in any EarnProjectAcademy program.
      </p>

      <h2 className="text-xl font-semibold mt-6">How It Works</h2>

      <ul className="list-disc ml-6">
        <li>
          Submit your referral using the official referral form on the
          EarnProjectAcademy website.
        </li>

        <li>
          Once your referred friend completes their admission process and pays
          the full program fee, you qualify for the bonus.
        </li>

        <li>
          The referral reward will be credited to your bank account within
          30 days of admission confirmation.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Exclusions</h2>

      <ul className="list-disc ml-6">
        <li>
          If the referred candidate has already applied or contacted the
          EarnProjectAcademy team earlier, the referral reward will not apply.
        </li>

        <li>
          Referral benefits cannot be combined with other offers such as group
          discounts or promotional schemes.
        </li>

        <li>
          Referrals must be genuine first-time applicants.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Terms & Conditions</h2>

      <ul className="list-disc ml-6">
        <li>
          Referral rewards are eligible only after the referred student
          completes the full admission process and payment.
        </li>

        <li>
          EarnProjectAcademy reserves the right to modify or discontinue the
          referral program at any time without prior notice.
        </li>

        <li>
          If you refer multiple students, you will receive rewards for each
          successful enrollment.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Contact</h2>

      <p>Email: info@earnprojectacademy.com</p>

    </div>
  );
};

export default ReferralProgram;