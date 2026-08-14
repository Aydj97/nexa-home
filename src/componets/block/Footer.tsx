
const Footer = () => {
  return (
    <div className="outer-container bg-[#0F172A]">
      <div className="inner-container">

        <footer className="bg-[#0F172A] text-gray-300">
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

      {/* Company */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Nexa Homes
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Helping individuals and families buy, sell, and rent houses,
          apartments, and land with confidence. We make finding your
          dream property simple, secure, and stress-free.
        </p>

        <div className="mt-6">
          <p>📍 Lagos, Nigeria</p>
          <p className="mt-2">📞 +234 800 000 0000</p>
          <p className="mt-2">✉ info@nexahomes.com</p>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          Quick Links
        </h3>

        <ul className="space-y-3 mt-5">
          <li><a href="/" className="hover:text-red-500">Home</a></li>
          <li><a href="/about" className="hover:text-red-500">About Us</a></li>
          <li><a href="/properties" className="hover:text-red-500">Properties</a></li>
          <li><a href="/agents" className="hover:text-red-500">Our Agents</a></li>
          <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
        </ul>
      </div>

      {/* Property */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          Property
        </h3>

        <ul className="space-y-3 mt-5">
          <li><a href="#" className="hover:text-red-500">Buy Property</a></li>
          <li><a href="#" className="hover:text-red-500">Sell Property</a></li>
          <li><a href="#" className="hover:text-red-500">Rent Property</a></li>
          <li><a href="#" className="hover:text-red-500">Land for Sale</a></li>
          <li><a href="#" className="hover:text-red-500">Commercial Properties</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          Support
        </h3>

        <ul className="space-y-3 mt-5">
          <li><a href="#" className="hover:text-red-500">FAQs</a></li>
          <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-red-500">Help Center</a></li>
          <li><a href="#" className="hover:text-red-500">Report Listing</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          Newsletter
        </h3>

        <p className="mt-4 text-sm text-gray-400">
          Subscribe to receive the latest property listings, investment
          opportunities, and real estate news.
        </p>

        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg px-4 py-3 bg-slate-800 border border-slate-700 focus:outline-none"
          />

          <button className="mt-3 w-full bg-red-600 hover:bg-red-700 transition rounded-lg py-3 text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

      <p className="text-sm text-gray-400">
        © 2026 Nexa Homes. All rights reserved.
      </p>

      <div className="flex gap-5 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">Facebook</a>
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">LinkedIn</a>
        <a href="#" className="hover:text-white">X</a>
      </div>

    </div>

  </div>
</footer>

      </div>
    </div>
  )
}

export default Footer