import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaCloud, FaDatabase, FaUsers, FaLaptopCode, FaCogs, FaServer } from 'react-icons/fa'; // Additional Icons for skills
import m1 from './img/m1.jpg';  // Import the image correctly from the img folder

const About = () => {
    const skills = [
        { name: 'React.js & Node.js', icon: <FaCode className="text-3xl" /> },
        { name: 'Cybersecurity Analysis', icon: <FaShieldAlt className="text-3xl" /> },
        { name: 'Penetration Testing', icon: <FaShieldAlt className="text-3xl" /> },
        { name: 'Python & JavaScript', icon: <FaCode className="text-3xl" /> },
        { name: 'Cloud Security (AWS, Azure)', icon: <FaCloud className="text-3xl" /> },
        { name: 'Database Management', icon: <FaDatabase className="text-3xl" /> },
        { name: 'Web Application Security', icon: <FaShieldAlt className="text-3xl" /> },
        { name: 'DevSecOps', icon: <FaUsers className="text-3xl" /> },
        { name: 'Linux & Networking', icon: <FaLaptopCode className="text-3xl" /> },
        { name: 'Server Management', icon: <FaServer className="text-3xl" /> },
        { name: 'Automation & CI/CD', icon: <FaCogs className="text-3xl" /> },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-extrabold text-center mb-12 text-cyan-400"
                >
                    About Me
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="relative mb-6 rounded-lg overflow-hidden">
                            <img src={m1} alt="Profile" className="w-full h-80 object-cover transform hover:scale-110 hover:shadow-xl transition-all duration-500 rounded-lg border-4 border-transparent hover:border-cyan-400" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                                    Mark JP Tolentino
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-300 text-lg mb-6">
                            I'm a dedicated cybersecurity expert and full-stack developer with over 5 years of experience, passionate about building secure, scalable web applications and safeguarding digital ecosystems. My work blends cutting-edge development with robust security practices.
                        </p>
                        <p className="text-gray-300 text-lg mb-6">
                            From penetration testing to crafting user-friendly interfaces, I deliver solutions that are both innovative and secure, ready to tackle modern cyber challenges. Let's collaborate to build a safer digital world.
                        </p>
                        <p className="text-gray-300 text-lg mb-6">
                            My approach combines agility with security, ensuring that every project I work on is not only high-performance but also resilient against modern threats.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Core Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.05 }}
                                    className="p-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-gray-200 text-center shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <div className="text-xl font-medium">{skill.name}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Impact Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Impact & Achievements</h3>
                    <p className="text-gray-300 text-lg mb-6">
                        Over the years, I have successfully led multiple cybersecurity projects that helped organizations strengthen their security posture. From securing sensitive client data to ensuring secure cloud deployments, my goal is always to mitigate risks and enhance resilience.
                    </p>
                    <p className="text-gray-300 text-lg mb-6">
                        Notable Achievements:
                        <ul className="list-disc list-inside text-gray-200">
                            <li>Successfully executed penetration testing for over 20 enterprise web applications, uncovering critical vulnerabilities.</li>
                            <li>Implemented cloud security solutions (AWS, Azure) that reduced security incidents by 40% in the first 6 months.</li>
                            <li>Built secure DevOps pipelines, automating deployments while maintaining a high security standard.</li>
                        </ul>
                    </p>
                </motion.div>

                {/* Technologies & Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Technologies & Tools</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-gray-200 text-center shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
                        >
                            <FaCode className="text-4xl mb-4" />
                            <div className="text-xl font-medium">React.js & Node.js</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-gray-200 text-center shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
                        >
                            <FaShieldAlt className="text-4xl mb-4" />
                            <div className="text-xl font-medium">Cybersecurity Tools</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-gray-200 text-center shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
                        >
                            <FaCloud className="text-4xl mb-4" />
                            <div className="text-xl font-medium">Cloud Solutions</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Call-to-Action */}
                <div className="mt-12 text-center">
                    <motion.a
                        href="#contact"
                        className="px-6 py-3 bg-cyan-400 text-black font-semibold text-xl rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Get In Touch
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default About;
