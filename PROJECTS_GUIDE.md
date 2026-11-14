# 📌 Quick Guide: Adding Projects in `data/projects.js`

## 🇮🇳 हिंदी में निर्देश (30-Second Guide)

Aapka portfolio ab **centralized data system** par chalta hai. Naya project add karne ke liye:

1. **`data/projects.js`** file open karein.
2. `portfolioProjects = [` ke bilkul neeche yeh format copy-paste karein:

```javascript
{
  id: "my-new-project",
  slug: "my-new-project-slug",
  title: "Project Ka Naam",
  category: "fullstack", // "fullstack" | "frontend" | "javascript" | "concept"
  status: "Completed Project",
  description: "Card me dikhne wala 1-2 line ka description.",
  longDescription: "Project details modal me dikhne wala detail paragraph.",
  problemStatement: "Yeh project kis samasya ko solve karta hai.",
  objectives: ["Goal 1", "Goal 2"],
  technologies: ["React", "PHP", "MySQL"],
  icon: "fa-solid fa-laptop-code",
  thumbnail: "",
  screenshots: [],
  features: ["Feature 1", "Feature 2"],
  challenges: [{ challenge: "Kya dikkat aayi thi...", solution: "Kaise solve kiya..." }],
  learnings: ["Kya seekhne ko mila..."],
  githubUrl: "https://github.com/pankaj-shaw05/repo", // ya "" chhod dein
  liveUrl: "https://your-demo.netlify.app",             // ya "" chhod dein
  featured: true
},
```

3. Save karein (`Ctrl + S`).
4. Website refresh karein — project card, category filter, search results, aur **Individual Project Details Modal** automatic generate ho jayenge!

---

## 🇬🇧 Categories & Icons
- Categories: `"fullstack"`, `"frontend"`, `"javascript"`, `"concept"`
- Icons: Use any [FontAwesome 6](https://fontawesome.com/icons) class name (e.g. `fa-solid fa-code`, `fa-solid fa-cart-shopping`, `fa-solid fa-droplet`, `fa-solid fa-house-chimney-user`).
- If you don't have a live link or GitHub link yet, leave them as `""` — the website will automatically display an elegant "Demo Soon" or "Code Soon" badge!
