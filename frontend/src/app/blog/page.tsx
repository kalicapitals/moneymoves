'use client';
import { motion } from 'framer-motion';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of web development and start your journey...",
    date: "April 8, 2024",
    category: "Tech",
    emoji: "💻"
  },
  {
    id: 2,
    title: "The Art of Creative Writing",
    excerpt: "Discover techniques to improve your creative writing skills...",
    date: "April 7, 2024",
    category: "Writing",
    emoji: "✍️"
  },
  {
    id: 3,
    title: "Digital Photography Tips",
    excerpt: "Master the basics of digital photography with these tips...",
    date: "April 6, 2024",
    category: "Photography",
    emoji: "📸"
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="min-h-[80vh] relative overflow-hidden bg-gradient-to-br from-[#E0FFFF] to-[#F0F8FF] p-8">
      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          🫧
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00CED1] to-[#20B2AA]">
            Blog Posts ✨
          </h1>

          {/* Search and Filter Section */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full max-w-md px-4 py-2 rounded-full border border-[#00CED1]/30 focus:outline-none focus:ring-2 focus:ring-[#00CED1]/50"
            />
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl"
              >
                <div className="text-3xl mb-4">{post.emoji}</div>
                <span className="text-sm text-[#00CED1] font-medium">{post.category}</span>
                <h2 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#20B2AA] font-medium hover:text-[#00CED1]"
                  >
                    Read More →
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}