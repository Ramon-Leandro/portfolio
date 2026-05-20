// 1. i18n Configuration
const i18n = {
  en: {
    nav_about: "System.profile",
    nav_projects: "System.repository",
    nav_contact: "Connection.protocol",
    badge: "Operational Mode: Open for opportunities",
    hero_subtitle: "Building REST APIs, learning infrastructure automation, and connecting software development with IT operations.",
    hero_desc: "Developer based in Brazil. Building a strong foundation in Computer Networks with hands-on learning in Python, SQL, and Go.",
    btn_projects: "View Systems",
    btn_contact: "Establish Contact",
    
    about_p1: "> [log] Initializing user_profile...",
    about_p2: "> [info] Backend Developer based in Brazil. Holding a technical degree in Computer Networks and currently pursuing a degree in Systems Analysis and Development.",
    about_p3: "> [focus] Currently focusing on RESTful APIs, relational databases, and containerization. Eager to integrate software development with robust infrastructure.",
    about_p4: "> [status] Actively studying DevOps culture, backend architecture, and observability to build reliable systems.",
    
    contact_text: "Waiting for connection... Seeking my first professional opportunity, open-source collaboration, and backend roles.",
    
    proj_featured_desc: "Network monitoring agent built in Go. Periodically probes HTTP targets, measures availability/latency, and exposes Prometheus metrics for Grafana visualization.",
    proj_lib_desc: "Modern RESTful API built with Python. Features strict data validation with Pydantic v2, SQLAlchemy ORM, and Docker containerization.",
    proj_weather_desc: "Full-stack application using a React + Vite frontend and a Python backend. Integrates with OpenWeatherMap and features persistent search history using SQLite.",
    proj_rust_desc: "High-performance crawler combining Rust for core logic and Python for the backend communication interface."
  },
  pt: {
    nav_about: "Perfil.sistema",
    nav_projects: "Repositorio.sistema",
    nav_contact: "Protocolo.conexao",
    badge: "Modo Operacional: Aberto para oportunidades",
    hero_subtitle: "Construindo APIs REST, aprendendo automação de infraestrutura e unindo o desenvolvimento de software com operações de TI.",
    hero_desc: "Desenvolvedor no Brasil. Construindo uma base sólida em Redes de Computadores, com aprendizado prático em Python, SQL e Go.",
    btn_projects: "Ver Sistemas",
    btn_contact: "Estabelecer Conexão",
    
    about_p1: "> [log] Inicializando user_profile...",
    about_p2: "> [info] Desenvolvedor Backend baseado no Brasil. Técnico em Redes de Computadores e graduando em Análise e Desenvolvimento de Sistemas.",
    about_p3: "> [foco] Atualmente focado em APIs RESTful, bancos de dados relacionais e conteinerização. Motivado a integrar software com infraestrutura.",
    about_p4: "> [status] Estudando ativamente a cultura DevOps, arquitetura backend e observabilidade para construir sistemas confiáveis.",
    
    contact_text: "Aguardando conexão... Buscando a minha primeira oportunidade profissional, projetos open-source e colaboração em sistemas.",
    
    proj_featured_desc: "Agente de monitoramento de rede desenvolvido em Go. Verifica alvos HTTP periodicamente, mede latência e expõe métricas Prometheus para visualização no Grafana.",
    proj_lib_desc: "API RESTful moderna construída com Python. Possui validação rigorosa de dados com Pydantic v2, SQLAlchemy ORM e conteinerização com Docker.",
    proj_weather_desc: "Aplicação full-stack utilizando frontend React + Vite e backend em Python. Integração com OpenWeatherMap e histórico de buscas persistente com SQLite.",
    proj_rust_desc: "Crawler de alta performance combinando Rust para a lógica central e Python para a interface de comunicação backend."
  }
};

// 2. Data Components
const skillsData = [
  "Python", "Golang", "SQL", "JavaScript", "TypeScript", 
  "React", "Node.js", "Docker", "Kubernetes", "AWS", 
  "Linux", "Git", "GitHub"
];

const systemMetricsData = [
  { title: "Backend.core", desc: "API Architecture, Microservices basics, Data structures." },
  { title: "Infrastructure.layer", desc: "Linux, Networking Protocols, Docker." },
  { title: "Deployment.v2", desc: "Learning CI/CD, Kubernetes, Cloud concepts." },
  { title: "Code.quality", desc: "Clean Code, Testing fundamentals, Problem solving." }
];

const secondaryProjectsData = [
  {
    title: "Library Management API",
    dataKey: "proj_lib_desc",
    tech: ["Python", "REST API", "SQLAlchemy", "Docker"],
    url: "https://github.com/Ramon-Leandro/Library_Management_API"
  },
  {
    title: "Weather Dashboard",
    dataKey: "proj_weather_desc",
    tech: ["React", "Vite", "Python", "SQLite"],
    url: "https://github.com/Ramon-Leandro/Dashboard-de-Clima"
  },
  {
    title: "Rust Search Crawler",
    dataKey: "proj_rust_desc",
    tech: ["Rust", "Python", "REST API"],
    url: "https://github.com/EmanoelLimaaa/Crawler"
  }
];

const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "developer.sys" },
  { type: "cmd", text: "system --status" },
  { type: "out", text: "Learning mode active. Open for connections." },
  { type: "cmd", text: "focal --stack" },
  { type: "out", text: "Python // SQL // Go // Docker" }
];

// 3. Render Functions
function renderSkills() {
  const container = document.getElementById("skills-grid");
  container.innerHTML = skillsData.map(skill => `<div class="skill">${skill}</div>`).join('');
}

function renderSystemMetrics() {
  const container = document.getElementById("system-metrics");
  container.innerHTML = systemMetricsData.map(metric => `
    <div class="metric-card">
      <h4>${metric.title}</h4>
      <p>${metric.desc}</p>
    </div>
  `).join('');
}

function renderFeaturedProject() {
  const featuredContainer = document.getElementById("featured-project");
  featuredContainer.innerHTML = `
    <h3>network-metric-collector</h3>
    <p class="lang" data-key="proj_featured_desc"></p>
    <a href="https://github.com/Ramon-Leandro/network-metric-collector" target="_blank" class="btn btn-primary">GitHub repository ↗</a>
    <div class="tech-metrics cascade-animation">
      <div class="tech-metric"><h4>Technology.stack</h4><p>Go • Docker • Prometheus • Grafana</p></div>
      <div class="tech-metric"><h4>Core.function</h4><p>Monitoring & Observability</p></div>
      <div class="tech-metric"><h4>Infrastructure.layer</h4><p>Containerized Environment</p></div>
    </div>
  `;
}

function renderSecondaryProjects() {
  const gridContainer = document.getElementById("projects-grid");
  gridContainer.innerHTML = secondaryProjectsData.map(proj => `
    <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="project-card">
      <h4>${proj.title}</h4>
      <p class="lang" data-key="${proj.dataKey}"></p>
      <div class="project-tech">
        ${proj.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

// 4. Typewriter Effect
async function typeWriterEffect() {
  const container = document.getElementById("terminal-content");
  container.innerHTML = ""; 

  for (let i = 0; i < terminalLines.length; i++) {
    const line = terminalLines[i];
    const lineElement = document.createElement("div");
    
    if (line.type === "cmd") {
      lineElement.innerHTML = `<span>$</span> `;
    }
    container.appendChild(lineElement);

    for (let char of line.text) {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      lineElement.appendChild(charSpan);
      await new Promise(resolve => setTimeout(resolve, 50)); 
    }

    if (line.type === "out" && i < terminalLines.length - 1) {
      container.appendChild(document.createElement("br"));
    }
    
    await new Promise(resolve => setTimeout(resolve, 300)); 
  }
}

// 5. Language Logic
function setLanguage(lang) {
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-pt").classList.toggle("active", lang === "pt");
  
  document.querySelectorAll(".lang").forEach(el => {
    const key = el.getAttribute("data-key");
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.getElementById("about-text").innerHTML = `
    <h3 class="card-title">Sys.admin_attributes</h3>
    <p>${i18n[lang].about_p1}</p>
    <p>${i18n[lang].about_p2}</p>
    <p>${i18n[lang].about_p3}</p>
    <p>${i18n[lang].about_p4}</p>
  `;

  document.documentElement.lang = lang;
  localStorage.setItem("preferred-lang", lang);
}

// 6. Scroll Animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 }); 

  document.querySelectorAll('.fade-element').forEach(el => observer.observe(el));
  document.querySelectorAll('.cascade-animation').forEach(el => observer.observe(el));
}

// 7. Initialization
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-year").textContent = new Date().getFullYear();

  renderSystemMetrics();
  renderSkills();
  renderFeaturedProject();
  renderSecondaryProjects();

  document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("btn-pt").addEventListener("click", () => setLanguage("pt"));

  const savedLang = localStorage.getItem("preferred-lang") || "en";
  setLanguage(savedLang);

  typeWriterEffect(); 
  setupScrollAnimations(); 
});