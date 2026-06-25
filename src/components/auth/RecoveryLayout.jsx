import logo from "../../assets/main-logo.png";
import recoveryBg from "../../assets/recovery-bg.png";

export default function RecoveryLayout({ children }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${recoveryBg})`,
      }}
    >
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="JVM Santacruz"
            className="h-28 md:h-24 object-contain"
          />
        </div>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-700">
            Copyright © 2025 - JVM Santacruz.
          </p>
        </div>
      </div>
    </div>
  );
}