"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/yourusername", label: "LeetCode" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com/yourusername", label: "Instagram" },
  ]

  return (
    <section
      id="home"
      className="min-h-screen w-screen flex items-center py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container  mx-32 my-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">Hey There,</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Crafting robust and scalable solutions with modern technologies
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-block  bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Namra_new.jpg-oDhdnAVPjbKR6xgFF4ost2bwcC1kql.jpeg"
              alt="Developer"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

