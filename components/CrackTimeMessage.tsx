import { cn } from "@/lib/utils";

interface CrackTimeMessageProps {
  crackTime: string;
  showGenerated: boolean;
}

export const CrackTimeMessage = ({
  crackTime,
  showGenerated,
}: CrackTimeMessageProps) => {
  const getBackgroundColor = () => {
    if (crackTime.includes("Instantly") || crackTime.includes("minute")) {
      return "bg-red-100 text-red-700";
    }
    if (crackTime.includes("hour") || crackTime.includes("day")) {
      return "bg-yellow-100 text-yellow-700";
    }
    return "bg-green-100 text-green-700";
  };

  return (
    <div className="space-y-2">
      <p
        className={cn(
          "text-sm text-center p-3 rounded-lg transition-colors duration-200",
          getBackgroundColor()
        )}
      >
        {showGenerated ? "Generated password would take " : "It would take "}
        <span className="font-semibold">{crackTime}</span> to crack this
        password
      </p>
    </div>
  );
};
