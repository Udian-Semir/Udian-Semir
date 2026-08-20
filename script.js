const projects = [
  {
    id: "synthoid-vr-teleop",
    stage: "undergraduate",
    phase: "大二实习",
    phaseEn: "Sophomore Internship",
    company: "Synthoid",
    name: "VR 遥操作数据采集系统",
    nameEn: "VR Teleoperation Data Collection System",
    type: "七轴机械臂 · 遥操作 · 数据采集",
    typeEn: "7-DoF Manipulator · Teleoperation · Data Collection",
    period: "大二暑假",
    role: "机器人算法实习生",
    roleEn: "Robotics Algorithm Intern",
    status: "已完成闭环",
    statusEn: "Completed",
    description: "面向七轴机械臂搭建 VR 遥操作与数据采集系统，负责机械臂运动规划、TRAC-IK 逆运动学求解、轨迹规划与传统控制算法，将操作者输入转换为机械臂可执行的连续运动。",
    descriptionEn: "Built a VR teleoperation and data collection system for a 7-DoF manipulator, covering motion planning, TRAC-IK, trajectory generation, and classical control.",
    result: "完成从 VR 操作输入、逆运动学求解、轨迹生成和控制执行到机器人数据采集的系统闭环。",
    technologies: ["Python", "Linux", "VR Teleoperation", "7-DoF Manipulator", "TRAC-IK", "Inverse Kinematics", "Trajectory Planning", "Classical Control", "Data Collection"],
    video: null,
  },
  {
    id: "synthoid-isaac-ik-rl",
    stage: "undergraduate",
    phase: "大二实习",
    phaseEn: "Sophomore Internship",
    company: "Synthoid",
    name: "Isaac 数据增强与轨迹生成",
    nameEn: "Isaac Data Augmentation and Trajectory Generation",
    type: "逆运动学 · 数据增强 · MimicGen",
    typeEn: "Inverse Kinematics · Data Augmentation · MimicGen",
    period: "大二暑假",
    role: "机器人算法实习生",
    roleEn: "Robotics Algorithm Intern",
    status: "探索项目",
    statusEn: "Exploration",
    description: "在 Isaac 仿真环境中探索利用 IK 生成机械臂操作轨迹，为强化学习和操作策略训练制造更多可用数据；围绕轨迹可行性、任务约束与示范扩增开展实验，之后采用 MimicGen 方案进行数据增强。",
    descriptionEn: "Explored IK-based trajectory generation in Isaac for reinforcement-learning and manipulation data, later adopting MimicGen for demonstration augmentation.",
    result: "完成基于 IK 的合成数据探索，之后采用 MimicGen 扩增任务示范并生成策略训练数据。",
    technologies: ["Python", "Linux", "Isaac Sim", "MimicGen", "Synthetic Data", "Demonstration Augmentation", "Reinforcement Learning", "Inverse Kinematics", "7-DoF Manipulator"],
    video: null,
  },
  {
    id: "synthoid-pi05",
    stage: "undergraduate",
    phase: "大二实习",
    phaseEn: "Sophomore Internship",
    company: "Synthoid",
    name: "PI0.5 真机长程任务部署",
    nameEn: "PI0.5 Long-Horizon Tasks on Real Robots",
    type: "VLA · 真机部署 · 长程任务",
    typeEn: "VLA · Real-Robot Deployment · Long-Horizon Tasks",
    period: "大二暑假 — 至今",
    role: "机器人算法实习生",
    roleEn: "Robotics Algorithm Intern",
    status: "当前进行中",
    statusEn: "In Progress",
    description: "正在 Kai0 框架下开展 PI0.5 的真机部署，面向需要多阶段连续执行的长程操作任务，推进模型接入、机器人执行链路与真实环境任务验证。",
    descriptionEn: "Deploying PI0.5 on real robots through the Kai0 framework for multi-stage, long-horizon manipulation tasks.",
    result: "项目仍在推进中，当前重点是打通 PI0.5 到真机执行的工程链路并验证长程任务表现。",
    technologies: ["Python", "Linux", "Kai0", "PI0.5", "VLA", "Real-Robot Deployment", "Long-Horizon Tasks"],
    video: null,
  },
  {
    id: "sentinel",
    stage: "undergraduate",
    name: "RoboMaster 哨兵联合决策系统",
    nameEn: "RoboMaster Sentry Multi-Agent Decision System",
    type: "定位 · 导航 · 自瞄 · 决策",
    typeEn: "Localization · Navigation · Auto-Aiming · Decision Making",
    period: "2026.04 — 至今",
    role: "算法组组长",
    roleEn: "Algorithm Lead",
    status: "持续开发",
    statusEn: "In Development",
    description: "搭建 Gazebo 哨兵仿真系统，融合激光雷达建图、Mid360 与 AprilTag 定位、点云匹配、自动瞄准和高性能路径规划；在同一 MiniPC 上打通传感器与决策系统。",
    descriptionEn: "Built a Gazebo sentry simulation combining LiDAR mapping, Mid360 and AprilTag localization, point-cloud matching, auto-aiming, and high-performance planning.",
    innovation: "在雷达站项目中，基于 RoboMaster 官方数据集探索离线与在线强化学习策略，并搭建可交互的 2D 强化学习训练环境；将学习策略作为第一层策略接入 Gazebo 哨兵仿真，验证学习型决策与完整机器人系统的结合路径。",
    innovationEn: "Explored offline and online reinforcement learning with the official RoboMaster dataset, built an interactive 2D training environment, and connected the learned policy as the first-level policy in the Gazebo sentry simulation.",
    next: "计划复现东北大学面向 2026 赛季开源的决策框架，进一步研究大语言模型或多模态大模型、世界模型，以及 SFT、DPO 在机器人决策中的应用。",
    nextEn: "Next, I plan to reproduce Northeastern University's open-source 2026-season decision framework and study LLMs, multimodal LLMs, world models, SFT, and DPO for robot decision making.",
    result: "RoboMaster 2025 分区赛一等奖、全国赛二等奖；2026 联盟赛二等奖。",
    loop: ["Gazebo 仿真", "融合定位", "动态障碍预测", "实车部署"],
    technologies: ["C++", "Python", "ROS2", "Linux", "Gazebo", "PCL", "OpenCV", "Kalman Filter", "AprilTag", "MiniPC", "RoboMaster Dataset", "Offline RL", "Online RL", "Interactive 2D RL Environment", "Hierarchical Policy"],
    plannedTechnologies: ["Large Language Model", "Multimodal LLM", "World Model", "SFT", "DPO"],
    video: null,
  },
  {
    id: "evtol",
    stage: "undergraduate",
    name: "eVTOL 全天候目标跟踪控制",
    nameEn: "All-Weather Target Tracking and Control for eVTOL",
    type: "多传感器融合 · 强化学习飞控",
    typeEn: "Multi-Sensor Fusion · Reinforcement-Learning Flight Control",
    period: "2025.12 — 至今",
    role: "算法负责人",
    roleEn: "Algorithm Lead",
    status: "国家级项目优秀结题",
    statusEn: "Completed",
    description: "融合 Livox MID-360、IMU、RTK-GPS 与 RGB/红外双光云台，构建全天候目标追踪与自主避障系统；同时搭建 PPO 悬停及轨迹跟踪训练管线。",
    descriptionEn: "Fused Livox MID-360, IMU, RTK-GPS, and RGB/infrared sensing for all-weather target tracking and obstacle avoidance, with PPO flight-control training.",
    result: "打通传统多传感器感知到学习型控制的技术链路，PPO 策略稳定收敛，系统面向 Jetson Orin 部署。",
    loop: ["传感器建模", "ESIKF 融合", "PPO 训练收敛", "ROS2 部署"],
    technologies: ["Python", "ROS2", "Linux", "FAST-LIO2", "ESIKF", "YOLOv8", "EGO-Planner", "Isaac Lab", "PyBullet", "PyTorch", "PPO", "Gymnasium", "TensorBoard", "Jetson Orin", "Livox MID-360"],
    video: null,
  },
  {
    id: "auto-aim",
    stage: "undergraduate",
    name: "RoboMaster 自动瞄准系统",
    nameEn: "RoboMaster Auto-Aiming System",
    type: "状态估计 · 弹道解算 · 轨迹规划",
    typeEn: "State Estimation · Ballistic Solution · Trajectory Planning",
    period: "2025.05 — 2026.06",
    role: "算法组组长",
    roleEn: "Algorithm Lead",
    status: "赛场验证",
    statusEn: "Field Validated",
    description: "提出并实现紧耦合视觉滤波器 PIEKF，以单目相机观测整车及装甲板状态；结合 RK45 弹道解算、OpenCV 识别、MobileNet 分类与 MPC 云台控制。",
    descriptionEn: "Developed a tightly coupled PIEKF visual filter and combined RK45 ballistics, OpenCV, MobileNet, and MPC gimbal control for auto-aiming.",
    result: "响应提升 100ms；步兵赛场命中率由 33% 提升至 50%，无人机远程命中率由 13% 提升至 22.4%；实验室命中率稳定 90% 以上。",
    loop: ["公式推导", "Python 仿真对比", "MiniPC 部署", "赛场命中验证"],
    technologies: ["C++", "Python", "Linux", "OpenCV", "MobileNet", "Eigen", "Ceres", "GTSAM", "IEKF / PIEKF", "MPC", "RK45", "MiniPC", "Hik CS016-UC"],
    video: null,
  },
  {
    id: "fy22-uav",
    stage: "highschool",
    name: "垂直起降复合翼无人机",
    nameEn: "VTOL Fixed-Wing UAV",
    type: "姿态控制 · 路径规划 · 动态避障",
    typeEn: "Attitude Control · Path Planning · Dynamic Obstacle Avoidance",
    period: "2022.03 — 2024.02",
    role: "项目组长",
    roleEn: "Project Lead",
    status: "优秀结题",
    statusEn: "Completed",
    description: "围绕城市包裹配送与飞行协同，完成复合翼无人机方案设计，并实现基础姿态控制、路径规划和动态避障算法。",
    descriptionEn: "Designed a VTOL fixed-wing UAV concept and implemented basic attitude control, path planning, and dynamic obstacle avoidance.",
    result: "获得上海市优秀高中生结题论文，以完整无人机工程项目开启机器人算法实践。",
    loop: ["方案设计", "飞行控制", "路径规划", "课题结题"],
    technologies: ["C++", "Flight Control", "Path Planning", "SolidWorks", "AutoCAD"],
    video: null,
  },
  {
    id: "xunji-car",
    stage: "highschool",
    name: "迅即小车",
    nameEn: "Xunji Mobile Robot",
    type: "移动机器人 · 小车控制",
    typeEn: "Mobile Robot · Motion Control",
    period: "高中阶段",
    role: "项目开发",
    roleEn: "Project Developer",
    status: "已完成闭环",
    statusEn: "Completed",
    description: "高中阶段完成的移动小车项目，完成系统搭建、运动控制与整套运行链路的闭环验证。",
    descriptionEn: "Built a mobile robot in high school, covering system integration, motion control, and end-to-end validation.",
    result: null,
    technologies: ["Mobile Robot", "Classical Control", "Path Planning"],
    video: null,
  },
  {
    id: "frc-apriltag-navigation",
    stage: "highschool",
    name: "FRC AprilTag 定位导航",
    nameEn: "FRC AprilTag Localization and Navigation",
    type: "视觉定位 · AprilTag · 导航",
    typeEn: "Visual Localization · AprilTag · Navigation",
    period: "高中阶段",
    role: "项目开发",
    roleEn: "Project Developer",
    status: "已完成闭环",
    statusEn: "Completed",
    description: "高中阶段完成的 FRC AprilTag 定位导航项目，打通场地标签识别、机器人视觉定位、位姿解算与导航执行链路。",
    descriptionEn: "Implemented an FRC AprilTag localization and navigation pipeline from tag detection and pose estimation to navigation execution.",
    result: null,
    technologies: ["FRC", "AprilTag", "Visual Localization", "Navigation", "OpenCV"],
    video: null,
  },
];

const technologyGroups = [
  {
    name: "感知算法",
    nameEn: "Perception",
    skills: ["OpenCV", "PCL", "YOLOv8", "MobileNet", "AprilTag"],
  },
  {
    name: "定位与状态估计",
    nameEn: "Localization & State Estimation",
    skills: ["Visual Localization", "FAST-LIO2", "Kalman Filter", "ESIKF", "IEKF / PIEKF", "GTSAM", "Ceres", "Eigen"],
  },
  {
    name: "规划与控制算法",
    nameEn: "Planning & Control",
    skills: ["Path Planning", "Navigation", "EGO-Planner", "Trajectory Planning", "MPC", "Classical Control", "Flight Control", "RK45"],
  },
  {
    name: "决策与学习算法",
    nameEn: "Decision Making & Learning",
    skills: ["Hierarchical Policy", "Reinforcement Learning", "PPO", "Offline RL", "Online RL", "RoboMaster Dataset", "Interactive 2D RL Environment", "PyTorch", "Large Language Model", "Multimodal LLM", "World Model", "SFT", "DPO"],
  },
  {
    name: "机器人操作与具身智能",
    nameEn: "Manipulation & Embodied AI",
    skills: ["7-DoF Manipulator", "Inverse Kinematics", "TRAC-IK", "VR Teleoperation", "Data Collection", "MimicGen", "Synthetic Data", "Demonstration Augmentation", "PI0.5", "VLA", "Long-Horizon Tasks"],
  },
  {
    name: "系统建模与仿真",
    nameEn: "Modeling & Simulation",
    skills: ["Gazebo", "Isaac Sim", "Isaac Lab", "PyBullet", "MuJoCo", "Gymnasium", "TensorBoard", "SolidWorks", "AutoCAD"],
  },
  {
    name: "硬件设备与系统部署",
    nameEn: "Hardware & System Deployment",
    skills: ["MiniPC", "Jetson Orin", "Livox MID-360", "Hik CS016-UC", "Real-Robot Deployment", "Kai0", "Mobile Robot", "FRC"],
  },
  {
    name: "机器人软件工程",
    nameEn: "Robotics Software Engineering",
    skills: ["C++", "Python", "ROS2", "Linux", "Docker"],
  },
];

const projectStages = [
  {
    id: "undergraduate",
    name: "本科阶段",
    label: "Undergraduate",
  },
  {
    id: "highschool",
    name: "高中阶段",
    label: "High School",
  },
];

const projectList = document.querySelector("#project-list");
const projectDetail = document.querySelector("#project-detail");
const technologyMap = document.querySelector("#technology-map");
const mapProjectFilter = document.querySelector("#map-project-filter");
const projectCount = document.querySelector("#project-count");
let activeProjectIndex = 0;
let mapProjectIndex = null;

function projectReference(technology) {
  return projects
    .map((project, index) =>
      project.technologies.includes(technology) || (project.plannedTechnologies || []).includes(technology) ? index + 1 : null,
    )
    .filter(Boolean);
}

function projectTechnologyGroups(project) {
  const planned = project.plannedTechnologies || [];
  return technologyGroups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((technology) => project.technologies.includes(technology) || planned.includes(technology)),
    }))
    .filter((group) => group.skills.length);
}

function renderMapProjectFilter() {
  mapProjectFilter.innerHTML = `
    <span>项目映射<br /><small>PROJECT MAPPING</small></span>
    <div>
      <button class="map-filter-button ${mapProjectIndex === null ? "active" : ""}" type="button" data-map-project="all">全部<br /><small>ALL</small></button>
      ${projects
        .map(
          (project, index) => `
            <button class="map-filter-button ${mapProjectIndex === index ? "active" : ""}" type="button" data-map-project="${index}" title="${project.name}">
              P${String(index + 1).padStart(2, "0")}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
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
                          <span class="project-title-en">${project.nameEn}</span>
                          ${project.phase ? `<span class="project-phase">${project.phase} · ${project.phaseEn}</span>` : ""}
                          <small>${project.company ? `${project.company} · ` : ""}${project.role} · ${project.roleEn} · ${project.period}</small>
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
        <span>${stage.name}<br />${stage.label}</span>
        ${project.phase ? `<b class="detail-phase">${project.phase}<br /><small>${project.phaseEn}</small></b>` : ""}
        ${project.company ? `<span>${project.company}</span>` : ""}
        <span>${project.period}</span>
        <span>${project.role}<br />${project.roleEn}</span>
        <b>${project.status}<br /><small>${project.statusEn}</small></b>
      </div>
      <span class="detail-count">P${String(activeProjectIndex + 1).padStart(2, "0")} / P${String(projects.length).padStart(2, "0")}</span>
    </header>
    <h3>${project.name}</h3>
    <p class="detail-title-en">${project.nameEn}</p>
    <p class="project-type">${project.type}</p>
    <p class="project-type-en">${project.typeEn}</p>
    <p class="detail-description">${project.description}</p>
    <p class="detail-description detail-description-en">${project.descriptionEn}</p>
    <section class="project-technology-links">
      <header><strong>对应技术地图</strong><span>Technology Mapping</span></header>
      <div>
        ${projectTechnologyGroups(project)
          .map(
            (group) => `
              <section>
                <h4>${group.name}<small>${group.nameEn}</small></h4>
                <p>${group.skills
                  .map(
                    (technology) =>
                      `<span class="project-tech-chip ${(project.plannedTechnologies || []).includes(technology) ? "planned" : ""}">${technology}</span>`,
                  )
                  .join("")}</p>
              </section>
            `,
          )
          .join("")}
      </div>
    </section>
    ${project.innovation ? `<p class="project-note project-innovation"><strong>决策创新 · Decision Innovation</strong>${project.innovation}<span>${project.innovationEn}</span></p>` : ""}
    ${project.next ? `<p class="project-note project-next"><strong>下一阶段 · Next Stage</strong>${project.next}<span>${project.nextEn}</span></p>` : ""}

    <div class="project-showcase">
      <div class="project-media project-placeholder">
        ${project.video ? `<video controls preload="metadata" src="${project.video}"></video>` : `<strong>成果展示</strong><span>Project Results</span><small>图片或视频待补充 · Image or video to be added</small>`}
      </div>
    </div>
  `;
}

function renderTechnologyMap() {
  technologyMap.innerHTML = technologyGroups
    .map(
      (group, groupIndex) => `
        <section class="technology-group">
          <header>
            <span>${String(groupIndex + 1).padStart(2, "0")}</span>
            <div><h4>${group.name}</h4><p>${group.nameEn}</p></div>
          </header>
          <ul class="skill-branches">
            ${group.skills
              .map((technology) => {
                const references = projectReference(technology);
                const isMapped = mapProjectIndex === null || references.includes(mapProjectIndex + 1);
                const isSelected = mapProjectIndex !== null && references.includes(mapProjectIndex + 1);
                const title = references.length
                  ? `用于：${references.map((number) => projects[number - 1].name).join("、")}`
                  : "技术内容待补充";
                return `
                  <li class="skill-node ${isSelected ? "active" : ""} ${isMapped ? "" : "muted"}" title="${title}">
                    <span>${technology}</span>
                    <span class="skill-project-refs">
                      ${references
                        .map(
                          (number) =>
                            `<button type="button" data-project-reference="${number - 1}" title="${projects[number - 1].name}">P${String(number).padStart(2, "0")}</button>`,
                        )
                        .join("") || `<small>待补充</small>`}
                    </span>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </section>
      `,
    )
    .join("");
}

function setActiveProject(index) {
  activeProjectIndex = index;
  mapProjectIndex = index;
  renderProjectList();
  renderProjectDetail();
  renderMapProjectFilter();
  renderTechnologyMap();
  refreshIcons();
}

projectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project-index]");
  if (!button) return;
  setActiveProject(Number(button.dataset.projectIndex));
});

mapProjectFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-project]");
  if (!button) return;
  mapProjectIndex = button.dataset.mapProject === "all" ? null : Number(button.dataset.mapProject);
  if (mapProjectIndex !== null) {
    activeProjectIndex = mapProjectIndex;
    renderProjectList();
    renderProjectDetail();
  }
  renderMapProjectFilter();
  renderTechnologyMap();
  refreshIcons();
});

technologyMap.addEventListener("click", (event) => {
  const reference = event.target.closest("[data-project-reference]");
  if (!reference) return;
  setActiveProject(Number(reference.dataset.projectReference));
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth", block: "start" });
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
mapProjectIndex = null;
renderMapProjectFilter();
renderTechnologyMap();
refreshIcons();
observeReveals();
