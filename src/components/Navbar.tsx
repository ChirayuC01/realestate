import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-brand-primary text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
            <span className="text-branbg-brand-primary font-bold text-sm">
              DP
            </span>
          </div>
          <span className="text-xl font-semibold">Advisors</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/properties"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Properties
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/team"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Our Experts
          </Link>
          <Link
            href="/blogs"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/list-property"
            className="bg-yellow-400 text-branbg-brand-primary px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            List Property
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-yellow-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
