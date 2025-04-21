import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaReact, FaLock, FaLaptopCode } from 'react-icons/fa'; // SVG Icons for a professional look
import { useState } from 'react';

const Services = () => {
    const [activeService, setActiveService] = useState(null); // For managing active service expansion
    const services = [
        {
            title: 'Web Development',
            description:
                'Building responsive, high-performance web applications with modern frameworks like React, Angular, and Vue. Expertise in front-end technologies, APIs, and full-stack solutions.',
            icon: <FaReact size={50} />,
            progress: 90,
        },
        {
            title: 'Cybersecurity Consulting',
            description:
                'Providing penetration testing, security audits, and threat analysis to ensure your organization’s data and infrastructure are secure from cyber threats and vulnerabilities.',
            icon: <FaLock size={50} />,
            progress: 85,
        },
        {
            title: 'Software Engineering',
            description:
                'Developing scalable backend systems and APIs with robust security. Expertise in data structures, algorithms, cloud-native applications, and microservices.',
            icon: <FaLaptopCode size={50} />,
            progress: 80,
        },
    ];

    const toggleServiceDetails = (index) => {
        if (activeService === index) {
            setActiveService(null); // Collapse if already active
        } else {
            setActiveService(index); // Expand the clicked service
        }
    };

    return (
        <section
            id="services"
            className="py-20 relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 overflow-hidden"
        >
            <div className="absolute inset-0 bg-opacity-40 bg-black"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-white text-center mb-12 tracking-wider"
                >
                    Our Services
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Tilt
                            key={service.title}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            transitionSpeed={1500}
                            glareEnable={true}
                            glareMaxOpacity={0.6}
                            glareBorderRadius="10px"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="glass rounded-lg p-8 text-center text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition duration-500 transform hover:scale-105 cursor-pointer relative"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p
                                    className={`text-gray-300 mb-4 transition-all duration-300 ${activeService === index ? 'h-auto' : 'h-16 overflow-hidden'
                                        }`}
                                    onClick={() => toggleServiceDetails(index)}
                                >
                                    {service.description}
                                </p>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                    <motion.div
                                        style={{ width: `${service.progress}%` }}
                                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                                        animate={{ width: `${service.progress}%` }}
                                        transition={{ duration: 1 }}
                                    />
                                </div>
                                <motion.a
                                    href="#contact"
                                    className="bg-cyan-500 text-white py-2 px-4 rounded-full mt-4 inline-block hover:bg-cyan-600 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Get in Touch
                                </motion.a>
                                {/* Active Service Indicator */}
                                {activeService === index && (
                                    <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg flex items-center justify-center z-10">
                                        <span className="text-white font-bold text-xl">More Details</span>
                                    </div>
                                )}
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
            {/* Floating Animated Background (e.g., particles) */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-30 animate-pulse"></div>
        </section>
    );
};

export default Services;
