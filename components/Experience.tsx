"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Operanex",
      period: "Sep 2024 - Present",
      description: [
        "Architected next-generation IoT platform achieving 10x faster data transfer and processing 1M+ data points/hour from field devices via Kafka and MQTT infrastructure",
        "Integrated LLM services for natural language queries over fleet data, boosting operator decision-making speed by 35%",
        "Mentored 4 engineers and standardized CI/CD pipelines, increasing deployment velocity by 25%",
        "Drove architectural governance fostering collaboration for scalable analytics in logistics and fleet management",
        "Technologies: Svelte, TypeScript, NestJS, Kafka, MQTT, PostgreSQL, Redis, Kubernetes, AWS",
      ],
    },
    {
      title: "Tech Lead",
      company: "glasc.io",
      period: "Jan 2022 - Sep 2024",
      description: [
        "Directed technical roadmap for 2 SaaS products maintaining 99.9% uptime for mission-critical services",
        "Migrated monolith to Kubernetes microservices, reducing deployment time by 50% and improving resilience",
        "Partnered with Product Owner to accelerate feature delivery by 20% for fleet tracking and weight analytics",
        "Led cross-functional teams implementing best practices via code reviews and architectural design sessions",
        "Technologies: React, Next.js, Node.js, NestJS, PostgreSQL, MongoDB, Kubernetes, Docker",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "glasc.io",
      period: "Oct 2019 - Dec 2021",
      description: [
        "Built full-stack features supporting 10,000+ active users with robust real-time fleet management",
        "Optimized database queries reducing API response time by 30% during peak loads",
        "Developed weight/position event detection algorithms and anti-theft mechanisms for fleet security",
        "Optimized frontend for large telemetry data handling; mentored juniors decreasing defects by 15%",
        "Technologies: React, Node.js, Express.js, Kafka, RabbitMQ, PostgreSQL, Redis",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "aiSight.ai (formerly SurveyAuto)",
      period: "Apr 2019 - Oct 2019",
      description: [
        "Contributed to SaaS analytics platform serving FMCG companies with AI-powered market insights",
        "Implemented scalable backend ensuring secure data exchange for global retail clients",
        "Built real-time dashboards for field force analytics serving 500+ enterprise clients",
        "Technologies: React, Node.js, Express.js, MongoDB",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Graana.com",
      period: "Apr 2018 - May 2019",
      description: [
        "Designed full-stack components for Pakistan's leading real estate platform ensuring seamless UX",
        "Built property listing management system handling 50,000+ active listings with advanced search",
        "Integrated third-party APIs; optimized performance improving page load by 40%",
        "Technologies: React, Node.js, Express.js, PostgreSQL",
      ],
    },
    {
      title: "Backend Developer",
      company: "Cloud Rangers",
      period: "Sep 2017 - Mar 2018",
      description: [
        "Designed RESTful APIs for cloud management, ensuring secure service communication",
        "Developed automation scripts reducing manual operations workload by 40%",
        "Technologies: Node.js, Express.js, PostgreSQL",
      ],
    },    {
      title: 'Backend Developer',
      company: 'uExel',
      period: 'Jun 2015 - Aug 2017',
      description: [
        'Managed full development lifecycle supporting 5,000+ daily API requests',
        'Designed RESTful APIs facilitating seamless frontend-backend communication',
        'Technologies: Node.js, Express.js, MongoDB',
      ],
    },  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div className="glass-morphism p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group ml-16 md:ml-0">
                {/* Timeline Dot */}
                <div
                  className={`absolute top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ${
                    index % 2 === 0
                      ? "left-6 md:right-[-8px] md:left-auto"
                      : "left-6 md:left-[-8px]"
                  }`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-75" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                </div>

                <div className="flex items-center gap-2 mb-4 text-purple-400">
                  <span className="font-semibold">{exp.company}</span>
                  <span className="text-slate-500">•</span>
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>

                <ul className="space-y-2 text-slate-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
