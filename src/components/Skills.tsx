"use client"

import { motion } from "framer-motion"
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaWordpress,
  FaDocker,
  FaNpm,
  FaNode,
} from "react-icons/fa"
import {
  SiHibernate,
  SiSpring,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiKubernetes,
  SiNextdotjs,
  SiFlutter,
} from "react-icons/si"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Spring", icon: SiSpring },
      { name: "Express.js", icon: SiExpress },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
      { name: "Hibernate", icon: SiHibernate },
      { name: "Prisma", icon: SiPrisma },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "NPM", icon: FaNpm },
      { name: "Node.js", icon: FaNode },
      { name: "WordPress", icon: FaWordpress },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Technical Skills
        </motion.h2>
        <div className="grid gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold flex mb-4 justify-center  text-gray-700 dark:text-gray-300">{category.title}</h3>
              <hr className="mb-12 w-32 mx-auto border-t-2 border-gray-300" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <skill.icon className="text-4xl text-teal-600 dark:text-teal-400 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

