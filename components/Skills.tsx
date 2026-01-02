"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "Svelte", level: 90 },
        { name: "TypeScript / JavaScript", level: 95 },
        { name: "D3.js / Leaflet", level: 85 },
      ],
    },
    {
      category: "Backend & API",
      skills: [
        { name: "Node.js / NestJS", level: 95 },
        { name: "Express.js / tRPC", level: 93 },
        { name: "GraphQL / REST", level: 92 },
        { name: "Python", level: 85 },
      ],
    },
    {
      category: "Data & Streaming",
      skills: [
        { name: "Kafka / MQTT", level: 93 },
        { name: "PostgreSQL / MongoDB", level: 92 },
        { name: "Redis / Cassandra", level: 88 },
        { name: "RabbitMQ", level: 87 },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS / Kubernetes", level: 92 },
        { name: "Docker / Helm", level: 90 },
        { name: "CI/CD / Pulumi", level: 90 },
        { name: "Grafana / Prometheus", level: 85 },
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
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16" />
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
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse opacity-50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-morphism p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
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
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-slate-300 font-mono text-sm hover:border-blue-400 transition-all duration-300 cursor-default"
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
