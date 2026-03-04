import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

const PaymentDashboard = () => {
  const { enrollmentId } = useParams();

  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const fetchPayment = async () => {
      const res = await API.get(`/payments/status/${enrollmentId}`);
      setPayment(res.data);
    };

    fetchPayment();
  }, [enrollmentId]);

  if (!payment) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Payment Dashboard
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span>Course</span>
            <span>{payment.courseTitle}</span>
          </div>

          <div className="flex justify-between">
            <span>Total Course Fee</span>
            <span>₹{payment.totalAmount}</span>
          </div>

          <div className="flex justify-between">
            <span>Amount Paid</span>
            <span className="text-green-600">
              ₹{payment.amountPaid}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Remaining Amount</span>
            <span className="text-red-600">
              ₹{payment.remainingAmount}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Payment Plan</span>
            <span>{payment.paymentPlan}</span>
          </div>

          {payment.nextDueDate && (
            <div className="flex justify-between">
              <span>Next Due Date</span>
              <span>
                {new Date(payment.nextDueDate).toDateString()}
              </span>
            </div>
          )}

        </div>

        {payment.remainingAmount > 0 && (
          <button
            className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl"
          >
            Pay Installment
          </button>
        )}

      </div>
    </div>
  );
};

export default PaymentDashboard;