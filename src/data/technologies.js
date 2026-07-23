// data/technologiesData.js

export const technologiesData = {
  "industrial-automation": {
    title: "Industrial Automation",
    tagline: "Next-Gen PLC, SCADA & Industrial Control Systems",
    description: "We design and implement end-to-end industrial automation solutions to streamline factory operations, boost throughput, and minimize operational downtime.",
    features: [
      { title: "PLC & HMI Programming", desc: "Custom control algorithms and intuitive interfaces for Siemens, Delta, and Allen-Bradley PLCs." },
      { title: "SCADA Architecture", desc: "Real-time supervisory control, telemetry data logging, and automated alarm generation systems." },
      { title: "Control Panel Design", desc: "Modernizing legacy control systems with digital relays and smart sensor arrays." },
    ],
    techStack: ["Siemens S7-1200", "Modbus RTU", "PROFINET", "WinCC SCADA", "Delta PLC"],
  },

  "artificial-intelligence": {
    title: "Artificial Intelligence",
    tagline: "Vision Inspection & Predictive Industrial AI",
    description: "Deep learning and vision algorithms tailored for automated product quality inspection and predictive machine maintenance.",
    features: [
      { title: "AI Computer Vision", desc: "High-speed defect detection and dimension checking on active manufacturing lines." },
      { title: "Predictive Maintenance", desc: "Machine learning algorithms tracking vibration and thermal metrics to predict faults." },
      { title: "Autonomous Decision Making", desc: "Edge AI integration for real-time edge processing without network latency." },
    ],
    techStack: ["TensorFlow", "PyTorch", "OpenCV", "YOLOv8", "NVIDIA Jetson"],
  },

  "embedded-systems-electronics": {
    title: "Embedded Systems & Electronics",
    tagline: "Custom Microcontrollers, Firmware & Multi-Layer PCBs",
    description: "Hardware design, multi-layer PCB routing, and low-level firmware engineering for mission-critical embedded devices.",
    features: [
      { title: "Custom PCB Design", desc: "High-speed multi-layer PCB layouts designed for harsh industrial environments." },
      { title: "Firmware Development", desc: "Bare-metal and RTOS-based C/C++ micro-architecture programming." },
      { title: "Sensor Interfacing", desc: "Analog-to-digital sensor conditioning and industrial bus integration." },
    ],
    techStack: ["STM32", "ESP32", "Altium Designer", "FreeRTOS", "C / C++"],
  },

  "industrial-software": {
    title: "Industrial Software",
    tagline: "Enterprise IoT Dashboards & Cloud Data Analytics",
    description: "Web and cloud software interfaces bridging shop-floor sensor telemetry with enterprise operational dashboards.",
    features: [
      { title: "IoT Cloud Dashboards", desc: "Live web portals displaying telemetry, machine uptime, and historical graphs." },
      { title: "ERP & MES Integration", desc: "Seamless communication bridging shop-floor controllers to enterprise software." },
      { title: "Alert & Notification Systems", desc: "Instant SMS/Email alerts based on customizable threshold parameters." },
    ],
    techStack: ["Next.js", "Node.js", "MQTT Protocol", "PostgreSQL", "Docker"],
  },

  "robotics": {
    title: "Robotics",
    tagline: "Autonomous Mobile Robots & High-Precision Arms",
    description: "Designing and engineering Cartesian, SCARA, and Autonomous Mobile Robots (AMRs) tailored for manufacturing environments.",
    features: [
      { title: "Robotic Arm Manipulation", desc: "Precision 6-DOF pick-and-place mechanisms for assembly and sorting." },
      { title: "AMR & AGV Platforms", desc: "LiDAR SLAM self-navigating vehicles for internal factory and warehouse logistics." },
      { title: "ROS Integration", desc: "Custom kinematics and trajectory planning built on ROS/ROS2 framework." },
    ],
    techStack: ["ROS 2", "MoveIt", "LiDAR SLAM", "Python", "Gazebo Simulator"],
  },
};