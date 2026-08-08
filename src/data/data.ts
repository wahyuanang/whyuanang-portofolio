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
  demoUrl?: string;
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
  date?: string;
  readTime?: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  mediumUrl?: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const profileData = {
  name: "Wahyu Anang",
  status: "Available for new Projects",
  headline: "I am an S1 Informatics passionate about programming, especially in the field of Web Development. I continuously strive to improve my skills and knowledge while keeping up with the latest technological developments.",
  cvUrl: "https://drive.google.com/uc?export=download&id=11hK65CUJ9BoEJ4-yGpD17juGkx1Dz9gs",
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
    role: "Freelance Frontend Developer",
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
    id: "volunteerin",
    title: "Volunteerin",
    shortDescription: "A digital volunteer platform designed to connect volunteers with organizations through accessible event discovery, registration management, and community collaboration features.",
    fullDescription: "Volunteerin.id is a web-based volunteer platform developed to simplify the process of discovering, managing, and participating in social activities. The platform connects volunteers with organizations by providing centralized access to volunteer opportunities across various social sectors.\n\nBuilt with a responsive Single Page Application (SPA) approach, the platform enables users to explore events, register for activities, manage participation history, and interact with volunteer programs through an intuitive interface.",
    image: "/images/volunteerin.png",
    primaryTech: "React.js & PostgreSQL",
    techReason: "Dipilih karena React.js memungkinkan pengembangan antarmuka yang interaktif dan responsif, sementara PostgreSQL digunakan untuk mengelola data pengguna, event volunteer, dan aktivitas secara terstruktur dengan performa yang stabil.",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "PostgreSQL"],
    techStackDetails: [
      { name: "React.js", description: "For building reusable and interactive UI components." },
      { name: "JavaScript", description: "For dynamic client-side application logic and state rendering." },
      { name: "Tailwind CSS", description: "For styling the UI efficiently with responsive utility classes." },
      { name: "PostgreSQL", description: "For managing users, volunteer events, and application data with reliable performance." }
    ],
    githubUrl: "https://github.com/Dari-Hati-Mencari-Solusi",
    features: [
      "Volunteer event discovery and exploration",
      "Event registration and participation tracking",
      "User profile and volunteer history management",
      "Organization event management",
      "Responsive interface optimized for various devices",
      "Structured volunteer activity information"
    ],
    client: "Personal Project",
    timeline: "Januari - Juni 2025",
    role: "Front End Development",
    projectType: "personal"
  },
  {
  id: "company-profile-website",
  title: "Gramedusa Company Profile",

  shortDescription: "A professional company profile website for Gramedusa software house designed to showcase digital services, solutions, portfolios, and company identity through a modern, responsive, and SEO-friendly interface.",

  fullDescription: "This project is a company profile website developed for Gramedusa software house as a professional digital platform to introduce technology services, software development solutions, and company portfolios.\n\nThe website was designed with a well-structured information architecture, modern visual design, and an SEO-friendly approach to improve company visibility on search engines. In addition, a responsive design implementation ensures an optimal user experience across various devices.",

  image: "/images/gramedusa.png",

  primaryTech: "Next.js & TypeScript, Supabase",

  techReason: "Selected to build a high-performance company website with scalable code architecture, SEO optimization, and a faster, more modern user experience.",

  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],

  techStackDetails: [
    { 
      name: "Next.js", 
      description: "Used to support server-side rendering, routing systems, SEO optimization, and improve website performance through a modern web architecture." 
    },

    { 
      name: "TypeScript", 
      description: "Used to create more structured code with a secure type system, resulting in more stable component development." 
    },

    { 
      name: "Tailwind CSS", 
      description: "Used to create a modern, professional, consistent, and responsive software house website interface." 
    },

    { 
      name: "Supabase", 
      description: "Used as a backend service to support website data storage and management requirements." 
    }
  ],

  demoUrl: "https://gramedusa.vercel.app",
  githubUrl: "https://github.com/wahyuanang/gramedusa.git",
  features: [
    "Company profile information presentation ",
    "Technology services and solutions showcase",
    "Company portfolio and project showcase",
    "SEO-friendly website structure",
    "Modern layout with professional design",
    "Responsive support across all devices"
  ],
  client: "Gramedusa",
  timeline: "2025",
  role: "Front-End Development",
  projectType: "client"
},

  {
    id: "food-catering-landing-page",
    title: "Food Catering Landing Page",
    shortDescription: "A modern landing page developed to promote catering services through attractive visuals, clear information structure, and optimized customer engagement.",
    fullDescription: "This project is a food catering landing page designed to showcase menu offerings, services, and ordering information in an attractive and user-friendly interface.\n\nThe website focuses on visual hierarchy, responsive layouts, and strategic call-to-action sections to improve customer interaction and support business marketing goals.",
    image: "/images/cateringku.png",
    primaryTech: "Next.js, React.js",
    techReason: "React.js was used to create reusable components and dynamic interfaces, combined with Tailwind CSS for efficient styling and responsive design implementation.",
    tags: ["React.js", "Tailwind CSS"],
    techStackDetails: [
      { name: "React.js", description: "For building reusable menu components and interactive page sections." },
      { name: "Tailwind CSS", description: "For implementing visual hierarchy and responsive mobile layouts." }
    ],
    demoUrl: "https://cateringku-orpin.vercel.app/",
    githubUrl: "https://github.com/wahyuanang/Cateringku.git",
    features: [
      "Catering service showcase",
      "Menu presentation",
      "Responsive design",
      "Call-to-action ordering section",
      "Modern visual interface"
    ],
    client: "Personal Project",
    timeline: "Oct 2025",
    role: "Front-End Development",
    projectType: "personal"
  },
  {
  id: "nusantara-outdoor",

  title: "Nusantara Outdoor",

  shortDescription: "A camping equipment rental website designed for UMKM to simplify product booking through a digital catalog, shopping cart, and automated WhatsApp ordering system.",

  fullDescription: "Nusantara Outdoor is a responsive camping equipment rental website developed to help UMKM manage product bookings digitally through a simple and efficient ordering flow.\n\nThe website allows customers to explore available outdoor equipment, select products, manage items through a shopping cart, fill in personal information, and continue the booking process directly through WhatsApp with an automatically generated message template and rental cost calculation based on selected products.\n\nThis platform is designed to improve customer convenience while helping small businesses provide a more organized and modern rental experience.",

  image: "/images/nusantaraoutdoor.png",

  primaryTech: "Next.js & TypeScript",

  techReason: "Next.js is used to build a fast and scalable website architecture, while TypeScript improves code reliability, maintainability, and development efficiency throughout the project.",

  tags: ["Next.js", "TypeScript", "Tailwind CSS"],

  techStackDetails: [
    { 
      name: "Next.js", 
      description: "Used to build a fast, optimized, and scalable rental website with efficient page rendering and smooth user experience." 
    },

    { 
      name: "TypeScript", 
      description: "Used to create a more reliable code structure through type safety, stable component development, and better maintainability." 
    },

    { 
      name: "Tailwind CSS", 
      description: "Used to design a clean, modern, outdoor-themed interface with responsive layouts across multiple devices." 
    }
  ],

  demoUrl: "https://nusantaraoutdoor.vercel.app",
  // githubUrl: "https://github.com/wahyuanang/outdoor",
  features: [
    "Outdoor equipment product catalog",
    "Product selection and shopping cart system",
    "SEO Friendly",
    "Automatic rental price calculation based on selected items",
    "Customer information form before booking",
    "WhatsApp booking integration with automated message templates",
    "Modern and responsive landing page design"
  ],

  client: "Personal Project",
  timeline: "April 2026",
  role: "Front-End Development",
  projectType: "personal"
},
  {
    id: "industri-pati-jaya",
    title: "Industri Pati Jaya",
    shortDescription: "A production and distribution management system developed to streamline operational workflows, employee assignments, and delivery monitoring.",
    fullDescription: "Industri Pati Jaya is a management system developed to support daily operations of tofu, tempeh, and bean sprout production and distribution.\n\nThe platform provides role-based access for administrators and employees, allowing task management, delivery tracking, and operational monitoring through a centralized system.",
    image: "/images/industripatijaya.png",
    primaryTech: "Laravel & MySQL",
    techReason: "Laravel was selected for building structured backend systems, while MySQL manages operational data such as employees, products, tasks, and reports efficiently.",
    tags: ["Laravel", "PHP", "MySQL"],
    techStackDetails: [
      { name: "Laravel", description: "For building MVC backend architecture, authentication, and API endpoints." },
      { name: "PHP", description: "For server-side processing and operational workflow automation." },
      { name: "MySQL", description: "For managing employee records, delivery assignments, and production reports." }
    ],
    // demoUrl: "https://example.com/demo/pati-jaya",
    githubUrl: "https://github.com/wahyuanang/sumberjaya.git",
    features: [
      "Employee management",
      "Delivery task assignment",
      "Operational monitoring",
      "Reporting system",
      "Role-based authentication",
      "Mobile responsive interface"
    ],
    client: "Management Industri Pati Jaya",
    timeline: "Februari 2026",
    role: "Full-Stack Development",
    projectType: "client"
  },
  {
    id: "chiyo-salon-pos",
    title: "Chiyo Salon POS",
    shortDescription: "A point-of-sale management system developed to help salon businesses manage transactions, services, employees, and operational data efficiently.",
    fullDescription: "Chiyo Salon POS is a digital management system designed to simplify salon operations including transaction management, service tracking, and employee activities.\n\nThe platform helps salon owners monitor business activities through an efficient and centralized system.",
    image: "/images/chiyosalon.png",
    primaryTech: "Next.js, MySQL",
    techReason: "Next.js was used to create a fast and scalable web application with a modern interface, while MySQL manages transactional and business-related data.",
    tags: ["Next.js", "Tailwind CSS", "MySQL"],
    techStackDetails: [
      { name: "Next.js", description: "For building a fast, modern point-of-sale dashboard interface." },
      { name: "Tailwind CSS", description: "For efficient styling of sales monitoring screens and service tables." },
      { name: "MySQL", description: "For managing transactional data, services, and employee records." }
    ],
    demoUrl: "https://chiyosalon.com",
    // githubUrl: "https://github.com/wahyuanang/chiyo-pos",
    features: [
      "Point of sale transaction system",
      "Service management",
      "Employee management",
      "Sales monitoring",
      "Responsive dashboard"
    ],
    client: "Chiyo Salon",
    timeline: "July - August 2026",
    role: "Full-Stack Development",
    projectType: "client"
  },
  {
  id: "jokitugasmu-landing-page",

  title: "JokiTugas Landing Page",

  shortDescription: "A service landing page developed to promote academic assistance services with a simple booking system, service selection, checkout flow, and WhatsApp integration through an attractive and responsive website.",

  fullDescription: "JokiTugasmu is a service landing page designed to introduce academic assistance services and simplify the ordering process through a digital booking system.\n\nThe website allows users to explore available services, select desired packages, review orders through a checkout flow, provide personal information, and send booking requests directly via WhatsApp using an automatically generated message template.\n\nThe platform focuses on modern UI design, accessibility, and user engagement to improve online presence while providing a more organized ordering experience for customers.",

  image: "/images/jokitugas.png",

  primaryTech: "Next.js & TypeScript",

  techReason: "Next.js and TypeScript were selected to deliver an interactive service platform with optimal performance, scalable architecture, and a maintainable code structure.",

  tags: ["Next.js", "TypeScript", "Tailwind CSS"],

  techStackDetails: [

    { 
      name: "Next.js", 
      description: "Used for high-performance page rendering, fast loading speed, and building a scalable service booking website." 
    },

    { 
      name: "TypeScript", 
      description: "Used to improve code reliability through type safety and maintainable service component development." 
    },

    { 
      name: "Tailwind CSS", 
      description: "Used to create modern, clean, and conversion-focused UI layouts with responsive design." 
    }

  ],

  demoUrl: "https://www.jokitugasmu.my.id/",

  features: [
    "Academic service showcase",
    "Service package selection",
    "Checkout and order summary system",
    "Customer information form",
    "Automatic WhatsApp booking integration",
    "Responsive layout",
    "Modern conversion-focused landing page design"
  ],
  client: "JokiTugasmu",
  timeline: "July 2025",
  role: "Front-End Development",
  projectType: "client"
},
  {
    id: "pt-mutu-teknologi-digital",
    title: "PT. Mutu Teknologi Digital",
    shortDescription: "A company profile website developed to showcase IT services, digital solutions, and company capabilities through a modern online presence.",
    fullDescription: "This website was developed for PT Mutu Teknologi Digital as a professional digital platform to introduce company services, expertise, and technology solutions.\n\nThe platform emphasizes modern design, responsive experience, and structured content presentation to strengthen company branding and attract potential clients.",
    image: "/images/mututeknologi.png",
    primaryTech: "Next.js & TypeScript, Supabase",
    techReason: "Next.js dan TypeScript dikombinasikan dengan Supabase untuk menghadirkan platform digital perusahaan yang modern, scalable, dan cepat diakses.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    techStackDetails: [
      { name: "Next.js", description: "For fast server-side rendering and corporate web architecture." },
      { name: "TypeScript", description: "For type-safe component development." },
      { name: "Tailwind CSS", description: "For clean corporate branding styling." },
      { name: "Supabase", description: "For dynamic company portfolio content management." }
    ],
    demoUrl: "https://example.com/demo/pt-mutu",
    // githubUrl: "https://github.com/wahyuanang/pt-mutu",
    features: [
      "Company profile",
      "Service showcase",
      "Portfolio section",
      "SEO Friendly",
      "Contact integration",
      "Responsive modern interface"
    ],
    client: "PT Mutu Teknologi Digital",
    timeline: "2025",
    role: "Fullstack Development",
    projectType: "client"
  },
  {
    id: "shining-learning-platform",
    title: "Shining Learning Platform",
    shortDescription: "An educational learning platform developed to provide accessible digital learning experiences through a modern and interactive web interface.",
    fullDescription: "Shining is a web-based learning platform designed to support digital education by providing structured learning content and an engaging user experience.\n\nThe platform focuses on accessibility, responsive design, and intuitive navigation to help users interact with educational materials effectively.",
    image: "/images/shining.png",
    primaryTech: "Next.js & TypeScript",
    techReason: "Next.js & TypeScript dipilih untuk mendukung platform edukasi digital dengan komponen interaktif, navigasi intuitif, dan kecepatan akses tinggi.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStackDetails: [
      { name: "Next.js", description: "For interactive learning content rendering and fast routing." },
      { name: "TypeScript", description: "For type-safe data handling across educational modules." },
      { name: "Tailwind CSS", description: "For accessible, clean educational UI components." }
    ],
    demoUrl: "https://shining.web.id/",
    // githubUrl: "https://github.com/wahyuanang/shining",
    features: [
      "Learning content management",
      "Interactive interface",
      "SEO Friendly",
      "Responsive design",
      "Modern educational platform UI",
      "User-friendly navigation"
    ],
    client: "Shining",
    timeline: "Jan 2025",
    role: "Front-End Development",
    projectType: "client"
  }
];

export const blogsData: BlogPost[] = [
  {
    id: "pengenalan-dasar-javascript",
    title: "Pengenalan Dasar JavaScript : Konsep Penting dan Komponen Dasar pada JavaScript",
    excerpt: "Panduan lengkap pengenalan konsep modern JavaScript (ES6), sejarah perkembangan ECMAScript, internal vs external script, hingga komponen dasar seperti variabel, looping, function, array, percabangan, dan template literals.",
    category: "JavaScript",
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=80",
    mediumUrl: "https://medium.com/amcc-amikom/pengenalan-dasar-javascript-f2a8f0e8ae17",
    author: {
      name: "Whyuanang__",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `Halo semuanya! Selamat datang di materi pembelajaran web development. Pada kesempatan kali ini kita akan belajar tentang dasar JavaScript modern (ES6).

Sebelum melangkah ke framework seperti React atau Next.js, sangat penting untuk memahami dasar-dasar bahasa JavaScript terlebih dahulu. Seperti filosofi ilmu padi 🌾, pemahaman fundamental yang kokoh akan menghasilkan fondasi pemrograman yang kuat dan berkualitas.

---

### 1. Pengenalan & Sejarah JavaScript

#### Masa Lalu JavaScript
JavaScript dibuat oleh seorang programmer dari Netscape bernama Brendan Eich pada tahun 1995. Bahasa ini sempat mengalami beberapa perubahan nama:
- Awalnya bernama Mocha
- Berubah menjadi LiveScript
- Diubah menjadi JavaScript untuk memanfaatkan popularitas bahasa Java saat itu.

Catatan Penting: Meskipun namanya mirip, JavaScript sama sekali tidak memiliki hubungan teknis langsung dengan bahasa pemrograman Java.

#### Apa itu JavaScript?
JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif dan dinamis. Bersama dengan HTML (struktur) dan CSS (tampilan), JavaScript memberikan logika dan fungsionalitas pada aplikasi web.

#### The Power of JavaScript
Awalnya JavaScript hanya dirancang untuk berjalan di dalam browser. Namun dengan hadirnya Node.js, JavaScript kini dapat dieksekusi di luar browser untuk membangun:
- Backend / REST API Server
- Mobile Applications (React Native)
- Desktop Applications (Electron)
- IoT & Cloud Services

---

### 2. Standarisasi ECMAScript & ES6

Sejak tahun 1997, standardisasi JavaScript dipegang oleh European Computer Manufacturers Association (ECMA), yang menghasilkan spesifikasi ECMAScript.

Pada tahun 2015, dirilis ECMAScript 6 (ES6) yang membawa perubahan besar dan fitur modern:
- Variabel let dan const: Pengaturan scope blok yang lebih aman.
- Arrow Functions: Penulisan fungsi yang lebih ringkas.
- Template Literals: Interpolasi string menggunakan backtick.
- Destructuring Assignment: Ekstraksi nilai array/objek dengan ringkas.
- Classes & Modules: Pemrograman berorientasi objek dan modularitas kode.
- Promises: Penanganan operasi asinkron yang terstruktur.

---

### 3. Penulisan Kode JavaScript

#### Internal JavaScript
Kode JavaScript ditulis langsung di dalam file HTML menggunakan tag <script>:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh Internal JavaScript</title>
    <script>
        function greet() {
            alert("Hello from internal JavaScript!");
        }
    </script>
</head>
<body>
    <button onclick="greet()">Greet</button>
</body>
</html>
\`\`\`

#### External JavaScript
Kode JavaScript dipisahkan ke dalam file berekstensi .js lalu dipanggil via atribut src:

\`\`\`html
<!-- index.html -->
<script src="script.js"></script>
\`\`\`

\`\`\`javascript
// script.js
function greet() {
  alert("Hello from external JavaScript!");
}
\`\`\`

#### ES6 Module
Membagi kode menjadi potongan modular yang dapat digunakan kembali:

\`\`\`javascript
// module1.js
export function add(a, b) {
  return a + b;
}
export const author = "Whyuanang";
\`\`\`

\`\`\`javascript
// module2.js
import { add, author } from "./module1";
console.log(add(5, 3)); // 8
console.log(author);   // Whyuanang
\`\`\`

---

### 4. Komponen Dasar JavaScript

#### A. Variabel (var, let, const)
1. var: Memiliki lingkup fungsi (function scope). Sudah tidak direkomendasikan pada era ES6+.
2. let: Memiliki lingkup blok (block scope), nilainya dapat diubah kembali (reassignable).
3. const: Digunakan untuk konstanta dengan lingkup blok, nilainya tetap dan tidak dapat diubah setelah diinisialisasi.

\`\`\`javascript
let umur = 22;
umur = 23; // Valid

const role = "Frontend Developer";
// role = "Manager"; // Error: Assignment to constant variable.
\`\`\`

#### B. Looping (Perulangan)
- For Loop: Digunakan saat jumlah iterasi sudah diketahui.
- While Loop: Berjalan selama kondisi bernilai true.
- Do...While Loop: Mengeksekusi blok minimal satu kali sebelum mengecek kondisi.

\`\`\`javascript
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iterasi ke-\${i}\`);
}

// While Loop
let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}
\`\`\`

#### C. Functions & Arrow Functions
JavaScript mendukung Regular Function dan Arrow Function:

\`\`\`javascript
// Function Declaration
function sayHello(name) {
  return \`Halo, \${name}!\`;
}

// Arrow Function (ES6)
const greetUser = (name) => {
  return \`Selamat datang, \${name}\`;
};

// Arrow Function ringkas (single expression)
const multiply = (a, b) => a * b;
\`\`\`

#### D. Array
Struktur data untuk menyimpan kumpulan nilai:

\`\`\`javascript
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Apple

// Array multidimensi
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
\`\`\`

#### E. Percabangan (Conditionals)
Mengatur alur logika program berdasarkan evaluasi kondisi:

\`\`\`javascript
const nilai = 85;

if (nilai >= 85) {
  console.log("Grade: A");
} else if (nilai >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
\`\`\`

#### F. Template Literals
Fitur ES6 untuk menggabungkan string dan ekspresi variabel menggunakan backtick (\`) dan sintaks \${ekspresi}:

\`\`\`javascript
const name = "Wahyu Anang";
const greeting = \`Halo \${name}, selamat belajar JavaScript!\`;
console.log(greeting);
\`\`\`

---

### Referensi Pembelajaran Tambahan
- MDN Web Docs - JavaScript Basics
- W3Schools JavaScript Tutorial
- Petani Kode JavaScript

Semoga artikel ini membantu memahami fondasi dasar JavaScript modern! Jangan ragu untuk terus eksplorasi dan berlatih.`
  },
  {
    id: "asynchronous-javascript",
    title: "Final Chapter Front-End: Asynchronous JavaScript",
    excerpt: "Panduan memahami konsep Asynchronous JavaScript, synchronous vs asynchronous, Callback function, Promise, hingga Async/Await dan error handling dalam web modern.",
    category: "Front-End",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    mediumUrl: "https://medium.com/@wahyuanng/final-chapter-frontend-asynchronous-javascript-6a0249aeff5d",
    author: {
      name: "Whyuanang__",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `Dalam pengembangan aplikasi web modern, proses mengambil data dari server atau API membutuhkan waktu. Memahami konsep Asynchronous JavaScript adalah kunci utama agar aplikasi tetap responsif dan tidak mengalami freezing (blocking).

---

### 1. Synchronous vs Asynchronous

- Synchronous (Blocking): Kode dieksekusi secara berurutan baris demi baris. Baris berikutnya harus menunggu baris sebelumnya selesai dieksekusi.
- Asynchronous (Non-blocking): Tugas yang memakan waktu (seperti network request atau timer) dijalankan di latar belakang (Event Loop), sehingga eksekusi kode lainnya tetap berjalan tanpa terhambat.

---

### 2. Evolusi Penanganan Asynchronous

#### A. Callback Function
Metode awal penanganan async dengan menyisipkan fungsi sebagai argumen yang akan dipanggil saat proses selesai:

\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data berhasil diambil");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});
\`\`\`

Kelemahan: Penggunaan callback bertingkat dapat menyebabkan Callback Hell yang sulit dibaca dan dirawat.

#### B. Promise (ES6)
Solusi untuk menghindari callback hell dengan objek yang merepresentasikan hasil operasi masa depan (Pending, Fulfilled, Rejected):

\`\`\`javascript
const getProjectData = () => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve({ id: 1, name: "Portfolio Project" });
    } else {
      reject("Gagal mengambil data");
    }
  });
};

getProjectData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
\`\`\`

#### C. Async / Await (ES8)
Sintaks modern berbasis Promise yang memungkinkan penulisan kode asynchronous dengan gaya synchronous yang bersih dan mudah dibaca:

\`\`\`javascript
async function loadUserData() {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}
\`\`\`

---

Dengan menguasai Async/Await, Anda siap membangun web modern yang terintegrasi dengan REST API, GraphQL, dan backend database.`
  },
  {
    id: "pengenalan-dasar-html",
    title: "Awal Mula dalam Web Development: Pengenalan Dasar HTML",
    excerpt: "Mengenal pondasi utama web development dengan HTML: anatomi tag, elemen semantik, struktur dokumen web, form, dan best practices dalam membangun struktur web modern.",
    category: "Web Development",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    mediumUrl: "https://medium.com/amcc-amikom/awal-mula-dalam-web-development-pengenalan-dasar-html-ac9e452b58cd",
    author: {
      name: "Whyuanang__",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `HTML (HyperText Markup Language) adalah bahasa markah standar yang digunakan untuk membuat struktur halaman web. Setiap website yang kita kunjungi hari ini dibangun dengan pondasi dasar HTML.

---

### 1. Struktur Dasar Dokumen HTML

Setiap dokumen HTML memiliki struktur standar sebagai berikut:

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman Web</title>
</head>
<body>
    <header>
        <h1>Selamat Datang di Website Saya</h1>
    </header>
    <main>
        <p>Ini adalah konten utama halaman.</p>
    </main>
    <footer>
        <p>&copy; 2024 Wahyu Anang</p>
    </footer>
</body>
</html>
\`\`\`

---

### 2. Anatomi Elemen HTML

Elemen HTML terdiri dari:
- Opening Tag: <p>
- Content: Teks atau elemen bersarang di dalamnya
- Closing Tag: </p>
- Attributes: Memberikan informasi tambahan pada elemen (seperti href, src, class, id).

---

### 3. HTML5 Semantic Elements

HTML5 memperkenalkan elemen semantik yang memberikan arti jelas bagi browser dan mesin pencari (SEO):
- <header>: Bagian kepala atau navigasi atas
- <nav>: Kumpulan tautan navigasi
- <main>: Konten utama halaman
- <section>: Bagian mandiri dari suatu topik
- <article>: Konten independen seperti artikel blog atau berita
- <footer>: Bagian kaki halaman (hak cipta, kontak)

Menggunakan elemen semantik yang tepat sangat penting untuk aksesibilitas (web accessibility) dan optimasi SEO.`
  }
];
