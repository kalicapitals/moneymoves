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
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-3xl">🕊️</span>
            <span className="font-bold text-2xl tracking-tight">
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
              className={`block px-3 py-2 rounded-lg transition-all duration-300 ${pathname === item.path ? 'active' : 'text-white'}`}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-lg">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}