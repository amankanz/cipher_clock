/*
import Main from "@/components/Main";

export default function Home() {
  return (
    <Main></Main>
  );
}
*/

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
