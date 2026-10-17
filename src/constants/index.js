export const navLinks = [
  {
    name: "Work",
    link: "#work",

  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Tesimonials",
  //   link: "#testimonials",
  // },

];

export const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },

  { text: "Code", imgPath: "/images/code.svg" },


  // Add more items as needed
];

export const getCounterItems = (githubStats = {}) => {
  const currentYear = new Date().getFullYear();
  const {
    commits = 112,
    repositories = 23,
    pullRequests = 13,
    projects = 5
  } = githubStats;

  return [
    { value: commits, suffix: "+", label: `Total commits(${currentYear})` },
    { value: repositories, suffix: "+", label: "Repositories" },
    { value: pullRequests, suffix: "+", label: "Pull-Requests" },
    { value: projects, suffix: "+", label: "Projects" },
    { value: 7.98, label: "CGPA" },
  ];
};

// Fallback data for initial load
export const counterItems = getCounterItems();

export const logoIconList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];
export const abilities = [
  {
    title: "💡 Full-Stack Web Development",
    desc: "Bringing ideas to life through seamless front-end and back-end integration.From designing responsive interfaces with HTML, CSS, and JavaScript to building dynamic applications with PHP and MySQL, I develop complete web solutions. My projects—like Amazon and Spotify clones—showcase real-world user experience and functionality."
  },
  {
    title: "🧠 Problem Solving with DSA",
    desc: "Tackling complex problems using efficient data structures and algorithms.With a strong grasp of DSA in Java, I approach challenges with logical thinking and structured solutions. Whether optimizing performance or building interactive applications like Flappy Bird, I prioritize clean, efficient code."
  },
  {
    title: "📊 Data Analysis & Visualization",
    desc: "Turning raw data into meaningful insights and clear visuals.Skilled in Python, Pandas, Matplotlib, and SQL, I analyze datasets and present them in intuitive formats. From Excel reports to Python visualizations, I transform information into actionable stories for smarter decision-making."
  },
];

export const expCards = [
  {
    id: 1, imgPath: "/images/numpy.webp",
    title: "🐍 NumPy Contributions",
    desc: "Codebase Maintenance: Removed obsolete Doxygen configuration tags (MAINT), streamlining the documentation build process and reducing legacy configuration debt. [Link to PR #30550]",
    src: "https://github.com/numpy/numpy/pull/30550",
    date: "2026",

  },
  {
    id: 2, imgPath: "/images/numpy.webp",
    title: "🐍 NumPy Contributions",
    desc: "CI/CD Pipeline Optimization: Diagnosed and resolved a critical 'hanging job' issue in macOS GitHub Actions runners. Migrated workflows to macos-13 and implemented libmamba for faster dependency solving, significantly reducing test timeouts.",
    src: "https://github.com/numpy/numpy/pull/30724",
    date: "2026",

  },
  {
    id: 3, imgPath: "/images/MDN-logo.webp",
    title: "🌐 MDN Contributions",
    desc: "WebGL Specification Alignment: Updated bufferSubData documentation to enforce the srcData parameter requirement, aligning the docs with the strict WebGL 1 specification and preventing implementation errors. [Link to PR #42411]",
    src: "https://github.com/mdn/content/pull/42411",
    date: "2026",

  },
  {
    id: 4, imgPath: "/images/MDN-logo.webp",
    title: "🌐 MDN Contributions",
    desc: "HTTP Standards Accuracy: Corrected syntax documentation for the HTTP Prefer header to properly support list values, ensuring accurate reference material for web developers. [Link to PR #42575]",
    src: "https://github.com/mdn/content/pull/42575",
    date: "2026",
  },
  {
    id: 5, imgPath: "/images/MDN-logo.webp",
    title: "🌐 MDN Contributions",
    desc: "Site Maintenance: Resolved broken redirects in the Glossary, improving site navigation and SEO health. [Link to PR #42576]",
    src: "https://github.com/mdn/content/pull/42576",
    date: "2026",
  },


  {
    id: 6,
    imgPath: "/images/NPTEL.webp",
    title: "NPTEL",
    review: "Awarded 'Elite' Certification by IIT Madras (NPTEL) for Python for Data Science with a consolidated score of 75%. This rigorous curriculum moved beyond basic syntax to cover the core Python data stack, specifically Pandas, NumPy, and Matplotlib. By mastering these libraries, I learned how to efficiently clean raw data, perform vectorised operations, and generate insightful visualizations, establishing a strong foundation for building machine learning models and handling real-world datasets.",
    date: "2025",
  },
  {
    id: 7, review: "The Deloitte Data Analytics Job Simulation on Forage is an excellent introductory program for aspiring data analysts. It provides hands-on experience through realistic business scenarios, allowing learners to apply data analysis techniques and understand how data is used to solve business problems. The course is well-structured, self-paced, and offers practical exposure to analytics and forensic technology concepts. While it is beginner-friendly and doesn't cover advanced technical topics in depth, it is a valuable addition to a resume and a great way to gain insight into the day-to-day work of a data analytics professional.",
    imgPath: "/images/Deloitte.webp",
    title: "Data Analytics",
    date: "2026",
  },
  {
    id: 8, review: "Completed an in-depth course on Anthropic Claude, covering API integration, prompt engineering, RAG, MCP, tool use, and agentic AI workflows. The course provided practical experience in building scalable, production-ready AI applications using modern LLM engineering techniques.",
    imgPath: "/images/Anthropic.webp",
    title: "Building with the Claude API",
    date: "2026",
  },
  {
    id: 9, review: "Built for NMIT Hackathon using Python + FastAPI.Integrates APIs like YouTube, weather, crypto, EV stations.Generates AI images and handles diverse queries.Designed as an all-in-one multi-tool assistant.Focuses on real-world problem-solving use cases.Team collaboration under tight deadlines.",
    imgPath: "/images/Omni-Bot.webp",
    src: "https://nmit-hackathon.vercel.app/",
    title: "🤖 OmniBot – NMIT Hackathon Project",
    date: "MAR-3, 2024",
  },

  {
    id: 11, review: "IBM Coursera Certificate: Developing Back-End Apps with Node.js and Express Gained hands-on expertise in building RESTful APIs, implementing Express middleware, handling asynchronous operations, and structuring scalable server-side logic using Node.js — validated through practical projects including API development and error handling."
    , imgPath: "/images/Coursera.png",
    title: "🌐 Developing Back-End Apps with Node.js and Express",
    date: "2025",
  },
  {
    id: 12, review: "A responsive clone of the Flappy Bird game.Built with HTML, CSS, and JavaScript.Includes scoring, obstacles, and physics-based motion.Mobile-friendly interface for smooth gameplay.Tests logic building and event handling in JS.Fun project demonstrating front-end game design.",
    title: "🕹️ Flappy Bird Clone",
    src: "https://flappy-bird-murex-zeta.vercel.app/",
    imgPath: "/images/Flappy- Bird.webp",
    date: "FEB-7,2025",

  },





];
export const techStackImgs = [
  {
    name: "Java Developer",
    imgPath: "/images/logos/Java_Logo.svg.png",

  }

];

// Prominently featured core backend frameworks
export const featuredFrameworks = [
  {
    name: 'FastAPI',
    language: 'Python',
    role: 'Primary Backend Framework',
    description:
      'High-performance asynchronous APIs, automatic OpenAPI/Swagger documentation, robust request validation via Pydantic, and modular dependency injection.',
    highlights: ['AsyncIO & Starlette', 'Pydantic Validation', 'OpenAPI & Swagger', 'Dependency Injection', 'Microservices'],
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  },
  {
    name: 'Express.js',
    language: 'JavaScript / Node.js',
    role: 'Primary Backend Framework',
    description:
      'Production-tested server-side development, custom middleware pipelines, asynchronous event handling, and high-throughput RESTful services.',
    highlights: ['Node.js Runtime', 'Middleware Pipelines', 'RESTful Services', 'Async Event Loop', 'Scalable Routing'],
    badgeColor: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
  },
];

// Backend Engineering Core Competencies
export const backendSkills = [
  { name: 'REST APIs', category: 'API Design & Protocols' },
  { name: 'Socket.IO', category: 'Real-Time Communication' },
  { name: 'PostgreSQL', category: 'Relational Database / SQL' },
  { name: 'MongoDB', category: 'NoSQL Document Store' },
  { name: 'Redis', category: 'In-Memory Cache & Key-Value' },
  { name: 'JWT', category: 'Stateless Authentication' },
  { name: 'OAuth 2.0', category: 'Delegated Authorization' },
  { name: 'RBAC', category: 'Role-Based Access Control' },
];

// AI Engineering Skills (Presented as applied skills, not unsupported claims of expertise)
export const aiEngineeringSkills = [
  {
    name: 'RAG',
    label: 'Retrieval-Augmented Generation',
    description: 'Context retrieval pipelines integrating vector search with generation workflows.',
  },
  {
    name: 'Prompt Engineering',
    label: 'Structured Prompt Design',
    description: 'Systematic prompt templates, few-shot patterns, and chain-of-thought formulations.',
  },
  {
    name: 'Prompt Evaluation',
    label: 'Output Benchmarking',
    description: 'Empirical testing, response validation, and regression monitoring across models.',
  },
  {
    name: 'MCP',
    label: 'Model Context Protocol',
    description: 'Extending LLMs with standardized tools, resources, and live data connectors.',
  },
  {
    name: 'LLM Integration',
    label: 'API & Pipeline Engineering',
    description: 'Production integration of foundation model APIs into backend services.',
  },
];

// Programming Languages & DSA
export const programmingLanguages = [
  {
    name: 'Java',
    role: 'Data structures, algorithms, and OOP architecture',
    isPrimary: true,
  },
  {
    name: 'JavaScript',
    role: 'Node.js server architectures & async event loops',
    isPrimary: false,
  },
  {
    name: 'TypeScript',
    role: 'Typed backend services & compile-time safety',
    isPrimary: false,
  },
  {
    name: 'Python',
    role: 'Backend APIs, data workflows, and AI tooling',
    isPrimary: false,
  },
  {
    name: 'C',
    role: 'Memory management & low-level fundamentals',
    isPrimary: false,
  },
];

// Infrastructure & Tooling
export const infrastructureTools = [
  { name: 'Docker', category: 'Containerization' },
  { name: 'Render', category: 'Cloud Deployment' },
  { name: 'AWS S3', category: 'Cloud Object Storage' },
  { name: 'Git', category: 'Version Control' },
  { name: 'GitHub', category: 'Collaboration & CI/CD' },
  { name: 'Postman', category: 'API Testing & Docs' },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/e.harish_308?igsh=MXg1ZjVsenVqZ3Br",
    imgPath: "/images/insta.webp",
  },
  // {
  //   name: "fb",
  //   url: "https://www.facebook.com/",
  //   imgPath: "/images/fb.png",
  // },
  {
    name: "Git-Hub",
    url: "https://github.com/Harish3005-cloud",
    imgPath: "/images/github.webp",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/harish-e-naidu/ ",
    imgPath: "/images/linkedin.webp",
  },
];
