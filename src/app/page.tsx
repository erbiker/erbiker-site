'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { StravaLogoIcon } from '@/components/svg-icons'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

export default function Home() {
  const icons = [
    {
      icon: <GitHubLogoIcon className="w-8 h-8" />,
      link: 'https://github.com/erbiker',
      key: 'github',
    },
    {
      icon: <InstagramLogoIcon className="w-8 h-8" />,
      link: 'https://www.instagram.com/erbbiker/',
      key: 'instagram',
    },
    {
      icon: <StravaLogoIcon className="w-8 h-8" />,
      link: 'https://www.strava.com/athletes/erbiker',
      key: 'strava',
    },
    {
      icon: <LinkedInLogoIcon className="w-8 h-8" />,
      link: 'https://www.linkedin.com/in/eric-r-bryan/',
      key: 'linkedin',
    },
  ]

  const orbitRadius = 100 // radius of the orbit path
  const orbitSpeed = 2 * icons.length // seconds it takes to complete a full orbit

  const orbitPath = `M ${orbitRadius} 0 A ${orbitRadius} ${orbitRadius} 0 1 0 -${orbitRadius} 0 A ${orbitRadius} ${orbitRadius} 0 1 0 ${orbitRadius} 0`

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container mx-auto flex items-center justify-center ">
        <motion.div
          animate={{
            rotateX: [0, -180, 0],
            rotateY: [0, 180, 360],
            transition: {
              delay: orbitSpeed,
              type: 'tween',
              duration: 5,
              repeat: Infinity,
              repeatDelay: orbitSpeed / 2,
            },
          }}
        >
          <Image src="/eb.svg" alt="EB logo" width={124} height={124} />
        </motion.div>
      </div>
      <div className="absolute">
        {icons.map((icon, index) => (
          <motion.div
            className="absolute"
            key={icon.key}
            initial={{
              offsetDistance: `0%`,
              rotate: 90,
            }}
            animate={{
              offsetDistance: `100%`,
              rotate: [90, 450],
            }}
            transition={{
              duration: orbitSpeed,
              ease: 'linear',
              repeat: Infinity,
              delay: (orbitSpeed / icons.length) * index, // Staggered delay
              repeatType: 'loop',
            }}
            style={{
              offsetPath: `path('${orbitPath}')`,
            }}
          >
            <Link href={icon.link} className="backdrop-blur-md rounded-md">
              {icon.icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
