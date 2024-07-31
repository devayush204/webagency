import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
            • LOGO •
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 md:flex items-center justify-center ">
            <Link href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link href="/results" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Results
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
          </div>
          <div className="flex items-center">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
              Talk to Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;