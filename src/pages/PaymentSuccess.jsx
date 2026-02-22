import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your dashboard has been unlocked.
        </p>

        <Link
          to="/dashboard"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;