/*
interface CrackTimeMessageProps {
  message: string;
}

export default function CrackTimeMessage({ message }: CrackTimeMessageProps) {
  return (
    <p className="mt-2 text-lg text-center whitespace-pre-line">{message}</p>
  );
}
*/

interface CrackTimeMessageProps {
  message: string;
}

export default function CrackTimeMessage({ message }: CrackTimeMessageProps) {
  return (
    <p className="mt-2 text-xl text-center whitespace-pre-line">{message}</p>
  );
}
