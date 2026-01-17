"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skills } from "@/data/portfolio-data";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiNodedotjs, SiMongodb, SiMysql, SiGit, SiGithub, SiTailwindcss, SiExpress, SiCypress, SiMui, SiBootstrap, SiStyledcomponents, SiBitbucket, SiPostman, SiInsomnia, SiRedux } from "react-icons/si";
import { FaCode, FaTools, FaServer, FaPalette, FaVial, FaMobile, FaLayerGroup } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillIcons: { [key: string]: any } = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "SCSS": SiSass,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Bitbucket": SiBitbucket,
  "Postman": SiPostman,
  "Insomnia": SiInsomnia,
  "VS Code": VscCode,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  "Reactstrap": SiBootstrap,
  "Styled Components": SiStyledcomponents,
  "Redux Toolkit": SiRedux,
  "Context API": SiReact,
  "Cypress": SiCypress,
  "React Native": SiReact,
};

const categoryConfig = [
  { name: "Core Tech", icon: FaCode, color: "from-blue-500 to-purple-500", angle: -90 },
  { name: "Dev Tools", icon: FaTools, color: "from-orange-500 to-red-500", angle: -38.57 },
  { name: "Backend", icon: FaServer, color: "from-emerald-500 to-green-500", angle: 12.86 },
  { name: "State Management", icon: FaLayerGroup, color: "from-indigo-500 to-purple-500", angle: 64.29 },
  { name: "Testing", icon: FaVial, color: "from-green-500 to-teal-500", angle: 115.71 },
  { name: "Mobile", icon: FaMobile, color: "from-pink-500 to-purple-500", angle: 167.14 },
  { name: "UI Frameworks", icon: FaPalette, color: "from-cyan-500 to-blue-500", angle: 218.57 },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("Core Tech");

  const getCategorySkills = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-5 px-6 md:px-4 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skill Galaxy</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Navigate through my universe of technologies and expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Interactive Skills Display */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Side - Floating Category Icons */}
          <div className="relative h-[500px] hidden lg:block">

            {/* Icons positioned on the circle */}
            <div className="absolute top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
              {categoryConfig.map((category, index) => {
                const radius = 180;
                const angle = (category.angle * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      marginLeft: '-48px',
                      marginTop: '-48px'
                    }}
                  >
                    <motion.button
                      onHoverStart={() => setSelectedCategory(category.name)}
                      onClick={() => setSelectedCategory(category.name)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative group`}
                    >
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transition-all duration-300 ${selectedCategory === category.name ? 'ring-4 ring-white/30' : ''
                        }`}>
                        <category.icon className="text-4xl text-white" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 px-3 py-1 rounded-full text-sm"
                      >
                        {category.name}
                      </motion.div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Category Selector */}
          <div className="flex flex-wrap gap-4 justify-center lg:hidden mb-8">
            {categoryConfig.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.name
                    ? `bg-gradient-to-r ${category.color}`
                    : "glass-effect hover:bg-white/10"
                  }`}
              >
                <category.icon />
                {category.name}
              </button>
            ))}
          </div>

          {/* Right Side - Skills Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {selectedCategory && (
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="glass-effect rounded-xl p-8 min-h-[400px]"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {categoryConfig.find(c => c.name === selectedCategory) && (
                      <>
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${categoryConfig.find(c => c.name === selectedCategory)?.color
                          } flex items-center justify-center`}>
                          {(() => {
                            const CategoryIcon = categoryConfig.find(c => c.name === selectedCategory)?.icon;
                            return CategoryIcon ? <CategoryIcon className="text-2xl text-white" /> : null;
                          })()}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{selectedCategory}</h3>
                          <p className="text-sm text-gray-400">Additional technologies in my toolkit</p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {getCategorySkills(selectedCategory).map((skill, index) => {
                      const IconComponent = skillIcons[skill.name];
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="glass-effect rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-2"
                        >
                          {IconComponent ? (
                            <IconComponent className="text-4xl text-blue-400" />
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-lg font-bold">
                              {skill.name.substring(0, 2).toUpperCase()}
                            </div>
                          )}
                          <p className="text-sm font-semibold">{skill.name}</p>
                          <div className={`w-full h-1 rounded-full bg-gradient-to-r ${categoryConfig.find(c => c.name === selectedCategory)?.color
                            }`}></div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
