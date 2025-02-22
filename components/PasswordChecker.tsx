"use client";

/*
import CrackTimeMessage from "@/components/CrackTimeMessage";
import Footer from "@/components/Footer";
import GeneratePasswordButton from "@/components/GeneratePasswordButton";
import PasswordInput from "@/components/PasswordInput";
import { useState } from "react";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strengthMessage, setStrengthMessage] = useState("");
  const [background, setBackground] = useState("bg-blue-600");

  const calculateStrength = (password: string) => {
    if (!password) return "";
    if (password.length < 6) return "Instantly";
    if (password.length < 8) return "A few seconds";
    if (password.length < 12) return "A few minutes";
    if (password.length < 16) return "A few hours";
    return "Years";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrengthMessage(
      `It would take ${calculateStrength(newPassword)} to crack your password.`
    );
    setBackground(newPassword ? "bg-orange-500" : "bg-blue-600");
  };

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const newPassword = Array.from({ length: 16 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
    setPassword(newPassword);
    setStrengthMessage(
      `It would take ${calculateStrength(newPassword)} to crack your password.`
    );
    setBackground("bg-orange-500");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${background} text-white p-4`}
    >
      <h1 className="text-3xl font-bold">How Secure Is My Password?</h1>
      <p className="text-lg mt-2">
        The #1 Password Strength Tool. Trusted and used by millions.
      </p>
      <PasswordInput password={password} handleChange={handleChange} />
      <CrackTimeMessage message={strengthMessage} />
      <GeneratePasswordButton generatePassword={generatePassword} />
      <Footer />
    </div>
  );
}
*/

import { useState } from "react";
import CrackTimeMessage from "@/components/CrackTimeMessage";
import Footer from "@/components/Footer";
import GeneratePasswordButton from "@/components/GeneratePasswordButton";
import PasswordInput from "@/components/PasswordInput";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strengthMessage, setStrengthMessage] = useState("");
  const [background, setBackground] = useState("bg-blue-600");

  const calculateStrength = (password: string) => {
    if (!password) return { time: "", color: "bg-blue-600" };

    const strengthLevels = [
      { maxLen: 5, time: "Instantly", color: "bg-red-600" },
      { maxLen: 7, time: "A few seconds", color: "bg-orange-600" },
      { maxLen: 11, time: "A few minutes", color: "bg-yellow-500" },
      { maxLen: 15, time: "A few hours", color: "bg-green-500" },
      { maxLen: 20, time: "A few months", color: "bg-teal-500" },
      { maxLen: 25, time: "A few years", color: "bg-blue-500" },
      { maxLen: 30, time: "5 million years", color: "bg-purple-500" },
    ];

    const strength =
      strengthLevels.find((level) => password.length <= level.maxLen) ||
      strengthLevels[strengthLevels.length - 1];
    return strength;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const { time, color } = calculateStrength(newPassword);
    setStrengthMessage(
      time
        ? `It would take a computer about\n\n${time}\n\nto crack your password`
        : ""
    );
    setBackground(color);
  };

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const newPassword = Array.from({ length: 20 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
    setPassword(newPassword);
    const { time, color } = calculateStrength(newPassword);
    setStrengthMessage(
      `It would take a computer about\n\n${time}\n\nto crack your password`
    );
    setBackground(color);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${background} text-white p-4`}
    >
      <h1 className="text-3xl font-bold">How Secure Is My Password?</h1>
      <p className="text-lg mt-2">
        The #1 Password Strength Tool. Trusted and used by millions.
      </p>
      <PasswordInput password={password} handleChange={handleChange} />
      <CrackTimeMessage message={strengthMessage} />
      <GeneratePasswordButton generatePassword={generatePassword} />
      <Footer />
    </div>
  );
}
