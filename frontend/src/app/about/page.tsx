'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-[80vh] relative overflow-hidden bg-gradient-to-br from-[#E0FFFF] to-[#F0F8FF] p-8">
      {/* Animated background bubbles */}
      {[...Array(10)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00CED1] to-[#20B2AA]">
            About Us ✨
          </h1>

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700">
                Welcome to our vibrant corner of the internet! We're passionate about creating 
                meaningful connections and sharing inspiring stories.
              </p>

              <div className="flex items-center gap-4 my-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 p-6 bg-gradient-to-br from-[#00CED1]/10 to-[#20B2AA]/10 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-[#20B2AA] mb-2">Our Mission 🎯</h3>
                  <p className="text-gray-600">To inspire and connect through meaningful content</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 p-6 bg-gradient-to-br from-[#00CED1]/10 to-[#20B2AA]/10 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-[#20B2AA] mb-2">Our Vision 🌟</h3>
                  <p className="text-gray-600">Creating a community of engaged and inspired readers</p>
                </motion.div>
              </div>

              <h2 className="text-2xl font-semibold text-[#20B2AA] mb-4">What We Do ⚡</h2>
              <p className="text-gray-700 mb-6">
                We curate and create content that matters. Our team is dedicated to bringing you 
                the most engaging stories, insights, and perspectives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: "📝", title: "Write", desc: "Original content" },
                  { icon: "🤝", title: "Connect", desc: "Build community" },
                  { icon: "💡", title: "Inspire", desc: "Share ideas" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white/50 rounded-xl text-center"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-[#20B2AA]">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}