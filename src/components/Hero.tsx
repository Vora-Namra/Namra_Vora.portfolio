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
      className="min-h-screen w-full flex items-center py-8 sm:py-10  bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container px-4 sm:px-6 md:px-8 lg:mx-32 my-8 sm:my-12 lg:my-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl mt-10 font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Hey There,</h1>
            <h2 className="text-2xl sm:text-3xl lg:text-2xl inline-block font-bold bg-gradient-to-r from-teal-600 to-blue-600 text-transparent bg-clip-text mb-3 sm:mb-4">
              I&apos;m Namra Vora
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-justify px-4 sm:px-0">
              A passionate Full Stack Developer crafting innovative web solutions using React, Next.js, Spring Boot, and Express. I love building performant applications that solve real-world problems. Always excited to learn new technologies and create meaningful digital experiences that make a difference.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mb-6 sm:mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-teal-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base"
            >
              Download Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <img
              src="/Namra_new.jpg"
              alt="Developer"
              className="rounded-3xl shadow-xl w-[80%] sm:w-[70%] lg:w-[60%] max-w-sm mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
