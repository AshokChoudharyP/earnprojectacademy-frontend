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
  const [discountPercent, setDiscountPercent] = useState(0);

  const baseFullAmount = 27000;
  const admissionAmount = 4999;

  let payableAmount =
    selectedPlan === "full" ? baseFullAmount : admissionAmount;

  if (selectedPlan === "full" && discountPercent > 0) {
    payableAmount =
      payableAmount - (payableAmount * discountPercent) / 100;
  }

  // Razorpay loader
  const loadRazorpay = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    try {
      setLoading(true);

      console.log("PLAN SENT:", selectedPlan);

      // IMPORTANT: backend decides final amount
      const res = await API.post("/payments/create-order", {
        enrollmentId,
        plan: selectedPlan,
        couponCode,
      });

      const orderData = res.data;

      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        toast.error("Razorpay SDK failed to load");
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
            await API.post("/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              enrollmentId,
              plan: selectedPlan,
              couponCode,
            });

            toast.success("Payment successful 🎉");
            navigate("/dashboard");
          } catch (err) {
            toast.error("Payment verification failed");
          }
        },

        theme: {
          color: "#4f46e5",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Unable to initiate payment"
      );
    } finally {
      setLoading(false);
    }
  };

  // Coupon demo logic
  const applyCoupon = () => {
    const code = couponCode.toUpperCase();

    if (code === "SAVE10") setDiscountPercent(10);
    else if (code === "SAVE8") setDiscountPercent(8);
    else if (code === "SAVE5") setDiscountPercent(5);
    else {
      setDiscountPercent(0);
      toast.error("Invalid coupon");
      return;
    }

    toast.success("Coupon applied");
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
            onClick={() => setSelectedPlan("full")}
            className={`border rounded-2xl p-8 cursor-pointer transition-all ${
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

            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full border rounded-xl px-4 py-2"
              />

              <button
                onClick={applyCoupon}
                className="mt-2 bg-gray-800 text-white px-4 py-2 rounded-lg w-full"
              >
                Apply Coupon
              </button>
            </div>
          </div>

          {/* ADMISSION PLAN */}
          <div
            onClick={() => setSelectedPlan("admission")}
            className={`border rounded-2xl p-8 cursor-pointer transition-all ${
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
              Remaining ₹22,000 within 30 days
            </p>

            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>✔ Start instantly</li>
              <li>✔ EMI eligible</li>
              <li>✔ Balance reminder</li>
            </ul>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-12 text-center">

          <div className="text-lg font-semibold mb-4">
            Payable Now: ₹{payableAmount}
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="bg-green-600 text-white px-12 py-4 rounded-xl"
          >
            {selectedPlan === "full"
              ? "Pay ₹27,000 Securely"
              : "Pay ₹4,999 Securely"}
          </button>

          <div className="text-sm text-gray-500 mt-6">
            🔒 100% Secure Payment via Razorpay
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;