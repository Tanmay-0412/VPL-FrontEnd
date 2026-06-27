import { CircleCheckBig } from "lucide-react";
import RecoveryLayout from "./RecoveryLayout";
import { Link } from "react-router-dom";

export default function SuccessPage() {
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
            Success
          </h2>

          <p className="text-gray-500">
            Your new password has been
            successfully saved.
          </p>

          <Link
              to="/login"
              className="text-blue-600 pointer-cursor"
            >
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">
            Back to Login
          </button>
          </Link>
        </div>
      </div>
    </RecoveryLayout>
  );
}