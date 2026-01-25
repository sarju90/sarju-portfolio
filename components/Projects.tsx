"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/portfolio-data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const categories = ["All Projects", ...Array.from(new Set(projects.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 md:px-4 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A showcase of impact-driven solutions, powered by clean code and purposeful design
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${selectedCategory === category
                ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-purple-500/40"
                : "glass-effect hover:bg-white/10 hover:shadow-blue-500/30"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col h-full bg-[#0f1115] border border-white/5 rounded-2xl p-6 hover:border-purple-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">



                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-gray-400 tracking-wider">TECH STACK</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#1a1d24] border border-white/5 rounded-md text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2.5 py-1 bg-[#2a2438] border border-purple-500/30 rounded-md text-xs text-purple-300">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Circular Arrow Button */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f1115] border border-white/10 rounded-2xl relative shadow-2xl custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>

              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h2>

                  {/* Visit Live Site Button - Below Title */}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-blue-700 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 group mb-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Visit Live Site
                    </a>
                  )}

                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                {/* Project Overview */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-purple-300">
                    <span className="text-purple-500">&lt;/&gt;</span> Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base font-light">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-base font-semibold mb-3 flex items-center gap-2 text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {selectedProject.features && (
                  <div>
                    <h3 className="text-base font-semibold mb-3 flex items-center gap-2 text-purple-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Confidentiality Notice or Links */}
                {selectedProject.isNDA ? (
                  <div className="p-4 rounded-xl bg-cyan-900/20 border border-cyan-500/30 text-cyan-200 text-sm flex gap-4 items-center">
                    <div className="p-2 rounded-full bg-cyan-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-1">Confidentiality Notice</h4>
                      <p className="opacity-80">This project is subject to a Non-Disclosure Agreement (NDA) and is not available for public viewing or distribution.</p>
                    </div>
                  </div>
                ) : (
                  <div className="pt-6 border-t border-white/10 mt-auto">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 bg-white/5 border border-white/10 rounded-xl font-semibold text-gray-300 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-all duration-300"
                      >
                        <FaGithub size={18} /> View Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
