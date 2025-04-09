'use client';

import { motion } from 'framer-motion';

export default function FloatingEmoji({
  type,
  top,
  left,
}: {
  type: string;
  top?: string;
  left?: string;
}) {
  return (
    <motion.div
      className="absolute text-2xl sm:text-4xl select-none"
      style={{ top, left }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2,
      }}
    >
      {type}
    </motion.div>
  );
}
