"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Linkedin } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "Operanex",
      image: null,
      quote:
        "Hamid's ability to architect complex IoT systems while keeping the team aligned is exceptional. He transformed our data pipeline to handle 10x more throughput while mentoring junior engineers along the way.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ahmed Khan",
      role: "CTO",
      company: "glasc.io",
      image: null,
      quote:
        "Working with Hamid was a game-changer for our fleet management platform. His technical leadership drove our migration to microservices, cutting deployment time by 50% and dramatically improving system reliability.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Maria Rodriguez",
      role: "Product Manager",
      company: "aiSight.ai",
      image: null,
      quote:
        "Hamid bridges the gap between technical complexity and business value like no one else. His real-time dashboards and analytics solutions directly contributed to winning major enterprise clients.",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">What People Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
            Feedback from colleagues, managers, and clients I&apos;ve had the
            privilege to work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-morphism p-8 rounded-xl hover:bg-white/10 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-slate-300 leading-relaxed mt-4 mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Link */}
                <motion.a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label={`${testimonial.name}'s LinkedIn`}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA for more recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/ihamidraza/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Linkedin size={20} />
            <span>View more recommendations on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
