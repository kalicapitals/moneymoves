'use client';

import { motion } from 'framer-motion';

export default function ToonButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-500 text-yellow-100 text-xl font-bold px-8 py-4 rounded-full shadow-cartoon transition-all duration-300 inline-block"
    >
      {children}
    </motion.a>
  );
}
