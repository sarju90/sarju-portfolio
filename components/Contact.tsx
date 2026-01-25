"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CodeMantraTyping from "./CodeMantra";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-4 relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Whether you have a project in mind, need expert advice, or want to collaborate on an exciting idea, I'm here to help.
            Let's connect and discuss your project requirements in detail.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Contact Info</h3>

              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex flex-col items-center gap-3 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-sm">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex flex-col items-center gap-3 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-semibold text-sm">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-3 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-semibold text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text text-center">Connect With Me</h3>
              <p className="text-gray-400 text-sm mb-4 text-center">
                Let's connect on social platforms and explore opportunities to collaborate
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-2 group w-28"
                >
                  <FaGithub className="text-3xl group-hover:scale-110 transition-transform" />
                  <span className="text-xs">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-2 group w-28"
                >
                  <FaLinkedin className="text-3xl group-hover:scale-110 transition-transform" />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-2 group w-28"
                >
                  <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
                  <span className="text-xs">WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
