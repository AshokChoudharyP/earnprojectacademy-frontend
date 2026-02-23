import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

const Payment = () => {
  const { enrollmentId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
        { enrollmentId },
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Secure Payment</h2>
        <p className="text-gray-500 mb-6">
          Freelance Income Accelerator™
        </p>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay Securely"}
        </button>
      </div>
    </div>
  );
};

export default Payment;