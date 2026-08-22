// pages/projects.tsx
import React from 'react';
import { projects } from '../src/data/projects';
import WorkRow from '../src/components/WorkRow';

export default function Projects() {
  return (
    <div className="bg-unit-bg text-unit-bone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 pt-14 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-[3px] h-5 bg-unit-orange inline-block" aria-hidden="true" />
          <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-unit-orange">
            Work
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6 max-w-2xl text-pretty">
          Selected work
        </h1>
        <p className="text-lg font-light leading-relaxed text-unit-steel-3 max-w-2xl text-pretty">
          Three things I've actually shipped: one merged into an open-source framework other teams build on, one
          live, one a backend built to get a hard problem right.
        </p>
      </div>

      <div className="h-2 unit-hazard" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <WorkRow key={project.slug} project={project} variant="detail" isLast={i === projects.length - 1} />
        ))}
      </div>

      <div className="h-2 unit-hazard" aria-hidden="true" />
    </div>
  );
}
