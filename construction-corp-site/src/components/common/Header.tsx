import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-serif font-bold text-brand-dark">
          BuildCorp
        </a>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/about" className="hover:text-brand-dark transition">
            会社概要
          </a>
          <a href="/projects" className="hover:text-brand-dark transition">
            実績紹介
          </a>
          <a href="/contact" className="hover:text-brand-dark transition">
            お問い合わせ
          </a>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <a href="/about" className="hover:text-brand-dark transition" onClick={() => setIsOpen(false)}>
              会社概要
            </a>
            <a href="/projects" className="hover:text-brand-dark transition" onClick={() => setIsOpen(false)}>
              実績紹介
            </a>
            <a href="/contact" className="hover:text-brand-dark transition" onClick={() => setIsOpen(false)}>
              お問い合わせ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
