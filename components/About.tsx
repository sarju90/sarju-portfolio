"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

export default function About() {
  const developerProfile = {
    name: personalInfo.name,
    role: personalInfo.title,
    location: personalInfo.location,
    experience: personalInfo.experience,
    education: personalInfo.education,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    contact: personalInfo.email,
    passion: 'Building exceptional web experiences'
  };

  return (
    <section id="about" className="py-20 px-6 md:px-4 relative overflow-hidden scroll-mt-20">
      {/* Background effects */}  
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <div className="space-y-4 text-gray-300">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed break-words">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Education & Experience badges */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="glass-effect px-4 py-3 rounded-lg min-w-0 flex-1">
                <p className="text-sm text-gray-400">Education</p>
                <p className="font-semibold break-words">{personalInfo.education}</p>
              </div>
              <div className="glass-effect px-4 py-3 rounded-lg min-w-0 flex-1">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="font-semibold break-words">{personalInfo.experience}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Developer Profile Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="min-w-0 w-full"
          >
            <div className="glass-effect rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden min-w-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></div>
                <span className="ml-2 text-gray-400 text-xs sm:text-sm truncate min-w-0">developer.profile</span>
              </div>
              <div className="overflow-x-auto max-w-full scrollbar-thin">
                <pre className="text-gray-300 min-w-0">
                  {`const developer = {
  name: '${developerProfile.name}',
  role: '${developerProfile.role}',
  location: '${developerProfile.location}',
  experience: '${developerProfile.experience}',
  education: '${developerProfile.education}',
  skills: [
    ${developerProfile.skills.map(s => `'${s}'`).join(',\n    ')}
  ],
  contact: '${developerProfile.contact}',
  passion: '${developerProfile.passion}'
};`}
                </pre>
              </div>
            </div>

            {/* Tech Icons */}
            <div className="mt-8 flex justify-around items-center gap-2 flex-wrap">
              {["React", "Next.js", "TypeScript"].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="glass-effect p-3 sm:p-4 rounded-lg text-center flex-shrink-0"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-lg sm:text-xl font-bold">
                    {tech[0]}
                  </div>
                  <p className="text-xs break-words">{tech}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
