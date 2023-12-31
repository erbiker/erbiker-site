'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container mx-auto flex items-center justify-center">
        <div>
          <motion.div
            animate={{
              rotateX: [0, -180, 0],
              rotateY: [0, 180, 360],
              transition: { type: 'tween', duration: 5, repeat: Infinity },
            }}
          >
            <Image src="/eb.svg" alt="EB logo" width={124} height={124} />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
