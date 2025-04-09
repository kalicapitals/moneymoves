'use client'
import confetti from 'canvas-confetti'

export default function ConfettiButton() {
  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      emojis: ['💥', '✨', '🧨', '🎉', '🪄']
    })
  }

  return (
    <button
      onMouseEnter={fireConfetti}
      className="mt-10 bg-purple-600 text-white px-6 py-3 text-lg rounded-full shadow-lg hover:scale-110 transition-all"
    >
      ✨ Hover Me for Magic
    </button>
  )
}
