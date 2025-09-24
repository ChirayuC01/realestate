import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Distressed Property Advisors
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Unlocking value in distressed real estate through expert solutions,
            advisory, and end-to-end support.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Properties</h2>
          <p className="mb-4">Browse our curated list of properties.</p>
          <Link href="/properties" className="text-blue-700 font-semibold">
            View Properties →
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <p className="mb-4">Explore the services we provide to clients.</p>
          <Link href="/services" className="text-blue-700 font-semibold">
            Explore Services →
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Blogs</h2>
          <p className="mb-4">Stay updated with insights and guides.</p>
          <Link href="/blogs" className="text-blue-700 font-semibold">
            Read Blogs →
          </Link>
        </div>
      </section>
    </div>
  );
}
