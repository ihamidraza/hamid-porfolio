"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-center text-slate-300 text-lg mb-16 max-w-2xl mx-auto">
            I&apos;m always interested in discussing technical leadership
            opportunities, consulting projects, or collaboration on innovative
            solutions. Let&apos;s connect and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I&apos;m open to discussing technical leadership roles,
                consulting opportunities, speaking engagements, or collaboration
                on innovative projects. Feel free to reach out and I&apos;ll get
                back to you promptly.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:hamiofficial@gmail.com"
                className="flex items-center gap-4 glass-morphism p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">
                    hamiofficial@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 glass-morphism p-4 rounded-lg"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">Islamabad, Pakistan</p>
                </div>
              </motion.div>
              
              <motion.a
                href="https://calendly.com/ihamidraza/meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                <span className="text-white font-semibold">Schedule a Meeting</span>
              </motion.a>
            </div>

            <div className="pt-6">
              <p className="text-slate-400 mb-4">Follow me on:</p>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", url: "https://github.com/ihamidraza" },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/ihamidraza",
                  },
                  { name: "Twitter", url: "https://twitter.com/ihamidraza" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 glass-morphism rounded-lg hover:bg-white/10 transition-all duration-300 text-slate-300 hover:text-white"
                    whileHover={{ y: -5 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-morphism p-8 rounded-xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-400"
        >
          <p className="mb-2">Designed & Built by Hamid Raza</p>
          <p className="text-sm">© 2026 All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
