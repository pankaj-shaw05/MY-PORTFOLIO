/**
 * ==============================================================================
 * PERSONAL PROFILE & PORTFOLIO CONFIGURATION (data/profile.js)
 * ==============================================================================
 * Centralized data file synchronized with official resume of Pankaj Lochan Shaw.
 * ==============================================================================
 */

const profileData = {
  personal: {
    name: "Pankaj Lochan Shaw",
    title: "Web Developer & Full Stack Developer",
    degree: "BCA | Netaji Subhas University",
    university: "Netaji Subhas University, Jamshedpur",
    location: "Jamshedpur / Baharagora, Jharkhand, India",
    graduationYear: "2027",
    status: "Available for Internships & Junior Developer Roles",
    bio: "BCA student at Netaji Subhas University passionate about web development and building responsive, user-friendly digital experiences. Experienced in frontend development with HTML, CSS, JavaScript, Bootstrap, and React, alongside backend database integration using PHP and MySQL.",
    email: "shaw21826@gmail.com",
    phone: "(+91) 9835401227",
    githubUsername: "pankaj-shaw05",
    githubUrl: "https://github.com/pankaj-shaw05",
    linkedinUrl: "https://www.linkedin.com/in/pankaj-lochan-shaw-065179372",
    portfolioUrl: "https://portfolio-website-ykab.onrender.com",
    resumeUrl: "resume.html", // Standalone printable resume page
    web3formsAccessKey: "ac7928f9-45f4-4ef6-9c6b-3375d7cd05b7", // Official Web3Forms Access Key for shaw21826@gmail.com
  },

  // Hero Section Typewriter Roles
  typingRoles: [
    "Web Developer",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Problem Solver"
  ],

  // Verified Statistics directly from resume
  statistics: [
    { number: "6+", label: "Completed Projects" },
    { number: "91.6%", label: "Matriculation (SSVM)" },
    { number: "83%", label: "Internshala Full Stack AI" },
    { number: "4+", label: "Verified Certifications" }
  ],

  // Skills Categorized per Official Resume
  skills: {
    frontend: [
      { name: "HTML5", level: "Proficient", icon: "fa-brands fa-html5", badge: "Core" },
      { name: "CSS3 & Flexbox/Grid", level: "Proficient", icon: "fa-brands fa-css3-alt", badge: "Core" },
      { name: "JavaScript (ES6+)", level: "Intermediate", icon: "fa-brands fa-js", badge: "Language" },
      { name: "Bootstrap", level: "Proficient", icon: "fa-brands fa-bootstrap", badge: "Framework" },
      { name: "React.js", level: "Intermediate", icon: "fa-brands fa-react", badge: "Library" }
    ],
    backend: [
      { name: "PHP", level: "Intermediate", icon: "fa-brands fa-php", badge: "Backend" },
      { name: "Python", level: "Intermediate", icon: "fa-brands fa-python", badge: "Backend" }
    ],
    database: [
      { name: "MySQL", level: "Intermediate", icon: "fa-solid fa-database", badge: "RDBMS" }
    ],
    programming: [
      { name: "C Language", level: "Intermediate", icon: "fa-solid fa-code", badge: "Language" },
      { name: "C++ (OOP)", level: "Intermediate", icon: "fa-solid fa-code", badge: "Language" },
      { name: "Python", level: "Intermediate", icon: "fa-brands fa-python", badge: "Language" }
    ],
    tools: [
      { name: "Git", level: "Intermediate", icon: "fa-brands fa-git-alt", badge: "VCS" },
      { name: "GitHub", level: "Intermediate", icon: "fa-brands fa-github", badge: "Collaboration" },
      { name: "VS Code", level: "Proficient", icon: "fa-solid fa-terminal", badge: "Editor" }
    ]
  },

  // Experience from Official Resume
  experience: [
    {
      id: "exp-paul-infotech",
      role: "Full Stack Web Development Intern",
      organization: "Paul Infotech",
      location: "Remote / On-site",
      mode: "Internship",
      startDate: "September 2026",
      endDate: "November 2026",
      description: "Working on full-stack web development workflows, creating responsive frontend interfaces with HTML/CSS/JavaScript and implementing backend systems using Python and Django.",
      responsibilities: [
        "Working on frontend development using HTML, CSS and JavaScript.",
        "Learning and implementing backend development using Python and Django.",
        "Developing and improving web application features.",
        "Working on practical development tasks and debugging.",
        "Gaining hands-on experience with web development workflows and project implementation."
      ],
      technologies: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "Git"],
      skillsGained: ["Full-Stack Development", "Python & Django", "Debugging", "Workflow Optimization", "Feature Engineering"],
      certificateUrl: ""
    },
    {
      id: "exp-oasis-infobyte",
      role: "Web Development Intern",
      organization: "Oasis Infobyte",
      location: "Remote",
      mode: "Internship (1 Month)",
      startDate: "Recent",
      endDate: "Completed",
      description: "Worked on frontend web development projects using HTML, CSS, and JavaScript. Built and deployed multiple real-world projects during the internship period.",
      responsibilities: [
        "Built responsive web user interfaces following modern CSS and semantic HTML standards.",
        "Created interactive web pages with JavaScript DOM manipulation and event-driven architecture.",
        "Deployed real-world projects and practiced Git version control workflows.",
        "Awarded official Oasis Infobyte 1-Month Web Development & Designing Internship Certificate."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
      skillsGained: ["Frontend Development", "Project Deployment", "Responsive Design", "Cross-Browser Compatibility"],
      certificateUrl: "#certifications"
    },
    {
      id: "exp-academic-dev",
      role: "Full-Stack & Academic Project Developer",
      organization: "Netaji Subhas University / Self-Directed",
      location: "Jamshedpur, India",
      mode: "Academic & Practice",
      startDate: "2024",
      endDate: "Present",
      description: "Architecting, developing, and deploying web applications including the PG Life student accommodation portal and interactive browser utilities.",
      responsibilities: [
        "Developed PG Life student accommodation web application with PHP, MySQL, React, and Bootstrap.",
        "Engineered classic browser games (Tic Tac Toe) and responsive commercial clones (Amazon Clone).",
        "Completed 8-week intensive Internshala Full Stack Web Development with AI training with 83% score."
      ],
      technologies: ["PHP", "MySQL", "React", "JavaScript", "Bootstrap", "Git/GitHub"],
      skillsGained: ["Full-Stack Integration", "Database Architecture", "Component State", "UI Layouts"],
      certificateUrl: ""
    }
  ],

  // Education directly from Official Resume
  education: [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Netaji Subhas University",
      location: "Jamshedpur, Jharkhand",
      duration: "Aug 2024 – Present",
      status: "In Progress (Expected Graduation: 2027)",
      description: "Undergraduate computer applications degree with emphasis on software engineering, database management, web technologies, and programming in C, C++, and Python.",
      coursework: [
        "Web Technologies (HTML, CSS, JS, PHP)",
        "Database Management Systems (MySQL)",
        "Object-Oriented Programming (C++)",
        "Programming in C & Python",
        "Data Structures & Algorithms"
      ]
    },
    {
      degree: "Class XII (Senior Secondary) — JAC Board",
      institution: "Model School",
      location: "Baharagora, Jharkhand",
      duration: "Passed in 2024",
      status: "Completed",
      score: "Score: 62.3%",
      description: "Higher secondary education completed under the Jharkhand Academic Council (JAC) Board.",
      coursework: ["Physics", "Chemistry", "Mathematics", "English"]
    },
    {
      degree: "Class X (Secondary / Matriculation) — JAC Board",
      institution: "Saraswati Shishu Vidya Mandir",
      location: "Baharagora, Jharkhand",
      duration: "Passed in 2022",
      status: "Completed",
      score: "Score: 91.60%",
      description: "High school matriculation completed with distinction under the Jharkhand Academic Council (JAC) Board.",
      coursework: ["Mathematics", "Science", "Social Science", "English", "Hindi"]
    }
  ],

  // Achievements & Certifications from Official Resume
  certifications: [
    {
      title: "Full Stack Web Development with AI",
      issuer: "Internshala Trainings",
      date: "8-Week Training | Score: 83%",
      credentialUrl: "",
      skills: ["Full Stack Web Dev", "AI Integration", "React", "PHP", "MySQL"]
    },
    {
      title: "1-Month Web Development & Designing Internship Certificate",
      issuer: "Oasis Infobyte",
      date: "Completed (Remote Internship)",
      credentialUrl: "",
      skills: ["HTML5", "CSS3", "JavaScript", "Web Design", "Git"]
    },
    {
      title: "Building AI Agent Bootcamp Certification",
      issuer: "YHills Edutech",
      date: "Bootcamp Certification",
      credentialUrl: "",
      skills: ["AI Agents", "Python", "Automation", "Prompt Engineering"]
    },
    {
      title: "Cyber Peace First Responders & Myth Busters Training",
      issuer: "CyberPeace Foundation (Supported by Google.org)",
      date: "Certified Training",
      credentialUrl: "",
      skills: ["Cyber Security", "Digital Safety", "Google.org Initiative"]
    }
  ],

  // "What I Do" (Services)
  services: [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Building responsive, modern websites using clean HTML5, CSS3, JavaScript, Bootstrap, and React adhering to clean coding standards."
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Frontend Development",
      description: "Developing interactive user interfaces, responsive layouts, dynamic DOM manipulations, and component-based UI in React."
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Responsive Web Design",
      description: "Ensuring web pages adapt flawlessly across mobile, tablet, laptop, and desktop viewports without layout shifts."
    },
    {
      icon: "fa-solid fa-database",
      title: "Database Integration",
      description: "Designing relational MySQL database tables, writing structured SQL queries, and integrating backends with PHP."
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Website Maintenance & Updates",
      description: "Fixing UI bugs, enhancing styling consistency, optimizing asset load times, and keeping codebases clean."
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Web Application Prototyping",
      description: "Transforming ideas into working digital prototypes and web applications with authentic functionality."
    }
  ]
};

// Global export for browser
if (typeof window !== "undefined") {
  window.profileData = profileData;
}
