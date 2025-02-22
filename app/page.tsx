import Main from "@/components/Main";
import PasswordChecker from "@/components/PasswordChecker";

export default function Home() {
  return (
    <Main>
      <PasswordChecker />
    </Main>
  );
}

/*
"use client";
import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { PasswordInput } from "@/components/PasswordInput";
import { GeneratePasswordButton } from "@/components/GeneratePasswordButton";
import { CrackTimeMessage } from "@/components/CrackTimeMessage";
import { SecurityDisclaimer } from "@/components/SecurityDisclaimer";
import { Footer } from "@/components/Footer";
import { calculateCrackTime, generateSecurePassword } from "@/lib/utils";
import Main from "@/components/Main";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [crackTime, setCrackTime] = useState("");
  const [showGenerated, setShowGenerated] = useState(false);

  const handleGeneratePassword = useCallback(() => {
    const generated = generateSecurePassword();
    setPassword(generated);
    setCrackTime(calculateCrackTime(generated));
    setShowGenerated(true);
  }, []);

  return (
    <Main>
      <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
          <Header />

          <div className="space-y-4">
            <PasswordInput
              password={password}
              setPassword={setPassword}
              setCrackTime={setCrackTime}
              setShowGenerated={setShowGenerated}
            />

            <GeneratePasswordButton onClick={handleGeneratePassword} />

            {password && (
              <CrackTimeMessage
                crackTime={crackTime}
                showGenerated={showGenerated}
              />
            )}

            <SecurityDisclaimer />
          </div>

          <Footer />
        </div>
      </section>
    </Main>
  );
}
*/

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
