import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ProjectsSection from '../components/home/ProjectsSection'
import ContactSection from '../components/home/ContactSection'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </motion.div>
  )
}

export default Home