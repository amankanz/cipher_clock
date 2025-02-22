export const Footer = () => (
  <footer className="text-center pt-4 border-t border-gray-100 mt-4">
    <p className="text-sm">
      &copy; {new Date().getFullYear()}
      <a
        href="https://github.com/amankanz"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        Kaneza
      </a>
      . All Rights Reserved.
    </p>
  </footer>
);
