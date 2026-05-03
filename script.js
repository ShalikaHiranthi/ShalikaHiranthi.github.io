// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Navbar scroll =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

// ===== Mobile menu =====
const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
toggle.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobileMenu.classList.remove("open")),
  );

// ===== Hero slides =====
const slides = [
  {
    eyebrow: "Full-Stack Developer",
    title: "I am ",
    accent: "Shalika Hiranthi Dissanayaka",
    desc: "I build performant, accessible web applications with modern tools — from pixel-perfect interfaces to scalable backend systems.",
    cta: "View my work →",
    href: "#projects",
  },
  {
    eyebrow: "Open to opportunities",
    title: "I am ",
    accent: "a Full-stack Developer",
    desc: "Turning ambitious concepts into shippable products. I love rapid iteration, clean architecture, and obsessing over the details.",
    cta: "About me →",
    href: "#about",
  },
  {
    eyebrow: "Software Developer",
    title: "Crafting digital experiences",
    accent: "with code & creativity",
    desc: "Available for freelance projects and full-time roles. If you have a vision, I have the toolkit to bring it to life.",
    cta: "Tech Skills →",
    href: "#skills",
  },
];
let idx = 0;
const elE = document.getElementById("heroEyebrow");
const elT = document.getElementById("heroTitle");
const elA = document.getElementById("heroAccent");
const elD = document.getElementById("heroDesc");
const elC = document.getElementById("heroCta");
const dotsBox = document.getElementById("dots");
const heroContent = document.getElementById("heroContent");

slides.forEach((_, i) => {
  const b = document.createElement("button");
  b.setAttribute("aria-label", `Slide ${i + 1}`);
  b.addEventListener("click", () => go(i));
  dotsBox.appendChild(b);
});
const dotEls = dotsBox.querySelectorAll("button");

function render() {
  const s = slides[idx];
  elE.textContent = s.eyebrow;
  elT.textContent = s.title;
  elA.textContent = s.accent;
  elD.textContent = s.desc;
  elC.textContent = s.cta;
  elC.href = s.href;
  dotEls.forEach((d, i) => d.classList.toggle("active", i === idx));
  heroContent.style.animation = "none";
  heroContent.offsetHeight;
  heroContent.style.animation = "";
}
function go(i) {
  idx = (i + slides.length) % slides.length;
  render();
}
document
  .getElementById("prevSlide")
  .addEventListener("click", () => go(idx - 1));
document
  .getElementById("nextSlide")
  .addEventListener("click", () => go(idx + 1));
render();
setInterval(() => go(idx + 1), 6000);

// ===== Counters =====
const counters = document.querySelectorAll(".stat-num");
const cObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = "1";
        const target = +e.target.dataset.target;
        const suffix = e.target.dataset.suffix || "";
        const start = performance.now();
        const dur = 1600;
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          const v = Math.floor(target * (1 - Math.pow(1 - p, 3)));
          e.target.textContent = v + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
  },
  { threshold: 0.4 },
);
counters.forEach((c) => cObs.observe(c));

// ===== Skills =====
const skills = [
  {
    icon: "&lt;/&gt;",
    name: "Frontend",
    level: 95,
    items: ["React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    icon: "⚙",
    name: "Backend",
    level: 88,
    items: ["Node.js", "Express", "Python", "PHP", "GraphQL", "REST"],
  },
  {
    icon: "⛁",
    name: "Database",
    level: 82,
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    icon: "☁",
    name: "DevOps",
    level: 78,
    items: ["AWS", "Docker", "CI/CD", "Kubernetes"],
  },
  {
    icon: "✦",
    name: "Design",
    level: 85,
    items: ["Figma", "Framer", "Motion", "UX"],
  },
  {
    icon: "▢",
    name: "Testing:",
    level: 72,
    items: ["Jest", "PHPUnit"],
  },
];
const skillsGrid = document.getElementById("skillsGrid");
skills.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "skill-card neon-border";
  card.style.transitionDelay = `${i * 60}ms`;
  card.innerHTML = `
    <div class="skill-icon">${s.icon}</div>
    <h3>${s.name}</h3>
    <div class="skill-items">${s.items.join(" · ")}</div>
    <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
    <div class="skill-pct">${s.level}%</div>
  `;
  skillsGrid.appendChild(card);
});
const sObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.level + "%";
        sObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 },
);
document.querySelectorAll(".skill-bar-fill").forEach((b) => sObs.observe(b));

// Marquee
const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind",
  "GraphQL",
  "Figma",
  "Vite",
];
const marquee = document.getElementById("marquee");
[...stack, ...stack].forEach((t) => {
  const s = document.createElement("span");
  s.textContent = `${t} ✦`;
  marquee.appendChild(s);
});

// ===== Projects =====
const projects = [
  {
    img: "assets/project-1.jpg",
    title: "Freelance Earnings Tracker",
    cat: "Web · Dashboard",
    desc: "Django-based system for tracking gig earnings, deductions, and profitability with dynamic calculations.",
    tags: ["Django", "PostgreSQL", "JavaScript"],
    tag: "Web",
  },
  {
    img: "assets/project-2.jpg",
    title: "AI-assisted Object Recognition",
    cat: "Dashboard",
    desc: "Developing a markerless object recognition system for industrial digital twins.",
    tags: [],
    tag: "Featured",
  },
  {
    img: "assets/project-3.jpg",
    title: "Expense Tracker App",
    cat: "Web · App",
    desc: "Full-stack expense tracking app with real-time balance updates, REST APIs, and MongoDB integration.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    tag: "Web",
  },
];
const filters = ["All", "Web", "Featured"];
const filtersBox = document.getElementById("filters");
const projectsGrid = document.getElementById("projectsGrid");
let activeFilter = "All";
filters.forEach((f) => {
  const b = document.createElement("button");
  b.className = "filter-btn" + (f === activeFilter ? " active" : "");
  b.textContent = f;
  b.addEventListener("click", () => {
    activeFilter = f;
    filtersBox
      .querySelectorAll("button")
      .forEach((x) => x.classList.toggle("active", x.textContent === f));
    renderProjects();
  });
  filtersBox.appendChild(b);
});
function renderProjects() {
  projectsGrid.innerHTML = "";
  const list = projects.filter(
    (p) =>
      activeFilter === "All" ||
      p.cat.includes(activeFilter) ||
      p.tag === activeFilter,
  );
  list.forEach((p, i) => {
    const el = document.createElement("article");
    el.className = "project-card neon-border";
    el.style.animationDelay = `${i * 100}ms`;
    el.innerHTML = `
      <div class="project-img">
        <span class="project-tag">${p.tag}</span>
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="project-cat">${p.cat}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
    `;
    projectsGrid.appendChild(el);
  });
}
renderProjects();

const experience = [
  {
    role: "Full-Stack Developer",
    company: "KYKY Today Oy",
    period: "2026/04 — Present",
    description:
      "Currently working as a Full-Stack Developer Intern in Finland, building web application features using React and TypeScript. I work with Firebase services including Firestore, Authentication, and Cloud Functions, and handle API integration and state management using Redux Toolkit. I collaborate in an Agile team, contributing to development, debugging, and code improvements in a real production environment.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase"],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Prostyle Technology Pvt Ltd",
    period: "2022/10 — 2024/08",
    description:
      "Worked as a Full-Stack Software Engineer developing scalable web applications using PHP, JavaScript, and MySQL/NoSQL databases. Built RESTful APIs, improved system performance, and contributed to UI enhancements while ensuring security and maintainability across production systems in an Agile environment.",
    tags: ["PHP", "JavaScript", "NoSQL", "HTML", "CSS"],
  },
  {
    role: "Software Engineer",
    company: "Lanka Property Web Pvt Ltd",
    period: "2020/09 — 2022/10",
    description:
      "Developed web applications using PHP frameworks like Laravel and CodeIgniter, along with JavaScript and MySQL. Built and integrated REST APIs, worked on CMS solutions such as WordPress, and improved frontend performance and responsiveness for better user experience.",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "WordPress"],
  },
  {
    role: "Associate Software Engineer",
    company: "NSOFT Pvt Ltd",
    period: "2020/05 — 2020/09",
    description:
      "Built and enhanced web applications using PHP (CodeIgniter), HTML, CSS, Bootstrap, and JavaScript. Developed responsive UI components and improved user experience while maintaining clean and reusable codebases.",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    role: "Associate Software Engineer",
    company: "IDEAL SOFT Pvt Ltd",
    period: "2019/11 — 2020/05",
    description:
      "Worked as a full-stack developer using Angular, React, Node.js, and PHP. Contributed to backend services, system architecture, and database integration using MySQL and NoSQL while building and maintaining scalable applications.",
    tags: ["Angular", "Node.js", "JavaScript", "MySQL", "PHP", "WordPress"],
  },
];

(function renderTimeline() {
  const root = document.getElementById("timeline");
  if (!root) return;

  root.innerHTML = experience
    .map(
      (job) => `
    <article class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-period">${job.period}</div>
        <h3 class="timeline-role">${job.role}</h3>
        <div class="timeline-company">${job.company}</div>
        <p class="timeline-desc">${job.description}</p>
        <div class="timeline-tags">
          ${job.tags.map((t, i) => `<span class="tag">${t}${i !== job.tags.length - 1 ? " . " : ""}</span>`).join("")}
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  // reveal on scroll
  const items = root.querySelectorAll(".timeline-item");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  items.forEach((el) => io.observe(el));
})();

// ===== Contact form =====
// const form = document.getElementById("contactForm");
// const submitBtn = document.getElementById("submitBtn");
// const toast = document.getElementById("toast");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   submitBtn.disabled = true;
//   submitBtn.textContent = "Sending...";
//   setTimeout(() => {
//     submitBtn.disabled = false;
//     submitBtn.textContent = "Send message →";
//     form.reset();
//     toast.innerHTML = `<strong>Message sent!</strong><small>I'll get back to you within 24 hours.</small>`;
//     toast.classList.add("show");
//     setTimeout(() => toast.classList.remove("show"), 4000);
//   }, 900);
// });
