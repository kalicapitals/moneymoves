// src/app/team/page.tsx
'use client';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Lexi ✨',
    role: 'Vibe Strategist',
    emoji: '🦄',
    avatar: '/avatars/lexi.png', // place these in /public/avatars/
  },
  {
    name: 'Jordan 💻',
    role: 'Code Wizard',
    emoji: '🧙‍♂️',
    avatar: '/avatars/jordan.png',
  },
  {
    name: 'Maya 📣',
    role: 'Hype Manager',
    emoji: '📢',
    avatar: '/avatars/maya.png',
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-gradient-to-bl from-blue-100 via-pink-100 to-purple-200 py-20 px-6 flex flex-col items-center text-center">
      <motion.h1
        className="text-5xl font-extrabold mb-8 text-black"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet The Dream Team 💫
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-pink-200 object-cover"
            />
            <h2 className="text-2xl font-semibold text-black">{member.name}</h2>
            <p className="text-pink-700">{member.role} {member.emoji}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}