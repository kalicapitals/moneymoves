'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '✨' },
    { path: '/portfolio', label: 'Portfolio', icon: '💼' },
    { path: '/Team', label: 'Team', icon: '👥' }, // Ensure this matches the case of your Team page
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/contact', label: 'Contact', icon: '💌' },
  ];

  return (
    <motion.nav className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white shadow-lg relative z-50 py-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-3xl">🕊️</span>
            <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-white to-cyan-100 text-transparent bg-clip-text">
              Kali Capitals
            </span>
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  <Link
                    href={item.path}
                    className="relative px-5 py-3 rounded-lg transition-all duration-300 group"
                    onMouseEnter={() => item.hasDropdown && setShowDropdown(true)}
                    onMouseLeave={() => item.hasDropdown && setShowDropdown(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-lg">{item.label}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}