// ── Window Definitions ────────────────────────────────────────────────────────

const WINDOWS = {
  about: {
    title: "About Me",
    icon: '<img src="../images/msagent-3.png" width="12px">',
    status: "Austin Schlutter — Portfolio",
    width: 480,
    height: 360,
    menu: ["File", "Edit", "View", "Help"],
    content: `
      <h1><img src="../images/msagent-3.png" width="20px"> About Me</h1>
      <p><strong>Austin Schlutter</strong> — An Electrical and Computer Engineering Junior at Rensselaer Polytechnic Institute</p>
      <p>
        Based out of Irvine CA, I have a strong passion for research, solving problems, and building. My hobbies include playing 
        music (Bass / Electric Guitar), hiking, and boxing.
      </p>
      <h2>Education</h2>
      <p>[Rensselaer Polytechnic Institute, Electrical Engineering + Computer Systems Engineering, 2028</p>
      <h2>Experience</h2>
      <p>
        Last year I took a position at City of Hope Cancer Research Center in Duarte California working on a research project analyzing
        the reaction of a patients immune system (white blood cell count) to radiation treatment.

        As for my more recent projects, please check out the <strong>Projects</strong> page for more information
      </p>
      <h2>Interests</h2>
      <p>Some of my tech interests include MedTech, Backend Development, Web Development, and Data Analysis</p>
    `,
  },

  projects: {
    title: "My Projects",
    icon: '<img src="../images/directory_closed_cool-0.png" width="12px">',
    status: "5 objects",
    width: 540,
    height: 460,
    menu: ["File", "Edit", "View", "Favorites", "Help"],
    content: `
      <h1><img src="../images/directory_closed_cool-0.png" width="20px"> My Projects</h1>
      <div class="project-card">
        <h3><img src="../images/file_lines-0.png" width="15px"> EIT-tek</h3>
        <p>
          A company I started researching Electrical Impedance Tomography, an alternative form of medical imaging technology.
          By utilizing my electrical engineering background I plan to build a device catered towards atheletes that can give athletic
          trainers insight to the athletes injuries and recovery.
        </p>
        <span class="tag">Research</span>
        <span class="tag">Embedded Hardware</span>
        <span class="tag">MedTech</span>
        &nbsp;<a href="https://www.eit-tek.com">View Website →</a>
      </div>
      <div class="project-card">
        <h3><img src="../images/file_lines-0.png" width="15px"> tasteCampus</h3>
        <p>
          A platform for prospective families to connect with current students to gain unbiased insight and first hand experience
          about universities, currently 
        </p>
        <span class="tag">Javascript</span>
        <span class="tag">HTML/CSS</span>
        <span class="tag">Stripe API</span>
        <span class="tag">Customer Discovery</span>
        &nbsp;<a href="https://www.tastecampus.com">View Website →</a>
      </div>
      <div class="project-card">
        <h3><img src="../images/file_lines-0.png" width="15px"> SimplyEwaste</h3>
        <p>Short description of what this project does and the problem it solves.</p>
        <div style=justify-content: center; > Note this project is no longer active</div>
        <span class="tag">Charity</span>
        <span class="tag">Leadership</span>
        <span class="tag">Computer Hardware</span>
        <span class="tag">Outreach</span>
        &nbsp;<a href="https://www.simplyewaste.com">View Website →</a>
      </div>
    `,
  },

  skills: {
    title: "Skills.txt — Notepad",
    icon: '<img src="../images/chip_ramdrive-2.png" width="12px">',
    status: "Ready",
    width: 400,
    height: 340,
    menu: ["File", "Edit", "Search", "Help"],
    content: `
      <h1>Skills.txt</h1>
      <h2>Languages</h2>
      <div class="skills-grid">
        <div class="skill-pill">JavaScript</div>
        <div class="skill-pill">Python</div>
        <div class="skill-pill">HTML</div>
        <div class="skill-pill">CSS</div>
        <div class="skill-pill">C++</div>
        <div class="skill-pill">Java</div>
      </div>
      <h2>Tools & Frameworks</h2>
      <div class="skills-grid">
        <div class="skill-pill">Git</div>
        <div class="skill-pill">Node.js</div>
        <div class="skill-pill">VS Code</div>
      </div>
    `,
  },

  resume: {
    title: "Resume.pdf",
    icon: '<img src="../images/file_lines-0.png" width="12px">',
    status: "1 document",
    width: 380,
    height: 240,
    menu: ["File", "View", "Help"],
    content: `
      <h1><img src="../images/file_lines-0.png" width="20px"> Resume</h1>
      <p>Click below to open or download my full resume.</p>
      <a class="contact-link" href="resume.pdf" target="_blank">
        <span class="contact-icon"><img src="../images/file_lines-0.png" width="15px"></span>
        Open Resume PDF
      </a>
      <p style="font-size:11px; color:#666; margin-top:8px;">Last updated: April 2026</p>
    `,
  },

  contact: {
    title: "Contact",
    icon: '<img src="../images/envelope_closed-0.png" width=14px>',
    status: "3 items",
    width: 400,
    height: 300,
    menu: ["File", "Edit", "Help"],
    content: `
      <h1><img src="../images/envelope_closed-0.png" width=15px> Contact</h1>
      <p>Feel free to reach out! I'd love to connect!</p>
      <a class="contact-link" href="mailto:austinschlutter@gmail.com">
        <span class="contact-icon"><img src="../images/modem-4.png" width=14px></span>
        austinschlutter@gmail.com
      </a>
      <a class="contact-link" href="https://github.com/austinjames95" target="https://github.com/austinjames95">
        <span class="contact-icon"><img src="../images/monitor_blue_grad-0.png" width=14px></span>
        github.com/AustinSchlutter
      </a>
      <a class="contact-link" href="https://linkedin.com/in/yourprofile" target="www.linkedin.com/in/austinschlutter">
        <span class="contact-icon"><img src="../images/network_internet_pcs_installer-2.png" width=14px></span>
        linkedin.com/in/yourprofile
      </a>
    `,
  },
};


// ── State ─────────────────────────────────────────────────────────────────────

const state = {
  openWindows: {},  // id → { el, minimized, taskbarBtn }
  zCounter: 100,
  focusedId: null,
};


// ── Window Open / Close / Minimize / Focus ───────────────────────────────────

function openWindow(id) {
  const def = WINDOWS[id];
  if (!def) return;

  closeStartMenu();

  if (state.openWindows[id]) {
    const entry = state.openWindows[id];
    if (entry.minimized) {
      entry.el.style.display = "flex";
      entry.minimized = false;
      entry.taskbarBtn.classList.remove("active");
    }
    focusWindow(id);
    return;
  }

  const el = buildWindowEl(id, def);

  // Position: slightly randomized center
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const left = Math.max(10, (vw - def.width) / 2 + (Math.random() - 0.5) * 160);
  const top  = Math.max(4,  (vh - def.height - 28) / 2 + (Math.random() - 0.5) * 100);
  el.style.left   = Math.round(left) + "px";
  el.style.top    = Math.round(top)  + "px";
  el.style.width  = def.width  + "px";
  el.style.height = def.height + "px";

  document.getElementById("windows-container").appendChild(el);

  // Taskbar button
  const btn = buildTaskbarBtn(id, def);
  document.getElementById("taskbar-windows").appendChild(btn);

  state.openWindows[id] = { el, minimized: false, taskbarBtn: btn };
  focusWindow(id);
}

function closeWindow(id) {
  const entry = state.openWindows[id];
  if (!entry) return;
  entry.el.remove();
  entry.taskbarBtn.remove();
  delete state.openWindows[id];
  if (state.focusedId === id) state.focusedId = null;
}

function minimizeWindow(id) {
  const entry = state.openWindows[id];
  if (!entry) return;
  entry.el.style.display = "none";
  entry.minimized = true;
  entry.taskbarBtn.classList.add("active");
  // Focus the next available window
  const others = Object.keys(state.openWindows).filter(k => k !== id && !state.openWindows[k].minimized);
  if (others.length) focusWindow(others[others.length - 1]);
  else state.focusedId = null;
}

function focusWindow(id) {
  const entry = state.openWindows[id];
  if (!entry) return;
  state.zCounter++;
  entry.el.style.zIndex = state.zCounter;
  // Update title bar active state
  Object.entries(state.openWindows).forEach(([wid, e]) => {
    e.el.querySelector(".window-titlebar").classList.toggle("inactive", wid !== id);
    e.taskbarBtn.classList.toggle("active", wid === id);
  });
  state.focusedId = id;
}


// ── Build Window Element ──────────────────────────────────────────────────────

function buildWindowEl(id, def) {
  const win = document.createElement("div");
  win.className = "window";
  win.dataset.id = id;

  const menuHtml = (def.menu || [])
    .map(m => `<span class="menu-entry">${m}</span>`).join("");

  win.innerHTML = `
    <div class="window-titlebar">
      <span class="window-title-icon">${def.icon || "📄"}</span>
      <span class="window-title">${def.title}</span>
      <div class="win-controls">
        <button class="wc-btn wc-min"  title="Minimize">_</button>
        <button class="wc-btn wc-max"  title="Maximize">□</button>
        <button class="wc-btn wc-close" title="Close" style="margin-left:2px">✕</button>
      </div>
    </div>
    <div class="window-menubar">${menuHtml}</div>
    <div class="window-content">${def.content}</div>
    <div class="window-statusbar">${def.status || "Ready"}</div>
    <div class="resize-handle rh-n"  data-dir="n"></div>
    <div class="resize-handle rh-s"  data-dir="s"></div>
    <div class="resize-handle rh-w"  data-dir="w"></div>
    <div class="resize-handle rh-e"  data-dir="e"></div>
    <div class="resize-handle rh-nw" data-dir="nw"></div>
    <div class="resize-handle rh-ne" data-dir="ne"></div>
    <div class="resize-handle rh-sw" data-dir="sw"></div>
    <div class="resize-handle rh-se" data-dir="se"></div>
  `;

  win.querySelector(".wc-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeWindow(id);
  });
  win.querySelector(".wc-min").addEventListener("click", (e) => {
    e.stopPropagation();
    minimizeWindow(id);
  });
  win.querySelector(".wc-max").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMaximize(win);
  });

  win.addEventListener("mousedown", () => focusWindow(id));
  makeDraggable(win, win.querySelector(".window-titlebar"));
  makeResizable(win);

  return win;
}


// ── Taskbar Button ────────────────────────────────────────────────────────────

function buildTaskbarBtn(id, def) {
  const btn = document.createElement("button");
  btn.className = "taskbar-window-btn";
  btn.innerHTML = `<span>${def.icon}</span> ${def.title}`;
  btn.addEventListener("click", () => {
    const entry = state.openWindows[id];
    if (!entry) return;
    if (entry.minimized) {
      entry.el.style.display = "flex";
      entry.minimized = false;
      focusWindow(id);
    } else if (state.focusedId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  });
  return btn;
}


// ── Drag Logic ────────────────────────────────────────────────────────────────

function makeDraggable(win, handle) {
  let startX, startY, startLeft, startTop;

  handle.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("wc-btn")) return;
    if (win.dataset.maximized === "true") return;
    e.preventDefault();

    startX    = e.clientX;
    startY    = e.clientY;
    startLeft = parseInt(win.style.left, 10) || 0;
    startTop  = parseInt(win.style.top,  10) || 0;

    const onMove = (e) => {
      const newLeft = Math.max(0, startLeft + (e.clientX - startX));
      const newTop  = Math.max(0, startTop  + (e.clientY - startY));
      win.style.left = newLeft + "px";
      win.style.top  = newTop  + "px";
    };

    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup",   onUp);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup",   onUp);
  });
}


// -- Resize Logic -------------------------------------------------------------

function makeResizable(win) {
  const MIN_W = 200;
  const MIN_H = 150;

  win.querySelectorAll(".resize-handle").forEach((handle) => {
    handle.addEventListener("mousedown", (e) => {
      if (win.dataset.maximized === "true") return;
      e.preventDefault();
      e.stopPropagation();
      focusWindow(win.dataset.id);

      const dir    = handle.dataset.dir;
      const startX = e.clientX;
      const startY = e.clientY;
      const startW = win.offsetWidth;
      const startH = win.offsetHeight;
      const startL = parseInt(win.style.left, 10) || win.offsetLeft;
      const startT = parseInt(win.style.top,  10) || win.offsetTop;

      // Keep the directional cursor locked while dragging fast
      const prevCursor = document.body.style.cursor;
      document.body.style.cursor = getComputedStyle(handle).cursor;

      const onMove = (e) => {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        let w = startW, h = startH, l = startL, t = startT;

        if (dir.includes("e")) w = startW + dx;
        if (dir.includes("s")) h = startH + dy;
        if (dir.includes("w")) { w = startW - dx; l = startL + dx; }
        if (dir.includes("n")) { h = startH - dy; t = startT + dy; }

        // Clamp to minimum size (anchor the opposite edge)
        if (w < MIN_W) { if (dir.includes("w")) l -= (MIN_W - w); w = MIN_W; }
        if (h < MIN_H) { if (dir.includes("n")) t -= (MIN_H - h); h = MIN_H; }

        // Keep the window on-screen (top/left edges)
        if (l < 0) { w += l; l = 0; }
        if (t < 0) { h += t; t = 0; }

        win.style.width  = w + "px";
        win.style.height = h + "px";
        win.style.left   = l + "px";
        win.style.top    = t + "px";
      };

      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup",   onUp);
        document.body.style.cursor = prevCursor;
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup",   onUp);
    });
  });
}

// ── Maximize ──────────────────────────────────────────────────────────────────

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
    const taskbarH = 28;
    win.style.left   = "0px";
    win.style.top    = "0px";
    win.style.width  = window.innerWidth + "px";
    win.style.height = (window.innerHeight - taskbarH) + "px";
    win.dataset.maximized = "true";
  }
}


// ── Start Menu ────────────────────────────────────────────────────────────────

function toggleStartMenu() {
  const menu = document.getElementById("start-menu");
  const btn  = document.getElementById("start-btn");
  const isOpen = !menu.classList.contains("hidden");
  menu.classList.toggle("hidden", isOpen);
  btn.classList.toggle("active", !isOpen);
}

function closeStartMenu() {
  document.getElementById("start-menu").classList.add("hidden");
  document.getElementById("start-btn").classList.remove("active");
}

// Close start menu when clicking elsewhere
document.addEventListener("mousedown", (e) => {
  if (!e.target.closest("#start-menu") && !e.target.closest("#start-btn")) {
    closeStartMenu();
  }
});


// ── Shutdown Dialog ───────────────────────────────────────────────────────────

function showShutdown() {
  closeStartMenu();
  let overlay = document.getElementById("shutdown-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "shutdown-overlay";
    overlay.innerHTML = `
      <div class="shutdown-dialog">
        <div class="shutdown-titlebar">
          <span>Shut Down Windows</span>
          <button class="wc-btn" onclick="document.getElementById('shutdown-overlay').classList.remove('visible')" style="width:14px;height:12px;font-size:9px">✕</button>
        </div>
        <div class="shutdown-body">
          <span class="icon"><img src="../images/monitor_black.png" width="32px"></span>
          <div>
            <p><strong>Are you sure you want to shut down?</strong></p>
            <p>Austin Schlutter OS v1.0</p>
          </div>
        </div>
        <div class="shutdown-buttons">
          <button class="dialog-btn" onclick="document.getElementById('shutdown-overlay').classList.remove('visible')">Cancel</button>
          <button class="dialog-btn" onclick="window.close()">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  overlay.classList.add("visible");
}

document.getElementById("shutdown-btn").addEventListener("click", showShutdown);


// ── Clock ─────────────────────────────────────────────────────────────────────

function updateClock() {
  const now  = new Date();
  const h    = now.getHours();
  const m    = String(now.getMinutes()).padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  const h12  = h % 12 || 12;
  document.getElementById("taskbar-clock").textContent = `${h12}:${m} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();


// ── Wire Up All [data-window] Clicks ─────────────────────────────────────────

document.querySelectorAll("[data-window]").forEach((el) => {
  el.addEventListener("dblclick", () => openWindow(el.dataset.window));
  // Desktop icons open on double-click; start menu items on single click
  if (el.classList.contains("start-item")) {
    el.addEventListener("click", () => openWindow(el.dataset.window));
  }
});

// Desktop icon single-click = select
document.querySelectorAll(".desktop-icon").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    document.querySelectorAll(".desktop-icon").forEach(i => i.classList.remove("selected"));
    icon.classList.add("selected");
    e.stopPropagation();
  });
});

// Click desktop = deselect icons
document.getElementById("desktop").addEventListener("click", () => {
  document.querySelectorAll(".desktop-icon").forEach(i => i.classList.remove("selected"));
});

// Menu bar items open windows
document.querySelectorAll(".menu-item[data-window]").forEach((el) => {
  el.addEventListener("click", () => openWindow(el.dataset.window));
});


// ── Open About on load ────────────────────────────────────────────────────────

window.addEventListener("load", () => openWindow("about"));
