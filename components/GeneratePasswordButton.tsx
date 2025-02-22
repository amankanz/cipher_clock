type GeneratePasswordButtonProps = {
  onClick: () => void;
};

export const GeneratePasswordButton = ({
  onClick,
}: GeneratePasswordButtonProps) => (
  <button
    onClick={onClick}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
  >
    Generate Secure Password
  </button>
);
