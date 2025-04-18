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
      width="48"
      height="48"
      viewBox="0 0 24 24"
      className="fill-violet-500/70"
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-100">
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 opacity-10"
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

      {/* Content Section */}
      <motion.div 
        className="relative z-10 text-center p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Investing in innovative startups that drive change and create value.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold">Our People</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Dedicated to fostering relationships and supporting entrepreneurs.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold">Our Culture</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A culture of honesty, integrity, and collaboration.
        </p>

        {/* Testimonials Section */}
        <h2 className="text-2xl md:text-3xl font-semibold">Testimonials</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          "Kali Capitals has transformed our business!" - Happy Client
        </p>

        <motion.a
          href="/blog"
          className="px-6 py-2 bg-gradient-to-r from-violet-600 via-pink-500 to-indigo-600 text-white font-medium rounded-full 
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
        <p>&copy; 2025 Kali Capitals. Made with love in Gobichettipalaiyam,TN,India for the world, All rights reserved.</p>
      </footer>
    </div>
  );
}