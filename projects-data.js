/**
 * ==============================================================================
 * BACKWARD-COMPATIBILITY WRAPPER (projects-data.js)
 * ==============================================================================
 * Note: The master projects database has been organized into data/projects.js!
 * This file ensures backward compatibility. Any script loading projects-data.js
 * will access the exact same portfolioProjects array.
 * ==============================================================================
 */

// If data/projects.js was already loaded, reuse it; otherwise define fallback
if (typeof window !== "undefined" && window.portfolioProjects) {
  // Already loaded from data/projects.js
} else if (typeof portfolioProjects !== "undefined") {
  if (typeof window !== "undefined") window.portfolioProjects = portfolioProjects;
}
