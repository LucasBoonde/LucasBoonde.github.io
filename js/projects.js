// All project content lives here. Edit text, add images or add a new
// project by copying one of the objects below. Images go in assets/img/.

const PROJECTS = [
  {
    id: "plug-and-produce-mes",
    title: "Plug-and-Produce MES",
    kicker: "Master's thesis",
    year: "2026",
    summary:
      "A manufacturing execution system where new stations announce what they can do, and the line reconfigures itself around them.",
    tags: ["Asset Administration Shell", "MQTT", "PackML", "Next.js", "Docker"],
    cover: "assets/img/thesis-1.jpg",
    facts: [
      ["Context", "MSc thesis, Aalborg University · 30 ECTS"],
      ["Team", "3 people"],
      ["Based on", "MADE REACT, AAU Smart Production Lab"],
      ["Stack", "Eclipse BaSyx, MQTT, PackML, Next.js, PostgreSQL, Docker"],
    ],
    sections: [
      {
        heading: "Problem",
        body: "High-mix, low-volume production needs lines that can be rebuilt quickly. In practice every machine speaks its own protocol, so adding or swapping a station means weeks of manual integration, and one failing station can stop the whole line.",
      },
      {
        heading: "Approach",
        body: "Every product, station and production line is described by an Asset Administration Shell, a standardised digital twin holding its capabilities, skills and communication details. A line controller matches what a product requires against what the connected equipment offers, and orchestrates each step over MQTT using PackML states. On top sits an MES web app for configuring lines, registering new assets from templates and placing orders.",
      },
      {
        heading: "Result",
        body: "The system integrates and coordinates heterogeneous resources with far less manual engineering, and can reroute production based on which resources are available. Parts of the line were simulated, and full industrial-scale deployment, advanced scheduling and a complete resilience evaluation remain future work.",
      },
    ],
    gallery: [
      ["assets/img/thesis-1.jpg", "MES dashboard"],
      ["assets/img/thesis-2.jpg", "Line configurator: drag resources onto the floor and connect them"],
      ["assets/img/thesis-3.jpg", "System architecture"],
      ["assets/img/thesis-4.jpg", "Information model for products and resources"],
    ],
    links: [["Source code", "https://github.com/JepKri21/VT4-Modular-Structure/tree/main"]],
  },
  {
    id: "pomodoro-desk-lamp",
    title: "Pomodoro Desk Lamp",
    kicker: "Personal product",
    year: "2025 – now",
    summary:
      "A focus timer you feel instead of watch. The light dims as the session runs out and changes colour when it is time for a break.",
    tags: ["ESP32", "Embedded C++", "CAD", "3D printing", "Product design"],
    cover: "assets/img/lamp-1.jpg",
    facts: [
      ["Context", "Self-initiated, BONDe CREATIONS"],
      ["Role", "Everything: electronics, firmware, CAD, printing"],
      ["Status", "Version 2.1"],
      ["Stack", "ESP32, RGB light, display, 3D printed enclosure"],
    ],
    sections: [
      {
        heading: "Problem",
        body: "Most Pomodoro timers live on the phone, which is the very thing you are trying to stay away from. I wanted a timer that sits in my peripheral vision and needs no screen time at all.",
      },
      {
        heading: "Approach",
        body: "An ESP32 drives the light and a small countdown display in the base. Three physical buttons handle everything: pick focus and break colours, set the timer, start, stop or skip. The shade, base and internals are my own CAD, with several shade variants printed and compared for light diffusion and wall thickness.",
      },
      {
        heading: "Result",
        body: "A working lamp, now at version 2.1. It has been a hands-on lesson in design for manufacturing: tolerances, print orientation, cable routing and how much a part changes once it has to be assembled more than once.",
      },
    ],
    gallery: [
      ["assets/img/lamp-1.jpg", "Version 2.1 in focus mode"],
      ["assets/img/lamp-2.jpg", "Fresh off the printer"],
      ["assets/img/lamp-3.jpg", "Cross-section of two shade variants"],
    ],
    links: [],
  },
  {
    id: "vision-tool-korber",
    title: "Vision Tool at Körber",
    kicker: "Project-oriented stay",
    year: "2025",
    summary:
      "An end-to-end tool that lets customers photograph their products and get an automatic classification back, replacing a manual expert review.",
    tags: ["Computer vision", "Deep learning", "Mobile app", "Cloud"],
    cover: null,
    facts: [
      ["Context", "9th semester at Körber Supply Chain A/S"],
      ["Role", "Sole developer, weekly reviews with R&D"],
      ["Period", "Fall 2025"],
      ["Stack", "Python, Keras, Expo mobile app, cloud inference"],
    ],
    sections: [
      {
        heading: "Problem",
        body: "Qualifying customer products was a manual, time-consuming task that relied on experts looking through large volumes of images. That is hard to scale and gives inconsistent answers.",
      },
      {
        heading: "Approach",
        body: "I built the whole chain in six iterations: a local machine learning pipeline first, then stricter image-capture guidelines, a mobile app for customers, a move from local to cloud inference, and finally authentication and a simple API for the sales team. Each iteration ended with an evaluation against the requirements and feedback from R&D.",
      },
      {
        heading: "What I took away",
        body: "How different a real production environment is from a semester project: structuring a codebase others will take over, weighing model accuracy against data you can realistically collect, and keeping stakeholders in the loop every week. Details are under NDA.",
      },
    ],
    gallery: [],
    links: [
      [
        "Körber's post about the project",
        "https://linkedin.com/posts/lucas-nesgaard-bonde-9b894b195_this-past-semester-i-have-had-the-pleasure-share-7419820379092754432-Af3F/",
      ],
    ],
  },
  {
    id: "autonomous-cone-placement",
    title: "Autonomous Cone Placement",
    kicker: "Bachelor thesis",
    year: "2024",
    summary:
      "A vision system that finds keypoints on a parked aircraft, turns them into 3D coordinates, and sends a mobile robot out to place safety cones.",
    tags: ["YOLOv8 keypoints", "Stereo vision", "ROS", "TurtleBot3", "Blender"],
    cover: "assets/img/cones-1.jpg",
    facts: [
      ["Context", "BSc thesis in Robotics, Aalborg University"],
      ["Team", "4 people"],
      ["With", "Aalborg Airport, Carnegie Robotics (camera loan)"],
      ["Stack", "YOLOv8, PyTorch, MultiSense S30, ROS, TurtleBot3, Blender"],
    ],
    sections: [
      {
        heading: "Problem",
        body: "Every time an aircraft parks, ground staff place safety cones around it. It is repetitive, safety-critical, and airports struggle to find people for it. After a visit to Aalborg Airport we scoped the project to automating exactly this step.",
      },
      {
        heading: "Approach",
        body: "A YOLOv8 keypoint model detects defined points on the aircraft. There is no public dataset for that, so we generated one: a Blender script renders the aircraft in varied scenes and exports bounding boxes and keypoints automatically. A stereo camera converts the detected keypoints to 3D coordinates, which a TurtleBot3 then drives to.",
      },
      {
        heading: "Result",
        body: "The full pipeline, from image to robot action, completed a run within the two-minute requirement. Keypoint prediction was strong on synthetic data and weaker on the 3D printed test model, which points at the synthetic-to-real gap. Obstacle avoidance was the main open item.",
      },
    ],
    gallery: [
      ["assets/img/cones-1.jpg", "Synthetic scene rendered in Blender"],
      ["assets/img/cones-2.jpg", "Predicted keypoints on synthetic data"],
      ["assets/img/cones-3.jpg", "Predicted keypoints on the 3D printed model, stereo camera view"],
    ],
    links: [
      ["Pose estimation code", "https://github.com/LucasBoonde/P6AircraftPoseEstimation"],
      ["Blender annotation script", "https://github.com/LucasBoonde/AutonomousKeypointAnnotation"],
    ],
  },
  {
    id: "teamgym-champions",
    title: "TeamGym Champions",
    kicker: "Side project",
    year: "2026",
    summary:
      "A TeamGym game in Unity, built because I used to coach gymnastics and wanted to play the sport I know.",
    tags: ["Unity", "C#", "Gameplay systems", "Blender"],
    cover: "assets/img/tgc-1.jpg",
    facts: [
      ["Context", "Self-initiated, in development"],
      ["Role", "Design and programming"],
      ["Stack", "Unity (URP), C#, Blender"],
    ],
    sections: [
      {
        heading: "Why it is here",
        body: "It is not robotics, but it is the same kind of work: timing-critical input, configurable disciplines and equipment, and a scoring model that has to feel fair. It is also where I practise structuring a larger C# codebase on my own.",
      },
      {
        heading: "What is built",
        body: "A vault discipline with timing-based input for keyboard and touch, a camera director that follows each run, interchangeable scoring models (a simple one and one based on the official rules), a competition mode that evaluates a whole team round, and data-driven configuration for disciplines, equipment and team members.",
      },
    ],
    gallery: [["assets/img/tgc-1.jpg", "Vault and trampette setup in the gym scene"]],
    links: [],
  },
];

// Shorter entries shown in the archive table.
const ARCHIVE = [
  ["2025", "UNS-driven modular demonstrator", "Small-batch production line on B&R ACOPOS 6D levitating shuttles, with multi-shuttle path planning (A*, conflict-based search), in-process anomaly detection and predictive maintenance.", "MSc, 8th semester"],
  ["2025", "Screw type detection on Jetson Nano", "Real-time detection and classification of four screw types, from data capture and labelling to deployment on the device.", "Applied Machine Vision"],
  ["2024", "3D scanning of carbon composites", "Prototype scanning vehicle and error-detection software for quality control of wind turbine blade beams. With Siemens Gamesa.", "MSc, 7th semester"],
  ["2023", "Hybrid BCI control of a robotic arm", "EEG-based brain-computer interface combined with eye tracking to control a Kinova Jaco2 for people with locked-in syndrome. 72.2% BCI accuracy.", "BSc, 5th semester"],
  ["2023", "5-bar parallel crack sealing robot", "Dynamic model in MATLAB and a 3D printed, torque-controlled prototype for sealing road cracks.", "BSc, 4th semester"],
  ["2022", "Apple tree detection for precision spraying", "Canopy detection and size estimation with OpenCV and an Intel RealSense camera. With TeeJet.", "BSc, 3rd semester"],
  ["2022", "Cobot for torsion spring handling", "Pick-and-place cell with a UR5 and custom kinematics in Python. With Hagens Spring Group.", "BSc, 2nd semester"],
];
