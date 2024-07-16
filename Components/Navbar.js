// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">blogsphere</Link>
        </div>
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-slate-300">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-slate-300">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-slate-300">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-slate-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
