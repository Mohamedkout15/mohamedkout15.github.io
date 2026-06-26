// =============================================================================
// EDIT YOUR CONTENT HERE — this is the single source of truth for the site.
// Everything below is drawn from your real experience; tweak wording freely.
// =============================================================================

export const profile = {
  name: "Mohamed Kout",
  handle: "mkout",
  role: "full-stack engineer · java/spring + angular · DevOps",
  email: "mohamed.kout@outlook.com",
  location: "Ariana, Tunisia",
  github: "https://github.com/mohamedkout15",      // ← set your GitHub
  linkedin: "https://linkedin.com/in/mohamed-kout", // ← set your LinkedIn
  cvUrl: "/Mohamed_Kout_Resume_English.pdf",                    // ← drop your CV in /public
};

export const summary = [
  { k: "role", v: "Full-Stack Engineer @ Sodalite Soft Solutions" },
  { k: "core stack", v: "Spring Boot · Angular · PostgreSQL · Docker", hl: true },
  { k: "also", v: "NestJS · MERN · AWS (freelance)" },
  { k: "education", v: "Engineering degree (Bac+5), ESPRIT" },
  { k: "location", v: "Ariana, Tunisia · open to remote" },
];

export const stack = [
  {
    title: "frontend",
    items: [
      { name: "Angular", lvl: "expert" },
      { name: "TypeScript", lvl: "expert" },
      { name: "React", lvl: "strong" },
      { name: "Tailwind CSS", lvl: "strong" },
      { name: "RxJS", lvl: "strong" },
    ],
  },
  {
    title: "backend",
    items: [
      { name: "Spring Boot", lvl: "expert" },
      { name: "Java", lvl: "expert" },
      { name: "PostgreSQL", lvl: "strong" },
      { name: "NestJS / Node", lvl: "strong" },
      { name: "REST / JWT", lvl: "expert" },
    ],
  },
  {
    title: "infra / DevOps",
    items: [
      { name: "Docker", lvl: "expert" },
      { name: "GitLab CI / Jenkins", lvl: "strong" },
      { name: "Nginx", lvl: "strong" },
      { name: "Prometheus / Grafana", lvl: "strong" },
      { name: "AWS", lvl: "working" },
    ],
  },
];

export const projects = [
  {
    name: "Avis Loco",
    tag: "SaaS",
    live: false,
    blurb:
      "Google Business reputation management platform. Owners connect their profiles to monitor reviews, reply, and track performance metrics across locations.",
    detail:
      "Built the Spring Boot backend around the Google Business Profile API — OAuth 2.0 token refresh, a reviews proxy, performance metrics and reply endpoints — with Caffeine-backed caching on the Places API and Flyway migrations (including a repeatable Java migration for category deduplication). Angular front end, JTE email templates, full password-reset flow.",
    stack: ["Angular", "Spring Boot", "PostgreSQL", "Google API", "Flyway", "Docker"],
  },
  {
    name: "SuperMis",
    tag: "Production",
    live: true,
    blurb:
      "Driving-school management application (app.supermis.fr) — scheduling, student tracking, billing and document generation for French auto-écoles.",
    detail:
      "Angular + Spring Boot + PostgreSQL with a FullCalendar-based scheduler, PDF generation for invoices and student evaluation sheets, and a full GitLab CI/CD pipeline deploying to VPS infrastructure via self-hosted runners.",
    stack: ["Angular 17", "Spring Boot 3", "PostgreSQL", "FullCalendar", "GitLab CI"],
  },
  {
    name: "Compta Pro",
    tag: "Demo",
    live: false,
    blurb:
      "A full-featured accounting application built as a demonstration of end-to-end product capability.",
    detail:
      "React front end on a Spring Boot backend — invoicing, ledgers and reporting — used as a reference implementation for clean architecture and a polished UI.",
    stack: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    name: "AquaGuard E-shop",
    tag: "Mobile",
    live: false,
    blurb:
      "Plateforme e-commerce sociale avec système de récompenses échangeables.",
    detail:
      "Développement d'une plateforme e-commerce sociale avec système de récompenses échangeables. Développement de l'application mobile avec SwiftUI et Flutter.",
    stack: ["SwiftUI", "Flutter", "Node.js", "MongoDB"],
  },
  {
    name: "CrossChat SDK",
    tag: "SDK",
    live: false,
    blurb:
      "SDK de messagerie multiplateforme pour applications web et mobiles.",
    detail:
      "Création d'un SDK de messagerie multiplateforme pour applications web et mobiles. Mise en place de l'authentification via JWT. Déploiement et hébergement sur Azure.",
    stack: ["MEAN Stack", "Azure"],
  },
  {
    name: "Ticket Buyer",
    tag: "Web",
    live: false,
    blurb:
      "Application web de réservation d'événements en ligne.",
    detail:
      "Développement d'une application web de réservation d'événements en ligne. Implémentation de l'authentification avec AWS Cognito. Utilisation d'AWS Lambda pour les fonctions serverless et DynamoDB pour la gestion des données.",
    stack: ["Angular", "AWS Cognito", "AWS Lambda", "AWS S3", "AWS DynamoDB"],
  },
];

export const credlyProfile = "https://www.credly.com/earner/kout-mohamed";

export const experience = [
  {
    when: "now",
    title: "Full-Stack Engineer",
    at: "Sodalite Soft Solutions",
    body:
      "Designing, building and operating production web platforms end to end — Angular front ends, Spring Boot APIs, PostgreSQL, and the Dockerized CI/CD and VPS infrastructure they run on. Day-to-day across GitLab CI, Jenkins and Nginx.",
  },
  {
    when: "ongoing",
    title: "Freelance Developer",
    at: "self-employed",
    body:
      "Shipping web and mobile products for clients on the MERN stack, NestJS and AWS — from greenfield builds to infrastructure and deployment.",
  },
];
