Cyber Portfolio
A modern, responsive portfolio web app showcasing expertise in cybersecurity, software development, and web development. Built with React, Tailwind CSS, and Framer Motion, this portfolio features a cyberpunk-inspired design with interactive elements, 3D tilt effects, and a dynamic project showcase. Explore my projects, skills, and services, and interact with a live code playground to see my coding prowess in action.

Features

Interactive Project Showcase: Displays nine projects with tech-specific logos, 3D tilt effects, and modal popups for detailed views. Filter projects by technology (e.g., React, C#, Python).
Cyberpunk Aesthetic: Animated gradient backgrounds, neon-glow effects, and particle overlays create a futuristic vibe.
Responsive Design: Optimized for desktop, tablet, and mobile devices with smooth animations via Framer Motion.
Code Playground: Run JavaScript and Python code snippets directly in the browser using CodeMirror and Pyodide.
Skills & Services: Highlights technical skills (e.g., React, C#, SQL) and professional services like web development and cybersecurity consulting.
Contact Form: Integrated with EmailJS for direct communication (configuration required).
SEO Optimized: Uses react-helmet-async for better search engine visibility.
Performance: Lazy-loaded components, images, and memoized rendering for fast load times.

Tech Stack

Frontend: React, Tailwind CSS, Framer Motion, React Parallax Tilt, React Icons
Code Editor: CodeMirror, Pyodide (for Code Playground)
Utilities: React Modal, React Helmet Async
Build Tool: Vite
Deployment: Vercel (recommended)

Prerequisites

Node.js: Version 18.20.4 or higher (avoid v22 due to compatibility issues, per April 19, 2025 troubleshooting).
VS Code: Recommended for development, with extensions like ESLint and Prettier.
Git: For cloning the repository.

Setup Instructions

Clone the Repository:
git clone https://github.com/markjptolentino/cyber-portfolio.git
cd cyber-portfolio


Install Dependencies:
npm install

If errors occur (e.g., missing modules, April 20, 2025), clear the npm cache:
npm cache clean --force
npm install


Install Required Packages:Ensure all dependencies are installed:
npm install react react-dom react-router-dom tailwindcss framer-motion react-parallax-tilt react-icons react-modal @uiw/react-codemirror codemirror @codemirror/lang-javascript @codemirror/lang-python pyodide react-helmet-async


Run the App:Start the development server:
npm run dev

Open http://localhost:5173 in your browser to view the portfolio.

Troubleshooting:

Missing Modules: Verify package.json includes all dependencies. Re-run npm install.
Tailwind CSS Errors: Ensure tailwind.config.js and index.css are correctly set up (April 20, 2025).
Node.js Issues: Downgrade to Node.js v18.20.4 if using v22 (April 19, 2025).
File Path Errors: Check that assets (e.g., images) exist in public/assets/ or use valid URLs.



Project Structure
cyber-portfolio/
├── public/
│   ├── assets/                # Images and static files
│   └── index.html
├── src/
│   ├── components/            # React components (NavBar.jsx, Projects.jsx, etc.)
│   ├── App.jsx                # Main app component
│   ├── index.css              # Tailwind CSS and custom styles
│   └── main.jsx
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md

Customization

Update Projects:

Edit src/components/Projects.jsx to add new projects or update existing ones (e.g., Final SQL Assignment, PackageApp).
Example:{
  title: 'New Project',
  description: 'Description of the new project.',
  tech: ['TypeScript', 'React'],
  link: 'https://github.com/markjptolentino/new-project',
  image: '/assets/new-project.png',
  logo: <FaReact className="text-cyan-400" />,
  githubStars: '10',
  githubForks: '5',
}




Change Logos:

Replace react-icons with custom images in Projects.jsx:logo: <img src="/assets/custom-logo.png" alt="Logo" className="w-8 h-8" />


Update public/assets/ with new logo files.


Modify Theme:

Adjust colors in index.css (e.g., change neon-glow to pink: shadow-[0_0_15px_rgba(255,0,255,0.5)]).
Update gradients in Projects.jsx (e.g., from-purple-800 via-pink-700 to-blue-900).


Add Screenshots:

Replace the placeholder screenshot in README.md with a real portfolio image:![Portfolio Screenshot](./public/assets/portfolio-screenshot.png)





Deployment
Deploy to Vercel for a live portfolio:

Install Vercel CLI:
npm install -g vercel


Deploy:
vercel

Follow the prompts to configure and deploy. Use the default Vite settings.

Custom Domain (Optional):

Add a custom domain in the Vercel dashboard after deployment.


Verify:

Visit the deployed URL (e.g., https://cyber-portfolio.vercel.app) to ensure all features (filters, modals, animations) work.



Screenshots
(Add a screenshot or GIF of your portfolio here to showcase the cyberpunk design, project filters, and 3D tilt effects. Use a tool like ScreenToGif or ShareX to capture.)
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

Credits

React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework.
Framer Motion: Animation library for React.
React Parallax Tilt: 3D tilt effect for project cards.
React Icons: Icon library for tech logos.
React Modal: Accessible modal component.
CodeMirror & Pyodide: Code editor and Python runtime for the Code Playground.
Vite: Fast build tool for modern web apps.

License
This project is licensed under the MIT License.
Contact
Reach out via the portfolio’s contact form or find me on:

GitHub: markjptolentino
Email: tolentinomarkjp@gmail.com


Built with 💻 and a passion for cybersecurity by Mark Tolentino.
