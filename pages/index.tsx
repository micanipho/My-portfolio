// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../src/data/projects';
import WorkRow from '../src/components/WorkRow';

const STACK = ['Java', 'C# / .NET', 'Spring Boot', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Docker'];

// next/image skips basePath when unoptimized (static export), so public/
// asset paths are prefixed by hand.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
    <div className="bg-unit-bg text-unit-bone">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-12 lg:gap-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 items-start">
        <div className="animate-slideUp" style={{ animationDelay: '0ms', animationFillMode: 'backwards' }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-unit-orange">
              Software Developer
            </span>
            <span className="w-11 h-px bg-unit-border-2 inline-block" aria-hidden="true" />
            <span className="font-display text-sm font-medium tracking-[0.2em] uppercase text-unit-steel">
              Backend &amp; Platform
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.08] tracking-tight mb-8 max-w-2xl text-pretty">
            I build backend systems, and ship them into products people actually use.
          </h1>

          <p className="text-lg font-light leading-relaxed text-unit-steel-3 mb-10 max-w-xl text-pretty">
            Graduate Software Engineer at <strong className="text-unit-bone font-medium">Boxfusion</strong>, currently
            shipping features into <a href="https://github.com/shesha-io/shesha-framework" target="_blank" rel="noopener noreferrer" className="text-unit-orange hover:text-unit-orange-hover">Shesha</a> — an
            open-source low-code framework used to build production line-of-business applications. Before that:
            WeThinkCode_, and two and a half years of Computer Science at Wits.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="font-display text-base font-semibold tracking-[0.14em] uppercase bg-unit-orange text-unit-bg px-6 py-3 hover:bg-unit-orange-hover transition-colors duration-200"
            >
              View the work
            </Link>
            <Link
              href="/documents"
              className="font-display text-base font-semibold tracking-[0.14em] uppercase border border-unit-border-2 text-unit-bone px-6 py-3 hover:border-unit-orange transition-colors duration-200"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* Identification panel */}
        <div
          className="relative border border-unit-border bg-unit-panel p-4 animate-slideUp"
          style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
        >
          <span className="absolute z-10 top-[-1px] left-[-1px] w-4 h-4 border-t-2 border-l-2 border-unit-orange" aria-hidden="true" />
          <span className="absolute z-10 top-[-1px] right-[-1px] w-4 h-4 border-t-2 border-r-2 border-unit-orange" aria-hidden="true" />
          <span className="absolute z-10 bottom-[-1px] left-[-1px] w-4 h-4 border-b-2 border-l-2 border-unit-orange" aria-hidden="true" />
          <span className="absolute z-10 bottom-[-1px] right-[-1px] w-4 h-4 border-b-2 border-r-2 border-unit-orange" aria-hidden="true" />

          <div className="relative w-full h-[300px]">
            <Image
              src={`${BASE_PATH}/profile.jpg`}
              alt="Nhlakanipho Masilela"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="flex flex-col mt-4">
            <IdRow label="Name" value="Nhlakanipho Masilela" />
            <IdRow label="Role" value="Graduate Software Engineer" />
            <IdRow label="Employer" value="Boxfusion" />
            <IdRow label="Base" value="Johannesburg, ZA" />
            <IdRow label="Status" value="Open to opportunities" valueClassName="text-unit-teal" last />
          </div>

          <div className="mt-4 pt-3.5 border-t border-unit-border">
            <div className="font-display text-xs font-medium tracking-[0.16em] uppercase text-unit-steel mb-2.5">
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5 font-display text-sm font-medium tracking-[0.04em] uppercase">
              {STACK.map((s) => (
                <span key={s} className="border border-unit-border-2 px-2.5 py-1 text-unit-steel-3">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-2 unit-hazard" aria-hidden="true" />

      {/* Selected work */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3.5 pt-9 pb-5 px-4 sm:px-6 lg:px-14">
          <span className="w-[3px] h-5 bg-unit-orange inline-block" aria-hidden="true" />
          <h2 className="font-display text-xl font-bold tracking-[0.14em] uppercase">Selected work</h2>
        </div>

        <div>
          {projects.map((project, i) => (
            <WorkRow key={project.slug} project={project} isLast={i === projects.length - 1} />
          ))}
        </div>

        <div className="px-4 sm:px-6 lg:px-14 py-8">
          <Link
            href="/projects"
            className="font-display text-sm font-semibold tracking-[0.14em] uppercase text-unit-steel-2 hover:text-unit-orange transition-colors duration-200"
          >
            View all projects &rarr;
          </Link>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 pb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <div className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-unit-orange mb-3.5">
            Get in touch
          </div>
          <a
            href="mailto:nqmasilela777@gmail.com"
            className="block font-display text-2xl sm:text-4xl font-semibold leading-none hover:text-unit-orange transition-colors duration-200"
          >
            nqmasilela777@gmail.com
          </a>
        </div>
        <div className="flex gap-6 font-display text-sm font-semibold tracking-[0.14em] uppercase text-unit-steel-2">
          <a href="https://github.com/micanipho" target="_blank" rel="noopener noreferrer" className="hover:text-unit-bone transition-colors duration-200">GitHub</a>
          <a href="https://linkedin.com/in/nqmasilela" target="_blank" rel="noopener noreferrer" className="hover:text-unit-bone transition-colors duration-200">LinkedIn</a>
          <Link href="/documents" className="hover:text-unit-bone transition-colors duration-200">CV</Link>
        </div>
      </div>

      <div className="h-2 unit-hazard" aria-hidden="true" />
    </div>
  );
}

const IdRow: React.FC<{ label: string; value: string; valueClassName?: string; last?: boolean }> = ({
  label,
  value,
  valueClassName = '',
  last = false,
}) => (
  <div className={`flex justify-between items-baseline py-2.5 ${last ? '' : 'border-b border-unit-border-dim'}`}>
    <span className="font-display text-xs font-medium tracking-[0.16em] uppercase text-unit-steel">{label}</span>
    <span className={`text-sm font-medium ${valueClassName || 'text-unit-bone'}`}>{value}</span>
  </div>
);
