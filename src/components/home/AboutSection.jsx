import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-display font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-6"
          >
            A passionate professional dedicated to building and nurturing communities,
            developing impactful marketing strategies, and creating memorable brand experiences.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection