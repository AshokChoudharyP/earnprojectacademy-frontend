import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

const Payment = () => {
  const { enrollmentId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("full");
  const [couponCode, setCouponCode] = useState("");
  const loadRazorpay = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    setLoading(true);

    let orderData;

    try {
      const token = localStorage.getItem("token");

      const res = await API.post(
        "/payments/create-order",
        { enrollmentId, couponCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      orderData = res.data;
    } catch (err) {
      toast.error("Unable to initiate payment");
      setLoading(false);
      return;
    }

    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      toast.error("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    const options = {
      key: orderData.key,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "EarnProjectAcademy",
      description: "Freelance Income Accelerator",
      order_id: orderData.orderId,

      handler: async function (response) {
        try {
          const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
          } = response;

          const token = localStorage.getItem("token");

          await API.post(
            "/payments/verify",
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              enrollmentId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success("Payment successful 🎉");
          navigate("/payment-success");
        } catch (err) {
          toast.error("Payment verification failed");
        }
      },

      theme: { color: "#4f46e5" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

    setLoading(false);
  };

  return (
  <div className="min-h-screen bg-gray-50 py-16 px-6">
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

      <h2 className="text-3xl font-bold text-center mb-8">
        Choose Your Payment Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* FULL PAYMENT */}
        <div
          className={`border rounded-2xl p-8 transition-all ${
            selectedPlan === "full"
              ? "border-indigo-600 shadow-lg"
              : "border-gray-200"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">
            Full Payment
          </h3>

          <p className="text-3xl font-bold text-indigo-600">
            ₹27,000
          </p>

          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>✔ Full course access</li>
            <li>✔ Certification included</li>
            <li>✔ No pending dues</li>
          </ul>
          <input
            type="text"
             placeholder="Enter Coupon Code"
              value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
              className="w-full mb-4 border rounded-xl px-4 py-2"
             />
          <button
            onClick={() => setSelectedPlan("full")}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl"
          >
            Select Full Payment
          </button>
        </div>

        {/* ADMISSION PLAN */}
        <div
          className={`border rounded-2xl p-8 transition-all ${
            selectedPlan === "admission"
              ? "border-indigo-600 shadow-lg"
              : "border-gray-200"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">
            Admission Plan
          </h3>

          <p className="text-3xl font-bold text-indigo-600">
            ₹4,999
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Remaining ₹22,000 within 3 days
          </p>

          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>✔ Start instantly</li>
            <li>✔ EMI eligible</li>
            <li>✔ Balance reminder</li>
          </ul>

          <button
            onClick={() => setSelectedPlan("admission")}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl"
          >
            Select Admission Plan
          </button>
        </div>
      </div>

      {/* FINAL PAY BUTTON */}
      <div className="text-center mt-12">
        <button
          onClick={handlePayment}
          disabled={loading}
          className="bg-green-600 text-white px-12 py-4 rounded-xl text-lg font-semibold disabled:opacity-50"
        >
          {loading
            ? "Processing..."
            : selectedPlan === "full"
            ? "Pay ₹27,000 Securely"
            : "Pay ₹4,999 Securely"}
        </button>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        🔒 100% Secure Payment via Razorpay
      </div>
    </div>
  </div>
);
};

export default Payment;