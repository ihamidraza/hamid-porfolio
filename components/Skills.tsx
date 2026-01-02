"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Zap, Shield } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Zap,
      years: "8+",
      skills: [
        "React / Next.js",
        "Svelte / SvelteKit",
        "TypeScript",
        "D3.js / Leaflet",
        "Tailwind CSS",
        "Ant Design / Shadcn",
      ],
    },
    {
      category: "Backend & APIs",
      icon: Shield,
      years: "10+",
      skills: [
        "Node.js / NestJS",
        "Express.js / tRPC",
        "GraphQL / REST",
        "Python",
        "Microservices",
        "Event-Driven Architecture",
      ],
    },
    {
      category: "Data & Streaming",
      icon: Clock,
      years: "6+",
      skills: [
        "Apache Kafka",
        "MQTT / RabbitMQ",
        "PostgreSQL / MongoDB",
        "Redis / Cassandra",
        "Real-time Analytics",
        "Time-Series Data",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Award,
      years: "5+",
      skills: [
        "AWS (EC2, S3, Lambda)",
        "Kubernetes / Helm",
        "Docker / Docker Compose",
        "CI/CD (GitHub Actions)",
        "Pulumi / Terraform",
        "Grafana / Prometheus",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
            Specialized in building high-performance distributed systems with a
            focus on IoT, real-time data processing, and scalable architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-morphism p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-mono">
                  {category.years} years
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass-morphism p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Full Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "Svelte",
              "TypeScript",
              "Node.js",
              "NestJS",
              "Kafka",
              "MQTT",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "GraphQL",
              "tRPC",
              "AWS",
              "Kubernetes",
              "Docker",
              "Python",
              "LLM Integration",
              "IoT",
              "Prometheus",
              "Grafana",
              "GitHub Actions",
              "Pulumi",
              "Elasticsearch",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg text-slate-300 font-mono text-sm hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
