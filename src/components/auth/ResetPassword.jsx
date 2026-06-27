import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import RecoveryLayout from "./RecoveryLayout";

export default function ResetPassword() {
  const [showPass, setShowPass] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  return (
    <RecoveryLayout>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            Reset Password
          </h2>

          <p className="text-gray-500 mt-2">
            Your new password must be different
            from previously used passwords.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <Lock size={18} />

              <input
                type={
                  showPass ? "text" : "password"
                }
                className="w-full py-3 px-3 outline-none"
              />

              <button
                onClick={() =>
                  setShowPass(!showPass)
                }
                type="button"
              >
                {showPass ? (
                  <Eye />
                ) : (
                  <EyeOff />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <Lock size={18} />

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                className="w-full py-3 px-3 outline-none"
              />

              <button
                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }
                type="button"
              >
                {showConfirm ? (
                  <Eye />
                ) : (
                  <EyeOff />
                )}
              </button>
            </div>
          </div>

           <Link
              to="/success"
              className="text-blue-600 pointer-cursor"
            >
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Submit
          </button>
          </Link>

          <p className="text-center text-sm">
            Return to{" "}
            <Link
              to="/login"
              className="text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </RecoveryLayout>
  );
}