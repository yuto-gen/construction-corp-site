import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold text-white mb-2">BuildCorp</h3>
          <p>
            1234 Tokyo Street<br />
            Shinjuku, Tokyo
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/services" className="hover:text-accent">Services</a></li>
            <li><a href="/projects" className="hover:text-accent">Projects</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-gray-500">
        © 2025 BuildCorp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
