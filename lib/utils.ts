type TimeUnit = {
  value: number;
  unit: Intl.RelativeTimeFormatUnit;
};

export const calculateCrackTime = (password: string): string => {
  if (!password) return "";

  const charsetSize = 94; // Printable ASCII characters
  const calculationsPerSecond = 1e11; // 100 billion guesses/second
  const entropy = password.length * Math.log2(charsetSize);
  const seconds = Math.pow(2, entropy) / calculationsPerSecond;

  const timeUnits: TimeUnit[] = [
    { value: 31536000, unit: "year" },
    { value: 2592000, unit: "month" },
    { value: 86400, unit: "day" },
    { value: 3600, unit: "hour" },
    { value: 60, unit: "minute" },
  ];

  if (seconds < 1) return "Instantly";
  if (seconds < 60) return "Less than a minute";

  for (const { value, unit } of timeUnits) {
    if (seconds >= value) {
      const time = Math.floor(seconds / value);
      return `${time} ${unit}${time > 1 ? "s" : ""}`;
    }
  }

  return "Several minutes";
};

export const generateSecurePassword = (): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  return Array.from(
    { length: 16 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

export const cn = (...classes: Array<string | boolean | undefined>): string =>
  classes.filter(Boolean).join(" ");
