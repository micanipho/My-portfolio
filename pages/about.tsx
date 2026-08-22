// pages/about.tsx
import * as React from 'react';
import Link from 'next/link';

interface SkillGroup {
  category: string;
  items: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

const SKILLS: SkillGroup[] = [
  { category: 'Languages', items: ['Java', 'C#', 'Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { category: 'Frameworks & Libraries', items: ['Spring Boot', '.NET', 'React', 'Next.js', 'Flask'] },
  { category: 'Data & Infrastructure', items: ['PostgreSQL', 'MySQL', 'Docker', 'AWS', 'Git'] },
];

const EXPERIENCE: Experience[] = [
  {
    title: 'Graduate Software Engineer',
    company: 'Boxfusion',
    period: 'February 2026 — Present',
    description:
      "Working on Shesha, an open-source low-code framework used to build production line-of-business applications. Recent work: rebuilt canvas sizing and zoom behaviour in the Form Designer — a ticket that had been reassigned twice and slipped three sprints before it reached me.",
    current: true,
  },
  {
    title: 'Bootcamp Mentor',
    company: 'WeThinkCode_',
    period: 'May 2025 — August 2025',
    description:
      'Volunteer mentor and reviewer for bootcamp teams through their project development cycles. Ran structured project reviews against established evaluation criteria and gave feedback that teams could actually act on, not just a grade.',
  },
  {
    title: 'Peer Mentor',
    company: 'WeThinkCode_',
    period: 'March 2025 — April 2025',
    description:
      'Coached students on study methods and coursework, and ran group study sessions that built a peer support network stronger than any one mentor could provide alone.',
  },
  {
    title: 'Software Engineering Student',
    company: 'WeThinkCode_',
    period: '2024 — 2025',
    description:
      'Diploma in Computer Software Engineering. Python, Java, and modern development practices, through coding challenges, hackathons, and collaborative projects rather than lectures alone.',
  },
  {
    title: 'Computer Science',
    company: 'University of the Witwatersrand',
    period: 'February 2018 — December 2021',
    description:
      "Three years toward a Computer Science degree before leaving to pursue software development directly. Built a foundation in analytical thinking and problem-solving from first principles that still shapes how I approach a system today.",
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-unit-bg text-unit-bone">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-[3px] h-5 bg-unit-orange inline-block" aria-hidden="true" />
          <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-unit-orange">
            About
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6 max-w-2xl text-pretty">
          Backend-first, first-principles second nature.
        </h1>
        <p className="text-lg font-light leading-relaxed text-unit-steel-3 max-w-2xl text-pretty">
          I came into software through physics and mathematics, which is where the habit of solving things from
          first principles started. At WeThinkCode_ that turned into a focus on backend systems — the kind of work
          that mostly gets noticed when it breaks, which is exactly why I like it.
        </p>
      </div>

      <div className="h-px bg-unit-border max-w-4xl mx-auto" />

      {/* Currently */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border border-unit-border bg-unit-panel p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-unit-teal shrink-0" aria-hidden="true" />
            <span className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-unit-steel">
              Currently
            </span>
          </div>
          <p className="text-base text-unit-bone">
            <strong className="font-semibold">Graduate Software Engineer at Boxfusion</strong>, working on{' '}
            <a
              href="https://github.com/shesha-io/shesha-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-unit-orange hover:text-unit-orange-hover"
            >
              Shesha
            </a>
            , an open-source low-code framework.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="font-display text-xl font-bold tracking-[0.14em] uppercase mb-8">Skills</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <div className="font-display text-xs font-medium tracking-[0.16em] uppercase text-unit-steel mb-3">
                {group.category}
              </div>
              <div className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-unit-steel-3">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-2 unit-hazard mt-14" aria-hidden="true" />

      {/* Experience */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-display text-xl font-bold tracking-[0.14em] uppercase mb-8">Experience</h2>
        <div className="flex flex-col">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.title + exp.company}
              className={`py-6 ${i !== 0 ? 'border-t border-unit-border' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 mb-2.5">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-lg font-semibold text-unit-bone">{exp.title}</h3>
                  {exp.current && (
                    <span className="font-display text-[11px] font-semibold tracking-[0.12em] uppercase text-unit-teal border border-[#1E4A52] bg-[#0C1F24] px-2 py-0.5">
                      Current
                    </span>
                  )}
                </div>
                <span className="font-display text-xs font-medium tracking-[0.1em] uppercase text-unit-steel">
                  {exp.period}
                </span>
              </div>
              <p className="font-display text-sm font-medium tracking-[0.02em] uppercase text-unit-orange mb-2.5">
                {exp.company}
              </p>
              <p className="text-sm leading-relaxed text-unit-steel-3 max-w-2xl text-pretty">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="font-display text-sm font-semibold tracking-[0.14em] uppercase bg-unit-orange text-unit-bg px-6 py-3 hover:bg-unit-orange-hover transition-colors duration-200"
        >
          View the work
        </Link>
        <Link
          href="/contact"
          className="font-display text-sm font-semibold tracking-[0.14em] uppercase border border-unit-border-2 text-unit-bone px-6 py-3 hover:border-unit-orange transition-colors duration-200"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default About;
