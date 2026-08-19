const projects = [
  {
    id: "sentinel",
    stage: "undergraduate",
    name: "RoboMaster 哨兵联合决策系统",
    type: "定位 · 导航 · 自瞄 · 决策",
    period: "2026.04 — 至今",
    role: "算法组组长",
    status: "持续开发",
    description: "搭建 Gazebo 哨兵仿真系统，融合激光雷达建图、Mid360 与 AprilTag 定位、点云匹配、自动瞄准和高性能路径规划；在同一 MiniPC 上打通传感器与决策系统。",
    result: "RoboMaster 2025 分区赛一等奖、全国赛二等奖；2026 联盟赛二等奖。",
    loop: ["Gazebo 仿真", "融合定位", "动态障碍预测", "实车部署"],
    image: "assets/project-sentinel.jpg",
    imageAlt: "机器人系统研发视觉示意图",
    technologies: ["C++", "ROS2", "Linux", "Gazebo", "PCL", "OpenCV", "Kalman Filter", "AprilTag", "MiniPC"],
    video: null,
  },
  {
    id: "evtol",
    stage: "undergraduate",
    name: "eVTOL 全天候目标跟踪控制",
    type: "多传感器融合 · 强化学习飞控",
    period: "2025.12 — 至今",
    role: "算法负责人",
    status: "国家级项目优秀结题",
    description: "融合 Livox MID-360、IMU、RTK-GPS 与 RGB/红外双光云台，构建全天候目标追踪与自主避障系统；同时搭建 PPO 悬停及轨迹跟踪训练管线。",
    result: "打通传统多传感器感知到学习型控制的技术链路，PPO 策略稳定收敛，系统面向 Jetson Orin 部署。",
    loop: ["传感器建模", "ESIKF 融合", "PPO 训练收敛", "ROS2 部署"],
    image: "assets/project-evtol.jpg",
    imageAlt: "无人机飞行视觉示意图",
    technologies: ["Python", "ROS2", "Linux", "FAST-LIO2", "ESIKF", "YOLOv8", "EGO-Planner", "Isaac Lab", "PyBullet", "PyTorch", "PPO", "Gymnasium", "TensorBoard", "Jetson Orin", "Livox MID-360"],
    video: null,
  },
  {
    id: "auto-aim",
    stage: "undergraduate",
    name: "RoboMaster 自动瞄准系统",
    type: "状态估计 · 弹道解算 · 轨迹规划",
    period: "2025.05 — 2026.06",
    role: "算法组组长",
    status: "赛场验证",
    description: "提出并实现紧耦合视觉滤波器 PIEKF，以单目相机观测整车及装甲板状态；结合 RK45 弹道解算、OpenCV 识别、MobileNet 分类与 MPC 云台控制。",
    result: "响应提升 100ms；步兵赛场命中率由 33% 提升至 50%，无人机远程命中率由 13% 提升至 22.4%；实验室命中率稳定 90% 以上。",
    loop: ["公式推导", "Python 仿真对比", "MiniPC 部署", "赛场命中验证"],
    image: "assets/project-auto-aim.jpg",
    imageAlt: "机器视觉设备研发示意图",
    technologies: ["C++", "Python", "Linux", "OpenCV", "MobileNet", "Eigen", "Ceres", "GTSAM", "IEKF / PIEKF", "MPC", "RK45", "MiniPC", "Hik CS016-UC"],
    video: null,
  },
  {
    id: "fy22-uav",
    stage: "highschool",
    name: "垂直起降复合翼无人机",
    type: "姿态控制 · 路径规划 · 动态避障",
    period: "2022.03 — 2024.02",
    role: "项目组长",
    status: "优秀结题",
    description: "围绕城市包裹配送与飞行协同，完成复合翼无人机方案设计，并实现基础姿态控制、路径规划和动态避障算法。",
    result: "获得上海市优秀高中生结题论文，以完整无人机工程项目开启机器人算法实践。",
    loop: ["方案设计", "飞行控制", "路径规划", "课题结题"],
    image: "assets/project-uav.jpg",
    imageAlt: "无人机项目视觉示意图",
    technologies: ["C++", "Flight Control", "Path Planning", "SolidWorks", "AutoCAD"],
    video: null,
  },
];

const technologyGroups = [
  {
    name: "编程与工程基础",
    summary: "开发机器人系统与工程环境",
    skills: ["C++", "Python", "ROS2", "Linux", "Docker"],
  },
  {
    name: "状态估计与优化",
    summary: "从噪声观测中恢复可信状态",
    skills: ["Kalman Filter", "ESIKF", "IEKF / PIEKF", "GTSAM", "Ceres", "Eigen"],
  },
  {
    name: "视觉感知与融合定位",
    summary: "理解环境、目标与机器人位置",
    skills: ["OpenCV", "PCL", "FAST-LIO2", "YOLOv8", "MobileNet", "AprilTag"],
  },
  {
    name: "规划、控制与解算",
    summary: "将状态转化为稳定动作",
    skills: ["MPC", "RK45", "EGO-Planner", "Path Planning", "Flight Control"],
  },
  {
    name: "强化学习与仿真",
    summary: "训练、评估并复现策略表现",
    skills: ["PyTorch", "PPO", "Isaac Lab", "Isaac Sim", "PyBullet", "MuJoCo", "Gymnasium", "Gazebo", "TensorBoard"],
  },
  {
    name: "部署、硬件与建模",
    summary: "让算法进入真实设备",
    skills: ["MiniPC", "Jetson Orin", "Livox MID-360", "Hik CS016-UC", "SolidWorks", "Revit", "AutoCAD"],
  },
];

// 后续实习项目只需加入 projects，并将 stage 设置为 "internship"。
const projectStages = [
  {
    id: "internship",
    name: "实习阶段",
    label: "INDUSTRY PRACTICE",
    empty: "实习项目资料待补充",
  },
  {
    id: "undergraduate",
    name: "本科阶段",
    label: "ROBOTICS & RESEARCH",
  },
  {
    id: "highschool",
    name: "高中阶段",
    label: "EARLY EXPLORATION",
  },
];

const projectList = document.querySelector("#project-list");
const projectDetail = document.querySelector("#project-detail");
const technologyMap = document.querySelector("#technology-map");
const projectCount = document.querySelector("#project-count");
let activeProjectIndex = 0;

function projectReference(technology) {
  return projects
    .map((project, index) => (project.technologies.includes(technology) ? index + 1 : null))
    .filter(Boolean);
}

function renderProjectList() {
  projectList.innerHTML = projectStages
    .map((stage) => {
      const stageProjects = projects
        .map((project, index) => ({ project, index }))
        .filter(({ project }) => project.stage === stage.id);

      return `
        <section class="stage-group">
          <header class="stage-label">
            <div><strong>${stage.name}</strong><span>${stage.label}</span></div>
            <small>${String(stageProjects.length).padStart(2, "0")}</small>
          </header>
          ${
            stageProjects.length
              ? stageProjects
                  .map(
                    ({ project, index }) => `
                      <button
                        class="project-select ${index === activeProjectIndex ? "active" : ""}"
                        type="button"
                        data-project-index="${index}"
                        aria-pressed="${index === activeProjectIndex}"
                      >
                        <span class="select-index">P${String(index + 1).padStart(2, "0")}</span>
                        <span class="select-copy">
                          <strong>${project.name}</strong>
                          <small>${project.role} · ${project.period}</small>
                        </span>
                        <i data-lucide="chevron-right" aria-hidden="true"></i>
                      </button>
                    `,
                  )
                  .join("")
              : `<div class="stage-empty"><i data-lucide="plus" aria-hidden="true"></i><span>${stage.empty}</span></div>`
          }
        </section>
      `;
    })
    .join("");
}

function renderProjectDetail() {
  const project = projects[activeProjectIndex];
  const stage = projectStages.find((item) => item.id === project.stage);
  projectDetail.innerHTML = `
    <header class="detail-header">
      <div class="project-meta">
        <span>${stage.name}</span>
        <span>${project.period}</span>
        <span>${project.role}</span>
        <b>${project.status}</b>
      </div>
      <span class="detail-count">P${String(activeProjectIndex + 1).padStart(2, "0")} / P${String(projects.length).padStart(2, "0")}</span>
    </header>
    <h3>${project.name}</h3>
    <p class="project-type">${project.type}</p>
    <p class="detail-description">${project.description}</p>
    <p class="project-result"><strong>项目结果</strong>${project.result}</p>

    <div class="project-showcase">
      <figure class="project-media">
        <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" />
        <figcaption>视觉示意图 · 项目素材可替换</figcaption>
      </figure>
      <div class="project-video ${project.video ? "has-video" : ""}">
        ${
          project.video
            ? `<video controls preload="metadata" src="${project.video}"></video>`
            : `<i data-lucide="play" aria-hidden="true"></i>
               <div><strong>完整项目演示</strong><span>VIDEO SPACE · 16:9</span></div>
               <small>后续可放入仿真、实机与结果验证视频</small>`
        }
      </div>
    </div>
  `;
}

function renderTechnologyMap() {
  const activeTechnologies = projects[activeProjectIndex].technologies;
  technologyMap.innerHTML = technologyGroups
    .map(
      (group, groupIndex) => `
        <section class="technology-group">
          <header>
            <span>${String(groupIndex + 1).padStart(2, "0")}</span>
            <div><h4>${group.name}</h4><p>${group.summary}</p></div>
          </header>
          <div class="skill-cloud">
            ${group.skills
              .map((technology) => {
                const references = projectReference(technology);
                const isActive = activeTechnologies.includes(technology);
                const title = references.length
                  ? `用于：${references.map((number) => projects[number - 1].name).join("、")}`
                  : "简历技术能力，暂未绑定当前展示项目";
                return `
                  <div class="skill-node ${isActive ? "active" : ""}" title="${title}">
                    <span>${technology}</span>
                    <small>${references.map((number) => `P${String(number).padStart(2, "0")}`).join(" · ") || "GENERAL"}</small>
                  </div>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function setActiveProject(index) {
  activeProjectIndex = index;
  renderProjectList();
  renderProjectDetail();
  renderTechnologyMap();
  refreshIcons();
}

projectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project-index]");
  if (!button) return;
  setActiveProject(Number(button.dataset.projectIndex));
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function closeMenu() {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开菜单");
  menuButton.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
  refreshIcons();
}

menuButton.addEventListener("click", () => {
  const willOpen = !nav.classList.contains("open");
  nav.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "关闭菜单" : "打开菜单");
  menuButton.innerHTML = `<i data-lucide="${willOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  refreshIcons();
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  elements.forEach((element) => observer.observe(element));
}

document.querySelector("#year").textContent = new Date().getFullYear();
projectCount.textContent = String(projects.length).padStart(2, "0");
setActiveProject(0);
refreshIcons();
observeReveals();
