"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Kimax Digital - Real-Time Mining IoT Platform",
      description:
        "Architected high-throughput data pipeline for mining telemetry processing equipment data from remote sites. Implemented geofencing cutting unauthorized access by 90%. Built real-time visualization dashboards for operational insights.",
      tech: [
        "Svelte",
        "Shadcn",
        "D3.js",
        "tRPC",
        "Kafka",
        "MQTT",
        "PostgreSQL",
        "Redis",
        "Kubernetes",
      ],
      github: "https://github.com/ihamidraza",
      live: "#",
      image: "/projects/kimax.jpg",
    },
    {
      title: "Turing Insights - Fleet Tracking & Analytics",
      description:
        "Developed real-time tracking and monitoring platform with AI-generated insights for optimized payload delivery. Implemented analytics, events, and alerts detecting 95%+ payload theft incidents with weight and location monitoring.",
      tech: [
        "React",
        "Ant Design",
        "Leaflet",
        "Recharts",
        "NestJS",
        "Python",
        "Kafka",
        "Redis",
        "RabbitMQ",
        "PostgreSQL",
      ],
      github: "https://github.com/ihamidraza",
      live: "#",
      image: "/projects/turing.jpg",
    },
    {
      title: "Menar - High-Security Access Control System",
      description:
        "Designed centralized authorization system handling 5,000+ daily access requests for mines and logistics. Implemented role-based access control with comprehensive audit logging for compliance requirements.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
      github: "https://github.com/ihamidraza",
      live: "#",
      image: "/projects/menar.jpg",
    },
    {
      title: "Leza - SaaS Authentication Platform",
      description:
        "Created robust authentication/authorization SaaS platform supporting multi-tenant architecture. Implemented OAuth 2.0, SSO, and MFA for enterprise-grade security across multiple platforms.",
      tech: ["React", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
      github: "https://github.com/ihamidraza",
      live: "#",
      image: "/projects/leza.jpg",
    },
    {
      title: "SurveyAuto - Field Force Analytics Platform",
      description:
        "Built comprehensive field force management system for FMCG market research with real-time GPS tracking. Developed AI-powered image recognition for shelf auditing, improving audit accuracy by 45%.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/ihamidraza",
      live: "#",
      image: "/projects/surveyauto.jpg",
    },
    {
      title: "Graana.com - Real Estate Marketplace",
      description:
        "Developed core features for Pakistan's largest real estate platform serving 100K+ monthly users. Built advanced property search with geolocation filtering and personalized recommendations.",
      tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
      github: "https://github.com/ihamidraza",
      live: "#",
      image: "/projects/graana.jpg",
    },
  ];

  return (
    <section
      id="projects"
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-morphism rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ihamidraza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-morphism rounded-lg hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="text-slate-300 group-hover:text-white">
              View More on GitHub
            </span>
            <ExternalLink
              size={20}
              className="text-blue-400 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
