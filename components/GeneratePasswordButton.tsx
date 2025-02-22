/*
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
*/

/*
interface GeneratePasswordButtonProps {
  generatePassword: () => void;
}

export default function GeneratePasswordButton({
  generatePassword,
}: GeneratePasswordButtonProps) {
  return (
    <button
      onClick={generatePassword}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
    >
      Generate Secure Password
    </button>
  );
}
*/

interface GeneratePasswordButtonProps {
  generatePassword: () => void;
}

export default function GeneratePasswordButton({
  generatePassword,
}: GeneratePasswordButtonProps) {
  return (
    <button
      onClick={generatePassword}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
    >
      Generate Secure Password
    </button>
  );
}
