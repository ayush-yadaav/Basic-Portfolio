import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-zinc-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold">My Portfolio</h1>

      {/* Hamburger Icon */}
      <div className="text-3xl md:hidden" onClick={toggleNav}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </div>

      {/* Nav Links */}
      <div className={`flex-col md:flex-row md:flex items-center gap-6 text-lg font-semibold absolute md:static left-0 w-full md:w-auto bg-zinc-800 md:bg-transparent px-6 md:px-0 transition-all duration-300 ease-in z-10
        ${isOpen ? 'top-16 opacity-100' : 'top-[-300px] opacity-0 md:opacity-100'}`}>
        <Link onClick={() => setIsOpen(false)} to="/home" className="block py-2 md:py-0">Home</Link>
        <Link onClick={() => setIsOpen(false)} to="/about" className="block py-2 md:py-0">About</Link>
        <Link onClick={() => setIsOpen(false)} to="/project" className="block py-2 md:py-0">Project</Link>
        <Link onClick={() => setIsOpen(false)} to="/contact" className="block py-2 md:py-0">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
