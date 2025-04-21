import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaRegUser, FaRegEnvelope, FaRegComment } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '', message: '' });
        setShowModal(true); // Show the modal after form submission
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-extrabold text-center mb-12 text-cyan-400"
                >
                    Contact Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-lg mx-auto"
                >
                    <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-8 shadow-xl border border-gray-700">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FaRegUser className="text-cyan-400 text-2xl" />
                                <div className="w-full">
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-2 block w-full rounded-xl bg-gray-700 border-gray-600 text-white shadow-sm focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaRegEnvelope className="text-cyan-400 text-2xl" />
                                <div className="w-full">
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-2 block w-full rounded-xl bg-gray-700 border-gray-600 text-white shadow-sm focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaRegComment className="text-cyan-400 text-2xl" />
                                <div className="w-full">
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-2 block w-full rounded-xl bg-gray-700 border-gray-600 text-white shadow-sm focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out"
                                        required
                                        aria-required="true"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                            aria-label="Send message"
                        >
                            <FaPaperPlane /> Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Modal for submission confirmation */}
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white text-gray-800 rounded-xl p-8 shadow-lg w-96"
                    >
                        <h2 className="text-3xl font-bold text-center mb-6 text-green-500">Message Sent!</h2>
                        <p className="text-center text-gray-600 mb-4">Thank you for getting in touch. I'll respond to your message shortly.</p>
                        <div className="flex justify-center gap-4">
                            <motion.button
                                onClick={closeModal}
                                whileHover={{ scale: 1.05 }}
                                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Close
                            </motion.button>
                            <motion.button
                                onClick={closeModal}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition duration-300"
                            >
                                Stay on Page
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Contact;
