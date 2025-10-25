const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">DeshiCart</h2>
          <p className="mt-2 text-sm">
            Quality products for stylish people. Shop smart, shop DeshiCart!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-600 cursor-pointer">About Us</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            <li className="hover:text-indigo-600 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-600 cursor-pointer">Men</li>
            <li className="hover:text-indigo-600 cursor-pointer">Women</li>
            <li className="hover:text-indigo-600 cursor-pointer">Kids</li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Get in Touch</h3>
          <ul className="space-y-2">
            <li>Email: support@deshicart.com</li>
            <li>Phone: +880 1234-567890</li>
            <li className="flex gap-3 mt-2 text-xl">
              <span className="cursor-pointer hover:text-indigo-600">📘</span>
              <span className="cursor-pointer hover:text-indigo-600">📸</span>
              <span className="cursor-pointer hover:text-indigo-600">🐦</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CopyRight */}
      <div className="text-center py-4 border-t border-gray-300 text-sm">
        © {new Date().getFullYear()} DeshiCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
