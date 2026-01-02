"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
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
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#home"
              className="text-2xl font-bold text-gradient mb-4 block"
            >
              HAMID RAZA
            </a>
            <p className="text-slate-400 mb-4 max-w-md">
              Lead Software Engineer specializing in IoT platforms, real-time
              analytics, and distributed systems. Building scalable solutions
              that make an impact.
            </p>
            <a
              href="/resume.pdf"
              download="Hamid_Raza_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Download Resume
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-morphism rounded-lg text-slate-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <a
              href="https://calendly.com/ihamidraza/meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              Schedule a Meeting →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {currentYear} Hamid Raza
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 glass-morphism rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
