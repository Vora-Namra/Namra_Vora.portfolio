import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

