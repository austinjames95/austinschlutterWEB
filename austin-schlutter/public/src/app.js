// ── Window Content ────────────────────────────────────────────────────────────
// Edit these objects to fill in your actual portfolio content.

const WINDOWS = {
  about: {
    title: "About Me",
    width: 480,
    height: 360,
    content: `
      <h1>Hi, I'm Austin Schlutter 👋</h1>
      <p>I'm a [your role, e.g. "software developer and CS student"] based in [your location].</p>
      <p>I love building things for the web and exploring new technologies. When I'm not coding
         I'm probably [your hobby].</p>
      <h2>Background</h2>
      <p>[A sentence or two about your education or experience.]</p>
    `,
  },

  projects: {
    title: "Projects",
    width: 520,
    height: 440,
    content: `
      <h1>Projects</h1>
      <div class="project-card">
        <h3>Project Name</h3>
        <p>Short description of what this project does and why you built it.</p>
        <span class="tag">JavaScript</span>
        <span class="tag">HTML/CSS</span>
        <a href="#">GitHub →</a>
      </div>
      <div class="project-card">
        <h3>Another Project</h3>
        <p>Short description of what this project does and why you built it.</p>
        <span class="tag">Python</span>
        <span class="tag">API</span>
        <a href="#">GitHub →</a>
      </div>
      <div class="project-card">
        <h3>One More Project</h3>
        <p>Short description of what this project does and why you built it.</p>
        <span class="tag">React</span>
        <span class="tag">Node.js</span>
        <a href="#">GitHub →</a>
      </div>
    `,
  },

  skills: {
    title: "Skills.txt",
    width: 400,
    height: 320,
    content: `
      <h1>Skills</h1>
      <h2>Languages</h2>
      <div class="skills-grid">
        <div class="skill-pill">JavaScript</div>
        <div class="skill-pill">Python</div>
        <div class="skill-pill">HTML/CSS</div>
        <div class="skill-pill">SQL</div>
      </div>
      <h2>Tools & Frameworks</h2>
      <div class="skills-grid">
        <div class="skill-pill">Git</div>
        <div class="skill-pill">Node.js</div>
        <div class="skill-pill">VS Code</div>
        <div class="skill-pill">Figma</div>
      </div>
    `,
  },

  resume: {
    title: "Resume.pdf",
    width: 420,
    height: 260,
    content: `
      <h1>Resume</h1>
      <p>View or download my full resume below.</p>
      <a class="contact-link" href="resume.pdf" target="_blank">
        <span class="contact-icon">📄</span>
        Open Resume PDF
      </a>
      <p style="font-size:12px; color:#888; margin-top:8px;">
        Last updated: April 2026
      </p>
    `,
  },

  contact: {
    title: "Contact",
    width: 420,
    height: 320,
    content: `
      <h1>Get in Touch</h1>
      <p>I'm always open to new opportunities and conversations.</p>
      <a class="contact-link" href="mailto:austinschlutter@gmail.com">
        <span class="contact-icon">✉️</span>
        austinschlutter@gmail.com
      </a>
      <a class="contact-link" href="https://github.com/AustinSchlutter" target="_blank">
        <span class="contact-icon">🐙</span>
        github.com/AustinSchlutter
      </a>
      <a class="contact-link" href="https://linkedin.com/in/yourprofile" target="_blank">
        <span class="contact-icon">💼</span>
        linkedin.com/in/yourprofile
      </a>
    `,
  },
};


// ── State ─────────────────────────────────────────────────────────────────────

const state = {
  openWindows: {},  // id → { el, minimized }
  zCounter: 100,
};


// ── Window Management ─────────────────────────────────────────────────────────

function openWindow(id) {
  const def = WINDOWS[id];
  if (!def) return;

  // If already open and not minimized, just focus it
  if (state.openWindows[id]) {
    const entry = state.openWindows[id];
    if (entry.minimized) {
      entry.el.classList.remove("minimized");
      entry.minimized = false;
    }
    focusWindow(id);
    return;
  }

  const el = buildWindowEl(id, def);

  // Default position: slightly randomized center
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const left = Math.max(60, (vw - def.width) / 2 + (Math.random() - 0.5) * 120);
  const top  = Math.max(40, (vh - def.height) / 2 + (Math.random() - 0.5) * 80);
  el.style.left   = left + "px";
  el.style.top    = top  + "px";
  el.style.width  = def.width  + "px";
  el.style.height = def.height + "px";

  document.getElementById("windows-container").appendChild(el);
  state.openWindows[id] = { el, minimized: false };
  focusWindow(id);
  updateDockDots();
}

function closeWindow(id) {
  const entry = state.openWindows[id];
  if (!entry) return;
  entry.el.remove();
  delete state.openWindows[id];
  updateDockDots();
}

function minimizeWindow(id) {
  const entry = state.openWindows[id];
  if (!entry) return;
  entry.el.classList.add("minimized");
  entry.minimized = true;
}

function focusWindow(id) {
  const entry = state.openWindows[id];
  if (!entry) return;
  state.zCounter++;
  entry.el.style.zIndex = state.zCounter;
  // Remove focused class from all windows, add to this one
  Object.values(state.openWindows).forEach(e => e.el.classList.remove("focused"));
  entry.el.classList.add("focused");
}


// ── Build Window Element ──────────────────────────────────────────────────────

function buildWindowEl(id, def) {
  const win = document.createElement("div");
  win.className = "window";
  win.dataset.id = id;

  win.innerHTML = `
    <div class="window-titlebar">
      <div class="traffic-lights">
        <div class="tl tl-close"  data-action="close"></div>
        <div class="tl tl-min"    data-action="minimize"></div>
        <div class="tl tl-max"    data-action="maximize"></div>
      </div>
      <div class="window-title">${def.title}</div>
    </div>
    <div class="window-content">${def.content}</div>
  `;

  // Traffic light buttons
  win.querySelector(".tl-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeWindow(id);
  });
  win.querySelector(".tl-min").addEventListener("click", (e) => {
    e.stopPropagation();
    minimizeWindow(id);
  });
  win.querySelector(".tl-max").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMaximize(win);
  });

  // Focus on click anywhere in window
  win.addEventListener("mousedown", () => focusWindow(id));

  // Drag logic
  makeDraggable(win, win.querySelector(".window-titlebar"));

  return win;
}


// ── Drag Logic ────────────────────────────────────────────────────────────────

function makeDraggable(win, handle) {
  let startX, startY, startLeft, startTop;

  handle.addEventListener("mousedown", (e) => {
    // Don't drag when clicking traffic lights
    if (e.target.classList.contains("tl")) return;

    e.preventDefault();
    startX    = e.clientX;
    startY    = e.clientY;
    startLeft = parseInt(win.style.left, 10) || 0;
    startTop  = parseInt(win.style.top,  10) || 0;

    const onMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const menuH = 28;
      const newTop  = Math.max(menuH, startTop  + dy);
      const newLeft = Math.max(0,     startLeft + dx);
      win.style.top  = newTop  + "px";
      win.style.left = newLeft + "px";
    };

    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup",   onUp);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup",   onUp);
  });
}


// ── Maximize Toggle ───────────────────────────────────────────────────────────

function toggleMaximize(win) {
  if (win.dataset.maximized === "true") {
    win.style.left   = win.dataset.prevLeft;
    win.style.top    = win.dataset.prevTop;
    win.style.width  = win.dataset.prevWidth;
    win.style.height = win.dataset.prevHeight;
    win.dataset.maximized = "false";
  } else {
    win.dataset.prevLeft   = win.style.left;
    win.dataset.prevTop    = win.style.top;
    win.dataset.prevWidth  = win.style.width;
    win.dataset.prevHeight = win.style.height;
    const menuH = 28;
    const dockH = 104;
    win.style.left   = "0px";
    win.style.top    = menuH + "px";
    win.style.width  = window.innerWidth + "px";
    win.style.height = (window.innerHeight - menuH - dockH) + "px";
    win.dataset.maximized = "true";
  }
}


// ── Dock Dots ─────────────────────────────────────────────────────────────────

function updateDockDots() {
  document.querySelectorAll(".dock-item").forEach((item) => {
    const id = item.dataset.window;
    const isOpen = !!state.openWindows[id];
    item.classList.toggle("open", isOpen);
  });
}


// ── Menu Bar Clock ────────────────────────────────────────────────────────────

function updateClock() {
  const now = new Date();
  const opts = { weekday: "short", month: "short", day: "numeric",
                 hour: "numeric", minute: "2-digit" };
  document.getElementById("menu-clock").textContent =
    now.toLocaleString("en-US", opts);
}

setInterval(updateClock, 1000);
updateClock();


// ── Wire Up Clicks ────────────────────────────────────────────────────────────

document.querySelectorAll("[data-window]").forEach((el) => {
  el.addEventListener("click", () => openWindow(el.dataset.window));
  if (el.classList.contains("menu-item")) {
    el.addEventListener("click", () => {
      document.querySelectorAll(".menu-item").forEach(m => m.classList.remove("active"));
      el.classList.add("active");
    });
  }
});


// ── Open About on load ────────────────────────────────────────────────────────

window.addEventListener("load", () => openWindow("about"));
