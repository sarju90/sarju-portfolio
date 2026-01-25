"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio-data";

// Code Mantra Typing Animation Component
function CodeMantraTyping() {
    const phrases = [
        { text: "Building scalable solutions with clean architecture and pixel-perfect precision.", gradient: "from-amber-400 via-orange-400 to-red-400" },
        { text: "Simplicity is the soul of efficiency.", gradient: "from-blue-400 via-cyan-400 to-teal-400" },
        { text: "First, solve the problem. Then, write the code.", gradient: "from-purple-400 via-pink-400 to-rose-400" },
        { text: "Clean code always looks like it was written by someone who cares.", gradient: "from-emerald-400 via-green-400 to-lime-400" }
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex].text;

        const handleTyping = () => {
            if (!isDeleting) {
                if (currentText.length < currentPhrase.length) {
                    setCurrentText(currentPhrase.substring(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 3000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentPhrase.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 30 : 80);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentPhraseIndex]);

    return (
        <div className="py-16 px-6 md:px-4">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-effect rounded-2xl p-8 md:p-12 border border-purple-500/20">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                            <span className="text-purple-500">{"</"}</span>
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Code Mantra
                            </span>
                            <span className="text-purple-500">{"/>"}</span>
                        </h3>

                        <p className="text-xl md:text-2xl h-24 flex items-center justify-center">
                            <span className="inline-block">
                                <span className={`bg-gradient-to-r ${phrases[currentPhraseIndex].gradient} bg-clip-text text-transparent font-semibold`}>
                                    {currentText}
                                </span>
                                <span className={`inline-block w-0.5 h-7 bg-gradient-to-b ${phrases[currentPhraseIndex].gradient} ml-1 animate-pulse`}></span>
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default CodeMantraTyping;
