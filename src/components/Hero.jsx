import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle } from 'react-icons/fa';
// Assuming you're planning to use this styles import later
// import styles from './Hero.module.css'; // Uncomment if needed

const phrases = [
    'Cybersecurity Specialist',
    'Full-Stack Web Developer',
    'Ethical Hacker & Code Architect',
    'Defender of the Digital World',
];

const Hero = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const updateText = useCallback(() => {
        setText(phrases[index].substring(0, subIndex));
    }, [index, subIndex]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            updateText();
            if (!deleting && subIndex === phrases[index].length) {
                setDeleting(true);
                return;
            }
            if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % phrases.length);
                return;
            }
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }, deleting ? 40 : 100);
        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, updateText]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
        >
            <Helmet>
                <title>Mark JP Tolentino | CyberDev Portfolio</title>
                <meta
                    name="description"
                    content="Mark JP Tolentino's elite portfolio — fusing cybersecurity mastery and cutting-edge web development into one encrypted digital domain."
                />
                <meta
                    name="keywords"
                    content="cybersecurity, ethical hacker, full-stack, web developer, React, C#, penetration testing, hacker portfolio"
                />
            </Helmet>

            {/* Starfield BG */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <canvas id="starfield" className="w-full h-full" />
            </div>

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-10 pointer-events-none" />

            {/* Terminal intro header */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative z-20 max-w-5xl px-6 text-center font-mono"
            >
                <p className="text-green-400 text-sm sm:text-base mb-2 animate-pulse">
                    ➜ Initializing secure connection...
                </p>
                <p className="text-green-500 text-sm sm:text-base mb-6">
                    🧠 Loading: <span className="text-cyan-400">CyberDev Matrix</span>
                </p>

                {/* Glitch Effect */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 glitch relative leading-tight">
                    {text}
                    <span className="absolute top-0 left-0 w-full h-full text-cyan-500 opacity-20 glitch-layer"></span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8"
                >
                    Secure, scale, and supercharge your vision. Let’s build digital fortresses that work and wow.
                </motion.p>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#contact"
                        className="bg-cyan-500 px-6 py-3 rounded-full font-bold hover:bg-cyan-600 transition-all duration-300"
                    >
                        🔐 Let’s Talk
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#projects"
                        className="bg-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all duration-300"
                    >
                        🚧 My Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="/MarkTolentino-Resume.pdf"
                        target="_blank"
                        className="bg-gray-800 border border-cyan-400 px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition-all duration-300"
                    >
                        📄 Resume
                    </motion.a>
                </div>

                {/* Badge */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <FaCheckCircle className="text-green-400" />
                    <span>Verified Ethical Hacker & Web Developer</span>
                </div>

                {/* Scroll down */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mt-10 text-cyan-400 text-sm uppercase tracking-wider"
                >
                    ↓ Scroll to unlock secrets ↓
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
