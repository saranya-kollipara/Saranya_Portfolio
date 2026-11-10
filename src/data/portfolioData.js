// Centralized editable portfolio data

// Importing project images
import project1Image from '../assets/images/project1.jpg';
import project2Image from '../assets/images/project2.jpg';
import project3Image from '../assets/images/project3.jpg';

export const personalInfo = {
  name: "Kollipara Saranya Naga Lakshmi Padma",
  role: "Computer Science Engineering Student",
  tagline: "Hi, I'm",
  subTitle: "Computer Science Engineering Student",
  bio: "Passionate about programming, software development, and building useful technology solutions.",
  github: "https://github.com/saranya-kollipara",
  linkedin: "https://www.linkedin.com/in/saranya-naga-lakshmi-padma-kollipara-54a71b345",
  email: "saranyanagalakshmipadmak@gmail.com",
  phone: "7287989840",
  resumeUrl: "/resume.pdf",
  stats: {
    internshipsCount: "2+",
    skillsCount: "5+",
    degreeLabel: "CSE Student"
  }
};

export const aboutMe = {
  paragraph: "I am K S N L Padma, a Computer Science Engineering student with an interest in software development and technology. I have developed knowledge in Java, Python, C, MySQL, and Object-Oriented Programming. I have also completed two internships that provided me with practical exposure to professional development environments. I am continuously improving my technical skills and looking forward to building meaningful software solutions."
};

export const skills = [
  {
    name: "Java",
    category: "Programming",
    icon: "☕"
  },
  {
    name: "Python",
    category: "Programming",
    icon: "🐍"
  },
  {
    name: "C",
    category: "Programming",
    icon: "💻"
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "🗄"
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: "</>"
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "</>"
  },
  {
    name: "OOPs",
    category: "Programming Concepts",
    icon: "⚙️"
  },
  {
    name: "VSCode",
    category: "Tools",
    icon: "💻"
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "💻"
  },
  {
    name: "Eclipse",
    category: "Tools",
    icon: "💻"
  }
];

export const education = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Sri Vasavi Institute of Engineering and Technology",
    location: "Nandamuru",
    duration: "2023 – 2027",
    percentage: "81%",
    description: "Currently pursuing Computer Science and Engineering with a focus on programming and software development."
  },
  {
    degree: "Intermediate MPC",
    institution: "Sri Vijayananda Junior College",
    location: "Pedana",
    duration: "2021 - 2023",
    percentage: "83%",
    description: "Focused on core science subjects, developing problem-solving skills and mathematics foundation."
  },
  {
    degree: "SSC",
    institution: "Sri Sai Baba High School",
    location: "Pedana",
    duration: "2020 - 2021",
    percentage: "99%",
    description: "Completed secondary education with excellent academic records."
  }
];

export const internships = [
  {
    company: "Syntecxhub",
    role: "Python Programming Intern",
    duration: "May 2026 – Jun 2026",
    details: [
      "Completed 3+ development tasks",
      "Solved 4 Python Problems"
    ]
  },
  {
    company: "Virtual Works Lab",
    role: "Full Stack Developer Intern",
    duration: "May 2026 – Jun 2026",
    details: [
      "Built 5 full-stack projects"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Restaurant Application",
    description: "Developed a responsive restaurant website with menu display, cart functionality, interactive features, and custom HTML/CSS animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saranya-kollipara/Restaurant_app",
    liveDemo: "",
    image: "/projects/project-1.jpg"
  },
  {
    id: 2,
    title: "Vehicle Rental Management System",
    description: "It is a web-based vehicle rental system that allows users to rent vehicles for a specified period of time. It provides an interface for users to search for available vehicles, view details, and book them. The system also includes features such as user authentication, vehicle management, and booking management.",
    technologies: ["HTML", "CSS", "JavaScript", "React js", "vite"],
    github: "https://github.com/saranya-kollipara/vehicle_rental_system",
    liveDemo: "https://vehicle-rental-system-ebon.vercel.app",
    image: "/projects/project-2.jpg"
  },
  {
    id: 3,
    title: "Online Quiz and Exam System",
    description: "This online quiz and exam system is a web-based platform designed to conduct quizzes and exams online. It provides an interface for users to take quizzes and exams, and for administrators to create and manage quizzes and exams. The system also includes features such as user authentication, quiz management, and exam management.",
    technologies: ["HTML", "CSS", "JavaScript", "React js", "vite", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/saranya-kollipara/Online_Exam_and_Quiz",
    liveDemo: "https://onlineexamandquiz-phi.vercel.app",
    image: "/projects/project-3.jpg"
  }
];

export const themeConfig = {
  initialTheme: "system" // Options: "light", "dark", or "system"
};

