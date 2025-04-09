// src/app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar' // ✅ add this line

export const metadata = {
  title: 'Kali Capitals',
  description: 'Making Money Moves 🧢💰',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Insert here */}
        {children}
      </body>
    </html>
  )
}
