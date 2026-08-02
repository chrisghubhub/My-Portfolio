(() => {
  const slides = [...document.querySelectorAll(".slide")];
  slides.forEach((slide) => {
    if (slide.querySelector(":scope > .slide-body")) return;
    const header = slide.querySelector(":scope > .slide-header");
    const source = slide.querySelector(":scope > .source");
    const pageNumber = slide.querySelector(":scope > .slide-no");
    const body = document.createElement("div");
    body.className = "slide-body";
    [...slide.children]
      .filter((node) => node !== header && node !== source && node !== pageNumber)
      .forEach((node) => body.appendChild(node));
    slide.insertBefore(body, source || pageNumber || null);
  });
  const progress = document.getElementById("progress-bar");
  const indicator = document.getElementById("page-indicator");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const overview = document.getElementById("overview");
  const drawer = document.getElementById("appendix-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const openButtons = [document.getElementById("appendix-open"), ...document.querySelectorAll("[data-open-appendix]")];
  const closeButton = document.getElementById("appendix-close");
  const tabs = [...document.querySelectorAll("[data-tab]")];
  const panels = [...document.querySelectorAll("[data-panel]")];
  let current = 0;

  const update = (index) => {
    current = Math.max(0, Math.min(slides.length - 1, index));
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    indicator.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    document.title = `${String(current + 1).padStart(2, "0")} · ${slides[current].dataset.title} | Agentic AI Deck V2`;
  };

  const go = (index) => {
    document.body.classList.remove("overview");
    slides[Math.max(0, Math.min(slides.length - 1, index))].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setAppendix = (open) => {
    document.body.classList.toggle("appendix-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    if (open) closeButton.focus();
  };

  const setTab = (name) => {
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === name));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === name));
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) update(slides.indexOf(visible.target));
  }, { threshold: [0.35, 0.6, 0.85] });

  slides.forEach((slide) => {
    observer.observe(slide);
    slide.addEventListener("click", () => {
      if (document.body.classList.contains("overview")) {
        document.body.classList.remove("overview");
        slide.scrollIntoView({ block: "start" });
      }
    });
  });

  prev.addEventListener("click", () => go(current - 1));
  next.addEventListener("click", () => go(current + 1));
  overview.addEventListener("click", () => {
    document.body.classList.toggle("overview");
    if (!document.body.classList.contains("overview")) go(current);
  });

  openButtons.forEach((button) => button.addEventListener("click", () => setAppendix(true)));
  closeButton.addEventListener("click", () => setAppendix(false));
  backdrop.addEventListener("click", () => setAppendix(false));
  tabs.forEach((tab) => tab.addEventListener("click", () => setTab(tab.dataset.tab)));

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea, select")) return;
    if (document.body.classList.contains("appendix-open")) {
      if (event.key === "Escape") setAppendix(false);
      return;
    }
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      go(current + 1);
    } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      go(current - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      go(0);
    } else if (event.key === "End") {
      event.preventDefault();
      go(slides.length - 1);
    } else if (event.key.toLowerCase() === "o") {
      document.body.classList.toggle("overview");
    } else if (event.key.toLowerCase() === "a") {
      setAppendix(true);
    } else if (event.key.toLowerCase() === "p") {
      window.print();
    } else if (event.key === "Escape" && document.body.classList.contains("overview")) {
      document.body.classList.remove("overview");
      go(current);
    }
  });

  update(0);
})();

