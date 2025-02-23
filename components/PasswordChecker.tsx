"use client";

/*
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

    // Determine character types used
    let charTypes = 0;
    if (/[a-z]/.test(password)) charTypes++;
    if (/[A-Z]/.test(password)) charTypes++;
    if (/[0-9]/.test(password)) charTypes++;
    if (/[^a-zA-Z0-9]/.test(password)) charTypes++;

    // Calculate effective length based on complexity
    const effectiveLength = password.length * (1 + (charTypes - 1) * 0.5);

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
      strengthLevels.find((level) => effectiveLength <= level.maxLen) ||
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
*/

import { useState } from "react";
import CrackTimeMessage from "@/components/CrackTimeMessage";
import Footer from "@/components/Footer";
import GeneratePasswordButton from "@/components/GeneratePasswordButton";
import PasswordInput from "@/components/PasswordInput";
import Link from "next/link";
import { roboto } from "@/lib/fonts";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strengthMessage, setStrengthMessage] = useState("");
  const [background, setBackground] = useState("bg-blue-600");

  const calculateStrength = (password: string) => {
    if (!password) return { time: "", color: "bg-blue-600" };

    let charTypes = 0;
    if (/[a-z]/.test(password)) charTypes++;
    if (/[A-Z]/.test(password)) charTypes++;
    if (/[0-9]/.test(password)) charTypes++;
    if (/[^a-zA-Z0-9]/.test(password)) charTypes++;

    const effectiveLength = password.length * (1 + (charTypes - 1) * 0.5);

    const strengthLevels = [
      { maxLen: 5, time: "Instantly", color: "bg-red-600" },
      { maxLen: 7, time: "A few seconds", color: "bg-orange-600" },
      { maxLen: 11, time: "A few minutes", color: "bg-yellow-500" },
      { maxLen: 15, time: "A few hours", color: "bg-green-500" },
      { maxLen: 20, time: "A few months", color: "bg-teal-500" },
      { maxLen: 25, time: "A few years", color: "bg-blue-500" },
      { maxLen: 30, time: "5 million years", color: "bg-purple-500" },
      { maxLen: 35, time: "Trillion of years", color: "bg-purple-600" },
      { maxLen: 40, time: "Quadrillions of years", color: "bg-indigo-500" },
      { maxLen: 45, time: "Quintillions of years", color: "bg-indigo-600" },
      { maxLen: 50, time: "Sextillion of years", color: "bg-pink-500" },
      { maxLen: Infinity, time: "Virtually uncrackable", color: "bg-pink-600" },
    ];

    const strength =
      strengthLevels.find((level) => effectiveLength <= level.maxLen) ||
      strengthLevels[strengthLevels.length - 1];
    return strength;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const { time, color } = calculateStrength(newPassword);
    setStrengthMessage(
      time
        ? `It would take a computer about ${
            time === "Instantly" ? "an" : ""
          }\n\n${time}\n\nto crack your password`
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
    <div className={`min-h-screen flex flex-col ${background} text-white p-4`}>
      <nav>
        <Link
          href={"/"}
          className={`text-xl font-black uppercase ${roboto.className}`}
        >
          CipherClock
        </Link>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          How Secure Is My Password?
        </h1>
        <p className="text-xl md:text-2xl mt-4">
          The #1 Password Strength Tool. Trusted and used by millions.
        </p>
        <PasswordInput password={password} handleChange={handleChange} />
        <CrackTimeMessage message={strengthMessage} />
        <GeneratePasswordButton generatePassword={generatePassword} />
        <p className="text-sm text-center md:text-lg mt-8 font-medium italic">
          We never see, store, or share your passwords. Your data never leaves
          your device. Complete privacy by design.
        </p>
      </div>

      <Footer />
    </div>
  );
}
