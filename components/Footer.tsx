export default function Footer() {
  return (
    <p className="mt-6 text-sm text-center">
      &copy; {new Date().getFullYear()} CipherClock by{" "}
      <a
        href="https://kanezaio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm underline hover:no-underline hover:text-gray-900 transition-colors duration-200"
      >
        Kaneza
      </a>
      . All rights reserved.
    </p>
  );
}
