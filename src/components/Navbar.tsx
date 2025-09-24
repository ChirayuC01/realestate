// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-brand-primary text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl text-yellow-400">
          DPAvisors
        </Link>
        <div className="space-x-6">
          <Link href="/properties">Properties</Link>
          <Link href="/services">Services</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
