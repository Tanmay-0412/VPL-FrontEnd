import { CircleCheckBig } from "lucide-react";
import RecoveryLayout from "./RecoveryLayout";
import { Link } from "react-router-dom";

export default function EmailVerification() {
  return (
    <RecoveryLayout>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-4">
          <CircleCheckBig
            size={60}
            className="text-green-500"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            Email Sent!
          </h2>

          <p className="text-gray-500">
            Check your email and change your password.
          </p>

          <Link
              to="/two-step-verification"
              className="text-blue-600 font-medium"
            >
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">
            Reset Password
          </button>
          </Link>
        </div>
      </div>
    </RecoveryLayout>
  );
}