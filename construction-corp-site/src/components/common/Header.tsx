import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-brand-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-serif tracking-wide">
          BuildCorp
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/about" className="hover:text-accent transition">About</Link>
          <Link to="/services" className="hover:text-accent transition">Services</Link>
          <Link to="/projects" className="hover:text-accent transition">Projects</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </nav>

        <Link
          to="/contact"
          className="ml-4 bg-accent text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default Header;
