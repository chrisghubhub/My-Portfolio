const pageLanguage = document.documentElement.dataset.language || "en";

const timelineData = {
  en: [
    {
      date: "Apr. 2026 - Present · Beijing",
      title: "Consultant, AI Governance & Security",
      org: "KPMG Advisory China",
      achievements: [
        { metric: "400+", text: "Supported enterprise AI governance and security control design for 400+ AI use cases at a global premium automotive OEM." },
        { metric: "30+", text: "Coordinated evaluation and PoC collaboration across AI model, governance, and security vendors." },
        { metric: "4+2", text: "Enabled rollout decisions covering 4 model providers and 2 AI security vendors." },
        { metric: "Top 10", text: "Translated OWASP LLM/Agentic Top 10, EU AI Act, and NIST AI RMF requirements into enterprise-ready controls." }
      ]
    },
    {
      date: "Jun. 2025 - Aug. 2025 · Shanghai",
      title: "Strategy Consulting Intern",
      org: "Strategy&, PwC",
      achievements: [
        { metric: "Nationwide", text: "Supported a digital transformation strategy for a leading domestic coffee brand across key cities and emerging Tier 1 markets." },
        { metric: "30+", text: "Benchmarked membership systems, ordering journeys, app functions, and 30+ digital operation metrics across major coffee chains." },
        { metric: "40p+", text: "Integrated user research, app experience review, and premium coffee brand case analysis into recommendations for journey touchpoints, city entry sequence, store model, and digital operations." }
      ]
    },
    {
      date: "Jul. 2023 - Aug. 2023 · Beijing",
      title: "Strategy Research Intern, Digital Finance Center",
      org: "Ping An Bank",
      achievements: [
        { metric: "2", text: "Authored digital strategy proposals for a commercial banking business unit, focusing on engagement and retention." },
        { metric: "8-12%", text: "Designed a scenario-based mobile growth plan projected to lift monthly active users." },
        { metric: "600K+", text: "Contributed to a co-marketing funnel that increased monthly online payment transactions." },
        { metric: "20%", text: "Supported payment redirection and benefit-page design across high-frequency mobility use cases." }
      ]
    },
    {
      date: "2022 - 2024 · Santa Barbara",
      title: "Team Leadership & Case Competition",
      org: "UCSB Fencing Team / Oliver Wyman Impact Case Competition",
      achievements: [
        { metric: "23%", text: "Introduced video review and paired training mechanisms that improved team win rate." },
        { metric: "Top3", text: "Led the men's sabre team to bronze at the 2024 US collegiate club championship." },
        { metric: "4 schools", text: "Built a case competition team across two countries, three time zones, and four universities." },
        { metric: "22p", text: "Delivered a growth strategy report for a Chinese toy company, covering emerging markets and technology integration." }
      ]
    }
  ],
  zh: [
    {
      date: "2026年04月 - 至今 · 北京",
      title: "咨询顾问，AI治理与安全",
      org: "毕马威企业咨询（中国）有限公司",
      achievements: [
        { metric: "400+", text: "为全球头部高端汽车制造商梳理并纳入企业级 AI 治理与安全控制的应用场景。" },
        { metric: "30+", text: "协调 AI 模型、治理与安全供应商评估，推进 PoC 测试、能力对比与选型协作。" },
        { metric: "4+2", text: "推动 4 家模型供应商与 2 家 AI 安全供应商方案进入企业落地范围。" },
        { metric: "Top 10", text: "将 OWASP LLM/Agentic Top 10、EU AI Act、NIST AI RMF 等转化为治理要求和控制清单。" }
      ]
    },
    {
      date: "2025年06月 - 2025年08月 · 上海",
      title: "战略咨询实习生",
      org: "普华永道思略特管理咨询（上海）有限公司",
      achievements: [
        { metric: "全国", text: "参与头部本土咖啡品牌数字化转型战略，支持重点城市与新一线市场扩张。" },
        { metric: "30+", text: "围绕会员体系、点单流程、App 功能等30+数字化运营指标完成竞品对标。" },
        { metric: "40页+", text: "整合用户调研、App 使用体验与中高端咖啡品牌案例研究，梳理用户旅程触点、城市进入顺序、门店模型与数字化运营优化建议。" }
      ]
    },
    {
      date: "2023年07月 - 2023年08月 · 北京",
      title: "策略研究实习生，数字金融中心",
      org: "平安银行股份有限公司",
      achievements: [
        { metric: "2份", text: "独立主笔商业银行业务单元数字化策略方案，聚焦活跃度与留存提升。" },
        { metric: "8-12%", text: "设计场景化移动端增长方案，预计推动银行 App 月活提升。" },
        { metric: "60万+", text: "参与联合营销链路设计，带动线上支付交易量月度增量。" },
        { metric: "20%", text: "通过高频出行支付场景导流，推动线上支付交易量约增长。" }
      ]
    },
    {
      date: "2022年09月 - 2024年06月 · 圣巴巴拉",
      title: "团队领导力与商业案例竞赛",
      org: "UCSB击剑队 / 奥纬咨询商业案例大赛",
      achievements: [
        { metric: "23%", text: "引入录像分析与新老配对训练机制，提升击剑队场均胜率。" },
        { metric: "Top3", text: "带领男子佩剑团队获得 2024 USACFC 全美大学俱乐部锦标赛团体季军。" },
        { metric: "4校", text: "组建跨两个国家、三个时区、四所高校的商业案例大赛团队。" },
        { metric: "22页", text: "围绕中国玩具公司增长议题输出创新业务路径与技术整合方案。" }
      ]
    }
  ]
};

const experiences = timelineData[pageLanguage] || timelineData.en;
const copiedMessage = pageLanguage === "zh" ? "已复制：" : "Copied: ";
const nodes = document.querySelectorAll(".timeline-node");
const dateEl = document.getElementById("experience-date");
const titleEl = document.getElementById("experience-title");
const orgEl = document.getElementById("experience-org");
const listEl = document.getElementById("achievement-list");
const progressBar = document.getElementById("progress-bar");

function renderExperience(index) {
  if (!dateEl || !titleEl || !orgEl || !listEl || !progressBar) return;
  const item = experiences[index];
  dateEl.textContent = item.date;
  titleEl.textContent = item.title;
  orgEl.textContent = item.org;
  listEl.innerHTML = "";
  progressBar.style.width = "0";
  window.setTimeout(() => { progressBar.style.width = "100%"; }, 60);
  item.achievements.forEach((achievement, achievementIndex) => {
    const row = document.createElement("div");
    row.className = "achievement";
    row.style.animationDelay = `${achievementIndex * 120}ms`;
    row.innerHTML = `<strong>${achievement.metric}</strong><p>${achievement.text}</p>`;
    listEl.appendChild(row);
  });
}

nodes.forEach((node) => {
  node.addEventListener("click", () => {
    const index = Number(node.dataset.index);
    nodes.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    node.classList.add("is-active");
    node.setAttribute("aria-selected", "true");
    renderExperience(index);
  });
});
renderExperience(0);

const metricObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting || entry.target.dataset.done || !entry.target.dataset.target) return;
    const element = entry.target;
    const target = Number(element.dataset.target);
    const suffix = element.dataset.suffix || "";
    const duration = 1200;
    const started = performance.now();
    function tick(now) {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    element.dataset.done = "true";
    requestAnimationFrame(tick);
  });
}, { threshold: 0.38 });
document.querySelectorAll(".metric-number").forEach((number) => metricObserver.observe(number));

const skillCloud = document.getElementById("skill-cloud");
if (skillCloud) {
  const skillsSection = skillCloud.closest(".skills-section");
  let skillRevealTimer;
  function collapseSkills() {
    window.clearTimeout(skillRevealTimer);
    skillCloud.classList.remove("is-expanded", "is-staged");
  }
  function stageAndRevealSkills() {
    if (skillCloud.classList.contains("is-staged") || skillCloud.classList.contains("is-expanded")) return;
    window.clearTimeout(skillRevealTimer);
    skillCloud.classList.remove("is-expanded");
    skillCloud.classList.add("is-staged");
    skillRevealTimer = window.setTimeout(() => skillCloud.classList.add("is-expanded"), 450);
  }
  function checkSkillViewport() {
    const rect = skillsSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const inRevealBand = rect.top < viewportHeight * 0.78 && rect.bottom > viewportHeight * 0.18;
    if (inRevealBand) stageAndRevealSkills();
    else collapseSkills();
  }
  window.addEventListener("scroll", checkSkillViewport, { passive: true });
  window.addEventListener("resize", checkSkillViewport);
  checkSkillViewport();
}

const contactModal = document.getElementById("contact-modal");
const openContact = document.getElementById("open-contact");
const copyHint = document.getElementById("copy-hint");
function setModal(open) {
  if (!contactModal) return;
  contactModal.classList.toggle("is-open", open);
  contactModal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open);
}
if (openContact) openContact.addEventListener("click", () => setModal(true));
document.querySelectorAll("[data-close-contact]").forEach((button) => button.addEventListener("click", () => setModal(false)));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") setModal(false); });
document.querySelectorAll(".copy-contact").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy || button.textContent.trim();
    try {
      await navigator.clipboard.writeText(value);
      if (copyHint) copyHint.textContent = `${copiedMessage}${value}`;
      button.classList.add("copied");
      window.setTimeout(() => button.classList.remove("copied"), 1100);
    } catch {
      if (copyHint) copyHint.textContent = value;
    }
  });
});

const canvas = document.getElementById("signal-canvas");
const ctx = canvas?.getContext("2d");
let points = [];
function resizeCanvas() {
  if (!canvas || !ctx) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  points = Array.from({ length: Math.min(78, Math.floor(window.innerWidth / 18)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35
  }));
}
function drawSignals() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  points.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
    if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 1.4, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(87, 232, 255, 0.48)";
    ctx.fill();
    for (let next = index + 1; next < points.length; next += 1) {
      const other = points[next];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance < 118) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(87, 232, 255, ${0.11 * (1 - distance / 118)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawSignals);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawSignals();
