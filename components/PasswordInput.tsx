/*
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
    <div className="w-11/12 max-w-lg bg-white relative rounded mt-8">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        className="w-full p-3 text-xl rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your password"
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
