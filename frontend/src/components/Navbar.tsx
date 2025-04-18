'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import './styles.css'; // Import the styles.css file

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '✨' },
    { path: '/portfolio', label: 'Portfolio', icon: '💼' },
    { path: '/Team', label: 'Team', icon: '👥' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/contact', label: 'Contact', icon: '💌' },
  ];

  return (
    <motion.nav className="navbar">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-24"> {/* Increased height */}
          <Link href="/" className="flex items-center mx-auto"> {/* Centered logo */}
            <span className="font-bold text-6xl tracking-tight"> {/* Increased font size to 8xl */}
              Kali Capitals
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? '✖️' : '☰'} {/* Toggle icon */}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} mt-2`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-5 py-4 rounded-lg transition-all duration-300 ${pathname === item.path ? 'active' : 'text-white'}`} // Increased padding
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{item.icon}</span> {/* Increased icon size */}
                <span className="font-medium text-xl">{item.label}</span> {/* Increased label size */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}