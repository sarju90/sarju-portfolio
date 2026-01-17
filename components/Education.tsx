"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaGraduationCap,
  FaAward,
  FaBookOpen,
  FaMapMarkerAlt,
  FaCalendar,
  FaStar,
  FaCode,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";
import { education } from "@/data/portfolio-data";

type TabType = "academic" | "professional" | "lifelong";

export default function Education() {
  const [activeTab, setActiveTab] = useState<TabType>("academic");

  const tabs = [
    {
      id: "academic" as TabType,
      label: "Academic Journey",
      description: "Formal education and academic achievements",
      icon: FaGraduationCap,
    },
    {
      id: "professional" as TabType,
      label: "Professional Growth",
      description: "Certifications, workshops, and industry training",
      icon: FaAward,
    },
    {
      id: "lifelong" as TabType,
      label: "Lifelong Learning",
      description: "Continuous learning and skill development",
      icon: FaBookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-4 relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-purple-500/30 text-purple-400 text-sm mb-6"
          >
            <FaAward className="text-purple-400" />
            Knowledge Odyssey
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">
            <span className="gradient-text">My Educational Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A continuous expedition through knowledge landscapes, blending formal education with self-directed learning and professional development.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 mb-12 w-full max-w-4xl mx-auto"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-4 sm:px-6 py-4 rounded-xl transition-all duration-300 w-full md:min-w-[280px] md:flex-1 ${activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30"
                  : "glass-effect hover:bg-white/10"
                }`}
            >
              <tab.icon className={`text-xl flex-shrink-0 ${activeTab === tab.id ? "text-white" : "text-purple-400"}`} />
              <div className="text-left flex-1 min-w-0">
                <div className={`font-semibold text-sm sm:text-base break-words ${activeTab === tab.id ? "text-white" : "text-gray-200"}`}>
                  {tab.label}
                </div>
                <div className={`text-xs break-words ${activeTab === tab.id ? "text-white/80" : "text-gray-400"}`}>
                  {tab.description}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "academic" && (
            <AcademicContent key="academic" data={education.academic} />
          )}
          {activeTab === "professional" && (
            <ProfessionalContent key="professional" data={education.professional} />
          )}
          {activeTab === "lifelong" && (
            <LifelongContent key="lifelong" data={education.lifelong} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Academic Journey Content
function AcademicContent({ data }: { data: typeof education.academic }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/5 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Side - Main Info */}
            <div className="min-w-0">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                  <FaGraduationCap className="text-xl sm:text-2xl text-purple-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words">{item.degree}</h3>
                  <p className="text-purple-400 font-medium break-words">{item.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-400 flex-shrink-0" />
                  <span className="break-words">{item.location}</span>
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-purple-400 flex-shrink-0" />
                  <span>{item.duration}</span>
                </span>
              </div>

              {item.cgpi && (
                <div className="inline-block px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 font-semibold mb-4">
                  CGPI: {item.cgpi}
                </div>
              )}

              <p className="text-gray-300 leading-relaxed break-words">{item.description}</p>

              {/* Key Subjects */}
              {item.subjects && (
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm rounded-lg glass-effect border border-gray-600/30 text-gray-300"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Achievements & Projects */}
            <div className="space-y-6">
              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-purple-400 font-semibold mb-3">
                    <FaAward />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notable Projects */}
              {item.projects && item.projects.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-cyan-400 font-semibold mb-3">
                    <FaCode />
                    Notable Projects
                  </h4>
                  <ul className="space-y-2">
                    {item.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1">⚡</span>
                        {typeof project === 'string' ? (
                          project
                        ) : (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                          >
                            {project.name}
                            {project.url !== '#' && <FaExternalLinkAlt className="text-xs text-cyan-400" />}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Professional Growth Content
function ProfessionalContent({ data }: { data: typeof education.professional }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-effect rounded-2xl p-4 sm:p-6 hover:bg-white/5 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3 min-w-0 flex-1">
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/30">
                <FaAward className="text-xl text-amber-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors break-words">
                  {item.title}
                </h3>
                <p className="text-amber-400 text-sm font-medium break-words">{item.provider}</p>
                <p className="text-gray-500 text-sm">{item.year}</p>
              </div>
            </div>
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors flex-shrink-0"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed break-words">{item.description}</p>

          {/* Skills Gained */}
          {item.skills && (
            <div>
              <h4 className="text-amber-400 text-xs font-semibold mb-2">Skills Gained</h4>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-full glass-effect border border-amber-500/20 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Lifelong Learning Content
function LifelongContent({ data }: { data: typeof education.lifelong }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-effect rounded-2xl p-4 sm:p-6 hover:bg-white/5 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3 min-w-0 flex-1">
              <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border ${item.status === "completed"
                ? "bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-emerald-500/30"
                : "bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30"
                }`}>
                <FaBookOpen className={`text-xl ${item.status === "completed" ? "text-emerald-400" : "text-amber-400"
                  }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors break-words">
                    {item.title}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full font-medium w-fit flex-shrink-0 ${item.status === "completed"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                    : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                    }`}>
                    {item.status === "completed" ? (
                      <>
                        <FaCheckCircle className="text-xs" />
                        <span>completed</span>
                      </>
                    ) : (
                      <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                        </span>
                        <span>in progress</span>
                      </>
                    )}
                  </span>
                </div>
                <p className="text-cyan-400 text-sm font-medium break-words">{item.source}</p>
                <p className="text-gray-500 text-sm">{item.duration}</p>
              </div>
            </div>
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors flex-shrink-0"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed break-words">{item.description}</p>

          {/* Skills & Topics */}
          {item.topics && (
            <div>
              <h4 className="text-cyan-400 text-xs font-semibold mb-2">Skills & Topics</h4>
              <div className="flex flex-wrap gap-2">
                {item.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-full glass-effect border border-cyan-500/20 text-gray-300 break-words"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
