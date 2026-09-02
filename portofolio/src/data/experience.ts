export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  employmentType: string;
  location: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "gamacom-tritama",
    period: "Feb 2026 — Sep 2026",
    role: "Frontend Developer",
    organization: "CV Gamacom Tritama (Gama Integrasi)",
    employmentType: "Hybrid / Contract",
    location: "Indonesia",
    overview: "Gama Integrasi is an IT provider specializing in intelligent system and business software solutions designed to automate administration, HR management, and operational systems.",
    responsibilities: [
      "End-to-end design and development of applications across multiple products in collaboration with cross-functional teams utilizing Flutter, React.js, Laravel, and MySQL ecosystem to deliver digital platforms accessible via mobile app and responsive websites ready for public launch on schedule.",
      "Applied Clean Code principles with modular architecture and reusable components, making scalability and code maintenance more efficient with minimum technical debt.",
      "Integrated frontend applications with REST APIs and utilized Hoppscotch as a collaborative tool for API testing, documentation, and validation with the engineering team.",
      "Handled multiple projects simultaneously with strong focus on responsive web and mobile application performance.",
      "Assisted in backend development and API management when needed to support critical milestones in the project development lifecycle."
    ],
    technologies: ["React.js", "Flutter", "Laravel", "MySQL", "Hoppscotch", "RESTful API", "Clean Architecture"]
  },
  {
    id: "freelance-software-developer",
    period: "Mar 2025 — Feb 2026",
    role: "Software Developer",
    organization: "Independent Client Engagements",
    employmentType: "Freelance / Remote",
    location: "Jakarta, Indonesia",
    overview: "Developed and maintained end-to-end web and mobile applications for private institutions and commercial clients, translating complex business requirements into dependable digital products.",
    responsibilities: [
      "Engineered an institutional financial application for Yayasan Pendidikan Islam Ece Hidayat managing multi-tier cashflows, expenses, and automated audit reporting (Officially Patented EC002024205304).",
      "Developed an internal HR system to monitor remaining PTO, medical leave requests, attendance permit submissions, and real-time supervisor approvals.",
      "Implemented a high-performance responsive CMS website for a national professional organization, integrated seamlessly with a Laravel backend for efficient content publishing.",
      "Built a complete IoT hydroponic monitoring app featuring admin-assigned technician tasks, visual proof submissions, and real-time approval tracking."
    ],
    technologies: ["React.js", "Laravel", "Flutter", "PHP", "MySQL", "Tailwind CSS", "IoT Integration"]
  },
  {
    id: "ubl-community-service",
    period: "Aug 2025 — Nov 2025",
    role: "Mobile & Software Developer",
    organization: "Universitas Budi Luhur (Faculty Community Service)",
    employmentType: "Faculty Project",
    location: "Jakarta Selatan, Indonesia",
    overview: "Contributed as a lead mobile and software developer in faculty-led community service initiatives, engineering digital solutions for hydroponic and aquaponic monitoring integrated with IoT hardware.",
    responsibilities: [
      "Developed web and application-based systems for two separate community service projects focused on hydroponic and aquaponic ecological monitoring.",
      "Designed and adapted system architectures to meet differing operational requirements and community user capabilities across two project sites.",
      "Collaborated simultaneously across two project teams, synchronizing technical milestones with faculty leads and field teams.",
      "Communicated directly with community members at both locations to identify field constraints and translate them into simple, practical UI workflows."
    ],
    technologies: ["Flutter", "Dart", "IoT Hardware Integration", "REST API", "WebSocket", "System Design"]
  },
  {
    id: "al-madinah-junior-high",
    period: "Mar 2025 — Jul 2025",
    role: "Mobile Developer & Cryptography Contributor",
    organization: "Al-Madinah Junior High School",
    employmentType: "Project / Internship",
    location: "Indonesia",
    overview: "Engineered a digital tuition payment (SPP) system from the ground up within a two-person agile development team, focusing on on-device data security and robust backend synchronization.",
    responsibilities: [
      "Developed the mobile application using Flutter and native Dart, including application state logic, API integration, secure storage, and authentication.",
      "Implemented client-side decryption routines in native Dart to safely process encrypted payment payloads received from the server.",
      "Contributed to the design and technical documentation of an AES-256-based payload encryption scheme.",
      "Collaborated on system architecture design, defining secure API contracts, database normalization, and error recovery mechanisms."
    ],
    technologies: ["Flutter", "Dart", "AES-256 Cryptography", "REST API", "Secure Storage", "State Management"]
  },
  {
    id: "ubl-dkka-graphics",
    period: "Jun 2024 — Oct 2025",
    role: "Graphics & Motion Designer",
    organization: "Universitas Budi Luhur (DKKA Directorate)",
    employmentType: "Internship / Directorate Project",
    location: "Jakarta Selatan, Indonesia",
    overview: "Created digital branding, campaign assets, and motion graphics for the Directorate of Student Affairs, Careers, and Alumni (DKKA) at Universitas Budi Luhur.",
    responsibilities: [
      "Produced visual designs for regular social media campaigns, alumni announcements, and career expo events on the official DKKA Instagram channel.",
      "Created dynamic motion graphics used as signature animated intros and outros for high-engagement video reels.",
      "Served as visual and media committee member for major university ceremonies, workshops, and career fairs.",
      "Consistently delivered high-fidelity design collateral under strict publishing deadlines with zero schedule slips."
    ],
    technologies: ["Figma", "Adobe Photoshop", "Adobe Premiere Pro", "After Effects", "Visual Branding", "Motion Design"]
  }
];
