export interface SkillCategory {
  title: string;
  categoryCode: string;
  description: string;
  skills: {
    name: string;
    level?: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    categoryCode: "01 / MOB",
    description: "Cross-platform mobile applications with native device capabilities",
    skills: [
      { name: "Flutter", level: "Core", highlight: true },
      { name: "Dart", level: "Core", highlight: true },
      { name: "Java", level: "Core", highlight: true },
      { name: "Kotlin", level: "Core" },
      { name: "Jetpack Compose", level: "Core" },
      { name: "State Management", level: "Core" },
      { name: "Mobile UI/UX Implementation", level: "Core" }
    ]
  },
  {
    title: "Frontend Engineering",
    categoryCode: "02 / FE",
    description: "Component architecture, responsive state management, and modern web application interfaces.",
    skills: [
      { name: "React.js", level: "Core", highlight: true },
      { name: "Next.js", level: "Core", highlight: true },
      { name: "TypeScript", level: "Core" },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "HTML5 / CSS3 / Vanilla CSS", level: "Core" },
      { name: "Responsive Design", level: "Core" }
    ]
  },
  {
    title: "Backend & API Architecture",
    categoryCode: "03 / BE",
    description: "Robust service layers, authentication mechanisms, and RESTful contract design.",
    skills: [
      { name: "Laravel", level: "Core", highlight: true },
      { name: "PHP", level: "Core" },
      { name: "RESTful API Development", level: "Core", highlight: true },
      { name: "Microservices Architecture", level: "Core" },
      { name: "WebSocket / Real-time", level: "Proficient" },
      { name: "Authentication & Security", level: "Advanced" },
      { name: "WordPress CMS", level: "Proficient" }
    ]
  },
  {
    title: "Databases & Storage",
    categoryCode: "04 / DB",
    description: "Relational database design, query optimization, and structured audit logs.",
    skills: [
      { name: "MySQL", level: "Core", highlight: true },
      { name: "MariaDB", level: "Core" },
      { name: "Relational Data Modeling", level: "Core" },
      { name: "Firebase Realtime / Firestore", level: "Proficient" }
    ]
  },
  {
    title: "Development & Testing Tools",
    categoryCode: "05 / TOOL",
    description: "Version control, API validation pipelines, and collaborative workflows.",
    skills: [
      { name: "Git & GitHub", level: "Core" },
      { name: "Hoppscotch", level: "Core", highlight: true },
      { name: "Postman", level: "Core" },
      { name: "VS Code", level: "Core" },
      { name: "IoT Hardware Telemetry", level: "Proficient" }
    ]
  },
  {
    title: "Design & Visual Media",
    categoryCode: "06 / DES",
    description: "Editorial graphic design, interactive prototyping, and multimedia branding.",
    skills: [
      { name: "Figma UI/UX", level: "Core", highlight: true },
      { name: "Adobe Photoshop", level: "Advanced" },
      { name: "Adobe Premiere Pro", level: "Proficient" },
      { name: "Adobe After Effects", level: "Proficient" },
      { name: "Motion Graphics", level: "Proficient" }
    ]
  }
];

export const competencies = [
  "Clean Code & Modular Architecture",
  "Object-Oriented Programming (OOP)",
  "Cross-Platform Responsive Engineering",
  "Cryptographic Payload Decryption (AES-256)",
  "IoT Telemetry & Real-Time Sync",
  "Full Lifecycle Software Delivery"
];
