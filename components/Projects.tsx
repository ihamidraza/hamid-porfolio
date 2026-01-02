"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock, Building2 } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Real-Time Mining IoT Platform",
      company: "Kimax Digital / Operanex",
      description:
        "Architected high-throughput data pipeline processing 1M+ telemetry events/hour from remote mining sites. Implemented geofencing cutting unauthorized access by 90%. Built real-time visualization dashboards for operational insights.",
      impact: [
        "10x faster data transfer",
        "90% security improvement",
        "1M+ events/hour",
      ],
      tech: [
        "Svelte",
        "D3.js",
        "tRPC",
        "Kafka",
        "MQTT",
        "PostgreSQL",
        "Redis",
        "Kubernetes",
      ],
      isPrivate: true,
    },
    {
      title: "Fleet Tracking & Analytics Platform",
      company: "Turing Insights / glasc.io",
      description:
        "Developed real-time tracking and monitoring platform with AI-generated insights for optimized payload delivery. Implemented analytics and alerts detecting 95%+ payload theft incidents with weight and location monitoring.",
      impact: [
        "10,000+ active users",
        "95% theft detection",
        "35% faster decisions",
      ],
      tech: [
        "React",
        "Leaflet",
        "Recharts",
        "NestJS",
        "Kafka",
        "Redis",
        "PostgreSQL",
      ],
      isPrivate: true,
    },
    {
      title: "High-Security Access Control System",
      company: "Menar / glasc.io",
      description:
        "Designed centralized authorization system handling 5,000+ daily access requests for mines and logistics. Implemented role-based access control with comprehensive audit logging for compliance requirements.",
      impact: ["5,000+ daily requests", "99.9% uptime", "Full compliance"],
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
      isPrivate: true,
    },
    {
      title: "Multi-tenant Auth Platform",
      company: "Leza / glasc.io",
      description:
        "Created robust authentication/authorization SaaS platform supporting multi-tenant architecture. Implemented OAuth 2.0, SSO, and MFA for enterprise-grade security across multiple client platforms.",
      impact: [
        "Multi-tenant SaaS",
        "OAuth 2.0 + SSO + MFA",
        "Enterprise security",
      ],
      tech: ["React", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
      isPrivate: true,
    },
    {
      title: "Field Force Analytics Platform",
      company: "aiSight.ai (SurveyAuto)",
      description:
        "Built comprehensive field force management system for FMCG market research with real-time GPS tracking. Developed AI-powered image recognition for shelf auditing, improving audit accuracy by 45%.",
      impact: [
        "500+ enterprise clients",
        "45% accuracy improvement",
        "Real-time GPS",
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Python"],
      isPrivate: true,
    },
    {
      title: "Real Estate Marketplace",
      company: "Graana.com",
      description:
        "Developed core features for Pakistan's largest real estate platform serving 100K+ monthly users. Built advanced property search with geolocation filtering and personalized recommendations.",
      impact: [
        "100K+ monthly users",
        "50,000+ listings",
        "40% faster load time",
      ],
      tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
      isPrivate: false,
      liveUrl: "https://graana.com",
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
            Enterprise-scale systems I&apos;ve architected and led. Most
            projects are under NDA but I&apos;m happy to discuss architecture
            and technical decisions.
          </p>
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
              {/* Project Header */}
              <div className="relative h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <Building2 size={14} />
                    <span>{project.company}</span>
                    {project.isPrivate && (
                      <span className="flex items-center gap-1 ml-auto text-yellow-400/80">
                        <Lock size={12} />
                        <span className="text-xs">NDA</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.impact.map((metric) => (
                    <span
                      key={metric}
                      className="px-2 py-1 text-xs bg-green-500/10 border border-green-500/30 rounded text-green-400"
                    >
                      ✓ {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-blue-500/20 border border-blue-500/30 rounded text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2 border-t border-slate-700/50">
                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      <span>Visit Site</span>
                    </motion.a>
                  ) : (
                    <span className="flex items-center gap-2 text-slate-500 text-sm">
                      <Lock size={16} />
                      <span>Private/Enterprise</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-morphism p-8 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Open Source & Personal Projects
              </h3>
              <p className="text-slate-400 text-sm">
                Check out my GitHub for open-source contributions, experiments,
                and side projects.
              </p>
            </div>
            <a
              href="https://github.com/ihamidraza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-white font-medium"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
