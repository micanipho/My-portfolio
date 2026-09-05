// src/data/projects.ts
// Single source of truth for project content — used on the homepage
// (top 3, brief) and the full projects page (all, with detail).

export type ProjectStatus = 'merged' | 'live' | 'source';

export interface Project {
  slug: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  highlights: string[];
  tech: string[];
  status: ProjectStatus;
  statusLabel: string;
  link: string;
  linkLabel: string;
}

export const STATUS_STYLES: Record<ProjectStatus, { text: string; border: string; bg: string }> = {
  merged: { text: 'text-unit-teal', border: 'border-[#1E4A52]', bg: 'bg-[#0C1F24]' },
  live: { text: 'text-unit-orange', border: 'border-[#4A2A1B]', bg: 'bg-[#1C120D]' },
  source: { text: 'text-unit-steel-2', border: 'border-unit-border-2', bg: 'bg-unit-panel' },
};

export const projects: Project[] = [
  {
    slug: 'travel-mate',
    number: '01',
    title: 'Travel Mate',
    summary:
      'Minibus taxi routes in South Africa are coordinated almost entirely by word of mouth. Travel Mate gives commuters a way to post and check route availability in real time.',
    detail:
      'A full-stack build with a deliberately small, focused feature set: authenticated users can post route and stop alerts, and see live availability without relying on informal WhatsApp groups. Built to get comfortable with the complete loop from schema to deployed API to a working frontend.',
    highlights: [
      'Live route and stop alerts backed by a REST API',
      'JWT authentication for posting and managing alerts',
      'PostgreSQL schema designed around real commuter routes, not a generic CRUD demo',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    status: 'live',
    statusLabel: 'Live',
    link: 'https://travel-mate-kappa.vercel.app/',
    linkLabel: 'Open the app',
  },
  {
    slug: 'fintrack',
    number: '02',
    title: 'FinTrack',
    summary:
      'A personal finance API built to get money handling right, not just feature-complete. Amounts are BigDecimal end to end, so a balance never drifts by a cent. JWT auth, Dockerised, deployed on AWS.',
    detail:
      'Backend-only by design: budget tracking and transaction management exposed as a documented REST API. The point was depth on a few things that matter in real financial systems, rather than breadth — correct rounding, auth that actually expires and refreshes properly, and a deployment pipeline that doesn’t depend on a laptop being on.',
    highlights: [
      'BigDecimal throughout — no floating-point rounding on money',
      'JWT auth with refresh, and a Dockerised deploy to AWS (RDS, S3, SES)',
      'Documented with Swagger; unit and integration tests around the transaction logic',
    ],
    tech: ['Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'Docker'],
    status: 'source',
    statusLabel: 'Source',
    link: 'https://github.com/micanipho/FinTrack',
    linkLabel: 'Read the code',
  },
  {
    slug: 'prompt-forge',
    number: '03',
    title: 'PromptForge',
    summary:
      'A four-person build: a platform that turns a natural-language app description into a generated full-stack project, pushes it to a new GitHub repository, and deploys it. I owned the code-generation engine and the validate-and-repair loop that stops generated code shipping broken.',
    detail:
      'Generating code is the easy half — the hard half is that a model will confidently emit a project that doesn’t compile. My work sat on that seam: a validator that runs the generated project through TypeScript and ESLint, parses the compiler and linter output back into structured failures, maps each failure to the specific files responsible, and hands those paths to a refiner that repairs only what broke before the build is retried. Built on ABP/.NET 9 with a Next.js dashboard.',
    highlights: [
      'Validate-and-repair loop — parses tsc and ESLint output into structured failures, then maps each one to the files that need repairing',
      'Generation engine split behind interfaces (planner, scaffolder, refiner, validator) so each stage is testable on its own',
      'GitHub OAuth and API automation: generated projects land as real repositories and deploy, rather than downloading as a zip',
    ],
    tech: ['C#', '.NET 9', 'ABP', 'Next.js', 'PostgreSQL'],
    status: 'live',
    statusLabel: 'Live · Team',
    link: 'https://abp-group.vercel.app/',
    linkLabel: 'Open the app',
  },
];
