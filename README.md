# 🚀 Pankaj Lochan Shaw — Professional Developer Portfolio

A premium, modern, and responsive developer portfolio website engineered with clean, modular HTML5, CSS3, and vanilla JavaScript. Built to showcase projects, technical proficiencies, academic journey at **Netaji Subhas University (BCA Class of 2027)**, and public GitHub repositories.

🌐 **Live Portfolio Website**: [https://portfolio-website-ykab.onrender.com](https://portfolio-website-ykab.onrender.com)

---

## 🌟 Key Highlights & Design Identity

- **Design Aesthetic**: Charcoal/Deep Dark background (`#0d0f14`), red accent (`#ff3838`) with subtle ambient glow, and crisp typography (Poppins & Clicker Script).
- **Navigation**: Clean left sidebar on desktop; accessible slide-out mobile drawer with background blur.
- **Dynamic Projects Architecture**: All projects are managed through a centralized data file (`data/projects.js`). Adding one object automatically generates:
  - Project Cards in the portfolio grid
  - Category filters (`All`, `Featured`, `Full Stack`, `Frontend`, `JavaScript`, `Concepts`)
  - Real-time search by name, description, or technology
  - **Individual 10-Item Project Details Modal View**
  - Live Demo and GitHub buttons with graceful status handling for unhosted works
- **Honest Academic & Technical Profile**:
  - BCA Student at **Netaji Subhas University** (2024–2027), Jamshedpur, India.
  - Verified project count and authentic metrics (no artificial "100%" claims).
  - Categorized skills with proficiency labels: `Proficient`, `Intermediate`, `Beginner`.
- **Experience & Internships Timeline**: Structured vertical timeline with roles, organizations, responsibilities, and technologies.
- **Education & Certifications**: Distinct cards for BCA coursework and technical certificates.
- **GitHub Integration**: Live public repository fetching from GitHub API (`@pankaj-shaw05`) with rate-limit safe fallbacks.
- **Contact Channels**: Baharagora / Jamshedpur location, validated message form, phone `(+91) 9835401227`, email `shaw21826@gmail.com`, and one-click copy email button.
- **Theme Customization**: Dark/Light mode toggle and 6 accent colors persisted via `localStorage`.

---

## 📁 Project Directory Structure

```text
MY PORTFOLIO/
├── index.html                  # Main semantic single-page portfolio
├── resume.html                 # Standalone printable ATS-optimized resume page
├── 404.html                    # Custom branded 404 page
├── favicon.svg                 # Custom SVG branding icon
├── projects-data.js            # Backward compatibility wrapper
├── PROJECTS_GUIDE.md           # Quick guide for adding projects
├── README.md                   # Complete developer documentation
│
├── css/
│   ├── style.css               # Comprehensive, modular styles & responsive breakpoints
│   └── skins/
│       └── color-1.css         # Theme accent color definitions
│
├── data/
│   ├── profile.js              # Centralized profile, skills, experience, education data
│   └── projects.js             # Centralized master projects database (14-field schema)
│
├── images/
│   └── pankaj.jpeg             # Profile photograph
│
└── app.js                      # Application logic, dynamic rendering, modals & API controller
```

---

## 🛠️ Future Project Management System

### How to Add a New Project (30 Seconds)

To add a new project, open **`data/projects.js`** in your editor and paste a new object at the top of the `portfolioProjects` array:

```javascript
{
  id: "my-new-project",
  slug: "my-new-project-slug",
  title: "Weather Forecast Dashboard",
  category: "javascript", // Options: "fullstack" | "frontend" | "javascript" | "concept"
  status: "Completed Project",
  description: "Real-time weather dashboard fetching live meteorology data via OpenWeather API with geolocation.",
  longDescription: "A modern weather dashboard web app that provides hourly and 7-day meteorological forecasts. Features city search with autocomplete, interactive temperature charts, UV index indicators, and responsive card layouts.",
  problemStatement: "Users often encounter cluttered, ad-heavy weather portals when looking for quick forecast summaries.",
  objectives: [
    "Connect to OpenWeather REST API using asynchronous fetch calls.",
    "Parse temperature, humidity, wind velocity, and precipitation chances.",
    "Implement browser Geolocation API for automatic local weather detection."
  ],
  technologies: ["JavaScript (ES6)", "OpenWeather API", "HTML5", "CSS3 Flexbox"],
  icon: "fa-solid fa-cloud-sun", // Any FontAwesome icon class
  thumbnail: "", // Optional image path, e.g. "images/projects/weather.png"
  screenshots: [],
  features: [
    "Automatic geolocation-based local forecast loading",
    "Global city search with real-time temperature updates",
    "Toggle between Celsius (°C) and Fahrenheit (°F)",
    "Clean responsive weather metrics card grid"
  ],
  challenges: [
    {
      challenge: "Handling API rate limits and network errors gracefully.",
      solution: "Implemented client-side caching in localStorage and displayed user-friendly error banners on connection drops."
    }
  ],
  learnings: [
    "Mastered asynchronous JavaScript, promises, and JSON parsing.",
    "Practiced mobile-first responsive weather card UI design."
  ],
  githubUrl: "https://github.com/pankajlochanshaw/weather-app", // or "" if private
  liveUrl: "https://pankaj-weather.netlify.app", // or "" if not yet deployed
  featured: true // Set to true to highlight with a star badge
},
```

Save the file. **That's it!**
The portfolio automatically renders:
1. The project card with your chosen icon, category, and technologies.
2. Filter tabs and search results matching your project.
3. The full-screen 10-item **Individual Project Details Modal**.
4. Live Demo and Source Code buttons (or "Coming Soon" badges if URLs are left empty).

---

## 🎓 Updating Experience, Skills & Education

All profile information is centralized in **`data/profile.js`**:
- **Skills**: Add or update technologies under `skills.frontend`, `skills.backend`, `skills.database`, etc. Set proficiency to `"Proficient"`, `"Intermediate"`, or `"Beginner"`.
- **Experience**: Add new internships or training under the `experience` array.
- **Education & Certifications**: Add credentials under `education` and `certifications`.
- **GitHub Username**: Set `personal.githubUsername` to your GitHub handle.

---

## 📬 Contact Form Delivery

The contact form is powered by **Web3Forms Cloud API**, delivering inquiries directly to `shaw21826@gmail.com` without page reloads, server setup, or opening external email apps.
- Features client-side validation for name, email format, subject, and message.
- Shows live loading spinner feedback on submit (`Sending Message...`).
- Auto-resets inputs and triggers an in-app toast notification upon successful delivery.
- Access key is managed cleanly in `data/profile.js` under `personal.web3formsAccessKey`.

---

## 💻 Running Locally

1. Open the folder in **VS Code**.
2. Right-click `index.html` and choose **Open with Live Server**.
3. Or double-click `index.html` to open it in Chrome, Edge, or Firefox.
