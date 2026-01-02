"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Download,
  MapPin,
} from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-blue-400 font-mono text-sm sm:text-base">
            Hi, my name is
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-gradient-subtle">Hamid Raza</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-400 mb-6"
        >
          Building systems that process{" "}
          <span className="text-blue-400">1M+ events/hour</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-4"
        >
          <span className="text-blue-400 font-semibold">
            Lead Software Engineer
          </span>{" "}
          specializing in IoT platforms, real-time analytics, and distributed
          systems. I architect high-throughput solutions and lead engineering
          teams to deliver mission-critical products with{" "}
          <span className="text-purple-400">99.9% uptime</span>.
        </motion.p>

        {/* Impact Metrics */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "1M+", label: "Events/Hour" },
            { value: "99.9%", label: "Uptime Achieved" },
            { value: "15+", label: "Engineers Mentored" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-6"
        >
          <MapPin size={16} />
          <span>Islamabad, Pakistan • Open to Remote</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            href="/resume.pdf"
            download="Hamid_Raza_Resume.pdf"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 glass-morphism rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 glass-morphism rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            {
              Icon: Github,
              href: "https://github.com/ihamidraza",
              label: "GitHub",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/ihamidraza",
              label: "LinkedIn",
            },
            {
              Icon: Mail,
              href: "mailto:hamiofficial@gmail.com",
              label: "Email",
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2, y: -4 }}
              aria-label={label}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" aria-label="Scroll to About">
            <ArrowDown size={32} className="text-slate-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
