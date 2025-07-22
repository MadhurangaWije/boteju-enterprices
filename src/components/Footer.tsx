import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-primary-900 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/10 to-secondary-500/10"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">BE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Boteju Enterprises</span>
                <span className="text-xs text-primary-200">Since 2008</span>
              </div>
            </div>
            <p className="text-primary-200 text-sm mb-4 font-medium">
              Clear Prices. Clean Deals. Quality Rides.
            </p>
            <div className="trust-badge text-xs inline-block">
              🏆 98% Customer Satisfaction
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vehicles" className="text-gray-400 hover:text-white transition-colors">
                  Available Vehicles
                </Link>
              </li>
              <li>
                <Link href="/import-flow" className="text-gray-400 hover:text-white transition-colors">
                  Import Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Vehicle Sourcing</li>
              <li>Auction Bidding</li>
              <li>Export Documentation</li>
              <li>Shipping Coordination</li>
              <li>Import Assistance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 info@botejuenterprises.com</li>
              <li>📞 +94 77 178 5813</li>
              <li>📍 Ja-Ela, Sri Lanka</li>
              <li>🕒 Mon-Sun: 9AM-6PM IST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Boteju Enterprises. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}