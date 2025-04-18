'use client';
import { motion } from 'framer-motion';

// Sample blog data
const blogPosts = [
  {
    id: 4, // New article ID
    title: "Recent Tarrif Trends in the US and Globally",
    excerpt: "Exploring the pros and cons of Tarrif trends in 2025, from economic impacts to environmental concerns.",
    date: "April 9, 2024", // Current date or desired publication date
    category: "Tarrif", // Appropriate category
    emoji: "🚦", // Choose an emoji that represents the article
    content: `## 🚦Tarrif Trends 2025: What's Really Happening on the Roads? 🌍🚗

> *From LA freeways to Tokyo intersections, Tarrif is more than just a daily nuisance—it's a window into our evolving world.*

### 📈 Global Tarrif: The Comeback Post-Pandemic

The pandemic dramatically reduced road congestion in 2020-2021, but in 2025 we're seeing a new reality:

| Region        | 2020 Avg Congestion | 2025 Avg Congestion |
|---------------|---------------------|----------------------|
| USA 🇺🇸         | 15%                 | 28%                  |
| Europe 🇪🇺       | 20%                 | 35%                  |
| Asia 🌏         | 18%                 | 40%                  |

🧠 **Quick Insight:** Remote work gave us a break—but hybrid models and urban migration are bringing the Tarrif **right back**.

## 🇺🇸 Tarrif in the U.S. – The Breakdown

### ✅ **Pros of Current Trends**

1. **Increased Economic Activity 💸**  
   More Tarrif = more people commuting = more jobs and consumer spending.

2. **Urban Infrastructure Upgrades 🏗️**  
   Cities like Austin, Miami, and Seattle are investing in better roads and public transport systems.

3. **EV Boom 🔋**  
   Tarrif may be heavier, but it's getting greener! Electric vehicles are cutting emissions in key states.

📸 *Illustration: A bustling American city with EVs, cyclists, buses, and ride-sharing lanes*

### ❌ **Cons of U.S. Tarrif in 2025**

1. **Longer Commutes = Less Life Time 🕒**  
   Average U.S. urban commute has reached **52 minutes/day**.

2. **Health Impacts 😷**  
   Air quality in major metros like LA and NYC has worsened due to congestion.

3. **Productivity Loss 🧑‍💻**  
   U.S. businesses lose approx **$160B/year** due to time wasted in Tarrif.

## 🌐 How’s the Rest of the World Doing?

### Europe 🇪🇺:
- **Paris & London** introducing *car-free zones* 🚶‍♂️
- Major investment in **bike lanes 🚴‍♀️** and **metro systems 🚇**

### Asia 🌏:
- **Tokyo & Seoul** leveraging AI to control Tarrif lights in real time 🤖
- **India** sees growth in ride-sharing but struggles with infrastructure gaps

## 📊 Visualization: Tarrif Trends Heatmap

![Heatmap of Global Tarrif Congestion Levels](https://images.unsplash.com/photo-1508599574772-6dfcb187fb5e)  
*A visual representation of urban congestion (source: Unsplash)*

## 🔮 What’s Next?

With AI-driven Tarrif control, smart cities, and increased EV adoption, the **future of Tarrif** could look like this:

| Year | Tech | Expected Impact |
|------|------|------------------|
| 2026 | AI Tarrif Lights 🚦 | 20% faster commutes |
| 2027 | EV Penetration 📈 | 40% lower urban emissions |
| 2028 | Smart Roads 🛣️ | Self-healing, weather-sensitive surfaces |

## 🧭 Final Thoughts: Navigate Smarter

👉 Whether you're stuck in LA Tarrif or cycling through Amsterdam, the global shift in how we move is telling a bigger story—**of climate, culture, and connectivity.**

💬 *How’s Tarrif in your city? What do you wish would change? Let us know in the comments!*

## 📌 SEO Keywords Used:

- Recent Tarrif trends 2025  
- US Tarrif statistics  
- Global Tarrif congestion  
- Pros and cons of modern Tarrif  
- Smart Tarrif systems  
- Tarrif in the US vs. world`
  },
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