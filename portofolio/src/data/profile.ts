export interface ProfileData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bio: string;
  tagline: string;
  education: {
    institution: string;
    degree: string;
    location: string;
    period: string;
    gpa: string;
    details: string;
  };
  patent: {
    title: string;
    registrationNumber: string;
    issueDate: string;
    type: string;
    description: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export const profile: ProfileData = {
  name: "Tyo Indra",
  role: "Frontend & Software Developer",
  location: "Jakarta Barat, Indonesia",
  email: "tyoindra2504@gmail.com",
  phone: "+62 895 1682 3435",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  tagline: "Building digital interfaces that are responsive, robust, and thoughtfully engineered.",
  bio: "Bachelor's degree in Informatics Engineering from Universitas Budi Luhur with practical experience in software engineering across mobile, web, and backend systems. Experienced in handling the development process across multiple layers of an application, from frontend and mobile interfaces to backend services, cryptographic data security, and database integration.",
  education: {
    institution: "Universitas Budi Luhur",
    degree: "Bachelor of Informatics Engineering",
    location: "Ciledug, Jakarta Selatan, Indonesia",
    period: "2022 — 2026",
    gpa: "3.87 / 4.00",
    details: "Focus on Software Engineering, Clean Architecture, Distributed Systems & Mobile Development"
  },
  patent: {
    title: "Aplikasi Keuangan Yayasan Pendidikan Islam Ece Hidayat Pondok Pesantren Nurul Hidayah",
    registrationNumber: "EC002024205304",
    issueDate: "October 14, 2024",
    type: "Hak Cipta / Registered Intellectual Property (Kemenkumham RI)",
    description: "Official registered software intellectual property for financial accounting, multi-source income & expense tracking, and structured reporting."
  },
  metrics: [
    {
      label: "Academic GPA",
      value: "3.87",
      detail: "Universitas Budi Luhur"
    },
    {
      label: "Registered Patent",
      value: "01",
      detail: "IP No. EC002024205304"
    },
    {
      label: "Production Apps",
      value: "5+",
      detail: "Web, Mobile & IoT"
    },
    {
      label: "Core Stacks",
      value: "React · Flutter · Laravel",
      detail: "Multi-platform delivery"
    }
  ]
};
