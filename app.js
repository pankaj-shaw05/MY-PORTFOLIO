/**
 * ==============================================================================
 * PANKAJ LOCHAN SHAW — PORTFOLIO MAIN CONTROLLER (app.js)
 * ==============================================================================
 * Clean, modular, error-free vanilla JavaScript controller:
 * - Dynamic Typewriter with genuine roles
 * - Theme Switcher (Dark/Light) & Accent Colors with LocalStorage persistence
 * - Verified Stats, Categorized Skills, Experience Timeline & Education Render
 * - Dynamic Project Management System from data/projects.js
 * - Reusable 10-Item Individual Project Details Modal View
 * - Public GitHub API Integration with Rate-Limit Safe Fallback
 * - Form Validation, Quick Copy Email, ScrollSpy, and Toast System
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Safe reference to global profile data
  const profile = window.profileData || {};
  const personal = profile.personal || {};

  // --- 1. Dynamic Year Setting ---
  const currentYear = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  const sidebarYearEl = document.getElementById("sidebarYear");
  if (yearEl) yearEl.textContent = currentYear;
  if (sidebarYearEl) sidebarYearEl.textContent = currentYear;

  // --- 2. Lightweight Toast Notification Utility ---
  function showToast(message, icon = "fa-solid fa-circle-check") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="${icon}" style="color: var(--skin-color);"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(15px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
  window.showToast = showToast;

  // --- 3. Dynamic Typewriter Effect ---
  const typingEl = document.querySelector(".typing");
  if (typingEl) {
    const roles = profile.typingRoles || [
      "Web Developer",
      "Full Stack Web Developer",
      "Frontend Developer",
      "Problem Solver"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 90;
    const deleteSpeed = 45;
    const pauseDelay = 1800;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeout = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        timeout = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = 400;
      }

      setTimeout(typeLoop, timeout);
    }

    typeLoop();
  }

  // --- 4. Hex to RGB Helper for Dynamic Glow & Badge Styling ---
  function hexToRgb(hex) {
    const cleanHex = hex.replace("#", "");
    const r = parseInt(cleanHex.substring(0, 2), 16) || 255;
    const g = parseInt(cleanHex.substring(2, 4), 16) || 56;
    const b = parseInt(cleanHex.substring(4, 6), 16) || 56;
    return `${r}, ${g}, ${b}`;
  }

  // --- 5. Theme Settings (Dark/Light) & Accent Color Persistence ---
  const themeModeToggle = document.getElementById("themeModeToggle");
  const themeModeIcon = document.getElementById("themeModeIcon");
  const themePanelToggle = document.getElementById("themePanelToggle");
  const themePanel = document.getElementById("themePanel");
  const swatches = document.querySelectorAll(".swatch");

  // Load Saved Theme Mode
  const savedTheme = localStorage.getItem("pankaj_portfolio_theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    if (themeModeIcon) {
      themeModeIcon.classList.remove("fa-moon");
      themeModeIcon.classList.add("fa-sun");
    }
  }

  if (themeModeToggle) {
    themeModeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      if (themeModeIcon) {
        if (isLight) {
          themeModeIcon.classList.remove("fa-moon");
          themeModeIcon.classList.add("fa-sun");
          localStorage.setItem("pankaj_portfolio_theme", "light");
          showToast("Switched to Light Theme", "fa-solid fa-sun");
        } else {
          themeModeIcon.classList.remove("fa-sun");
          themeModeIcon.classList.add("fa-moon");
          localStorage.setItem("pankaj_portfolio_theme", "dark");
          showToast("Switched to Dark Theme", "fa-solid fa-moon");
        }
      }
    });
  }

  // Load Saved Accent Color
  const savedColor = localStorage.getItem("pankaj_portfolio_skin_color");
  if (savedColor) {
    document.documentElement.style.setProperty("--skin-color", savedColor);
    document.documentElement.style.setProperty("--skin-rgb", hexToRgb(savedColor));
    swatches.forEach((swatch) => {
      swatch.classList.toggle("active", swatch.dataset.color === savedColor);
    });
  }

  // Theme Panel Toggle & Outside Click
  if (themePanelToggle && themePanel) {
    themePanelToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      themePanel.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!themePanel.contains(e.target) && !themePanelToggle.contains(e.target)) {
        themePanel.classList.remove("show");
      }
    });
  }

  // Swatches Click Handler
  swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const color = swatch.dataset.color;
      document.documentElement.style.setProperty("--skin-color", color);
      document.documentElement.style.setProperty("--skin-rgb", hexToRgb(color));
      localStorage.setItem("pankaj_portfolio_skin_color", color);

      swatches.forEach((s) => s.classList.remove("active"));
      swatch.classList.add("active");
      showToast("Theme accent updated!", "fa-solid fa-palette");
    });
  });

  // --- 6. Mobile Navigation Drawer ---
  const sidebar = document.getElementById("sidebar");
  const navToggler = document.getElementById("navToggler");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const navLinks = document.querySelectorAll(".nav-link");

  function toggleSidebar(open) {
    const shouldOpen = open !== undefined ? open : !sidebar.classList.contains("open");
    sidebar.classList.toggle("open", shouldOpen);
    navToggler.classList.toggle("open", shouldOpen);
    sidebarBackdrop.classList.toggle("active", shouldOpen);
    navToggler.setAttribute("aria-expanded", String(shouldOpen));
  }

  if (navToggler) {
    navToggler.addEventListener("click", () => toggleSidebar());
  }
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", () => toggleSidebar(false));
  }
  navLinks.forEach((link) => {
    link.addEventListener("click", () => toggleSidebar(false));
  });

  // --- 7. Active Navigation Link on Scroll (ScrollSpy) ---
  const sections = document.querySelectorAll("main section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const matches = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", matches);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));

  // --- 8. Back to Top Button ---
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- 9. Render Verified Statistics ---
  const statsContainer = document.getElementById("statsContainer");
  if (statsContainer && profile.statistics) {
    statsContainer.innerHTML = profile.statistics
      .map(
        (stat) => `
        <div class="stat-card">
          <div class="stat-number">${stat.number}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `
      )
      .join("");
  }

  // --- 10. Render Categorized Skills with Proficiency Labels ---
  const skillsContainer = document.getElementById("skillsContainer");
  if (skillsContainer && profile.skills) {
    const categoryTitles = {
      frontend: { title: "Frontend Engineering", icon: "fa-solid fa-code" },
      backend: { title: "Backend & Server-side", icon: "fa-solid fa-server" },
      database: { title: "Databases & Storage", icon: "fa-solid fa-database" },
      programming: { title: "Core Programming", icon: "fa-solid fa-terminal" },
      tools: { title: "Development Tools & Workflow", icon: "fa-solid fa-screwdriver-wrench" }
    };

    let skillsHtml = "";
    for (const [key, items] of Object.entries(profile.skills)) {
      const meta = categoryTitles[key] || { title: key, icon: "fa-solid fa-code" };
      const cardsHtml = items
        .map((skill) => {
          const levelClass = skill.level.toLowerCase().includes("proficient")
            ? "proficient"
            : skill.level.toLowerCase().includes("intermediate")
            ? "intermediate"
            : "beginner";

          return `
            <div class="skill-card">
              <div class="skill-info">
                <i class="${skill.icon || 'fa-solid fa-code'}"></i>
                <span class="skill-name">${skill.name}</span>
              </div>
              <span class="skill-level-badge ${levelClass}">${skill.level}</span>
            </div>
          `;
        })
        .join("");

      skillsHtml += `
        <div class="skills-category-group">
          <div class="skills-category-header">
            <i class="${meta.icon}"></i>
            <h3>${meta.title}</h3>
          </div>
          <div class="skills-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    }
    skillsContainer.innerHTML = skillsHtml;
  }

  // --- 11. Render Experience & Internships Timeline ---
  const experienceContainer = document.getElementById("experienceContainer");
  if (experienceContainer && profile.experience) {
    experienceContainer.innerHTML = profile.experience
      .map((item) => {
        const respList = (item.responsibilities || [])
          .map((r) => `<li>${r}</li>`)
          .join("");

        const techPills = (item.technologies || [])
          .map((t) => `<span class="timeline-tag">${t}</span>`)
          .join("");

        return `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div>
                  <h4 class="timeline-role">${item.role}</h4>
                  <div class="timeline-org"><i class="fa-solid fa-building"></i> ${item.organization}</div>
                </div>
                <div class="timeline-meta">
                  <span class="timeline-date"><i class="fa-regular fa-calendar"></i> ${item.startDate} — ${item.endDate}</span>
                  <span class="timeline-mode">${item.mode}</span>
                </div>
              </div>
              <p class="timeline-desc">${item.description}</p>
              <ul class="timeline-responsibilities">
                ${respList}
              </ul>
              <div class="timeline-tags">
                ${techPills}
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // --- 12. Render Education & Certifications ---
  const educationContainer = document.getElementById("educationContainer");
  if (educationContainer && profile.education) {
    educationContainer.innerHTML = profile.education
      .map((edu) => {
        const coursePills = (edu.coursework || [])
          .map((c) => `<span class="coursework-pill">${c}</span>`)
          .join("");

        return `
          <div class="edu-card">
            <h4 class="edu-degree">${edu.degree}</h4>
            <div class="edu-inst"><i class="fa-solid fa-building-columns"></i> ${edu.institution} (${edu.location})</div>
            <div class="edu-duration"><i class="fa-regular fa-calendar"></i> ${edu.duration} • <span style="color: #10b981;">${edu.status}</span></div>
            <p class="edu-desc">${edu.description}</p>
            <div style="margin-top: 6px;">
              <strong style="font-size: 11.5px; color: var(--text-black-900); display: block; margin-bottom: 4px;">Key Coursework:</strong>
              <div class="coursework-list">
                ${coursePills}
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  const certificationsContainer = document.getElementById("certificationsContainer");
  if (certificationsContainer && profile.certifications) {
    certificationsContainer.innerHTML = profile.certifications
      .map((cert) => {
        const skillPills = (cert.skills || [])
          .map((s) => `<span class="coursework-pill">${s}</span>`)
          .join("");

        return `
          <div class="cert-card">
            <h4 class="cert-title">${cert.title}</h4>
            <div class="cert-meta">
              <span><i class="fa-solid fa-award"></i> ${cert.issuer}</span>
              <span>${cert.date}</span>
            </div>
            <div class="cert-skills">
              ${skillPills}
            </div>
          </div>
        `;
      })
      .join("");
  }

  // --- 13. Render "What I Do" (Services) Section ---
  const servicesContainer = document.getElementById("servicesContainer");
  if (servicesContainer && profile.services) {
    servicesContainer.innerHTML = profile.services
      .map(
        (srv) => `
        <article class="service-card">
          <div class="service-icon-box"><i class="${srv.icon}"></i></div>
          <h3>${srv.title}</h3>
          <p>${srv.description}</p>
        </article>
      `
      )
      .join("");
  }

  // --- 14. Projects Management & Dynamic Rendering ---
  const projectsContainer = document.getElementById("projectsContainer");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectSearch = document.getElementById("projectSearch");

  let currentCategory = "all";
  let currentSearch = "";

  function getProjectsList() {
    return window.portfolioProjects || [];
  }

  function renderProjects() {
    if (!projectsContainer) return;

    const list = getProjectsList();
    const query = currentSearch.trim().toLowerCase();

    const filtered = list.filter((project) => {
      let matchCat = false;
      if (currentCategory === "all") {
        matchCat = true;
      } else if (currentCategory === "featured") {
        matchCat = Boolean(project.featured);
      } else {
        matchCat = project.category === currentCategory;
      }

      const matchSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.technologies || []).some((t) => t.toLowerCase().includes(query));

      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      projectsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 36px; color: var(--skin-color); margin-bottom: 12px; display: block;"></i>
          <h4 style="color: var(--text-black-900); font-size: 16px; margin-bottom: 4px;">No matching projects found</h4>
          <p style="font-size: 13px;">Try searching for a different skill, technology, or clear the search filter.</p>
        </div>
      `;
      return;
    }

    projectsContainer.innerHTML = filtered
      .map((proj) => {
        const tagsHtml = (proj.technologies || [])
          .map((tag) => `<span class="project-tag">${tag}</span>`)
          .join("");

        const catLabel =
          proj.category === "fullstack"
            ? "Full Stack"
            : proj.category === "frontend"
            ? "Frontend"
            : proj.category === "javascript"
            ? "JavaScript"
            : proj.category === "concept"
            ? "Concept / System"
            : proj.category;

        const featuredStar = proj.featured
          ? `<span class="featured-star" title="Featured Project"><i class="fa-solid fa-star"></i></span>`
          : "";

        // Status Badge
        const statusBadge = proj.status
          ? `<span style="font-size: 10.5px; color: var(--text-muted); background: var(--bg-black-50); padding: 2px 7px; border-radius: 4px;">${proj.status}</span>`
          : "";

        // Action Buttons
        const isSelfAnchor =
          proj.id === "personal-portfolio" ||
          (proj.liveUrl && (proj.liveUrl.startsWith("#") || proj.liveUrl.includes("portfolio-website-ykab.onrender.com")));
        const demoButton =
          proj.liveUrl && proj.liveUrl.trim() !== ""
            ? `<a href="${proj.liveUrl}" ${isSelfAnchor ? "" : 'target="_blank" rel="noopener noreferrer"'} class="project-btn demo-btn" onclick="event.stopPropagation(); ${isSelfAnchor ? "window.scrollTo({top: 0, behavior: 'smooth'}); showToast('You are currently viewing this live portfolio!', 'fa-solid fa-circle-check'); return false;" : ""}">
                 <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
               </a>`
            : `<span class="project-btn disabled" title="Deployment in progress" onclick="event.stopPropagation(); showToast('Live demo will be published soon!', 'fa-solid fa-clock');">
                 <i class="fa-solid fa-clock"></i> Demo Soon
               </span>`;

        const codeButton =
          proj.githubUrl && proj.githubUrl.trim() !== ""
            ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn code-btn" onclick="event.stopPropagation();">
                 <i class="fa-brands fa-github"></i> Code
               </a>`
            : `<span class="project-btn disabled" title="Repository in progress" onclick="event.stopPropagation(); showToast('Code will be published on GitHub!', 'fa-brands fa-github');">
                 <i class="fa-brands fa-github"></i> Code Soon
               </span>`;

        return `
          <article class="project-card" data-id="${proj.id}" onclick="openProjectDetails('${proj.id}')">
            <div class="project-card-header">
              <div class="project-icon-box">
                <i class="${proj.icon || 'fa-solid fa-code'}"></i>
              </div>
              <div class="project-badges">
                ${featuredStar}
                <span class="project-cat-badge">${catLabel}</span>
              </div>
            </div>

            <div class="project-card-body">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 6px;">
                <h4 style="margin: 0;">${proj.title}</h4>
              </div>
              <div style="margin-bottom: 8px;">${statusBadge}</div>
              <p>${proj.description}</p>
              <div class="project-tags">
                ${tagsHtml}
              </div>
            </div>

            <div class="project-card-actions">
              <span class="view-details-btn"><i class="fa-solid fa-circle-info"></i> Project Details</span>
              <div class="project-action-links">
                ${demoButton}
                ${codeButton}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // Initial render
  renderProjects();

  // Filter Buttons Handler
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.filter || "all";
      renderProjects();
    });
  });

  // Debounced Search Handler
  if (projectSearch) {
    let searchTimeout;
    projectSearch.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearch = e.target.value;
        renderProjects();
      }, 150);
    });
  }

  // --- 15. Reusable Individual Project Details Modal (10 Required Items) ---
  const projectDetailModal = document.getElementById("projectDetailModal");
  const projectDetailModalContent = document.getElementById("projectDetailModalContent");
  const closeProjectDetailModal = document.getElementById("closeProjectDetailModal");

  function openProjectDetails(projectId) {
    const list = getProjectsList();
    const proj = list.find((p) => p.id === projectId || p.slug === projectId);
    if (!proj || !projectDetailModal || !projectDetailModalContent) return;

    const tagsHtml = (proj.technologies || [])
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");

    const featuresHtml = (proj.features || [])
      .map((f) => `<li>${f}</li>`)
      .join("");

    const objectivesHtml = (proj.objectives || [])
      .map((obj) => `<li>${obj}</li>`)
      .join("");

    const challengesHtml = (proj.challenges || [])
      .map(
        (item) => `
        <div class="challenge-item">
          <strong><i class="fa-solid fa-triangle-exclamation"></i> Challenge:</strong> ${item.challenge}
          <div style="margin-top: 6px; color: var(--text-black-700);">
            <strong style="color: #10b981;"><i class="fa-solid fa-check"></i> Solution:</strong> ${item.solution}
          </div>
        </div>
      `
      )
      .join("");

    const learningsHtml = (proj.learnings || [])
      .map((l) => `<li>${l}</li>`)
      .join("");

    const isSelfAnchor =
      proj.id === "personal-portfolio" ||
      (proj.liveUrl && (proj.liveUrl.startsWith("#") || proj.liveUrl.includes("portfolio-website-ykab.onrender.com")));
    const liveBtn =
      proj.liveUrl && proj.liveUrl.trim() !== ""
        ? `<a href="${proj.liveUrl}" ${isSelfAnchor ? "" : 'target="_blank" rel="noopener noreferrer"'} class="btn btn-primary btn-sm" onclick="${isSelfAnchor ? "if(projectDetailModal) projectDetailModal.classList.remove('active'); window.scrollTo({top: 0, behavior: 'smooth'}); showToast('You are currently viewing this live portfolio!', 'fa-solid fa-circle-check'); return false;" : ""}">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live Project
           </a>`
        : `<span class="btn btn-outline btn-sm disabled" style="opacity: 0.6; cursor: not-allowed;">
             <i class="fa-solid fa-clock"></i> Live Deployment in Progress
           </span>`;

    const repoBtn =
      proj.githubUrl && proj.githubUrl.trim() !== ""
        ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
             <i class="fa-brands fa-github"></i> View GitHub Repository
           </a>`
        : `<span class="btn btn-outline btn-sm disabled" style="opacity: 0.6; cursor: not-allowed;">
             <i class="fa-brands fa-github"></i> Repository to be Published
           </span>`;

    projectDetailModalContent.innerHTML = `
      <div class="project-detail-header">
        <div class="project-detail-meta">
          <span class="project-cat-badge">${proj.category.toUpperCase()}</span>
          ${proj.featured ? '<span class="featured-star"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
          <span class="project-detail-status">• ${proj.status}</span>
        </div>
        <h3 class="project-detail-title" id="modalProjectTitle">${proj.title}</h3>
        <p style="font-size: 13.5px; color: var(--text-muted); line-height: 1.6;">${proj.description}</p>
      </div>

      <!-- 1. Overview -->
      <div class="project-detail-section">
        <h4><i class="fa-solid fa-align-left"></i> Project Overview</h4>
        <p>${proj.longDescription || proj.description}</p>
      </div>

      <!-- 2. Problem Statement -->
      ${
        proj.problemStatement
          ? `<div class="project-detail-section">
               <h4><i class="fa-solid fa-circle-question"></i> Problem Statement</h4>
               <p>${proj.problemStatement}</p>
             </div>`
          : ""
      }

      <!-- 3. Key Objectives -->
      ${
        objectivesHtml
          ? `<div class="project-detail-section">
               <h4><i class="fa-solid fa-bullseye"></i> Key Objectives</h4>
               <ul class="project-detail-list">
                 ${objectivesHtml}
               </ul>
             </div>`
          : ""
      }

      <!-- 4. Main Features -->
      ${
        featuresHtml
          ? `<div class="project-detail-section">
               <h4><i class="fa-solid fa-list-check"></i> Key Features & Capabilities</h4>
               <ul class="project-detail-list">
                 ${featuresHtml}
               </ul>
             </div>`
          : ""
      }

      <!-- 5. Technology Stack -->
      <div class="project-detail-section">
        <h4><i class="fa-solid fa-layer-group"></i> Technology Stack</h4>
        <div class="project-tags">
          ${tagsHtml}
        </div>
      </div>

      <!-- 6. Development Challenges & Solutions -->
      ${
        challengesHtml
          ? `<div class="project-detail-section">
               <h4><i class="fa-solid fa-shield-halved"></i> Challenges & Technical Solutions</h4>
               <div class="project-challenges-box">
                 ${challengesHtml}
               </div>
             </div>`
          : ""
      }

      <!-- 7. Key Learnings -->
      ${
        learningsHtml
          ? `<div class="project-detail-section">
               <h4><i class="fa-solid fa-lightbulb"></i> Architectural Takeaways & Learnings</h4>
               <ul class="project-detail-list">
                 ${learningsHtml}
               </ul>
             </div>`
          : ""
      }

      <!-- 8. Links & Actions -->
      <div class="project-detail-actions">
        ${liveBtn}
        ${repoBtn}
      </div>
    `;

    projectDetailModal.classList.add("active");
  }
  window.openProjectDetails = openProjectDetails;

  if (closeProjectDetailModal && projectDetailModal) {
    closeProjectDetailModal.addEventListener("click", () => {
      projectDetailModal.classList.remove("active");
    });
  }

  // --- 16. GitHub API Integration with Rate-Limit Safe Fallback ---
  const githubReposContainer = document.getElementById("githubReposContainer");
  const username = personal.githubUsername || "pankaj-shaw05";

  function renderFallbackRepos() {
    if (!githubReposContainer) return;
    const baseGithub = "https://github.com/" + username;
    const fallbackList = [
      {
        name: "Blood-Bank-Management-System",
        description: "Healthcare web platform concept designed for hospital blood inventory & donor matching.",
        language: "PHP / SQL",
        url: `${baseGithub}/blood-bank-management-system`
      },
      {
        name: "PG-Life-Accommodation-Portal",
        description: "Full-stack student hostel and accommodation finder with search, filters, and MySQL.",
        language: "PHP / MySQL",
        url: `${baseGithub}/PG-Life-Accommodation-Portal`
      },
      {
        name: "Amazon-Clone-Frontend",
        description: "Responsive shopping homepage recreation practicing CSS Flexbox, Grid, and layouts.",
        language: "CSS / HTML",
        url: `${baseGithub}/Amazon-Clone-Frontend`
      },
      {
        name: "Tic-Tac-Toe-Game",
        description: "Two-player browser game implementing win-detection matrix logic in JavaScript.",
        language: "JavaScript",
        url: `${baseGithub}/Tic-Tac-Toe-Game`
      },
      {
        name: "Temperature-Converter",
        description: "Real-time bidirectional temperature conversion web utility with input validation.",
        language: "JavaScript / HTML",
        url: `${baseGithub}/Temperature-Converter`
      },
      {
        name: "Portfolio-Website",
        description: "Personal developer portfolio engineered with dynamic data architecture.",
        language: "JavaScript / CSS",
        url: `${baseGithub}/Portfolio-Website`
      }
    ];

    githubReposContainer.innerHTML = fallbackList
      .map(
        (repo) => `
        <article class="repo-card" onclick="window.open('${repo.url}', '_blank')" style="cursor: pointer;">
          <div class="repo-card-top">
            <h5 class="repo-name"><i class="fa-solid fa-book-bookmark"></i> ${repo.name}</h5>
            <p class="repo-desc">${repo.description}</p>
          </div>
          <div class="repo-card-bottom">
            <span class="repo-lang"><span class="repo-lang-dot"></span> ${repo.language}</span>
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer" style="color: var(--skin-color); font-weight: 600;" onclick="event.stopPropagation();">
              View <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px;"></i>
            </a>
          </div>
        </article>
      `
      )
      .join("");
  }

  if (githubReposContainer) {
    // Attempt fetch from public GitHub API with 3s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`, {
      signal: controller.signal
    })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error("GitHub API status " + res.status);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          renderFallbackRepos();
          return;
        }

        // Filter out practice/notes repos like 'js-hindi' and personal profile repo
        const filteredRepos = data
          .filter((repo) => {
            const name = (repo.name || "").toLowerCase();
            if (name.includes("hindi")) return false;
            if (name === username.toLowerCase()) return false;
            return true;
          })
          .slice(0, 6);

        if (filteredRepos.length === 0) {
          renderFallbackRepos();
          return;
        }

        githubReposContainer.innerHTML = filteredRepos
          .map((repo) => {
            return `
            <article class="repo-card" onclick="window.open('${repo.html_url}', '_blank')" style="cursor: pointer;">
              <div class="repo-card-top">
                <h5 class="repo-name"><i class="fa-solid fa-book-bookmark"></i> ${repo.name}</h5>
                <p class="repo-desc">${repo.description || "Project repository by Pankaj Lochan Shaw."}</p>
              </div>
              <div class="repo-card-bottom">
                <span class="repo-lang"><span class="repo-lang-dot"></span> ${repo.language || "Web"}</span>
                <div style="display: flex; gap: 12px; align-items: center;">
                  <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count || 0}</span>
                  <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="color: var(--skin-color); font-weight: 600;" onclick="event.stopPropagation();">
                    View <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px;"></i>
                  </a>
                </div>
              </div>
            </article>
          `;
          })
          .join("");
      })
      .catch(() => {
        clearTimeout(timeoutId);
        renderFallbackRepos();
      });
  }

  // --- 17. Modal: Resume Viewer ---
  const resumeModal = document.getElementById("resumeModal");
  const viewResumeBtn = document.getElementById("viewResumeBtn");
  const aboutResumeBtn = document.getElementById("aboutResumeBtn");
  const closeResumeModal = document.getElementById("closeResumeModal");

  if (viewResumeBtn && resumeModal) {
    viewResumeBtn.addEventListener("click", () => resumeModal.classList.add("active"));
  }
  if (aboutResumeBtn && resumeModal) {
    aboutResumeBtn.addEventListener("click", () => resumeModal.classList.add("active"));
  }
  if (closeResumeModal && resumeModal) {
    closeResumeModal.addEventListener("click", () => resumeModal.classList.remove("active"));
  }

  // Close modals on overlay backdrop click
  [projectDetailModal, resumeModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });
    }
  });

  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      [projectDetailModal, resumeModal].forEach((m) => {
        if (m) m.classList.remove("active");
      });
    }
  });

  // Copy Template Snippet Button
  const copyTemplateSnippetBtn = document.getElementById("copyTemplateSnippetBtn");
  if (copyTemplateSnippetBtn) {
    copyTemplateSnippetBtn.addEventListener("click", () => {
      const snippet = `{\n  id: "new-project-id",\n  slug: "new-project-slug",\n  title: "New Project Name",\n  category: "fullstack",\n  status: "Completed Project",\n  description: "Short 1-2 sentence overview for the card.",\n  longDescription: "Detailed multi-paragraph description...",\n  problemStatement: "The problem this project solves...",\n  objectives: ["Goal 1", "Goal 2"],\n  technologies: ["React", "PHP", "MySQL"],\n  icon: "fa-solid fa-laptop-code",\n  thumbnail: "",\n  screenshots: [],\n  features: ["Feature 1", "Feature 2"],\n  challenges: [{ challenge: "Problem...", solution: "Solution..." }],\n  learnings: ["Key takeaway 1"],\n  githubUrl: "",\n  liveUrl: "",\n  featured: true\n},`;
      navigator.clipboard.writeText(snippet).then(() => {
        showToast("Template snippet copied to clipboard!", "fa-solid fa-copy");
      }).catch(() => {
        showToast("Please copy the snippet manually.", "fa-solid fa-circle-exclamation");
      });
    });
  }

  // Copy Email Button
  const copyEmailTrigger = document.getElementById("copyEmailTrigger");
  if (copyEmailTrigger) {
    copyEmailTrigger.addEventListener("click", () => {
      const email = personal.email || "shaw21826@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied email (${email}) to clipboard!`, "fa-regular fa-copy");
      }).catch(() => {
        showToast(`Email: ${email}`, "fa-solid fa-envelope");
      });
    });
  }

  // --- 18. Contact Form Handling ---
  // --- 18. Contact Form Handler (Direct Web3Forms API Integration) ---
  const contactForm = document.getElementById("contactForm");
  const sendMessageBtn = document.getElementById("sendMessageBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contactName");
      const emailInput = document.getElementById("contactEmail");
      const subjectInput = document.getElementById("contactSubject");
      const messageInput = document.getElementById("contactMessage");

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      // 1. Input validation
      if (!name || !email || !subject || !message) {
        showToast("Please fill in all required fields.", "fa-solid fa-triangle-exclamation");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast("Please enter a valid email address.", "fa-solid fa-triangle-exclamation");
        return;
      }

      // 2. Button loading state
      if (sendMessageBtn) {
        sendMessageBtn.disabled = true;
        sendMessageBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending Message...';
      }

      const accessKey = personal.web3formsAccessKey || "ac7928f9-45f4-4ef6-9c6b-3375d7cd05b7";

      // 3. Direct AJAX delivery via Web3Forms API
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: `Portfolio Contact: ${subject}`,
          message: message,
          from_name: `${name} (Portfolio Inquiry)`
        })
      })
        .then(async (response) => {
          const data = await response.json().catch(() => ({}));
          if (response.ok && data.success) {
            showToast("Message sent successfully! Pankaj will reply to your email soon.", "fa-solid fa-circle-check");
            contactForm.reset();
          } else {
            throw new Error(data.message || "Failed to deliver message via Web3Forms.");
          }
        })
        .catch((err) => {
          console.error("Web3Forms error:", err);
          showToast("Unable to send message. Please contact shaw21826@gmail.com directly.", "fa-solid fa-triangle-exclamation");
        })
        .finally(() => {
          if (sendMessageBtn) {
            sendMessageBtn.disabled = false;
            sendMessageBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
          }
        });
    });
  }
});
