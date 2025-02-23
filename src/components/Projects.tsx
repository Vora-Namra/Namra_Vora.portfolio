"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "Hustlr",
    description: "A modern job portal platform connecting employers and job seekers. Features include job posting/searching, applicant tracking, resume builder, and real-time notifications. Built with a secure authentication system and responsive design for seamless user experience.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "SpringBoot", "Mongo","Tailwind","Redux","Mantine","JWT","TypeScript"],
    github: "https://github.com/yourusername/project1", 
    live: "https://project1.demo.com",
  },
  {
    title: "Uber",
    description: "A full-stack Uber clone with real-time tracking, user authentication, and ride booking functionality. Features include interactive maps, driver-rider matching, and secure payment processing.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Mongo", "TailwindCSS", "Express.js", "JWT", "GSAP","Socket"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.demo.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics and engagement",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "TypeScript", "Chart.js"],
    github: "https://github.com/yourusername/project3",
    live: "https://project3.demo.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 dark:bg-teal-900 text-teal-600 dark:text-teal-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

