"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Laptop, Rocket, GraduationCap, Target } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code2,
      title: "IoT & Real-Time Systems",
      description:
        "Architecting high-throughput IoT platforms processing 1M+ data points/hour with Kafka, MQTT, and event-driven architectures.",
    },
    {
      icon: Laptop,
      title: "AI-Powered Solutions",
      description:
        "Integrating LLMs and AI services for intelligent decision-making, natural language queries, and advanced analytics.",
    },
    {
      icon: Rocket,
      title: "Technical Leadership",
      description:
        "Leading engineering teams, driving 99.9% uptime for mission-critical services, and accelerating deployment velocity by 25%.",
    },
  ];

  const whatIBring = [
    "Scalable architecture design for high-throughput systems",
    "Team mentorship and engineering culture development",
    "Cross-functional collaboration with Product & Business",
    "Performance optimization and cost reduction strategies",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                I&apos;m a{" "}
                <span className="text-blue-400 font-semibold">
                  Lead Software Engineer
                </span>{" "}
                with 10+ years of experience architecting scalable IoT,
                real-time data processing, and AI-powered solutions. My career
                has been defined by delivering resilient full-stack systems that
                boost operational efficiency through microservices architecture
                and modern cloud infrastructure.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in{" "}
                <span className="text-purple-400 font-semibold">
                  IoT platforms
                </span>
                ,
                <span className="text-purple-400 font-semibold">
                  {" "}
                  real-time analytics
                </span>
                , and
                <span className="text-purple-400 font-semibold">
                  {" "}
                  distributed systems
                </span>
                . My expertise spans from frontend development with React and
                Svelte to backend systems using Node.js, NestJS, and
                event-driven architectures with Kafka and MQTT.
              </p>
            </div>

            {/* What I Bring */}
            <div className="glass-morphism p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  What I Bring to Your Team
                </h3>
              </div>
              <ul className="space-y-2">
                {whatIBring.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-2 text-slate-300"
                  >
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-morphism p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Education</h3>
              </div>
              <div>
                <h4 className="text-white font-medium">
                  Bachelor of Software Engineering
                </h4>
                <p className="text-slate-400 text-sm">
                  University of Engineering and Technology (UET), Taxila • 2011
                  - 2015
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-morphism p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Looking For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="glass-morphism p-6 rounded-xl border-2 border-blue-500/30"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                Currently Open To
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Lead/Staff Engineer Roles",
                  "Technical Architecture",
                  "Remote Opportunities",
                  "Consulting Projects",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
