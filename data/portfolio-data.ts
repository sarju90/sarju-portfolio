// Data for Sarju Dharsandiya Portfolio
import { Skill, Project, Experience } from '@/types';

export const personalInfo = {
  name: "Sarju Dharsandiya",
  title: "Software Development Engineer",
  tagline: "Transforming ideas into seamless digital experiences.",
  email: "dharsandiyasarju.it@gmail.com",
  phone: "+91 9016161800",
  location: "Rajkot, Gujarat, India",
  github: "https://github.com/sarju90",
  linkedin: "https://linkedin.com/in/sarju-dharsandiya",
  whatsapp: "https://wa.me/9016161800",
  experience: "3+ years",
  education: "B.Tech in Information & Technology",
  bio: `Hi! I'm Sarju Dharsandiya, a passionate and dedicated software development engineer with a deep love for creating scalable, innovative web solutions. Over the years, I've honed my skills in designing elegant front-end interfaces and building robust back-end systems.

My journey began with a curiosity for technology, which quickly grew into a career that I am immensely proud of. I believe in staying ahead of the curve, continuously learning, and adopting the latest technologies to deliver exceptional results for my clients and projects.

Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers to help them achieve their goals.`
};

export const skills: Skill[] = [
  { name: "React.js", category: "Core Tech" },
  { name: "Next.js", category: "Core Tech" },
  { name: "TypeScript", category: "Core Tech" },
  { name: "JavaScript", category: "Core Tech" },
  { name: "HTML5", category: "Core Tech" },
  { name: "CSS3", category: "Core Tech" },
  { name: "SCSS", category: "Core Tech" },
  { name: "Tailwind CSS", category: "UI Frameworks" },
  { name: "Material UI", category: "UI Frameworks" },
  { name: "Reactstrap", category: "UI Frameworks" },
  { name: "Styled Components", category: "UI Frameworks" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Git", category: "Dev Tools" },
  { name: "GitHub", category: "Dev Tools" },
  { name: "Bitbucket", category: "Dev Tools" },
  { name: "Postman", category: "Dev Tools" },
  { name: "Insomnia", category: "Dev Tools" },
  { name: "VS Code", category: "Dev Tools" },
  { name: "Redux Toolkit", category: "State Management" },
  { name: "Context API", category: "State Management" },
  { name: "Cypress", category: "Testing" },
  { name: "React Native", category: "Mobile" },
];

export const projects: Project[] = [
  {
    title: "Smarty Shop",
    description: "A scalable e-commerce platform with responsive UI.",
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://smarty-shop.vercel.app/",
    category: "E-commerce"
  },
  {
    title: "EventHive",
    description: "An advanced event management platform allowing users to organize, track, and manage events effortlessly.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    liveUrl: "https://sarju-eventhive.vercel.app/",
    category: "Event Management"
  },
  {
    title: "Shofy",
    description: "A complete full-stack E-commerce platform with modern UI, seamless shopping experience, and secure payment integration.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://shofy-frontend.vercel.app/",
    category: "E-commerce"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills, projects, and experiences in web development.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Portfolio"
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer",
    company: "Zignuts Technolab",
    location: "Gandhinagar, Gujarat",
    duration: "Aug 2025 – Present",
    description: "Currently working as a Software Development Engineer, building scalable and optimized web applications. Leading development of responsive web applications using React.js and Next.js. Collaborate with designers and backend teams to deliver clean, accessible, and responsive UIs.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    type: "work"
  },
  {
    title: "Jr. Software Development Engineer",
    company: "Zignuts Technolab",
    location: "Gandhinagar, Gujarat",
    duration: "Aug 2023 – June 2025",
    description: "Worked as Junior Software Development Engineer, contributing to various web development projects. Assisted in building responsive UIs and integrating APIs using React.js. Gained hands-on experience with JavaScript, state management, and frontend workflows.",
    skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript (ES6+)", "Git"],
    type: "work"
  },
  {
    title: "Internship",
    company: "Zignuts Technolab",
    location: "Gandhinagar, Gujarat",
    duration: "Jan 2023 – June 2023",
    description: "Worked as an intern, contributing to various web development projects. Assisted in building responsive UIs and integrating APIs using React.js. Gained hands-on experience with JavaScript, state management, and basic frontend workflows.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Git"],
    type: "work"
  },
  {
    title: "Bachelor's in Information & Technology",
    company: "Charusat University",
    location: "Changa, Gujarat",
    duration: "2019 – 2023",
    description: "Completed Bachelor's degree in Information & Technology, gaining expertise in software development and web technologies. Built a strong foundation in programming paradigms and software engineering principles.",
    skills: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
    type: "education"
  }
];

// Education Data for Knowledge Section
export const education = {
  academic: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Charusat University",
      location: "Changa, Gujarat",
      duration: "2019 – 2023",
      cgpi: "8.99",
      description: "Specialized in Information Technology with a focus on software development, data structures, and modern web technologies. Built a strong foundation in programming paradigms and software engineering principles.",
      subjects: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering",
        "Web Development",
        "Operating Systems",
        "Computer Graphics"
      ],
      achievements: [
        "Graduated with Distinction (CGPI 8.99/10)",
        "Active member of coding club and tech societies",
        "Participated in multiple hackathons and coding competitions",
        "Led team projects and collaborative development initiatives"
      ],
      projects: [
        { name: "Shofy - Full-Stack E-commerce Platform", url: "https://shofy-frontend.vercel.app/" },
        { name: "EventHive - Event Management Platform", url: "https://sarju-eventhive.vercel.app/" },
        { name: "Smarty Shop - E-commerce Platform", url: "https://smarty-shop.vercel.app/" },
        { name: "Portfolio Website with Responsive Design", url: "#" }
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Gujarat Secondary and Higher Secondary Education Board",
      location: "Rajkot, Gujarat",
      duration: "2017 – 2019",
      description: "Completed higher secondary education with Science stream, focusing on Mathematics, Physics, and Computer Science. Developed strong analytical and problem-solving skills.",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ],
      achievements: [
        "Active participation in science exhibitions and competitions",
        "School-level programming competition winner",
        "Mathematics and Computer Science merit recognition"
      ]
    }
  ],
  professional: [
    {
      title: "Advanced React.js Development",
      provider: "Meta (Facebook)",
      year: "2023",
      description: "Comprehensive certification covering advanced React concepts, performance optimization techniques, and modern development practices.",
      skills: ["React.js", "React Hooks", "Context API", "Performance Optimization"],
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/react"
    },
    {
      title: "Next.js Conference 2023",
      provider: "Vercel",
      year: "Oct 2023",
      description: "Attended virtual conference learning about latest Next.js features, performance improvements, and modern deployment strategies.",
      skills: ["Next.js 14", "App Router", "Server Components", "Edge Runtime"],
      credentialUrl: "https://nextjs.org/conf"
    },
    {
      title: "Frontend Masters Workshop",
      provider: "Frontend Masters",
      year: "2023",
      description: "Intensive workshop covering advanced frontend development techniques, testing strategies, and modern tooling.",
      skills: ["TypeScript", "Testing", "Performance", "Accessibility"],
      credentialUrl: "https://frontendmasters.com/"
    },
    {
      title: "JavaScript Algorithms Bootcamp",
      provider: "Udemy",
      year: "2022",
      description: "Intensive bootcamp focusing on algorithmic thinking, data structure implementation, and coding interview preparation.",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Big O Notation"],
      credentialUrl: "https://www.udemy.com/certificate/javascript-algorithms"
    }
  ],
  lifelong: [
    {
      title: "Supabase Crash Course - Build a Full Stack App",
      source: "YouTube / Video",
      duration: "Ongoing",
      status: "in-progress" as const,
      description: "Comprehensive introduction to Supabase. This full course covers database management, authentication, and standard backend patterns for modern web apps.",
      topics: ["Supabase", "Database Design", "Auth & RLS", "PostgreSQL"],
      url: "https://youtu.be/Q7P20fHJlm4?si=7H_bJK62iJloU2ZI"
    },
    {
      title: "React Native CLI - Step by Step",
      source: "YouTube / Hitesh Choudhary",
      duration: "Ongoing",
      status: "in-progress" as const,
      description: "A complete playlist by Hitesh Choudhary covering React Native CLI. Learning to build native Android and iOS apps with advanced concepts and hooks.",
      topics: ["React Native", "Mobile Dev", "Hooks", "Native Modules"],
      url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c"
    },
    {
      title: "Next.js Full Course - Beginner to Advanced (7 Hrs)",
      source: "YouTube / Codevolution",
      duration: "Completed",
      status: "completed" as const,
      description: "The complete guide by Codevolution. A 7-hour deep dive covering every aspect of Next.js from routing and rendering to advanced server actions and deployment.",
      topics: ["Next.js 15", "App Router", "Server Components", "Data Fetching"],
      url: "https://www.youtube.com/watch?v=ZjAqacIC_3c"
    },
    {
      title: "Namaste JavaScript (Advanced JS)",
      source: "YouTube / Akshay Saini",
      duration: "Completed",
      status: "completed" as const,
      description: "Mastering the core engines of JavaScript. Deep understanding of Hoisting, Closures, Event Loop, Prototypes, and Asynchronous JS under the hood.",
      topics: ["Closures", "Event Loop", "Promises", "Execution Context"],
      url: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP"
    },
    {
      title: "System Design Primer",
      source: "GitHub / YouTube",
      duration: "Completed",
      status: "completed" as const,
      description: "Learning how to design large-scale systems. Covering load balancing, caching strategies, database sharding, and microservices architecture.",
      topics: ["Scalability", "System Architecture", "Load Balancing", "Caching"],
      url: "https://github.com/donnemartin/system-design-primer"
    }
  ]
};
