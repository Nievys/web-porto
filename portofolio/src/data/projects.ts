export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: "Web Application" | "Mobile Application" | "IoT System" | "Enterprise Solution";
  role: string;
  period: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  patentId?: string;
  layoutVariant: "split-left" | "split-right" | "full-hero";
  liveUrl?: string;
  downloadUrl?: string; // Link to download mobile app (e.g. Google Drive link or direct APK)
  downloadAppUrl?: string; // Alias for downloadUrl
  githubUrl?: string;
  features: string[];
  previewType: "financial" | "iot" | "crypto" | "hr" | "cms";
  image?: string;
}

export const projects: Project[] = [
  {
    id: "Property Management System",
    index: "01",
    title: "Property Management System",
    subtitle: "Property Management System",
    category: "Enterprise Solution",
    role: "Mobile and Frontend Developer (Assisting Backend Dev)",
    period: "2025 — 2026",
    description: "An enterprise property management application built to manage tenants, cashflows, expenditures, inventory, assets management, audits, and property data.",
    challenge: "Managing property operations using manual, paper-based record-keeping led to significant administrative overhead, difficulty in tracking tenant occupancy and payments, and complex, time-consuming manual reconciliation of financial statements across multiple properties.",
    solution: "Developed a responsive property management system using Flutter (mobile) and React.js (web). Using microservices architecture, the system is scalable and can be expanded to include additional features such as tenant communication, automated reminders, and payment gateway integration. With secure authentication, role-based access control, and audit trails, the system provides a secure and reliable solution for property management.",
    technologies: ["Flutter", "React.js", "Laravel", "Microservices Architecture", "HTML5 / Tailwind CSS", "REST API"],
    layoutVariant: "split-left",
    features: [
      "Tenant profile, information, and mobile app based user management",
      "Contract, Property, Unit, Asset, Inventory, Complaint, Procurement, Overtime, Loading Docks, and Vendor management",
      "Point of Sales, Billing, payment, and cashflow monitoring with payment history",
      "Financial reporting and analytics with audit trails based on SAK (Standard Akuntansi Keuangan) using ISO 9001 and ISO 41001 as standard operating procedures",
      "Role-based access control (RBAC) with main roles: Tenant, Accountant, Engineer, Marketing, General Affairs, Customer Services, Purchasing, Inventory, Account Payable, Finance, and Admin",
      "Notification system for tenant complaints, procurement requests, overtime requests, and other notifications, with push notification support"
    ],
    previewType: "financial",
    image: new URL('../assets/1.png', import.meta.url).href,
    liveUrl: "https://pms-staging.gamaintegrasi.id/",
    // downloadUrl: "https://drive.google.com/file/d/your-apk-link/view?usp=sharing",
  },
  {
    id: "ece-hidayat-finance",
    index: "02",
    title: "Yayasan Pendidikan Islam Financial Management System",
    subtitle: "Aplikasi Keuangan Yayasan Pendidikan Islam Ece Hidayat (Patented System), unfortunately the file project is now gone",
    category: "Web Application",
    role: "Fullstack / Lead Software Developer",
    period: "2024 — 2025",
    patentId: "EC002024205304",
    description: "An enterprise financial application built for Yayasan Pendidikan Islam Ece Hidayat Pondok Pesantren Nurul Hidayah to record, audit, and generate financial reports for institutional cashflow, tuition fees, and operational expenditures.",
    challenge: "Traditional paper-based records led to ledger discrepancy, human accounting errors, and difficulty in real-time fiscal auditing across multiple foundation branches.",
    solution: "Architected a dual-entry ledger web application with strict role-based access control, automated ledger balancing, and PDF audit exports with cryptographic data verification.",
    technologies: ["Java", "Laravel", "REST API", "MySQL", "JavaScript",],
    layoutVariant: "split-left",
    features: [
      "Multi-source income & expense tracking with real-time balance calculations",
      "Automated financial statement and PDF reporting with audit trails",
      "Dual mode: offline and online with syncronization to database when device is connected to internet",
      "Officially registered software intellectual property (Paten EC002024205304)"
    ],
    previewType: "financial",
    image: new URL('../assets/not-found.png', import.meta.url).href
  },
  {
    id: "iot-hydroponic-monitoring",
    index: "03",
    title: "Hydroponic & Aquaponic IoT Smart Monitoring Suite",
    subtitle: "Community Service IoT Telemetry & Administrative Approval App",
    category: "IoT System",
    role: "Mobile & Software Developer",
    period: "2025",
    description: "An integrated IoT telemetry and mobile-web dashboard built for faculty-led community development to monitor hydroponic and aquaponic water parameters, assign technician tasks, and verify cultivation proofs in real time.",
    challenge: "Manual water quality inspection (pH, EC, water temperature, water level) resulted in delayed interventions and crop health decline in rural community installations.",
    solution: "Engineered a Flutter mobile application and web dashboard linked to IoT sensor nodes with automated alert triggers, task dispatching, and visual proof submissions.",
    technologies: ["Flutter", "Express.js", "IoT Integration", "RESTful API", "WebSocket", "MySQL"],
    layoutVariant: "split-right",
    features: [
      "Real-time sensor telemetry for pH, EC, water temp, and dissolved oxygen",
      "Admin-assigned task dispatching with technician photo proof submission",
      "Dual project adaptation for distinct hydroponic and aquaponic ecosystems",
      "WebSocket-driven instant threshold anomaly notifications"
    ],
    previewType: "iot",
    image: new URL('../assets/3.png', import.meta.url).href,
    liveUrl: "https://kt4ulujami.org/",
  },
  // {
  //   id: "al-madinah-spp-crypto",
  //   index: "03",
  //   title: "Al-Madinah Digital SPP & AES-256 Secure Payment App",
  //   subtitle: "End-to-End Encrypted Mobile Tuition Payment System",
  //   category: "Mobile Application",
  //   role: "Mobile Developer & Cryptography Contributor",
  //   period: "2025",
  //   description: "A secure digital tuition payment (SPP) mobile application engineered from the ground up for Al-Madinah Junior High School, featuring on-device client decryption and strict cryptographic data security.",
  //   challenge: "Handling confidential parent payment credentials and student financial ledger records over public networks without exposing sensitive transaction payloads.",
  //   solution: "Designed and implemented native Dart AES-256 decryption on the Flutter mobile client alongside secure token-based backend handshakes and transactional validation.",
  //   technologies: ["Flutter", "Dart (Native Cryptography)", "AES-256", "RESTful API", "Authentication Security"],
  //   layoutVariant: "split-left",
  //   features: [
  //     "Custom on-device AES-256 decryption module written in native Dart",
  //     "Zero-exposure payload parsing for sensitive payment vouchers and invoices",
  //     "Clean UI architecture with seamless multi-tier tuition history tracking",
  //     "Offline cache validation with secure tamper detection"
  //   ],
  //   previewType: "crypto",
  //   // image: new URL('../assets/3.jpeg', import.meta.url).href
  // },
  {
    id: "enterprise-hr-leave-system",
    index: "04",
    title: "Human Resources Management System",
    subtitle: "Human Resources Management System",
    category: "Enterprise Solution",
    role: "Mobile Developer",
    period: "2025 — 2026",
    description: "An automated internal HR management portal designed to monitor remaining paid time off (PTO), process medical leave requests, handle late check-in justifications, and provide multi-tiered supervisor approvals.",
    challenge: "Targeting scalable system to handle HR workflows and streamline various submissions such as leave, attendance, and reimbursement requests that often lead to delays, data errors, and poor work-life balance.",
    solution: "Deliver an intelligent, scalable HR system that streamlines multi-level approval workflows, integrates with IoT devices, and incorporates AI-driven automation for recruitment and document screening, ensuring secure, efficient personnel management.",
    technologies: ["Flutter", "RESTful API", "Firebase", "Hoppscotch"],
    layoutVariant: "split-right",
    features: [
      "Complete HR Workflow Automation from recruitment to payroll",
      "Internet of Things (IoT) integration for attendance control such as fingerprint, facial recognition and RFID, and AI integration for CV filtering",
      "Leave management system with geotag and supporting document upload",
      "Various submissions such as Reimbursement, Permit, Notification, and etc",
    ],
    previewType: "hr",
    image: new URL('../assets/4.png', import.meta.url).href,
    liveUrl: "https://hris-rebuild-dev.gamaintegrasi.id/login",
  },
  {
    id: "national-organization-cms",
    index: "05",
    title: "National Professional Organization Portal & CMS",
    subtitle: "High-Performance Content Management & Membership Hub",
    category: "Web Application",
    role: "Frontend & Fullstack Developer",
    period: "2025",
    description: "A responsive CMS website and official member portal built for a national professional organization, providing editorial publishing workflows, member directories, and publication downloads.",
    challenge: "The organization required a modern, accessible, and fast web presence capable of managing high-traffic public press releases while maintaining a secure members-only document repository.",
    solution: "Delivered a responsive web interface seamlessly connected with a high-efficiency Laravel API backend, utilizing cache warming, SEO optimization, and structured media assets.",
    technologies: ["Laravel", "SEO Optimization", "Rest API", "Javascript"],
    layoutVariant: "full-hero",
    features: [
      "Editorial publishing pipeline with draft, review, and live publication stages",
      "Public document search engine with fast filtering and categorised tags",
      "Fully responsive editorial layout optimized for mobile and desktop reading",
      "Secure member portal with authenticated document downloads"
    ],
    previewType: "cms",
    image: new URL('../assets/currentlydown.png', import.meta.url).href
  }
];
