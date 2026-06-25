import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/auth/ForgotPassword";
import EmailVerification from "./components/auth/EmailVerification";
import TwoStepVerification from "./components/auth/TwoStepVerification";
import ResetPassword from "./components/auth/ResetPassword";
import SuccessPage from "./components/auth/SucessPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Forgot Password Flow */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/email-verification"
          element={<EmailVerification />}
        />

        <Route
          path="/two-step-verification"
          element={<TwoStepVerification />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        <Route
          path="/success"
          element={<SuccessPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;