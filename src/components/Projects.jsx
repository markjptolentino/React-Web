import { motion } from 'framer-motion';


const Projects = () => {
    const projects = [
        {
            title: 'Secure E-Commerce Platform',
            description: 'Developed a secure, scalable e-commerce platform with advanced encryption and payment security.',
            tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
            link: '#',
            image: 'https://via.placeholder.com/300x200?text=E-Commerce',
        },
        {
            title: 'Cyber Threat Dashboard',
            description: 'Built a real-time threat monitoring dashboard for enterprise security teams.',
            tech: ['Python', 'Django', 'PostgreSQL', 'Docker'],
            link: '#',
            image: 'https://via.placeholder.com/300x200?text=Dashboard',
        },
        {
            title: 'Portfolio Website',
            description: 'Designed and developed a responsive portfolio with cyber-themed animations.',
            tech: ['React', 'Tailwind CSS', 'JavaScript'],
            link: '#',
            image: 'https://via.placeholder.com/300x200?text=Portfolio',
        },
        {
            title: 'Final SQL Assignment',
            description: 'Created a complex SQL database system for managing and analyzing large datasets.',
            tech: ['SQL', 'Database Management'],
            link: 'https://github.com/markjptolentino/FInal-Sql-Assignment',
            image: 'https://via.placeholder.com/300x200?text=SQL-Project',
        },
        {
            title: 'Console Boolean Loops',
            description: 'Developed a console application to demonstrate Boolean logic and loops.',
            tech: ['C#', 'Console Application'],
            link: 'https://github.com/markjptolentino/console-boolean-loops',
            image: 'https://via.placeholder.com/300x200?text=Boolean-Loops',
        },
        {
            title: 'PackageApp',
            description: 'Created an application for managing and tracking packages in real-time.',
            tech: ['C#', '.NET', 'SQL Server'],
            link: 'https://github.com/markjptolentino/PackageApp',
            image: 'https://via.placeholder.com/300x200?text=PackageApp',
        },
        {
            title: 'Car Insurance Approval Program',
            description: 'Built a program that processes car insurance approval based on user inputs.',
            tech: ['C#', '.NET', 'Logic'],
            link: 'https://github.com/markjptolentino/CarInsuranceApprovalProgram',
            image: 'https://via.placeholder.com/300x200?text=Car-Insurance',
        },
        {
            title: 'Income Comparison App',
            description: 'Developed an app to compare and analyze income data across different industries.',
            tech: ['Python', 'Pandas', 'Data Analysis'],
            link: 'https://github.com/markjptolentino/IncomeComparisonApp',
            image: 'https://via.placeholder.com/300x200?text=Income-Comparison',
        },
        {
            title: 'Web Page Project',
            description: 'Built a dynamic and responsive web page showcasing modern web design practices.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://github.com/markjptolentino/web-page',
            image: 'https://via.placeholder.com/300x200?text=Web-Page',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-r from-blue-800 via-teal-700 to-indigo-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-white text-center mb-12 tracking-wider"
                >
                    My Amazing Projects
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                            <div className="relative mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                                />
                                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm px-3 py-1 rounded-full hover:scale-105 transform transition duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg inline-block transition duration-300"
                                aria-label={`View ${project.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project →
                            </a>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/markjptolentino"
                        className="text-white text-lg font-semibold py-2 px-6 border-2 border-white rounded-full hover:bg-cyan-500 hover:text-black transition duration-300"
                    >
                        Check Out More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
