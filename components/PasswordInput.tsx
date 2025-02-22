/*
type PasswordInputProps = {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput = ({ password, onChange }: PasswordInputProps) => (
  <div>
    <label
      htmlFor="password"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Enter your password
    </label>
    <input
      id="password"
      type="text"
      value={password}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
      placeholder="Type or generate a password"
    />
  </div>
);
*/

import type { Dispatch, SetStateAction } from "react";

type PasswordInputProps = {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setCrackTime: Dispatch<SetStateAction<string>>;
  setShowGenerated: Dispatch<SetStateAction<boolean>>;
};

export const PasswordInput = ({
  password,
  setPassword,
  setCrackTime,
  setShowGenerated,
}: PasswordInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setCrackTime(calculateCrackTime(newPassword));
    setShowGenerated(false);
  };

  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Enter your password
      </label>
      <input
        id="password"
        type="text"
        value={password}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        placeholder="Type or generate a password"
      />
    </div>
  );
};
