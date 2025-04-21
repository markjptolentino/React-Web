import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Memoizing navItems array to avoid unnecessary re-renders
    const navItems = useMemo(() => ['home', 'about', 'projects', 'services', 'contact'], []);

    // Handle scroll event to set active link
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            navItems.forEach((item) => {
                const section = document.getElementById(item);
                if (section && section.offsetTop <= scrollPosition + 50 && section.offsetTop + section.clientHeight > scrollPosition + 50) {
                    setActiveLink(item);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    // Handle dark mode toggle
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-gray-900 via-gray-800 to-black'} text-white z-30 shadow-2xl backdrop-blur-md`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-4">
                        <span className="text-4xl font-extrabold text-cyan-400 neon-glow hover:scale-110 transition-all duration-300 cursor-pointer">
                            CyberDev
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item}`}
                                whileHover={{ scale: 1.1, color: '#00e6e6' }}
                                animate={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`${activeLink === item ? 'text-cyan-400' : 'text-gray-300'}
                                    px-3 py-2 rounded-md text-lg font-medium hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white transition-all duration-300`}
                                aria-label={`Navigate to ${item} section`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </motion.a>
                        ))}
                    </div>

                    {/* Dark Mode Toggle */}
                    <motion.button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="text-gray-300 hover:text-cyan-400 focus:outline-none transition duration-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h2m-18 0H3m14.828-7.828l-1.415 1.415m-10.607 0L4.757 4.757m12.727 12.727l-1.415-1.415m-10.607 0l1.415 1.415" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h2m-18 0H3m14.828-7.828l-1.415 1.415m-10.607 0L4.757 4.757m12.727 12.727l-1.415-1.415m-10.607 0l1.415 1.415" />
                            </svg>
                        )}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className={`w-7 h-7 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6 text-center"
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item}`}
                                    whileHover={{ scale: 1.1, color: '#00e6e6' }}
                                    className={`block text-lg font-medium text-gray-300 px-4 py-3 rounded-md hover:text-cyan-400 transition-all duration-300 ${activeLink === item ? 'text-cyan-400' : ''}`}
                                    aria-label={`Navigate to ${item} section`}
                                    onClick={() => {
                                        setActiveLink(item);
                                        setIsMobileMenuOpen(false); // Close mobile menu after selection
                                    }}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.nav>
    );
};

export default NavBar;
