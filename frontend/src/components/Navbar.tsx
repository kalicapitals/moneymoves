'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '✨' },
    { 
      path: '/portfolio', 
      label: 'Portfolio', 
      icon: '💼',
      hasDropdown: true,
      dropdownItems: [
        {
          category: "Tech Investments",
          companies: [
            { name: "TechCo", description: "AI & Machine Learning", icon: "🤖" },
            { name: "CloudServe", description: "Cloud Infrastructure", icon: "☁️" },
            { name: "DataFlow", description: "Big Data Analytics", icon: "📊" },
          ]
        },
        {
          category: "Startups",
          companies: [
            { name: "GreenTech", description: "Sustainable Energy", icon: "🌱" },
            { name: "FinTech Pro", description: "Financial Technology", icon: "💰" },
            { name: "HealthAI", description: "Healthcare Innovation", icon: "🏥" },
          ]
        },
        {
          category: "Growth Companies",
          companies: [
            { name: "EduTech", description: "Education Platform", icon: "📚" },
            { name: "SmartHome", description: "IoT Solutions", icon: "🏠" },
            { name: "SecureNet", description: "Cybersecurity", icon: "🔒" },
          ]
        }
      ]
    },
    { 
      path: '/team', 
      label: 'Team', 
      icon: '👥',
      hasDropdown: true,
      dropdownItems: [
        {
          category: "Leadership",
          members: [
            {
              name: "Sarah Johnson",
              role: "CEO & Founder",
              bio: "Former Google executive with 15+ years in tech",
              image: "/team/sarah.jpg",
              icon: "👩‍💼",
              linkedin: "https://linkedin.com/in/sarah"
            },
            {
              name: "Michael Chen",
              role: "CTO",
              bio: "AI researcher & tech entrepreneur",
              image: "/team/michael.jpg",
              icon: "👨‍💻",
              linkedin: "https://linkedin.com/in/michael"
            }
          ]
        },
        {
          category: "Investment Team",
          members: [
            {
              name: "Alex Rivera",
              role: "Investment Director",
              bio: "10+ years in venture capital",
              image: "/team/alex.jpg",
              icon: "📊",
              linkedin: "https://linkedin.com/in/alex"
            },
            {
              name: "Emma Wilson",
              role: "Principal",
              bio: "Specializes in early-stage startups",
              image: "/team/emma.jpg",
              icon: "💡",
              linkedin: "https://linkedin.com/in/emma"
            }
          ]
        },
        {
          category: "Operations",
          members: [
            {
              name: "David Park",
              role: "Operations Manager",
              bio: "Operations expert with startup experience",
              image: "/team/david.jpg",
              icon: "⚡",
              linkedin: "https://linkedin.com/in/david"
            },
            {
              name: "Lisa Thompson",
              role: "Head of Marketing",
              bio: "Digital marketing strategist",
              image: "/team/lisa.jpg",
              icon: "🎯",
              linkedin: "https://linkedin.com/in/lisa"
            }
          ]
        }
      ]
    },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/contact', label: 'Contact', icon: '💌' },
  ];

  return (
    <motion.nav 
      className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white shadow-lg relative z-50 py-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-3xl">🕊️</span>
              <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-white to-cyan-100 text-transparent bg-clip-text">
                MyBlog
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-10">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                const isHovered = hoveredPath === item.path;

                return (
                  <div key={item.path} className="relative">
                    <Link
                      href={item.path}
                      className="relative px-5 py-3 rounded-lg transition-all duration-300 group"
                      onMouseEnter={() => {
                        setHoveredPath(item.path);
                        if (item.hasDropdown) setShowDropdown(item.path);
                      }}
                      onMouseLeave={() => {
                        setHoveredPath(null);
                        if (item.hasDropdown) setShowDropdown(null);
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-lg"
                        initial={false}
                        animate={{
                          opacity: isActive || isHovered ? 1 : 0,
                          scale: isActive || isHovered ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.2 }}
                      />

                      <motion.div
                        className="relative flex items-center space-x-3"
                        animate={{
                          scale: isHovered ? 1.05 : 1,
                        }}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className={`font-medium text-lg ${
                          isActive 
                            ? 'text-white' 
                            : 'text-cyan-50'
                        }`}>
                          {item.label}
                        </span>
                        {item.hasDropdown && (
                          <span className="ml-1 text-sm">▾</span>
                        )}
                      </motion.div>

                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Dropdowns */}
                      {item.hasDropdown && (
                        <AnimatePresence>
                          {showDropdown === item.path && (
                            <motion.div
                              className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-lg overflow-hidden"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              onMouseEnter={() => setShowDropdown(item.path)}
                              onMouseLeave={() => setShowDropdown(null)}
                            >
                              {/* Portfolio Dropdown */}
                              {item.path === '/portfolio' && item.dropdownItems.map((category, idx) => (
                                <div key={idx} className="p-4">
                                  <h3 className="text-[#20B2AA] font-semibold mb-2 text-lg">
                                    {category.category}
                                  </h3>
                                  <div className="space-y-2">
                                    {category.companies?.map((company, compIdx) => (
                                      <motion.a
                                        key={compIdx}
                                        href="#"
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 text-gray-600"
                                        whileHover={{ x: 4 }}
                                      >
                                        <span className="text-2xl">{company.icon}</span>
                                        <div>
                                          <div className="font-medium text-base">{company.name}</div>
                                          <div className="text-sm text-gray-500">{company.description}</div>
                                        </div>
                                      </motion.a>
                                    ))}
                                  </div>
                                  {idx < item.dropdownItems.length - 1 && (
                                    <div className="mt-4 border-b border-gray-100" />
                                  )}
                                </div>
                              ))}

                              {/* Team Dropdown */}
                              {item.path === '/team' && item.dropdownItems.map((category, idx) => (
                                <div key={idx} className="p-4">
                                  <h3 className="text-[#20B2AA] font-semibold mb-3 text-lg">
                                    {category.category}
                                  </h3>
                                  <div className="space-y-3">
                                    {category.members?.map((member, memIdx) => (
                                      <motion.div
                                        key={memIdx}
                                        className="group"
                                        whileHover={{ x: 4 }}
                                      >
                                        <Link 
                                          href={`/team/${member.name.toLowerCase().replace(' ', '-')}`}
                                          className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50"
                                        >
                                          <div className="relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                                            {member.image ? (
                                              <img 
                                                src={member.image} 
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                              />
                                            ) : (
                                              <span className="text-2xl">{member.icon}</span>
                                            )}
                                          </div>
                                          <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                              <div className="font-medium text-gray-900 text-base">
                                                {member.name}
                                              </div>
                                              <motion.a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="opacity-0 group-hover:opacity-100 text-[#0077b5]"
                                                whileHover={{ scale: 1.1 }}
                                              >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                              </motion.a>
                                            </div>
                                            <div className="text-sm font-medium text-[#20B2AA]">
                                              {member.role}
                                            </div>
                                            <div className="text-sm text-gray-500 line-clamp-2">
                                              {member.bio}
                                            </div>
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                  {idx < item.dropdownItems.length - 1 && (
                                    <div className="mt-4 border-b border-gray-100" />
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300
                        flex items-center space-x-2 text-base font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Connect</span>
              <span className="text-xl">✨</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">☰</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (can be expanded with animation) */}
      <div className="md:hidden">
        {/* Add mobile menu content here if needed */}
      </div>
    </motion.nav>
  );
}