import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import RecoveryLayout from "./RecoveryLayout";

export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <RecoveryLayout>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            Forgot Password
          </h2>
          <p className="text-gray-500 mt-2">
            No worries, we'll send you reset instructions
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>

          <div className="flex items-center border rounded-lg px-3 mb-5">
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full py-3 px-3 outline-none"
            />
          </div>

          <Link
              to="/email-verification"
              className="text-blue-600 font-medium"
            >
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
            Reset Password 
          </button>
          </Link>

          <p className="text-center mt-5 text-sm">
            Return to{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </RecoveryLayout>
  );
}