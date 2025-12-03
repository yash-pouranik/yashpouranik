const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


const projects = [
    {
        slug: "edubridge",
        title: "EduBridge Kids",
        year: "2025 - NOV",  
        tagline: "Offline-first LMS with AI & Live Classes",
        stats: "Void Hack 7.0 | MERN, PWA, Gemini AI",
        desc: "Built for Void Hack 7.0. A comprehensive educational platform designed for low-connectivity regions. Features role-based access, offline-first PWA, and Gemini-powered AI study assistant.",
        repo: "https://github.com/KushagraJaiswar02/EduPlatform",
        live: "https://eduplatform.bitbros.in/"
    },
    {
        slug: "campusnotes",
        title: "CampusNotes",
        year: "2025 - SEPT",  
        tagline: "Academic notes sharing platform",
        stats: "750+ Active Users | Node.js, EJS, MongoDB",
        desc: "Developed a full-stack web application enabling students to share academic notes. Engineered a secure, role-based platform with a verification system and AI assistant.",
        repo: "https://github.com/yash-pouranik/CampusNotes",
        live: "https://campusnotes.bitbros.in/"
    },
    {
        slug: "trekstay",
        title: "TrekStay",
        year: "2025 - JUNE",
        tagline: "Airbnb-inspired stay booking",
        stats: "Node.js, EJS, MongoDB, Mapbox",
        desc: "Designed and built a travel booking application with dual roles (user/admin), full CRUD operations, and map integration using Mapbox GL.",
        repo: "https://github.com/yash-pouranik/trekStay",
        live: "https://trekstay.onrender.com/"
    },
    {
        slug: "gullybazar",
        title: "GullyBazar",
        year: "2024 - JULY",
        tagline: "Hyperlocal marketplace for vendors",
        stats: "Solve for India Hackathon | MERN Stack",
        desc: "Created during a 48-hour hackathon to connect street food vendors with raw material suppliers. Integrated supplier reviews and secure authentication.",
        repo: "https://github.com/yash-pouranik/gullybaza-bitbros",
        live: "https://gullybazar.bitbros.in/"
    },
    {
        slug: "nirvirodh",
        title: "Nirvirodh",
        year: "2025 - AUG",
        tagline: "Real-time collaboration tool",
        stats: "Socket.IO, Node.js, MongoDB",
        desc: "A secure team collaboration platform featuring a real-time file locking system to prevent editing conflicts.",
        repo: "https://github.com/yash-pouranik/nirvirodh",
        live: "https://nirvirodh.onrender.com"
    },
    {
        slug: "pandey-dhudh-bhandar",
        title: "Pandey Ledger",
        year: "2025 - SEPT",
        tagline: "Digital credit manager",
        stats: "Practical Use Case | Node.js, MongoDB",
        desc: "A custom ledger app for a local milk vendor to digitize customer credit ('udhaar'). Features daily entry logging and balance calculation.",
        repo: "https://github.com/yash-pouranik/PandeyDhudhBhandar",
        live: "https://pandeydudhbhandar.bitbros.in/"
    }
];


// Root route
app.get("/", (req, res) => {
    res.render("index", { 
        featuredProjects: projects.slice(0, 2) 
    });
});

// About route
app.get("/about", (req, res) => {
    res.render("about");
});

// Projects route (now renders the grid)
app.get("/projects", (req, res) => {
    res.render("projects", { projects: projects });
});

// --- NEW PROJECT DETAIL ROUTE ---
// This handles URLs like /projects/campusnotes
app.get("/projects/:slug", (req, res) => {
    const project = projects.find(p => p.slug === req.params.slug);
    if (project) {
        // Render the new 'project-detail.ejs' file
        res.render("project-detail", { project: project });
    } else {
        res.redirect("/projects"); // If not found, go back
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});