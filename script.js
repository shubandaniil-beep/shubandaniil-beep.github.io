const projectDetails = {
  tir: {
    kicker: "01 / DEVELOPER INTELLIGENCE",
    title: "TIR",
    lead: "Transferred Intelligence Repository — слой переносимой экспертизы для Claude Code.",
    problem: "Рабочие приёмы и доменная экспертиза обычно остаются в голове разработчика и теряются между задачами, командами и сессиями.",
    solution: "Плагин упаковывает знания в 47 переиспользуемых skills: core loop, доменные модули, pipeline‑сценарии и мета‑инструменты.",
    stack: ["Claude Code", "47 skills", "Pipelines", "Knowledge systems"],
    url: "https://github.com/shubandaniil-beep/tir-plugin"
  },
  opspilot: {
    kicker: "02 / LLM ORCHESTRATION",
    title: "OpsPilot",
    lead: "Надёжный orchestration engine, который превращает сырой prompt в проверяемый операционный результат.",
    problem: "Один вызов LLM плохо переносит сложные операции: он не даёт контроля над риском, бюджетом, параллельной работой и качеством результата.",
    solution: "Семиступенчатый pipeline маршрутизирует задачу, строит план, запускает workers, перепроверяет ответ, запрашивает approval и сохраняет audit trail.",
    stack: ["Node.js", "Zero dependencies", "69 offline tests", "Human gate"],
    url: "https://github.com/shubandaniil-beep/opspilot"
  },
  settlement: {
    kicker: "03 / TREASURY AI",
    title: "Settlement",
    lead: "B2B‑движок сверки бухгалтерского реестра с банковской выпиской.",
    problem: "Комиссии, FX, сдвиги дат, пакетные платежи и повреждённые reference превращают ручную сверку в медленный и ошибкоопасный процесс.",
    solution: "Maximum‑weight bipartite matching находит соответствия, а Isolation Forest и KMeans ранжируют оставшиеся исключения для аналитика.",
    stack: ["Python 3.12", "FastAPI", "Graph matching", "Isolation Forest", "17 tests"],
    url: "https://github.com/shubandaniil-beep/settlement-reconciliation"
  },
  prism: {
    kicker: "04 / RISK INTELLIGENCE",
    title: "PRISM",
    lead: "Объяснимый движок выявления всплесков и структурных сдвигов в финансовых потоках.",
    problem: "Один детектор видит только один тип отклонений и легко путает сезонность, шум и реальную финансовую угрозу.",
    solution: "Спектральный анализ и ансамбль из EWMA, CUSUM, Hampel, MAD и Isolation Forest дают общий score 0–100 и объяснение через Claude API.",
    stack: ["Python", "FFT", "EWMA", "CUSUM", "Isolation Forest", "Claude API"],
    url: "https://github.com/shubandaniil-beep/Prism-Financial-Anomaly-Detection-Engine"
  },
  terra: {
    kicker: "05 / WORLD MODEL",
    title: "TERRA",
    lead: "Цифровой двойник мировой экономики для проверки решений до того, как за них заплатит реальность.",
    problem: "Климатические, банковские, валютные и социальные эффекты политики связаны, но классические модели часто рассматривают их отдельно.",
    solution: "96 экономических узлов в 12 макрорегионах соединены семью контурами и прогоняются по сценариям до 2100 года со стресс‑тестами.",
    stack: ["Python", "NumPy", "12 regions", "7 contours", "Scenario simulation"],
    url: "https://github.com/shubandaniil-beep/terra-world-model"
  },
  hypecut: {
    kicker: "06 / MEDIA AUTOMATION",
    title: "Hypecut",
    lead: "Локальный инструмент, который автоматически вырезает самые сильные моменты из видео.",
    problem: "Ручной поиск хайлайтов занимает часы, а тяжёлые облачные модели дороги, медленны и не всегда нужны.",
    solution: "EBU R128‑громкость и scene detection FFmpeg объединяются в score; соседние моменты склеиваются в клипы или готовый highlight reel.",
    stack: ["Python stdlib", "FFmpeg", "EBU R128", "Scene detection", "CLI"],
    url: "https://github.com/shubandaniil-beep/hypecut"
  }
};

const englishProjectDetails = {
  tir: { lead: "Transferred Intelligence Repository — a portable expertise layer for Claude Code.", problem: "Practical techniques and domain knowledge usually remain in a developer's head and get lost between tasks, teams, and sessions.", solution: "The plugin packages knowledge into 47 reusable skills: a core loop, domain modules, pipeline scenarios, and meta-tools." },
  opspilot: { lead: "A reliable orchestration engine that turns a raw prompt into a verifiable operational result.", problem: "A single LLM call does not handle complex operations well: it offers little control over risk, budget, parallel work, or result quality.", solution: "A seven-step pipeline routes the task, plans the work, launches workers, verifies the response, requests approval, and saves an audit trail." },
  settlement: { lead: "A B2B reconciliation engine for matching an accounting ledger to a bank statement.", problem: "Fees, FX, date shifts, batch payments, and damaged references turn manual reconciliation into a slow, error-prone process.", solution: "Maximum-weight bipartite matching finds correspondences, while Isolation Forest and KMeans rank remaining exceptions for an analyst." },
  prism: { lead: "An explainable engine for detecting spikes and structural shifts in financial flows.", problem: "A single detector only sees one type of deviation and can confuse seasonality, noise, and a real financial threat.", solution: "Spectral analysis plus an ensemble of EWMA, CUSUM, Hampel, MAD, and Isolation Forest produce a 0–100 score and an explanation through the Claude API." },
  terra: { lead: "A digital twin of the global economy for testing decisions before reality pays the price.", problem: "Climate, banking, currency, and social effects of policy are intertwined, while traditional models often look at them separately.", solution: "96 economic nodes across 12 macro-regions are linked by seven feedback loops and simulated through 2100 with stress tests." },
  hypecut: { lead: "A local tool that automatically cuts the strongest moments from video.", problem: "Finding highlights manually takes hours, while heavyweight cloud models are expensive, slow, and often unnecessary.", solution: "EBU R128 loudness and FFmpeg scene detection combine into a score; adjacent moments are merged into clips or a finished highlight reel." }
};

const translations = { en: {
  home: "Home", languageSelection: "Language selection", close: "Close case", filters: "Project filters",
  language: { label: "LANG" },
  nav: { work: "Work", method: "Approach", contact: "Contact" },
  hero: { title: "I build digital", emphasis: "brains.", lead: "I turn complex ideas into AI products that look bold, work reliably, and solve real problems.", cta: "Explore projects", repos: "15 repositories" },
  work: { title: "Projects that<br /><em>speak for me.</em>", lead: "From AI orchestration to a digital twin of the global economy. Open a card to see the mini case study." },
  filters: { all: "All" }, search: "find a project...",
  projects: { tir: "An intelligence layer for Claude Code: 47 skills, pipelines, and a method for transferring expertise.", opspilot: "A production-grade engine for reliable LLM-agent orchestration with no npm dependencies.", settlement: "B2B payment reconciliation using graph matching and ML anomaly detection.", prism: "Financial anomaly detection through an ensemble of six detectors, with a clear explanation for every finding.", terra: "A digital twin of the global economy for policy, climate, and financial stress-test scenarios.", hypecut: "Finds standout moments in video from loudness and scene changes — locally, quickly, without the cloud." },
  case: { open: "Open case <b>↗</b>", short: "Case <b>↗</b>" }, empty: "Nothing found. Try “AI”, “Python”, or “fintech”.",
  method: { title: "Engineering with<br /><em>product instinct.</em>", lead: "A beautiful interface is a promise. Architecture, tests, and clear logic need to keep it." },
  principles: { one: { title: "The problem first", lead: "I unpack the domain, risks, and real cost of failure before choosing technology." }, two: { title: "Then the system", lead: "I assemble a verifiable pipeline with observability, fallback logic, and a human gate." }, three: { title: "Only then, the magic", lead: "I add AI where it strengthens the product, not where it merely decorates it." } },
  manifesto: { title: "I build a system<br />around <em>intelligence.</em>" }, contact: { title: "A difficult idea?<br /><em>Even better.</em>", lead: "Open to ambitious AI products, automation, and problems that call for engineering curiosity.", cta: "Reach out on GitHub" },
  footer: { name: "© 2026 DANIIL SHIBANOV", top: "BACK TO TOP ↑" }, dialog: { problem: "CHALLENGE", solution: "SOLUTION", repository: "Open repository" },
  meta: { title: "Daniil Shibanov — AI / Product Engineer", description: "Daniil Shibanov's portfolio — AI/Product Engineer. Agentic systems, financial analytics, and developer tools." }
}};

const getTranslation = (key) => key.split(".").reduce((value, part) => value && value[part], translations.en);
const languageButtons = [...document.querySelectorAll(".language-button")];
document.querySelectorAll("[data-i18n]").forEach(element => { element.dataset.ruText = element.textContent; });
document.querySelectorAll("[data-i18n-html]").forEach(element => { element.dataset.ruHtml = element.innerHTML; });
document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.dataset.ruPlaceholder = element.placeholder; });
document.querySelectorAll("[data-i18n-aria]").forEach(element => { element.dataset.ruAria = element.getAttribute("aria-label"); });
const setLanguage = language => {
  const english = language === "en";
  document.documentElement.lang = language;
  document.title = english ? translations.en.meta.title : "Даниил Шибанов — AI / Product Engineer";
  document.querySelector('meta[name="description"]').content = english ? translations.en.meta.description : "Портфолио Даниила Шибанова — AI/Product Engineer. Агентные системы, финансовая аналитика и developer tools.";
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = english ? getTranslation(element.dataset.i18n) : element.dataset.ruText; });
  document.querySelectorAll("[data-i18n-html]").forEach(element => { element.innerHTML = english ? getTranslation(element.dataset.i18nHtml) : element.dataset.ruHtml; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = english ? getTranslation(element.dataset.i18nPlaceholder) : element.dataset.ruPlaceholder; });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => element.setAttribute("aria-label", english ? getTranslation(element.dataset.i18nAria) : element.dataset.ruAria));
  languageButtons.forEach(button => { const active = button.dataset.language === language; button.classList.toggle("active", active); button.setAttribute("aria-pressed", String(active)); });
  try { localStorage.setItem("portfolio-language", language); } catch { /* Language still switches when storage is unavailable. */ }
};
languageButtons.forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.language)));
let savedLanguage = "ru";
try { savedLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "ru"; } catch { /* Use Russian as the default. */ }
setLanguage(savedLanguage);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const cards = [...document.querySelectorAll(".project-card")];
const filterButtons = [...document.querySelectorAll(".filter")];
const searchInput = document.querySelector("#project-search");
const emptyState = document.querySelector("#empty-state");
const header = document.querySelector(".site-header");
const progress = document.querySelector(".scroll-progress");
const cursorGlow = document.querySelector(".cursor-glow");

// Waveform is generated once so every bar has its own rhythm.
const waveBars = document.querySelector("#wave-bars");
const waveHeights = [18, 31, 46, 25, 67, 88, 54, 36, 74, 96, 62, 42, 81, 58, 29, 49, 73, 92, 64, 38, 78, 51, 34, 66, 90, 55, 28, 47, 71, 39, 22, 52];
waveHeights.forEach((height, index) => {
  const bar = document.createElement("i");
  bar.style.setProperty("--h", `${height}%`);
  bar.style.setProperty("--d", `${-index * 0.06}s`);
  waveBars.append(bar);
});

// Reveal choreography.
document.querySelectorAll(".reveal").forEach((element, index) => {
  const explicitDelay = element.dataset.delay;
  element.style.setProperty("--delay", explicitDelay ? `${explicitDelay}ms` : `${(index % 4) * 65}ms`);
});

if (reduceMotion) {
  document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px" });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
}

// Page chrome.
const updateScrollState = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${Math.min(1, ratio) * 100}%`;
  header.classList.toggle("scrolled", window.scrollY > 30);
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

const timeElement = document.querySelector("#local-time");
const clock = new Intl.DateTimeFormat("ru-RU", {
  timeZone: "Asia/Qostanay",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const updateClock = () => { timeElement.textContent = `${clock.format(new Date())} KZ`; };
updateClock();
setInterval(updateClock, 1000);

// Cursor glow, magnetic links and card depth.
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
  let glowX = innerWidth / 2;
  let glowY = innerHeight / 2;
  let targetX = glowX;
  let targetY = glowY;

  window.addEventListener("pointermove", event => {
    targetX = event.clientX;
    targetY = event.clientY;
    document.body.classList.add("cursor-active");
  }, { passive: true });

  const animateGlow = () => {
    glowX += (targetX - glowX) * 0.14;
    glowY += (targetY - glowY) * 0.14;
    cursorGlow.style.transform = `translate3d(${glowX - 130}px, ${glowY - 130}px, 0)`;
    requestAnimationFrame(animateGlow);
  };
  animateGlow();

  document.querySelectorAll(".magnetic").forEach(element => {
    element.addEventListener("pointermove", event => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    element.addEventListener("pointerleave", () => { element.style.transform = ""; });
  });

  cards.forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 2.4;
      const rotateX = ((y / rect.height) - 0.5) * -2.4;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// Filter and search work together.
let activeFilter = "all";
const applyProjectQuery = () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  cards.forEach(card => {
    const categoryMatch = activeFilter === "all" || card.dataset.tags.includes(activeFilter);
    const textMatch = !query || card.textContent.toLowerCase().includes(query) || card.dataset.tags.includes(query);
    const visible = categoryMatch && textMatch;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  emptyState.classList.toggle("visible", visibleCount === 0);
};

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    applyProjectQuery();
  });
});
searchInput.addEventListener("input", applyProjectQuery);

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    document.querySelector("#work").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }
});

// Mini case studies.
const dialog = document.querySelector("#case-dialog");
const dialogKicker = document.querySelector("#dialog-kicker");
const dialogTitle = document.querySelector("#dialog-title");
const dialogLead = document.querySelector("#dialog-lead");
const dialogProblem = document.querySelector("#dialog-problem");
const dialogSolution = document.querySelector("#dialog-solution");
const dialogStack = document.querySelector("#dialog-stack");
const dialogLink = document.querySelector("#dialog-link");

const openCase = projectId => {
  const project = projectDetails[projectId];
  if (!project) return;
  const englishCopy = englishProjectDetails[projectId];
  const english = document.documentElement.lang === "en";
  dialogKicker.textContent = project.kicker;
  dialogTitle.textContent = project.title;
  dialogLead.textContent = english ? englishCopy.lead : project.lead;
  dialogProblem.textContent = english ? englishCopy.problem : project.problem;
  dialogSolution.textContent = english ? englishCopy.solution : project.solution;
  dialogStack.replaceChildren(...project.stack.map(item => {
    const chip = document.createElement("span");
    chip.textContent = item;
    return chip;
  }));
  dialogLink.href = project.url;
  document.body.classList.add("modal-open");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
};

const closeCase = () => {
  document.body.classList.remove("modal-open");
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
};

cards.forEach(card => {
  card.addEventListener("click", () => openCase(card.dataset.project));
  card.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openCase(card.dataset.project);
  });
});

document.querySelector(".dialog-close").addEventListener("click", closeCase);
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeCase();
});
dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));

// Lightweight generative network in the hero.
const canvas = document.querySelector("#neural-canvas");
const stage = document.querySelector(".hero-stage");
const context = canvas.getContext("2d");
let canvasWidth = 0;
let canvasHeight = 0;
let particles = [];
let pointer = { x: 0, y: 0, active: false };

const createParticles = () => {
  const amount = Math.max(28, Math.min(52, Math.round(canvasWidth / 11)));
  particles = Array.from({ length: amount }, (_, index) => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    vx: (Math.random() - 0.5) * 0.24,
    vy: (Math.random() - 0.5) * 0.24,
    radius: index % 9 === 0 ? 2.1 : Math.random() * 1.15 + 0.5,
    accent: index % 11 === 0
  }));
};

const resizeCanvas = () => {
  const rect = stage.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = rect.width;
  canvasHeight = rect.height;
  canvas.width = Math.max(1, Math.round(canvasWidth * dpr));
  canvas.height = Math.max(1, Math.round(canvasHeight * dpr));
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  createParticles();
};

stage.addEventListener("pointermove", event => {
  const rect = stage.getBoundingClientRect();
  pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true };
});
stage.addEventListener("pointerleave", () => { pointer.active = false; });

const drawNetwork = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  particles.forEach((particle, index) => {
    if (!reduceMotion) {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1;
      if (pointer.active) {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 125 && distance > 0) {
          particle.x -= dx * 0.0018;
          particle.y -= dy * 0.0018;
        }
      }
    }

    for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
      const other = particles[otherIndex];
      const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
      if (distance > 88) continue;
      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(other.x, other.y);
      context.strokeStyle = `rgba(215,255,88,${(1 - distance / 88) * 0.14})`;
      context.lineWidth = 0.7;
      context.stroke();
    }

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = particle.accent ? "rgba(255,104,76,.8)" : "rgba(215,255,88,.58)";
    context.fill();
  });

  if (!reduceMotion) requestAnimationFrame(drawNetwork);
};

resizeCanvas();
drawNetwork();
window.addEventListener("resize", resizeCanvas);
