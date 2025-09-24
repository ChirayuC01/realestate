export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 text-yellow-500 rounded flex items-center justify-center">
                <span className="text-branbg-brand-primary font-bold text-sm">
                  DPA
                </span>
              </div>
              <span className="text-xl font-semibold">dvisors</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partners in navigating the complexities of distressed
              real estate assets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Our Experts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">CONTACT US</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-400 mt-0.5">📍</span>
                <span>
                  123 Main Street, Suite 400
                  <br />
                  Anytown, USA 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">✉</span>
                <a
                  href="mailto:info@dpadvisors.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  info@dpadvisors.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📞</span>
                <a
                  href="tel:(123) 456-7890"
                  className="hover:text-yellow-400 transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">NEWSLETTER</h3>
            <p className="text-gray-300 text-sm">
              Get the latest listings and market insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="bg-yellow-400 text-branbg-brand-primary px-4 py-2 rounded-r-md text-sm font-semibold hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Distressed Property Advisors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
