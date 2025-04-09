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
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
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

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="relative">
          {/* Rainbow glow effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 rounded-lg opacity-20 blur-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Welcome to MyBlog
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="text-xl text-gray-600 mb-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-10 blur-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          Discover interesting articles and stories
        </motion.p>

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
    </div>
  );
}