import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

const PaidRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const res = await API.get("/enrollments/my");

        const paid = res.data.some(
          (enroll) => enroll.paymentStatus === "PAID"
        );

        setHasPaid(paid);
      } catch (error) {
        setHasPaid(false);
      } finally {
        setLoading(false);
      }
    };

    checkPayment();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Checking access...</div>;
  }

  return hasPaid ? children : <Navigate to="/courses" />;
};

export default PaidRoute;