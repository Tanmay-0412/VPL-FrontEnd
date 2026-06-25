import { useRef } from "react";
import RecoveryLayout from "./RecoveryLayout";
import { Link } from "react-router-dom";

export default function TwoStepVerification() {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    if (
      e.target.value &&
      index < inputs.current.length - 1
    ) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <RecoveryLayout>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            2 Step Verification
          </h2>

          <p className="text-gray-500 mt-2">
            Enter the OTP received to verify your
            account.
          </p>

          <p className="font-medium mt-2">
            ******doe@example.com
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={(el) =>
                (inputs.current[index] = el)
              }
              maxLength={1}
              onChange={(e) =>
                handleChange(e, index)
              }
              className="w-14 h-14 border rounded-lg text-center text-2xl font-bold"
            />
          ))}
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">
            Didn't receive code?
            <button className="text-blue-600 ml-1">
              Resend Code
            </button>
          </p>

          <p className="text-red-500 mt-2">
            00:45
          </p>
        </div>
        
        <Link
        to="/reset-password"
        className="text-blue-600 font-medium"
        >
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Submit
        </button>
        </Link>
      </div>
    </RecoveryLayout>
  );
}