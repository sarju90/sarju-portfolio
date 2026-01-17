"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";

export default function Experience() {
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');
  const allExperiences = [...workExperiences, ...education];

  return (
    <section id="experience" className="pb-20 px-6 md:px-4 relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and accomplishments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Combined Timeline - Alternating Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {allExperiences.map((exp, index) => {
              const isWork = exp.type === 'work';
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                >
                  {/* Animated Number Circle with Icon - Positioned at center */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className={`absolute left-1/2 transform -translate-x-1/2 top-6 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg z-10 ${isWork
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500 shadow-purple-500/50'
                      : 'bg-gradient-to-br from-blue-400 to-cyan-400 shadow-blue-500/50'
                      } hidden md:flex`}
                  >
                    {isWork ? <FaBriefcase /> : <FaGraduationCap />}
                  </motion.div>

                  {/* Mobile Icon */}
                  <div className={`absolute left-4 top-6 w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-xl shadow-lg z-10 md:hidden ${isWork
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500'
                      : 'bg-gradient-to-br from-blue-400 to-cyan-400'
                    }`}>
                    {isWork ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`glass-effect rounded-xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden min-w-0 ${isLeft ? 'md:mr-[55%] ml-20 md:ml-0' : 'md:ml-[55%] ml-20 md:ml-0'
                      } w-full md:w-auto`}
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                    <div className="relative z-10">
                      {/* Date Badge - Top Right */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                        className={`glass-effect px-4 py-2 rounded-full flex items-center gap-2 text-sm w-fit mb-4 border ${isWork ? 'border-purple-500/30' : 'border-blue-400/30'
                          }`}
                      >
                        <FaCalendar className={isWork ? "text-purple-500" : "text-blue-400"} />
                        <span className="font-semibold">{exp.duration}</span>
                      </motion.div>

                      <div className="mb-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 mb-3 min-w-0"
                        >
                          {isWork ? (
                            <FaBriefcase className="text-xl sm:text-2xl text-purple-500 md:hidden flex-shrink-0 mt-1" />
                          ) : (
                            <FaGraduationCap className="text-xl sm:text-2xl text-blue-400 md:hidden flex-shrink-0 mt-1" />
                          )}
                          <h4 className="text-xl sm:text-2xl font-bold group-hover:gradient-text transition-all duration-300 break-words min-w-0 flex-1">
                            {exp.title}
                          </h4>
                        </motion.div>

                        <div className="flex flex-col gap-2 text-gray-400 mb-3">
                          <span className="flex items-center gap-2 text-sm sm:text-base font-semibold break-words">
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isWork ? 'bg-purple-500' : 'bg-blue-400'}`}></span>
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-2 text-sm break-words">
                            <FaMapMarkerAlt className={`flex-shrink-0 ${isWork ? "text-purple-500" : "text-blue-400"}`} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-300 mb-5 leading-relaxed break-words"
                      >
                        {exp.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                      >
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + 0.7 + skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className={`px-3 py-1 rounded-full text-sm border ${isWork
                              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30"
                              : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30"
                              }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Knowledge Odyssey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-effect rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Learning Never Stops
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            My journey of continuous learning drives innovation and excellence in every project I undertake.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
