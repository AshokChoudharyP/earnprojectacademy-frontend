import { Routes, Route } from "react-router-dom";
import ScrollProgress from "./components/common/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import FreelanceAccelerator from "./pages/FreelanceAccelerator";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Enroll from "./pages/Enroll";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";

import MyCourses from "./pages/MyCourses";
import StudentDashboard from "./pages/StudentDashboard";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import CourseContent from "./pages/CourseContent";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import AdminRoute from "./routes/AdminRoute";
import AdminCourseBuilder from "./pages/admin/AdminCourseBuilder";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import Announcements from "./pages/Announcements";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
function App() {
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/freelance-income-accelerator" element={<FreelanceAccelerator />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment/:enrollmentId" element={<Payment />} />
        
       

        {/* 🔐 Protected enroll Route */}
        <Route
    path="/enroll"
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
             path="/admin/dashboard"
            element={
        <RoleBasedRoute allowedRole="admin">
            <AdminDashboard />
        </RoleBasedRoute>
     }
       />

     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/reset-password/:token" element={<ResetPassword />} />
     <Route path="/enroll/:courseId" element={<Enroll />} />
     <Route path="/payment-success" element={<PaymentSuccess />} />
     
     <Route
  path="/course/:courseId"
  element={
    <ProtectedRoute>
      <CourseContent />
    </ProtectedRoute>
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
  path="/my-courses"
  element={
    <ProtectedRoute>
      <MyCourses />
    </ProtectedRoute>
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
<Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
