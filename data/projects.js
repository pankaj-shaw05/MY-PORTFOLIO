/**
 * ==============================================================================
 * CENTRALIZED PROJECTS DATA FILE (data/projects.js)
 * ==============================================================================
 * Every project contains complete schema:
 * - id: Unique string identifier
 * - slug: URL-friendly identifier for deep-linking
 * - title: Display name of the project
 * - category: Category filter ("fullstack", "frontend", "javascript", "concept")
 * - status: Development / deployment status
 * - description: 1-2 sentence overview for cards
 * - longDescription: Detailed paragraph for individual project modal/view
 * - problemStatement: The challenge or problem this project addresses
 * - objectives: Key goals aimed for
 * - technologies: Array of technologies used
 * - icon: FontAwesome icon class
 * - thumbnail: Image path or empty string (falls back to styled icon)
 * - screenshots: Array of screenshot URLs / image paths
 * - features: Array of key features
 * - challenges: Array of challenges faced and how they were solved
 * - learnings: Key architectural or code takeaways
 * - githubUrl: Repository link (or empty string if not yet published)
 * - liveUrl: Live deployment link (or empty string if not yet hosted)
 * - featured: Boolean (true for prominent card placement)
 * ==============================================================================
 */

const portfolioProjects = [
  {
    id: "blood-bank-management",
    slug: "blood-bank-management-system",
    title: "Blood Bank Management System",
    category: "fullstack",
    status: "Live Web Application",
    description: "A centralized web platform concept engineered to streamline voluntary blood donor registries, urgent hospital blood requests, and real-time inventory tracking.",
    longDescription: "The Blood Bank Management System is a healthcare-focused web application conceived to bridge the critical gap between voluntary blood donors, patients in urgent need, and hospital blood banks. By eliminating manual paperwork and fragmented phone calls, the platform aims to provide a reliable, search-optimized registry for life-saving blood units.",
    problemStatement: "During emergency transfusions, finding compatible and available blood donors in a specific locality often takes hours due to decentralized, outdated contact lists and lack of real-time inventory visibility.",
    objectives: [
      "Create a verified database of voluntary blood donors categorized by ABO blood group, Rh factor, and city.",
      "Provide an urgent emergency blood broadcast board for immediate patient requests.",
      "Design a secure role-based dashboard for hospital administrators to log blood unit collection and expiry dates.",
      "Ensure donor privacy through masked contact forms rather than public phone number exposure."
    ],
    technologies: ["PHP", "SQL / MySQL", "HTML5", "CSS3", "JavaScript"],
    icon: "fa-solid fa-droplet",
    thumbnail: "",
    screenshots: [],
    features: [
      "Blood donor self-registration portal with eligibility checklist",
      "Real-time blood stock availability dashboard by hospital/city",
      "Emergency blood request broadcast with urgent priority tags",
      "Secure administrative control for verified hospital personnel",
      "Automated eligibility calculation (90-day interval between donations)"
    ],
    challenges: [
      {
        challenge: "Protecting donor privacy while still enabling rapid contact during emergencies.",
        solution: "Engineered an intermediary contact notification system that relays hospital requests to donors via email/SMS alerts without exposing their personal phone numbers."
      },
      {
        challenge: "Handling complex database constraints for rare blood types and storage expiry.",
        solution: "Designed normalized MySQL tables with timestamp triggers to flag blood units nearing expiration."
      }
    ],
    learnings: [
      "Deepened understanding of relational database normalization (3NF) and foreign key constraints.",
      "Learned to model user roles (Donor, Patient, Hospital Admin) securely.",
      "Gained appreciation for accessibility and urgent UI clarity in medical web applications."
    ],
    githubUrl: "https://github.com/pankaj-shaw05/blood-bank-management-system",
    liveUrl: "https://blood-bank-management-system-drtv.onrender.com/",
    featured: true
  },
  {
    id: "pg-life",
    slug: "pg-life-student-accommodation-web-application",
    title: "PG Life – Student Accommodation Web Application",
    category: "fullstack",
    status: "Completed Academic Project",
    description: "A responsive student accommodation web application developed to explore PG options, with dynamic PHP/MySQL database integration, React & Bootstrap UI, and Git version control.",
    longDescription: "PG Life is a comprehensive student accommodation web application developed for students and professionals to explore PG options. Features dynamic functionality and database integration using PHP and MySQL, with React, Bootstrap, and JavaScript for modern frontend development and Git/GitHub for version control.",
    problemStatement: "Students moving to new cities frequently suffer from exploitative broker fees, inaccurate listing photos, and hidden maintenance charges with zero transparent verification.",
    objectives: [
      "Developed a responsive web application for students to explore PG accommodation options.",
      "Implemented dynamic functionality and database integration using PHP and MySQL.",
      "Used React, Bootstrap, and JavaScript for frontend development and Git/GitHub for version control."
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "React", "Git/GitHub"],
    icon: "fa-solid fa-house-chimney-user",
    thumbnail: "",
    screenshots: [],
    features: [
      "Developed a responsive web application for students to explore PG accommodation options",
      "Implemented dynamic functionality and database integration using PHP and MySQL",
      "Used React, Bootstrap, and JavaScript for frontend development and Git/GitHub for version control",
      "Dynamic search by city and college vicinity with amenities filtering",
      "User authentication system with session management and favorites"
    ],
    challenges: [
      {
        challenge: "Handling complex multi-table SQL queries joining properties, amenities, and user ratings without degrading page speed.",
        solution: "Structured database queries with indexed foreign keys and utilized INNER JOINs efficiently to fetch property metadata in a single optimized query."
      },
      {
        challenge: "Maintaining user state and liked properties without full-page reloads.",
        solution: "Implemented asynchronous JavaScript Fetch/AJAX calls communicating with PHP backend endpoints to toggle bookmarks seamlessly."
      }
    ],
    learnings: [
      "Mastered server-side rendering and procedural PHP backend routing.",
      "Gained hands-on experience in session-based authentication and password hashing (bcrypt).",
      "Developed robust SQL schema architecture for e-commerce/rental platforms."
    ],
    githubUrl: "https://github.com/pankaj-shaw05/PG-Life-Accommodation-Portal",
    liveUrl: "",
    featured: true
  },
  {
    id: "amazon-clone",
    slug: "amazon-clone-website",
    title: "Amazon Clone Website",
    category: "frontend",
    status: "Completed Frontend Project",
    description: "A fully responsive Amazon homepage clone created using HTML and CSS featuring hover effects, navigation bar, product cards, and modern UI layout.",
    longDescription: "Created a fully responsive Amazon homepage clone using HTML and CSS featuring hover effects, navigation bar, product cards, and modern UI layout. Demonstrates proficiency in CSS Grid, Flexbox, and responsive design without heavy external frameworks.",
    problemStatement: "Replicating high-density commercial layouts requires solving complex alignment, overflowing sub-menus, and layout stability across vastly different screen viewports.",
    objectives: [
      "Created a fully responsive Amazon homepage clone using HTML and CSS.",
      "Implemented hover effects, navigation bar, product cards, and modern UI layout.",
      "Accurately replicate multi-level navigation and responsive deal showcases."
    ],
    technologies: ["HTML", "CSS", "Responsive Design", "Flexbox & Grid"],
    icon: "fa-solid fa-cart-shopping",
    thumbnail: "",
    screenshots: [],
    features: [
      "Multi-tiered navigation bar with search bar, department selector, and account shortcuts",
      "Sub-navigation menu bar with quick department links ('Today's Deals', 'Customer Service')",
      "Hero promotion banner container with gradient fade overlays",
      "Responsive 4-column product feature cards showcasing multiple shopping categories",
      "Back-to-top smooth scrolling anchor with responsive multi-column footer"
    ],
    challenges: [
      {
        challenge: "Creating a search bar that flexibly consumes all available header width while keeping surrounding action buttons fixed.",
        solution: "Utilized CSS Flexbox with `flex: 1` on the input wrapper and `flex-shrink: 0` on logo and action icon items."
      },
      {
        challenge: "Managing responsive grid card arrangements without overflowing on small mobile screens.",
        solution: "Employed CSS Grid `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` for fluid card reorganizations."
      }
    ],
    learnings: [
      "Deepened proficiency in modern CSS layout algorithms (Flexbox, Grid, CSS custom properties).",
      "Gained mastery in responsive viewport media queries and accessible button sizing."
    ],
    githubUrl: "https://github.com/pankaj-shaw05/Amazon-Clone-Frontend",
    liveUrl: "https://neon-muffin-c06b6f.netlify.app/",
    featured: true
  },
  {
    id: "tic-tac-toe",
    slug: "tic-tac-toe-game",
    title: "Tic Tac Toe Game",
    category: "javascript",
    status: "Completed Game Project",
    description: "An interactive Tic Tac Toe game built using HTML, CSS, and JavaScript with complete game logic, win detection, and fully responsive design.",
    longDescription: "Built an interactive Tic Tac Toe game using HTML, CSS, and JavaScript with complete game logic, win detection, and fully responsive design. Demonstrates algorithmic win condition verification across an array matrix, real-time turn tracking, and score counters.",
    problemStatement: "Translating board game rules into clean, non-redundant algorithmic checks while providing responsive visual feedback on user clicks.",
    objectives: [
      "Built an interactive Tic Tac Toe game using HTML, CSS, and JavaScript.",
      "Engineered complete game logic and win detection algorithms.",
      "Ensured fully responsive design for seamless mobile and desktop play."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Game Logic"],
    icon: "fa-solid fa-gamepad",
    thumbnail: "",
    screenshots: [],
    features: [
      "Two-player local turn-based gameplay with distinct player indicator",
      "Algorithmic win detection highlighting the winning 3-in-a-row cells",
      "Tie-game detection when all cells are filled with no victor",
      "Live scoreboard tracking consecutive round wins",
      "Instant 'Restart Match' and 'Reset Scores' buttons"
    ],
    challenges: [
      {
        challenge: "Checking all winning conditions cleanly after every turn without writing 8 verbose if-statements.",
        solution: "Defined an array of winning coordinate tuples `[[0,1,2], [3,4,5], ...]` and used `Array.prototype.some()` to verify board status."
      }
    ],
    learnings: [
      "Strengthened vanilla JavaScript logic and algorithmic problem-solving.",
      "Practiced clean separation between game state (data array) and presentation (DOM cells)."
    ],
    githubUrl: "https://github.com/pankaj-shaw05/Tic-Tac-Toe-Game",
    liveUrl: "https://capable-khapse-fb4032.netlify.app/",
    featured: false
  },
  {
    id: "temperature-converter",
    slug: "temperature-converter-utility",
    title: "Temperature Converter Utility",
    category: "javascript",
    status: "Completed Utility Project",
    description: "A real-time bidirectional temperature conversion application that converts values between Celsius, Fahrenheit, and Kelvin with input validation.",
    longDescription: "A clean, practical browser utility designed to perform instant temperature conversions across Celsius, Fahrenheit, and Kelvin. It validates numerical inputs in real time, handles edge cases (absolute zero limits), and displays mathematical conversion formula breakdowns.",
    problemStatement: "Manual temperature conversion calculations are prone to precision mistakes and confusing formula inversions.",
    objectives: [
      "Enable instant bidirectional conversion as the user types without requiring a submit button.",
      "Provide clean sanitization against non-numerical character entries."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Input Validation"],
    icon: "fa-solid fa-temperature-half",
    thumbnail: "",
    screenshots: [],
    features: [
      "Instant live calculation across Celsius (°C), Fahrenheit (°F), and Kelvin (K)",
      "Bidirectional conversion: typing in any box updates all other two boxes",
      "Clear button for resetting all fields to zero",
      "Educational formula tooltip explaining the math behind each conversion"
    ],
    challenges: [
      {
        challenge: "Preventing infinite calculation loops when updating sibling inputs programmatically.",
        solution: "Scoped event listeners specifically to `input` events originating from the active element rather than blanket change listeners."
      }
    ],
    learnings: [
      "Learned precise floating-point number formatting in JavaScript using `.toFixed(2)`.",
      "Practiced event bubbling and clean form validation."
    ],
    githubUrl: "https://github.com/pankaj-shaw05/Temperature-Converter",
    liveUrl: "",
    featured: false
  },
  {
    id: "personal-portfolio",
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "frontend",
    status: "Production Website",
    description: "A fully responsive personal portfolio website designed using HTML, CSS, and JavaScript to showcase skills, projects, and contact information.",
    longDescription: "Designed a fully responsive personal portfolio website using HTML, CSS, and JavaScript to showcase skills, projects, and contact information. Features dynamic project loading, multi-category filtering, live GitHub API integration, dark/light theme switching, and printable resume generation.",
    problemStatement: "Developer portfolios often suffer from hardcoded HTML cards that require tedious copy-pasting to update, leading to broken layouts and maintenance headaches.",
    objectives: [
      "Designed a fully responsive personal portfolio website using HTML, CSS, and JavaScript.",
      "Showcase technical skills, certified coursework, and academic projects dynamically.",
      "Provide accessible contact information, resume viewer, and printable document format."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub API"],
    icon: "fa-solid fa-user-tie",
    thumbnail: "",
    screenshots: [],
    features: [
      "Centralized project and profile management system",
      "Dynamic full-screen project details view with problem, objectives, and solutions",
      "Live public GitHub repository integration with error handling",
      "Category and technology search filters with smooth transitions",
      "Customizable theme mode (Dark/Light) and 6 accent colors saved locally",
      "Fully accessible mobile drawer navigation with backdrop blur"
    ],
    challenges: [
      {
        challenge: "Designing a modular vanilla JavaScript architecture without the overhead of heavy single-page application frameworks.",
        solution: "Separated concerns into centralized data files (`profile.js`, `projects.js`), a consolidated styling system (`style.css`), and an event-driven controller (`app.js`)."
      }
    ],
    learnings: [
      "Deepened expertise in architectural modularity, SEO meta optimization, and web performance.",
      "Strengthened recruiter-focused portfolio design and documentation standards."
    ],
    githubUrl: "https://github.com/pankaj-shaw05/Portfolio-Website",
    liveUrl: "https://portfolio-website-ykab.onrender.com",
    featured: true
  }
];

// Attach to window for global access
if (typeof window !== "undefined") {
  window.portfolioProjects = portfolioProjects;
}
