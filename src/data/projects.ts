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
    slug: 'shesha-form-designer',
    number: '01',
    title: 'Shesha — Form Designer canvas & zoom',
    summary:
      "Rebuilt canvas sizing and zoom in Shesha's Form Designer: an auto-fit default, 25% zoom steps, an editable zoom field, and component wrapping that survives a zoom change. The ticket had been reassigned twice and was three sprints late before it reached me.",
    detail:
      "Shesha is an open-source low-code framework that teams use to build production line-of-business applications. Issue #5012 covered seven sub-requirements for the Form Designer's canvas: fill available width, a sane default zoom, predefined zoom steps, an editable zoom input, plus/minus exiting auto mode, and a 1920×1080 preset. Requirements shifted mid-ticket — the default zoom moved from 80% to 75% and the step size changed — so the fix had to stay easy to re-tune, not just correct once.",
    highlights: [
      'Canvas fills available width with no bottom scrollbar, components re-wrap and keep their zoom level',
      'Editable zoom field with predefined steps; +/- exits auto mode automatically',
      'Shipped after requirements changed mid-ticket, without a rewrite',
    ],
    tech: ['TypeScript', 'React', '.NET'],
    status: 'merged',
    statusLabel: 'Merged',
    link: 'https://github.com/shesha-io/shesha-framework/issues/5012',
    linkLabel: 'Read the issue',
  },
  {
    slug: 'travel-mate',
    number: '02',
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
    number: '03',
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
];
