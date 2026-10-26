export interface Project {
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Frontend" | "Web App";
  description: string;
  points: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
  category: "AI & ML" | "Frontend & React" | "Full-Stack & CS" | "Professional";
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export const PERSONAL_INFO = {
  name: "Md. Kamruzzaman",
  preferredName: "Kamruzzaman Sohel",
  role: "Frontend Developer & Machine Learning Enthusiast",
  location: "Dhaka, Bangladesh",
  email: "sohel.eightb@gmail.com",
  phone: "+880 1408004446",
  github: "https://github.com/Kamruzzaman2200",
  linkedin: "https://linkedin.com/in/kamruzzaman-sohel",
  portfolio: "https://kamruzzaman2200.github.io/My-Portfolio",
  resumePath: "/Md_Kamruzzaman_CV.pdf",
  profileImage: "/profile.jpg",
  summary:
    "Passionate Frontend Developer and Computer Science graduate from BUBT with strong expertise in React, JavaScript, modern animation pipelines, and Machine Learning. Proven experience delivering high-performance, responsive web applications and verified certifications from Meta, IBM, Stanford Online, and HackerRank.",
  stats: [
    { label: "Years Coding", value: "3+" },
    { label: "Production Projects", value: "10+" },
    { label: "Verified Certifications", value: "9" },
    { label: "Academic CGPA", value: "3.38" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React 19 / 18" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS v4 / v3" },
      { name: "DaisyUI" },
      { name: "GSAP & Lenis" },
      { name: "HTML5 & CSS3" },
      { name: "REST API Integration" },
      { name: "Responsive Layouts" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Firebase (Auth & Firestore)" },
      { name: "JWT Authentication" },
      { name: "REST API Development" },
      { name: "MySQL" },
      { name: "C# / .NET" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Supervised Learning" },
      { name: "Regression & Classification" },
      { name: "Neural Networks" },
      { name: "Decision Trees" },
      { name: "Python" },
      { name: "NumPy" },
      { name: "scikit-learn" },
      { name: "TensorFlow" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Vercel & Netlify" },
      { name: "Postman" },
      { name: "Figma (UI/UX)" },
      { name: "Turbopack" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Moho",
    subtitle: "Full-Stack Restaurant Ordering Platform",
    category: "Full-Stack",
    description:
      "A complete food ordering platform with customer cart flows, secure checkout, payment gateway integration, and a role-based admin dashboard for menu and order management.",
    points: [
      "Built with React front-end and a secure Node.js & Express REST API backed by MongoDB.",
      "Integrated end-to-end checkout with online payment gateway and JWT user authentication.",
      "Created an administrative control center with full CRUD operations on menu and live order queues.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Payment Gateway", "Vercel"],
    liveUrl: "https://gadgetshop-client.vercel.app",
    githubUrl: "https://github.com/Kamruzzaman2200",
  },
  {
    title: "Book Vibe",
    subtitle: "Interactive Book Discovery & Reading Tracker",
    category: "Frontend",
    description:
      "A fast single-page book discovery and reading-list application with client-side dynamic routing, category filtering, and persistent wishlist state.",
    points: [
      "Dynamic view routing and multi-category sorting for curated reading catalogs.",
      "Persistent read-list and wishlist state management across user browsing sessions.",
      "Optimized production deployment with automated CI/CD on Netlify.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "React Router", "Netlify"],
    liveUrl: "https://book-vibeee.netlify.app",
    githubUrl: "https://github.com/Kamruzzaman2200",
  },
  {
    title: "Estate Echoes",
    subtitle: "Modern Real Estate Listing Platform",
    category: "Frontend",
    description:
      "Dynamic property showcase platform featuring structured architectural listings, interactive detail views, and filtering mechanisms.",
    points: [
      "Engineered reusable modular component architecture for property cards and detail screens.",
      "Consumes structured property data with live price and category filters.",
      "Sleek mobile-responsive layouts built with modern CSS3 and animations.",
    ],
    tech: ["React", "JavaScript", "React Router", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/Kamruzzaman2200",
  },
  {
    title: "Retro Forum",
    subtitle: "Community Discussion & Discussion Board",
    category: "Web App",
    description:
      "Dynamic community forum interface featuring live post count updates, category filtering, read status tracking, and REST API consumption.",
    points: [
      "High-performance vanilla JavaScript DOM updates and REST API data binding.",
      "Category filters with interactive post interaction counters.",
      "Accessible design adhering to semantic web standards.",
    ],
    tech: ["JavaScript (ES6)", "HTML5", "CSS3", "REST API", "DOM Automation"],
    githubUrl: "https://github.com/Kamruzzaman2200",
  },
  {
    title: "Personal Portfolio v1",
    subtitle: "Interactive Showcase & Project Gallery",
    category: "Frontend",
    description:
      "Original portfolio deployment with tabbed navigation, live project showcases, and responsive multi-device design.",
    points: [
      "Designed clean responsive interfaces with custom CSS animations and interactive tabs.",
      "Showcases foundational web capabilities and cross-browser responsiveness.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://kamruzzaman2200.github.io/My-Portfolio",
    githubUrl: "https://github.com/Kamruzzaman2200/My-Portfolio",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford Online",
    issueDate: "October 2025",
    verifyUrl: "https://coursera.org/verify",
    image: "/certificates/1761904781016.jpg",
    category: "AI & ML",
  },
  {
    id: "cert-2",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford Online",
    issueDate: "October 2025",
    credentialId: "MC03UH6QZ0U6",
    verifyUrl: "https://coursera.org/verify/MC03UH6QZ0U6",
    image: "/certificates/1762026919703.jpg",
    category: "AI & ML",
  },
  {
    id: "cert-3",
    title: "Frontend Developer (React)",
    issuer: "HackerRank Role Certification",
    issueDate: "December 2024",
    credentialId: "34E1C6A7ED41",
    verifyUrl: "https://www.hackerrank.com/certificates/34E1C6A7ED41",
    image: "/certificates/1734884627694.jpg",
    category: "Frontend & React",
  },
  {
    id: "cert-4",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank Skill Certification",
    issueDate: "December 2024",
    credentialId: "09967E1AFB7B",
    verifyUrl: "https://www.hackerrank.com/certificates/09967E1AFB7B",
    image: "/certificates/1734885056667.jpg",
    category: "Frontend & React",
  },
  {
    id: "cert-5",
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    issueDate: "December 2024",
    credentialId: "44W9X5S5CYLX",
    verifyUrl: "https://coursera.org/verify/44W9X5S5CYLX",
    image: "/certificates/1734801925744 (1).jpg",
    category: "Frontend & React",
  },
  {
    id: "cert-6",
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM",
    issueDate: "December 2024",
    credentialId: "B1KO6FZVH8EA",
    verifyUrl: "https://coursera.org/verify/B1KO6FZVH8EA",
    image: "/certificates/1734613936082 (1).jpg",
    category: "Full-Stack & CS",
  },
  {
    id: "cert-7",
    title: "C# for .NET Developers",
    issuer: "Board Infinity",
    issueDate: "December 2024",
    credentialId: "47G1YV6JJL4F",
    verifyUrl: "https://coursera.org/verify/47G1YV6JJL4F",
    image: "/certificates/1735155787536 (1).jpg",
    category: "Full-Stack & CS",
  },
  {
    id: "cert-8",
    title: "Complete Web Development Course (MERN Stack)",
    issuer: "Programming Hero (Batch 9)",
    issueDate: "December 2024",
    image: "/certificates/1733156118489.png",
    category: "Full-Stack & CS",
  },
  {
    id: "cert-9",
    title: "Effective Leadership",
    issuer: "HP LIFE, HP Foundation",
    issueDate: "August 2023",
    image: "/certificates/1733323978631.jpg",
    category: "Professional",
  },
];

export const EDUCATION = [
  {
    degree: "B.Sc. (Engg.) in Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT), Dhaka",
    period: "June 2022 – June 2026",
    grade: "CGPA: 3.38 / 4.00",
    description:
      "Core coursework in Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, and Artificial Intelligence.",
  },
  {
    degree: "Higher Secondary Certificate (HSC), Science",
    institution: "Bhola Government College, Bhola",
    period: "2020",
    grade: "Science Group",
    description: "Physics, Chemistry, Higher Mathematics, and ICT foundations.",
  },
  {
    degree: "Secondary School Certificate (SSC), Science",
    institution: "Bhola Government High School, Bhola",
    period: "2018",
    grade: "Science Group",
    description: "Excellence in General Science, Mathematics, and Computer Studies.",
  },
];

export const EXPERIENCES = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Dhaka, Bangladesh",
    period: "2023 – Present",
    highlights: [
      "Engineered custom React and JavaScript web applications for multiple clients.",
      "Translated client requirements and Figma designs into pixel-perfect, responsive code.",
      "Handled complete software delivery lifecycle from architecture to deployment and monitoring.",
    ],
  },
  {
    role: "Founder & Owner",
    company: "Sigma House",
    location: "Online Retail",
    period: "2020 – Present",
    highlights: [
      "Built and scaled an online retail business, managing product catalog, inventory, and logistics.",
      "Delivered reliable customer support and achieved strong repeat purchase metrics.",
      "Executed targeted digital campaigns that expanded market reach and revenue.",
    ],
  },
];
