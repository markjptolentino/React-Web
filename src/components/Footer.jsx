import { motion } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowRight,
    FaYoutube,
    FaFacebook,
    FaXTwitter
} from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Animated Wave Background */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-full h-12 sm:h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#111827"
                        fillOpacity="1"
                        d="M0,224L60,197.3C120,171,240,117,360,112C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                {/* Let's Work Together */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-cyan-400">Let’s Work Together</h2>
                    <p className="text-gray-400 mb-6">Looking for a passionate developer or cybersecurity expert? I'm open for collaborations, freelance work, and full-time roles.</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center text-cyan-400 font-semibold hover:underline transition-all duration-300"
                    >
                        Get in Touch <FaArrowRight className="ml-2" />
                    </a>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h2>
                    <p className="text-gray-400 mb-4">Subscribe to my tech insights, dev tips, and project launches.</p>
                    <form className="flex items-center gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 placeholder:text-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <button
                            type="submit"
                            className="p-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-colors"
                        >
                            <FaEnvelope />
                        </button>
                    </form>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-cyan-400">Connect with Me</h2>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                        <a href="https://github.com/markjptolentino" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-transform transform hover:scale-125">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/mark-jp-tolentino-043522294/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-transform transform hover:scale-125">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.youtube.com/@GatusSecGG" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-transform transform hover:scale-125">
                            <FaYoutube size={24} />
                        </a>
                        <a href="https://www.facebook.com/Gatxky" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-transform transform hover:scale-125">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://x.com/gatus_jepoy" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-transform transform hover:scale-125">
                            <FaXTwitter size={24} />
                        </a>
                        <a href="mailto:tolentinomarkjp@gmail.com" className="hover:text-cyan-400 transition-transform transform hover:scale-125">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Links</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#hero" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About Me</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#skills" className="hover:underline">Skills</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
