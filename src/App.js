import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import ScrollProgress from "./components/common/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import AdminRoute from "./routes/AdminRoute";

/* 🔥 Lazy Loaded Pages */
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Courses = React.lazy(() => import("./pages/Courses"));
const FreelanceAccelerator = React.lazy(() => import("./pages/FreelanceAccelerator"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const Enroll = React.lazy(() => import("./pages/Enroll"));
const StudentDashboard = React.lazy(() => import("./pages/StudentDashboard"));
const AdminDashboard = React.lazy(() => import("./pages/admin/AdminDashboard"));
const Payment = React.lazy(() => import("./pages/Payment"));
const PaymentSuccess = React.lazy(() => import("./pages/PaymentSuccess"));
const MyCourses = React.lazy(() => import("./pages/MyCourses"));
const CourseContent = React.lazy(() => import("./pages/CourseContent"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AdminCourseBuilder = React.lazy(() => import("./pages/admin/AdminCourseBuilder"));
const AdminAnalytics = React.lazy(() => import("./pages/admin/AdminAnalytics"));
const Announcements = React.lazy(() => import("./pages/Announcements"));
const Calendar = React.lazy(() => import("./pages/Calendar"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Settings = React.lazy(() => import("./pages/Settings"));

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <div className="pt-20">
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/freelance-income-accelerator" element={<FreelanceAccelerator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/payment/:enrollmentId" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />

            {/* 🔐 Protected Enroll */}
            <Route
              path="/enroll"
              element={
                <ProtectedRoute>
                  <Enroll />
                </ProtectedRoute>
              }
            />

            <Route
              path="/enroll/:courseId"
              element={
                <ProtectedRoute>
                  <Enroll />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/my-courses"
              element={
                <ProtectedRoute>
                  <MyCourses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/course/:courseId"
              element={
                <ProtectedRoute>
                  <CourseContent />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/dashboard"
              element={
                <RoleBasedRoute allowedRole="admin">
                  <AdminDashboard />
                </RoleBasedRoute>
              }
            />

            <Route
              path="/admin/course-builder"
              element={
                <AdminRoute>
                  <AdminCourseBuilder />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/analytics"
              element={
                <AdminRoute>
                  <AdminAnalytics />
                </AdminRoute>
              }
            />

            <Route
              path="/announcements"
              element={
                <ProtectedRoute>
                  <Announcements />
                </ProtectedRoute>
              }
            />

            <Route
              path="/calendar"
              element={
                <ProtectedRoute>
                  <Calendar />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default App;
