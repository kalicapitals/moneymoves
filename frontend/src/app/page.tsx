'use client';
import { motion } from 'framer-motion';

// Bird SVG path data
const birdPath = "M15.5 10.5c1 0 2-.5 2-2s-1-2-2-2-2 .5-2 2 1 2 2 2zm-5-2c0 1.5-1.5 2-2 2s-2-.5-2-2 1.5-2 2-2 2 .5 2 2zm-5 0c0 1.5-1.5 2-2 2s-2-.5-2-2 1.5-2 2-2 2 .5 2 2z";

const Bird = ({ delay = 0, reverse = false, y = 0 }) => (
  <motion.div
    className="absolute"
    initial={{ 
      x: reverse ? '100vw' : '-100vw',
      y: y
    }}
    animate={{ 
      x: reverse ? '-100vw' : '100vw',
      y: [y - 20, y + 20, y - 10, y + 10, y - 20]
    }}
    transition={{ 
      x: {
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      },
      y: {
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }
    }}
  >
    <motion.svg
      width="48" // Doubled from 24
      height="48" // Doubled from 24
      viewBox="0 0 24 24"
      className="fill-violet-500/70" // Made more visible
      animate={{
        scale: [1, 1.1, 0.9, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path d={birdPath} />
    </motion.svg>
  </motion.div>
);

const FloatingEmoji = ({ emoji, x, y, delay = 0 }) => (
  <motion.div
    className="absolute text-5xl" // Increased from text-2xl
    initial={{ x, y }}
    animate={{
      y: [y - 30, y + 30],
      rotate: [-10, 10],
      scale: [1, 1.1, 1]
    }}
    transition={{
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        delay
      },
      rotate: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        delay
      },
      scale: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay
      }
    }}
  >
    {emoji}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-100">
      {/* Header Section */}
      <header className="w-full bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Kali Capitals</h1>
        <p className="mt-2">Building a better future through investment and culture.</p>
      </header>

      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Flying Birds */}
      <Bird y={100} />
      <Bird delay={5} y={150} reverse />
      <Bird delay={2} y={200} />
      <Bird delay={7} y={250} reverse />
      <Bird delay={3} y={50} />
      <Bird delay={8} y={300} reverse />

      {/* Floating Emojis */}
      <FloatingEmoji emoji="🌟" x={-250} y={100} delay={0} />
      <FloatingEmoji emoji="✨" x={250} y={150} delay={1} />
      <FloatingEmoji emoji="🌈" x={-200} y={200} delay={2} />
      <FloatingEmoji emoji="💫" x={200} y={250} delay={3} />
      <FloatingEmoji emoji="🦋" x={-150} y={50} delay={4} />
      <FloatingEmoji emoji="🌸" x={150} y={300} delay={5} />

      {/* Content Section */}
      <motion.div 
        className="relative z-10 text-center p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="text-xl text-gray-600 mb-8">
          We invest in innovative startups that drive change and create value.
        </p>

        <h2 className="text-3xl font-semibold">Our People</h2>
        <p className="text-xl text-gray-600 mb-8">
          Our team is dedicated to fostering relationships and supporting entrepreneurs.
        </p>

        <h2 className="text-3xl font-semibold">Our Culture</h2>
        <p className="text-xl text-gray-600 mb-8">
          We believe in a culture of honesty, integrity, and collaboration.
        </p>

        <motion.a
          href="/blog"
          className="px-8 py-3 bg-gradient-to-r from-violet-600 via-pink-500 to-indigo-600 text-white font-medium rounded-full 
                    hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 ease-in-out
                    hover:scale-105 inline-flex items-center gap-2 relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Reading
          <motion.span
            animate={{ 
              x: [0, 5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity 
            }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 Kali Capitals. Made with love from Gobichettipalaiyam,TN, India for the world. All rights reserved.</p>
      </footer>
    </div>
  );
}