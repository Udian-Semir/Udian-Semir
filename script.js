const projects = [
  {
    id: "synthoid-vr-teleop",
    stage: "internship",
    company: "Synthoid",
    name: "VR 遥操作数据采集系统",
    type: "七轴机械臂 · 遥操作 · 数据采集",
    period: "大二暑假",
    role: "机器人算法实习生",
    status: "已完成闭环",
    description: "面向七轴机械臂搭建 VR 遥操作与数据采集系统，负责机械臂运动规划、TRAC-IK 逆运动学求解、轨迹规划与传统控制算法，将操作者输入转换为机械臂可执行的连续运动。",
    result: "完成从 VR 操作输入、逆运动学求解、轨迹生成和控制执行到机器人数据采集的系统闭环。",
    image: "assets/project-sentinel.jpg",
    imageAlt: "机器人机械臂研发视觉示意图",
    technologies: ["Python", "Linux", "VR Teleoperation", "7-DoF Manipulator", "TRAC-IK", "Inverse Kinematics", "Trajectory Planning", "Classical Control", "Data Collection"],
    video: null,
  },
  {
    id: "synthoid-isaac-ik-rl",
    stage: "internship",
    company: "Synthoid",
    name: "Isaac 数据增强与轨迹生成",
    type: "逆运动学 · 数据增强 · MimicGen",
    period: "大二暑假",
    role: "机器人算法实习生",
    status: "探索项目",
    description: "在 Isaac 仿真环境中探索利用 IK 生成机械臂操作轨迹，为强化学习和操作策略训练制造更多可用数据；围绕轨迹可行性、任务约束与示范扩增开展实验，之后采用 MimicGen 方案进行数据增强。",
    result: "完成基于 IK 的合成数据探索，之后采用 MimicGen 扩增任务示范并生成策略训练数据。",
    image: "assets/project-auto-aim.jpg",
    imageAlt: "机器人仿真与算法研发视觉示意图",
    technologies: ["Python", "Linux", "Isaac Sim", "MimicGen", "Synthetic Data", "Demonstration Augmentation", "Reinforcement Learning", "Inverse Kinematics", "7-DoF Manipulator"],
    video: null,
  },
  {
    id: "synthoid-pi05",
    stage: "internship",
    company: "Synthoid",
    name: "PI0.5 真机长程任务部署",
    type: "VLA · 真机部署 · 长程任务",
    period: "大二暑假 — 至今",
    role: "机器人算法实习生",
    status: "当前进行中",
    description: "正在 Kai0 框架下开展 PI0.5 的真机部署，面向需要多阶段连续执行的长程操作任务，推进模型接入、机器人执行链路与真实环境任务验证。",
    result: "项目仍在推进中，当前重点是打通 PI0.5 到真机执行的工程链路并验证长程任务表现。",
    image: "assets/project-evtol.jpg",
    imageAlt: "具身智能模型部署视觉示意图",
    technologies: ["Python", "Linux", "Kai0", "PI0.5", "VLA", "Real-Robot Deployment", "Long-Horizon Tasks"],
    video: null,
  },
  {
    id: "sentinel",
    stage: "undergraduate",
    name: "RoboMaster 哨兵联合决策系统",
    type: "定位 · 导航 · 自瞄 · 决策",
    period: "2026.04 — 至今",
    role: "算法组组长",
    status: "持续开发",
    description: "搭建 Gazebo 哨兵仿真系统，融合激光雷达建图、Mid360 与 AprilTag 定位、点云匹配、自动瞄准和高性能路径规划；在同一 MiniPC 上打通传感器与决策系统。",
    innovation: "在雷达站项目中，基于 RoboMaster 官方数据集探索离线与在线强化学习策略，并搭建可交互的 2D 强化学习训练环境；将学习策略作为第一层策略接入 Gazebo 哨兵仿真，验证学习型决策与完整机器人系统的结合路径。",
    next: "计划复现东北大学面向 2026 赛季开源的决策框架，进一步研究大语言模型或多模态大模型、世界模型，以及 SFT、DPO 在机器人决策中的应用。",
    result: "RoboMaster 2025 分区赛一等奖、全国赛二等奖；2026 联盟赛二等奖。",
    loop: ["Gazebo 仿真", "融合定位", "动态障碍预测", "实车部署"],
    image: "assets/project-sentinel.jpg",
    imageAlt: "机器人系统研发视觉示意图",
    technologies: ["C++", "Python", "ROS2", "Linux", "Gazebo", "PCL", "OpenCV", "Kalman Filter", "AprilTag", "MiniPC", "RoboMaster Dataset", "Offline RL", "Online RL", "Interactive 2D RL Environment", "Hierarchical Policy"],
    plannedTechnologies: ["Large Language Model", "Multimodal LLM", "World Model", "SFT", "DPO"],
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
  {
    id: "xunji-car",
    stage: "highschool",
    name: "迅即小车",
    type: "移动机器人 · 小车控制",
    period: "高中阶段",
    role: "项目开发",
    status: "已完成闭环",
    description: "高中阶段完成的移动小车项目，完成系统搭建、运动控制与整套运行链路的闭环验证。",
    result: null,
    image: "assets/project-uav.jpg",
    imageAlt: "移动机器人项目视觉占位图",
    technologies: ["Mobile Robot", "Classical Control", "Path Planning"],
    video: null,
  },
  {
    id: "frc-apriltag-navigation",
    stage: "highschool",
    name: "FRC AprilTag 定位导航",
    type: "视觉定位 · AprilTag · 导航",
    period: "高中阶段",
    role: "项目开发",
    status: "已完成闭环",
    description: "高中阶段完成的 FRC AprilTag 定位导航项目，打通场地标签识别、机器人视觉定位、位姿解算与导航执行链路。",
    result: null,
    image: "assets/project-auto-aim.jpg",
    imageAlt: "视觉定位与导航项目视觉占位图",
    technologies: ["FRC", "AprilTag", "Visual Localization", "Navigation", "OpenCV"],
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
    skills: ["OpenCV", "PCL", "FAST-LIO2", "YOLOv8", "MobileNet", "AprilTag", "Visual Localization"],
  },
  {
    name: "规划、控制与解算",
    summary: "将状态转化为稳定动作",
    skills: ["MPC", "RK45", "EGO-Planner", "Path Planning", "Navigation", "Trajectory Planning", "Classical Control", "Flight Control"],
  },
  {
    name: "机械臂运动学与遥操作",
    summary: "求解、规划并控制机械臂运动",
    skills: ["7-DoF Manipulator", "TRAC-IK", "Inverse Kinematics", "VR Teleoperation", "Data Collection"],
  },
  {
    name: "强化学习与仿真",
    summary: "训练、评估并复现策略表现",
    skills: ["PyTorch", "PPO", "Reinforcement Learning", "Isaac Lab", "Isaac Sim", "PyBullet", "MuJoCo", "Gymnasium", "Gazebo", "TensorBoard"],
  },
  {
    name: "学习型决策",
    summary: "从比赛数据学习并生成机器人决策",
    skills: ["RoboMaster Dataset", "Offline RL", "Online RL", "Interactive 2D RL Environment", "Hierarchical Policy", "Large Language Model", "Multimodal LLM", "World Model", "SFT", "DPO"],
  },
  {
    name: "数据生成与增强",
    summary: "扩增示范轨迹与策略训练数据",
    skills: ["MimicGen", "Synthetic Data", "Demonstration Augmentation"],
  },
  {
    name: "具身智能与真机部署",
    summary: "将通用策略接入真实机器人任务",
    skills: ["Kai0", "PI0.5", "VLA", "Real-Robot Deployment", "Long-Horizon Tasks"],
  },
  {
    name: "部署、硬件与建模",
    summary: "让算法进入真实设备",
    skills: ["MiniPC", "Jetson Orin", "Livox MID-360", "Hik CS016-UC", "Mobile Robot", "FRC", "SolidWorks", "Revit", "AutoCAD"],
  },
];

const projectStages = [
  {
    id: "internship",
    name: "实习阶段",
    label: "INDUSTRY PRACTICE",
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
const projectRangeLabel = document.querySelector("#project-range-label");
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
                          <small>${project.company ? `${project.company} · ` : ""}${project.role} · ${project.period}</small>
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
        ${project.company ? `<span>${project.company}</span>` : ""}
        <span>${project.period}</span>
        <span>${project.role}</span>
        <b>${project.status}</b>
      </div>
      <span class="detail-count">P${String(activeProjectIndex + 1).padStart(2, "0")} / P${String(projects.length).padStart(2, "0")}</span>
    </header>
    <h3>${project.name}</h3>
    <p class="project-type">${project.type}</p>
    <p class="detail-description">${project.description}</p>
    ${project.innovation ? `<p class="project-note project-innovation"><strong>决策创新</strong>${project.innovation}</p>` : ""}
    ${project.next ? `<p class="project-note project-next"><strong>下一阶段</strong>${project.next}</p>` : ""}
    ${project.result ? `<p class="project-result"><strong>项目结果</strong>${project.result}</p>` : ""}

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
  const plannedTechnologies = projects[activeProjectIndex].plannedTechnologies || [];
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
                const isPlanned = plannedTechnologies.includes(technology);
                const title = isPlanned
                  ? `当前项目下一阶段计划研究：${technology}`
                  : references.length
                    ? `用于：${references.map((number) => projects[number - 1].name).join("、")}`
                    : "简历技术能力，暂未绑定当前展示项目";
                const referenceLabel =
                  references.length > 4
                    ? `${references.length} 个项目`
                    : references.map((number) => `P${String(number).padStart(2, "0")}`).join(" · ");
                return `
                  <div class="skill-node ${isActive ? "active" : ""} ${isPlanned ? "planned" : ""}" title="${title}">
                    <span>${technology}</span>
                    <small>${isPlanned ? "计划" : referenceLabel || "GENERAL"}</small>
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
projectRangeLabel.textContent = `P01—P${String(projects.length).padStart(2, "0")} `;
setActiveProject(0);
refreshIcons();
observeReveals();
