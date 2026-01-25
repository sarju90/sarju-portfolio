"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio-data";

// Typing Animation Component
function TypingAnimation() {
  const phrases = [
    { text: "Transforming ideas into seamless digital experiences.", gradient: "from-blue-400 via-purple-400 to-pink-400" },
    { text: "Building scalable and innovative web solutions.", gradient: "from-green-400 via-cyan-400 to-blue-400" },
    { text: "Crafting elegant code with modern technologies.", gradient: "from-orange-400 via-red-400 to-pink-400" },
    { text: "Creating responsive and user-friendly interfaces.", gradient: "from-purple-400 via-pink-400 to-rose-400" }
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex].text;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <div className="mb-8">
      
      <p className="text-lg md:text-xl h-14 flex items-center justify-center">
        <span className="inline-block">
          <span className={`bg-gradient-to-r ${phrases[currentPhraseIndex].gradient} bg-clip-text text-transparent font-semibold`}>
            {currentText}
          </span>
          <span className={`inline-block w-0.5 h-6 bg-gradient-to-b ${phrases[currentPhraseIndex].gradient} ml-1 animate-pulse`}></span>
        </span>
      </p>
    </div>
  );
}


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6 md:px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 animate-float">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-2">
              {personalInfo.title}
            </p>
            <TypingAnimation />
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 glass-effect rounded-full text-sm md:text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-effect rounded-full font-semibold hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4 mb-8"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
