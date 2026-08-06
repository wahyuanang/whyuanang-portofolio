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

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  primaryTech: string;
  techReason: string;
  tags: string[];
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
  headline: "I am an Informatics student passionate about programming, especially in the field of Web Development. I continuously strive to improve my skills and knowledge while keeping up with the latest technological developments.",
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
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
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
  // {
  //   role: "Freelance Fontend Developer",
  //   company: "Area Solution",
  //   year: "Januari 2026 - Present",
  //   duration: "8 bulan",
  //   location: "Daerah Istimewa Yogyakarta, Indonesia",
  //   bullets: [
  //     "Developing scalable, responsive web application interfaces using modern frontend frameworks and clean code principles."
  //   ]
  // },
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
    year: "Des 2025",
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
    id: "tech-studio",
    name: "Tech Studio Inc.",
    role: "Frontend Developer",
    projectTitle: "Real-time Communication App",
    year: "2024",
    description: "Built WebSocket-enabled real-time chat interface with custom markdown rendering and Next.js."
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "chat-app",
    title: "Chat App",
    shortDescription: "A real-time AI conversational workspace with custom persona prompts, markdown rendering, and voice recognition.",
    fullDescription: "A full-featured real-time Chat Application designed for seamless team communication and AI assistant interactions. Built with state-of-the-art WebSockets and modern UI design principles, featuring custom chat channels, markdown message formatting, theme toggling, and file attachment support.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js & WebSockets",
    techReason: "Dipilih karena Next.js mendukung Server-Side Rendering yang sangat cepat serta integrasi WebSockets untuk pesan instan real-time secara efisien.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    demoUrl: "https://example.com/demo/chat-app",
    githubUrl: "https://github.com/example/chat-app",
    features: [
      "Real-time instant messaging using WebSockets",
      "AI Assistant integration with customizable prompts",
      "Responsive dark mode interface built with Tailwind CSS",
      "Full end-to-end message encryption & privacy controls",
      "Rich media and file attachment previews"
    ],
    client: "Tech Studio Inc.",
    timeline: "3 Months",
    role: "Lead Full-Stack Developer",
    projectType: "client"
  },
  {
    id: "crypto-dashboard",
    title: "Crypto Dashboard",
    shortDescription: "Interactive crypto asset analytics dashboard with live market updates, interactive charts, and portfolio alerts.",
    fullDescription: "An advanced cryptocurrency tracker dashboard presenting real-time market data, interactive line charts, price trend indicators, and customized alert triggers for crypto investors.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "React.js & Chart.js",
    techReason: "React dipilih karena fleksibilitas state management komponen dan performa tinggi saat merender grafik data harga kripto yang berubah cepat.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://example.com/demo/crypto",
    githubUrl: "https://github.com/example/crypto",
    features: [
      "Live WebSocket price ticker streaming",
      "Interactive candlestick and portfolio line charts",
      "Personalized watchlist and price alert notifications",
      "Dark mode aesthetic optimized for data density"
    ],
    client: "Fintech Ventures",
    timeline: "2 Months",
    role: "Frontend Engineer",
    projectType: "client"
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Platform",
    shortDescription: "Modern minimalist shopping platform with instant search, stripe payments, and seamless checkout experience.",
    fullDescription: "A high-performance headless e-commerce store optimized for maximum conversion and speed. Features instant fuzzy search, dynamic cart drawer, Stripe payment gateway, and customer order tracking.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Next.js & Stripe",
    techReason: "Penggunaan Next.js App Router memberikan skor SEO luar biasa dan load time instan yang sangat krusial untuk konversi toko online.",
    tags: ["Next.js", "Stripe API", "Tailwind CSS", "Zustand"],
    demoUrl: "https://example.com/demo/store",
    githubUrl: "https://github.com/example/store",
    features: [
      "Instant client-side product filter & search",
      "Stripe payment checkout integration",
      "Optimized images and lazy-loading for lightning speed",
      "Admin inventory and order dashboard"
    ],
    client: "Urban Retail Co.",
    timeline: "4 Months",
    role: "Full-Stack Engineer",
    projectType: "client"
  },
  {
    id: "saas-landing-page",
    title: "SaaS Landing Page",
    shortDescription: "High-converting landing page built for modern B2B SaaS startup product launches.",
    fullDescription: "A sleek, conversion-focused SaaS landing page crafted with modern micro-animations, glassmorphism card design, interactive pricing toggles, and customer testimonial sliders.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Tailwind CSS & Framer Motion",
    techReason: "Framer Motion memungkinkan animasi mikro yang halus saat di-scroll, menciptakan kesan produk SaaS yang sangat profesional dan modern.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com/demo/saas",
    githubUrl: "https://github.com/example/saas",
    features: [
      "Fluid Framer Motion scroll and view animations",
      "Interactive product feature preview tabs",
      "Responsive design optimized across mobile and desktop",
      "SEO friendly metadata and lightning fast Web Vitals"
    ],
    client: "CloudScale SaaS",
    timeline: "1 Month",
    role: "UI/UX Developer",
    projectType: "personal"
  },
  {
    id: "creative-portfolio",
    title: "Creative Portfolio",
    shortDescription: "Interactive 3D glassmorphic portfolio showcase for digital artists and front-end engineers.",
    fullDescription: "An immersive creative portfolio showcasing artwork and projects through interactive 3D cards, smooth page transitions, dynamic ambient lighting, and subtle audio micro-feedback.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "Three.js & React",
    techReason: "Three.js dipilih untuk menghadirkan interaksi 3D glassmorphic yang interaktif bagi pengunjung portofolio.",
    tags: ["React", "Three.js", "Tailwind CSS"],
    demoUrl: "https://example.com/demo/portfolio",
    githubUrl: "https://github.com/example/portfolio",
    features: [
      "Glassmorphism dark theme UI system",
      "Custom cursor and smooth scroll effects",
      "Modular project detail modal and dedicated page routes"
    ],
    client: "Personal Project",
    timeline: "3 Weeks",
    role: "Creator & Engineer",
    projectType: "personal"
  },
  {
    id: "task-workflow-app",
    title: "Task Workflow App",
    shortDescription: "Kanban task tracking web application with drag-and-drop support, team boards, and automated reminders.",
    fullDescription: "A productivity tool built to streamline team workflows with customizable Kanban columns, drag-and-drop task cards, file attachments, and activity timelines.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1200&q=80",
    primaryTech: "TypeScript & Prisma",
    techReason: "TypeScript menjamin type-safety ketat saat mengelola status tugas Kanban antar anggota tim tanpa bug runtime.",
    tags: ["TypeScript", "Next.js", "Prisma", "Tailwind CSS"],
    demoUrl: "https://example.com/demo/task",
    githubUrl: "https://github.com/example/task",
    features: [
      "Drag-and-drop task board management",
      "Team collaboration & member assignment",
      "Automated deadline notifications and reminders"
    ],
    client: "Productivity Inc.",
    timeline: "2 Months",
    role: "Full-Stack Developer",
    projectType: "personal"
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
