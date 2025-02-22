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

/*
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
*/

/*
interface PasswordInputProps {
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  password,
  handleChange,
}: PasswordInputProps) {
  return (
    <input
      type="text"
      value={password}
      onChange={handleChange}
      placeholder="Enter your password"
      className="mt-4 p-2 w-64 border-2 border-gray-300 text-black rounded-md"
    />
  );
}
*/

import { useState } from "react";

interface PasswordInputProps {
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  password,
  handleChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mt-4">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="p-2 w-64 border-2 border-gray-300 text-black rounded-md"
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md text-black"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}
