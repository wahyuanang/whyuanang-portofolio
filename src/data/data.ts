export interface EducationItem {
  title: string;
  institution: string;
  year: string;
  description?: string;
  bullets?: string[];
}

export interface TrainingCertificationItem {
  title: string;
  institution?: string;
  year?: string;
  description?: string | string[];
  bullets?: string[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  location?: string;
  duration?: string;
  description?: string;
  bullets?: string[];
}

export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logo?: string;
  role: string;
  projectTitle: string;
  year: string;
  description: string;
}

export interface TechDetail {
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  primaryTech: string;
  techReason: string;
  tags: string[];
  techStackDetails?: TechDetail[];
  demoUrl: string;
  githubUrl?: string;
  features?: string[];
  client?: string;
  timeline?: string;
  role?: string;
  projectType: "client" | "personal";
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const profileData = {
  name: "Wahyu Anang",
  status: "Available for new Projects",
  headline: "I am an S1 Informatics passionate about programming, especially in the field of Web Development. I continuously strive to improve my skills and knowledge while keeping up with the latest technological developments.",
  cvUrl: "#",
  aboutParagraphs: [
    "I’m a Front-End Developer passionate about creating modern, responsive, and high-performance web applications. Skilled in React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS, I focus on building scalable interfaces and engaging digital experiences with strong attention to usability and performance.",
    "With experience in freelance projects and internship environments, I develop web-based solutions using modern development practices and clean code principles. I’m continuously learning, exploring new technologies, and improving my skills to create impactful digital products that solve problems and deliver meaningful user experiences."
  ],
  socials: {
    github: "https://github.com/wahyuanang",
    gmail: "wahyuanngz20@gmail.com",
    linkedin: "https://www.linkedin.com/in/wahyu-anang-zulfikri-07002829a/"
  }
};

export const allSkills: string[] = [
  "HTML",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Git & GitHub"
];

export const educationData: EducationItem[] = [
  {
    title: "S1 - Informatics",
    institution: "Universitas Amikom Yogyakarta",
    year: "2022 - 2026",
    description: "Relevant Coursework: Data structures, algorithms, Web development, databases, and UI/UX design."
  },
  {
    title: "Biological and P.Sciences",
    institution: "SMA Negeri 1 Kurik",
    year: "2019 - 2022",
    description: "Relevant Coursework: Mathematics, Natural Sciences, Logic, Computer Fundamentals."
  }
];

export const trainingCertificationData: TrainingCertificationItem[] = [
  {
    title: "Information Technology Specialist JavaScript",
    institution: "Certiport / Information Technology Specialist",
    year: "2024",
    description: "Certified proficiency in JavaScript core concepts, DOM manipulation, asynchronous programming, and data structures."
  },
  {
    title: "Studi Independen - MSIB Batch 5",
    institution: "PT Lentera Bangsa Benderang (Binar Academy)",
    year: "2024",
    description: [
      "Class Leader – Fullstack Web Class",
      "Learned HTML, Tailwind CSS, JavaScript, Data Structures, React.js, Node.js, Express.js and more."
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Area Solution",
    year: "Januari 2026 - Present",
    duration: "8 bulan",
    location: "Daerah Istimewa Yogyakarta, Indonesia",
    bullets: [
      "Developing scalable, responsive web application interfaces using modern frontend frameworks and clean code principles."
    ]
  },
  {
    role: "Internship Frontend Developer",
    company: "gramedusa",
    year: "September 2025 - Desember 2025",
    duration: "4 bulan",
    location: "Daerah Istimewa Yogyakarta, Indonesia",
    bullets: [
      "Collaborated on designing and developing responsive frontend interfaces with focus on user experience and accessibility."
    ]
  },
  {
    role: "Web FrontEnd Division Instructor & Staff",
    company: "Amikom Computer Club (AMCC)",
    year: "Januari 2023 - November 2025",
    duration: "2 tahun 11 bulan",
    location: "Daerah Istimewa Yogyakarta, Indonesia",
    bullets: [
      "Web FrontEnd Division Instructor (Desember 2024 - November 2025): Taught advanced web development, HTML, CSS, JavaScript, and React.",
      "Household Department Staff (Desember 2024 - November 2025): Managed organization assets and operational activities.",
      "Web FrontEnd Programming Division Instructor (November 2023 - November 2025): Instructed junior members in foundational frontend concepts.",
      "Public Relations Assistant (November 2023 - September 2024): Handled external communications and partnership relations.",
      "AMCC Active Member (Januari 2023 - November 2024)"
    ]
  },
  {
    role: "Laboratory Assistant",
    company: "Forum Asisten (Universitas Amikom Yogyakarta)",
    year: "September 2023 - Juni 2024",
    duration: "10 bulan",
    location: "Daerah Istimewa Yogyakarta, Indonesia",
    bullets: [
      "Laboratory Assistant - Struktur Data (Jan 2024 - Jun 2024): Helped students learn data structures using C++ language.",
      "Laboratory Assistant - Pemrograman Web (Jan 2024 - Jun 2024): Guided students in web programming concepts (HTML, CSS, Bootstrap framework).",
      "Laboratory Assistant - Algorithm & Programming (Sep 2023 - Feb 2024): Taught foundational algorithms & programming principles.",
      "Improved student performance through personalized feedback, interactive learning methods, and assignment evaluation."
    ]
  }
];

export const awardsData: AwardItem[] = [
  {
    title: "1st Place Winner – UI/UX Category | Pimaposma 2025",
    issuer: "Pimaposma Universitas Amikom Yogyakarta",
    year: "Jan 2026",
    description: "Awarded 1st place in the UI/UX category at Pimaposma 2025 under the theme 'Synergy in Motion: Design Your Mission'. Emphasized collaborative design, user-centered web interfaces, wireframing, and interactive prototyping."
  },
  {
    title: "3rd Place Winner – Business Plan Competition",
    issuer: "Universitas Semarang (GENETIC Competition)",
    year: "Jun 2025",
    description: "Won 3rd place for volunteerin.id platform idea, connecting volunteers with social opportunities."
  },
  {
    title: "Juara 1 Awarding Web Programming",
    issuer: "Amikom Computer Club (AMCC)",
    year: "2024",
    description: "Awarded 1st Place in Web Programming Awarding Competition at AMCC."
  }
];

export const clientsData: ClientItem[] = [
  {
    id: "geoseismal",
    name: "Geoseismal Research Center",
    role: "Fullstack Developer",
    projectTitle: "Geoseismal Data Visualization & Web Portal",
    year: "2025 - Present",
    description: "Developing responsive frontend web applications and backend PostgreSQL database architecture for seismic data ingestion."
  },
  {
    id: "pati-jaya",
    name: "Industri Pati Jaya",
    role: "Full-Stack Developer",
    projectTitle: "Production & Distribution Management System",
    year: "Nov 2025 - Dec 2025",
    description: "Built operational management system for tofu, tempeh, and sprout distribution tracking."
  },
  {
    id: "chiyo-salon",
    name: "Chiyo Salon",
    role: "Full-Stack Developer",
    projectTitle: "Chiyo Salon POS System",
    year: "2026",
    description: "Digital POS management system for salon transactions, service tracking, and employee management."
  },
  {
    id: "pt-mutu",
    name: "PT Mutu Teknologi Digital",
    role: "Front-End Developer",
    projectTitle: "Company Profile Website",
    year: "2025",
    description: "Modern IT company profile showcasing digital solutions and company capabilities."
  },
  {
    id: "jokitugasmu",
    name: "JokiTugasmu",
    role: "Front-End Developer",
    projectTitle: "Academic Assistance Landing Page",
    year: "2025",
    description: "Conversion-focused service landing page introducing academic support services."
  },
  {
    id: "shining",
    name: "Shining",
    role: "Front-End Developer",
    projectTitle: "Educational Learning Platform",
    year: "2025",
    description: "Web-based learning platform designed to support digital education and interactive content."
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "volunteerin-id",
    title: "Volunteerin.id",
    shortDescription: "A digital volunteer platform designed to connect volunteers with organizations through accessible event discovery, registration management, and community collaboration features.",
    fullDescription: "Volunteerin.id is a web-based volunteer platform developed to simplify the process of discovering, managing, and participating in social activities. The platform connects volunteers with organizations by providing centralized access to volunteer opportunities across various social sectors.\n\nBuilt with a responsive Single Page Application (SPA) approach, the platform enables users to explore events, register for activities, manage participation history, and interact with volunteer programs through an intuitive interface.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "React.js & PostgreSQL",
    techReason: "Dipilih karena React.js memungkinkan pengembangan antarmuka yang interaktif dan responsif, sementara PostgreSQL digunakan untuk mengelola data pengguna, event volunteer, dan aktivitas secara terstruktur dengan performa yang stabil.",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "PostgreSQL"],
    techStackDetails: [
      { name: "React.js", description: "For building reusable and interactive UI components." },
      { name: "JavaScript", description: "For dynamic client-side application logic and state rendering." },
      { name: "Tailwind CSS", description: "For styling the UI efficiently with responsive utility classes." },
      { name: "PostgreSQL", description: "For managing users, volunteer events, and application data with reliable performance." }
    ],
    demoUrl: "https://example.com/demo/volunteerin",
    githubUrl: "https://github.com/wahyuanang/volunteerin",
    features: [
      "Volunteer event discovery and exploration",
      "Event registration and participation tracking",
      "User profile and volunteer history management",
      "Organization event management",
      "Responsive interface optimized for various devices",
      "Structured volunteer activity information"
    ],
    client: "Personal Project",
    timeline: "2025",
    role: "Full-Stack Developer",
    projectType: "personal"
  },
  {
    id: "company-profile-website",
    title: "Company Profile Website",
    shortDescription: "A professional company profile website developed to showcase company services, products, portfolio, and digital presence through a modern and responsive interface.",
    fullDescription: "This project is an IT company profile website designed to represent the company's identity, services, and portfolio in a professional digital platform.\n\nThe website focuses on clear information presentation, structured content hierarchy, and responsive design to provide an engaging experience for potential clients and partners.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js & TypeScript",
    techReason: "Dipilih untuk menghasilkan website yang cepat, scalable, dan maintainable dengan performa optimal melalui modern web architecture.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    techStackDetails: [
      { name: "Next.js", description: "For fast server-side rendering, routing, and optimal SEO performance." },
      { name: "TypeScript", description: "For type-safe code architecture and reliable component development." },
      { name: "Tailwind CSS", description: "For creating a modern, sleek, and responsive corporate design." },
      { name: "Supabase", description: "For backend data management and dynamic portfolio showcase content." }
    ],
    demoUrl: "https://example.com/demo/company-profile",
    githubUrl: "https://github.com/wahyuanang/company-profile",
    features: [
      "Company profile presentation",
      "Service and product showcase",
      "Portfolio showcase",
      "Responsive modern layout",
      "Dynamic content management",
      "Optimized performance across devices"
    ],
    client: "Client Project",
    timeline: "2025",
    role: "Front-End Developer",
    projectType: "client"
  },
  {
    id: "food-catering-landing-page",
    title: "Food Catering Landing Page",
    shortDescription: "A modern landing page developed to promote catering services through attractive visuals, clear information structure, and optimized customer engagement.",
    fullDescription: "This project is a food catering landing page designed to showcase menu offerings, services, and ordering information in an attractive and user-friendly interface.\n\nThe website focuses on visual hierarchy, responsive layouts, and strategic call-to-action sections to improve customer interaction and support business marketing goals.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "React.js",
    techReason: "React.js was used to create reusable components and dynamic interfaces, combined with Tailwind CSS for efficient styling and responsive design implementation.",
    tags: ["React.js", "Tailwind CSS"],
    techStackDetails: [
      { name: "React.js", description: "For building reusable menu components and interactive page sections." },
      { name: "Tailwind CSS", description: "For implementing visual hierarchy and responsive mobile layouts." }
    ],
    demoUrl: "https://example.com/demo/catering",
    githubUrl: "https://github.com/wahyuanang/catering",
    features: [
      "Catering service showcase",
      "Menu presentation",
      "Responsive design",
      "Call-to-action ordering section",
      "Modern visual interface"
    ],
    client: "Personal Project",
    timeline: "Oct 2025 - Dec 2025",
    role: "Front-End Developer",
    projectType: "personal"
  },
  {
    id: "nusantara-outdoor",
    title: "Nusantara Outdoor",
    shortDescription: "A camping equipment rental website designed to help users explore products, discover rental services, and easily access outdoor equipment information.",
    fullDescription: "Nusantara Outdoor is a responsive rental platform developed to provide an easy and engaging experience for customers looking for camping equipment.\n\nThe website presents available products, rental information, and outdoor services through a modern interface designed to improve accessibility and customer experience.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js & TypeScript",
    techReason: "Next.js provides optimized performance and scalable architecture, while TypeScript improves code reliability and maintainability during development.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStackDetails: [
      { name: "Next.js", description: "For fast page transitions and optimized equipment rental catalog rendering." },
      { name: "TypeScript", description: "For type-safe props and reliable state management." },
      { name: "Tailwind CSS", description: "For designing a clean, outdoor-themed responsive user interface." }
    ],
    demoUrl: "https://example.com/demo/outdoor",
    githubUrl: "https://github.com/wahyuanang/outdoor",
    features: [
      "Outdoor equipment catalog",
      "Product information display",
      "Responsive design",
      "Modern landing page experience",
      "User-friendly navigation"
    ],
    client: "Personal Project",
    timeline: "2025",
    role: "Front-End Developer",
    projectType: "personal"
  },
  {
    id: "industri-pati-jaya",
    title: "Industri Pati Jaya",
    shortDescription: "A production and distribution management system developed to streamline operational workflows, employee assignments, and delivery monitoring.",
    fullDescription: "Industri Pati Jaya is a management system developed to support daily operations of tofu, tempeh, and bean sprout production and distribution.\n\nThe platform provides role-based access for administrators and employees, allowing task management, delivery tracking, and operational monitoring through a centralized system.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Laravel & MySQL",
    techReason: "Laravel was selected for building structured backend systems, while MySQL manages operational data such as employees, products, tasks, and reports efficiently.",
    tags: ["Laravel", "PHP", "MySQL"],
    techStackDetails: [
      { name: "Laravel", description: "For building MVC backend architecture, authentication, and API endpoints." },
      { name: "PHP", description: "For server-side processing and operational workflow automation." },
      { name: "MySQL", description: "For managing employee records, delivery assignments, and production reports." }
    ],
    demoUrl: "https://example.com/demo/pati-jaya",
    githubUrl: "https://github.com/wahyuanang/pati-jaya",
    features: [
      "Employee management",
      "Delivery task assignment",
      "Operational monitoring",
      "Reporting system",
      "Role-based authentication",
      "Mobile responsive interface"
    ],
    client: "Management Industri Pati Jaya",
    timeline: "Nov 2025 - Dec 2025",
    role: "Full-Stack Developer",
    projectType: "client"
  },
  {
    id: "chiyo-salon-pos",
    title: "Chiyo Salon POS",
    shortDescription: "A point-of-sale management system developed to help salon businesses manage transactions, services, employees, and operational data efficiently.",
    fullDescription: "Chiyo Salon POS is a digital management system designed to simplify salon operations including transaction management, service tracking, and employee activities.\n\nThe platform helps salon owners monitor business activities through an efficient and centralized system.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js",
    techReason: "Next.js was used to create a fast and scalable web application with a modern interface, while MySQL manages transactional and business-related data.",
    tags: ["Next.js", "Tailwind CSS", "MySQL"],
    techStackDetails: [
      { name: "Next.js", description: "For building a fast, modern point-of-sale dashboard interface." },
      { name: "Tailwind CSS", description: "For efficient styling of sales monitoring screens and service tables." },
      { name: "MySQL", description: "For managing transactional data, services, and employee records." }
    ],
    demoUrl: "https://example.com/demo/chiyo-pos",
    githubUrl: "https://github.com/wahyuanang/chiyo-pos",
    features: [
      "Point of sale transaction system",
      "Service management",
      "Employee management",
      "Sales monitoring",
      "Responsive dashboard"
    ],
    client: "Chiyo Salon",
    timeline: "2026",
    role: "Full-Stack Developer",
    projectType: "client"
  },
  {
    id: "jokitugasmu-landing-page",
    title: "JokiTugasmu Landing Page",
    shortDescription: "A service landing page developed to promote academic assistance services through an attractive, responsive, and conversion-focused website.",
    fullDescription: "JokiTugasmu is a landing page designed to introduce academic support services and help users easily understand available services through structured information and clear call-to-action sections.\n\nThe website focuses on modern UI design, accessibility, and user engagement to improve online presence.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js & TypeScript",
    techReason: "Next.js dan TypeScript dipilih untuk memberikan tampilan landing page interaktif dengan performa optimal dan struktur kode yang mudah dipelihara.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStackDetails: [
      { name: "Next.js", description: "For high-performance landing page rendering and fast load speed." },
      { name: "TypeScript", description: "For type safety across service showcase components." },
      { name: "Tailwind CSS", description: "For creating modern conversion-focused UI layouts." }
    ],
    demoUrl: "https://example.com/demo/jokitugasmu",
    githubUrl: "https://github.com/wahyuanang/jokitugasmu",
    features: [
      "Service showcase",
      "Pricing information",
      "Contact integration",
      "Responsive layout",
      "Modern landing page design"
    ],
    client: "JokiTugasmu",
    timeline: "2025",
    role: "Front-End Developer",
    projectType: "client"
  },
  {
    id: "pt-mutu-teknologi-digital",
    title: "PT Mutu Teknologi Digital",
    shortDescription: "A company profile website developed to showcase IT services, digital solutions, and company capabilities through a modern online presence.",
    fullDescription: "This website was developed for PT Mutu Teknologi Digital as a professional digital platform to introduce company services, expertise, and technology solutions.\n\nThe platform emphasizes modern design, responsive experience, and structured content presentation to strengthen company branding and attract potential clients.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js & TypeScript",
    techReason: "Next.js dan TypeScript dikombinasikan dengan Supabase untuk menghadirkan platform digital perusahaan yang modern, scalable, dan cepat diakses.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    techStackDetails: [
      { name: "Next.js", description: "For fast server-side rendering and corporate web architecture." },
      { name: "TypeScript", description: "For type-safe component development." },
      { name: "Tailwind CSS", description: "For clean corporate branding styling." },
      { name: "Supabase", description: "For dynamic company portfolio content management." }
    ],
    demoUrl: "https://example.com/demo/pt-mutu",
    githubUrl: "https://github.com/wahyuanang/pt-mutu",
    features: [
      "Company profile",
      "Service showcase",
      "Portfolio section",
      "Contact integration",
      "Responsive modern interface"
    ],
    client: "PT Mutu Teknologi Digital",
    timeline: "2025",
    role: "Front-End Developer",
    projectType: "client"
  },
  {
    id: "shining-learning-platform",
    title: "Shining Learning Platform",
    shortDescription: "An educational learning platform developed to provide accessible digital learning experiences through a modern and interactive web interface.",
    fullDescription: "Shining is a web-based learning platform designed to support digital education by providing structured learning content and an engaging user experience.\n\nThe platform focuses on accessibility, responsive design, and intuitive navigation to help users interact with educational materials effectively.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js & TypeScript",
    techReason: "Next.js & TypeScript dipilih untuk mendukung platform edukasi digital dengan komponen interaktif, navigasi intuitif, dan kecepatan akses tinggi.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStackDetails: [
      { name: "Next.js", description: "For interactive learning content rendering and fast routing." },
      { name: "TypeScript", description: "For type-safe data handling across educational modules." },
      { name: "Tailwind CSS", description: "For accessible, clean educational UI components." }
    ],
    demoUrl: "https://example.com/demo/shining",
    githubUrl: "https://github.com/wahyuanang/shining",
    features: [
      "Learning content management",
      "Interactive interface",
      "Responsive design",
      "Modern educational platform UI",
      "User-friendly navigation"
    ],
    client: "Shining",
    timeline: "2025",
    role: "Front-End Developer",
    projectType: "client"
  }
];

export const blogsData: BlogPost[] = [
  {
    id: "mastering-nextjs-14",
    title: "Mastering Next.js 14 App Router and Server Components",
    date: "Aug 02, 2026",
    readTime: "5 min read",
    excerpt: "Learn how to build lightning-fast web applications with Next.js 14 App Router, Server Actions, and optimal caching strategies.",
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Wahyu Anang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `
Next.js 14 brings massive performance improvements and streamlined developer experience through the App Router architecture.

### Why App Router?

The App Router leverages React Server Components (RSC) to minimize client-side JavaScript bundles while enabling instant initial page loads.

Key benefits include:
- **Server First Architecture**: Reduce client bundle sizes dramatically.
- **Nested Layouts**: Share layout components across routes effortlessly.
- **Server Actions**: Handle form submissions and backend mutations without API boilerplate.

### Getting Started

To create a clean Next.js project with App Router:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
\`\`\`

By organizing your data cleanly in dedicated files like \`data.ts\`, you can maintain code readability and separation of concerns across your portfolio projects.
    `
  },
  {
    id: "designing-dark-mode-ui",
    title: "Designing Stunning Dark Mode User Interfaces with Tailwind",
    date: "Jul 20, 2026",
    readTime: "4 min read",
    excerpt: "Key principles for building high-contrast, visually pleasing dark interfaces that don't strain the eyes.",
    category: "UI/UX Design",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Wahyu Anang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `
Dark mode UI design requires thoughtful color choices. Simply turning white backgrounds into pure black often creates overly harsh contrast.

### Key Dark Mode Design Rules

1. **Avoid Pure Black (\`#000000\`)**: Use deep dark slates or purples like \`#0a0a0f\` or \`#12121c\` for base backgrounds.
2. **Elevate with Shadows & Layers**: Use lighter surface tones for cards (\`#181826\`) to create depth without relying on heavy borders.
3. **Vibrant Accent Colors**: A rich purple accent (\`#a855f7\`) combined with glowing ambient blurs brings life to a dark layout.
    `
  },
  {
    id: "framer-motion-animations",
    title: "Creating Micro-Interactions with Framer Motion",
    date: "Jun 15, 2026",
    readTime: "6 min read",
    excerpt: "A practical guide to adding fluid scroll animations, hover gestures, and page transitions to React apps.",
    category: "Animation",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Wahyu Anang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `
Micro-interactions transform a static website into a living, responsive application.

### Simple Reveal Animation with Framer Motion

\`\`\`tsx
import { motion } from 'framer-motion';

export const FadeInCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
\`\`\`

With subtle hover transforms and view animations, your portfolio leaves a lasting impression on visitors.
    `
  }
];
