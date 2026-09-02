export interface ApproachStep {
  number: string;
  phase: string;
  title: string;
  summary: string;
  points: string[];
}

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    phase: "ARCHITECT",
    title: "Understand & Structure",
    summary: "Deconstruct requirements into clear data models, security boundaries, and API contracts before writing code.",
    points: [
      "Define state flow & domain constraints",
      "Model normalized database schemas",
      "Plan cryptographic security when handling sensitive data"
    ]
  },
  {
    number: "02",
    phase: "DESIGN",
    title: "Hierarchy & Rhythm",
    summary: "Craft intentional layouts where typography, whitespace, and contrast guide the user effortlessly.",
    points: [
      "Editorial visual hierarchy over generic card templates",
      "Consistent responsive grid & spacing system",
      "Accessible color contrast and purposeful interactions"
    ]
  },
  {
    number: "03",
    phase: "DEVELOP",
    title: "Clean Modular Components",
    summary: "Build scalable, reusable React, Flutter, or Laravel components with zero unnecessary complexity.",
    points: [
      "Strict separation of data logic and presentation",
      "Reusable UI components with centralized tokens",
      "Maintainable codebase with minimal technical debt"
    ]
  },
  {
    number: "04",
    phase: "REFINE",
    title: "Verify, Secure & Ship",
    summary: "Thoroughly test API contracts, validate responsive layouts, and verify performance across devices.",
    points: [
      "Collaborative API verification with Hoppscotch",
      "Zero-overflow responsiveness across 320px to 4K",
      "Real-world field validation (IoT & production ready)"
    ]
  }
];
