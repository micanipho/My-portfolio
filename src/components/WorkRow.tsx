// src/components/WorkRow.tsx
import React from 'react';
import { Project, STATUS_STYLES } from '../data/projects';

interface WorkRowProps {
  project: Project;
  variant?: 'brief' | 'detail';
  isLast?: boolean;
}

const WorkRow: React.FC<WorkRowProps> = ({ project, variant = 'brief', isLast = false }) => {
  const statusStyle = STATUS_STYLES[project.status];

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-[64px_minmax(0,1fr)] lg:grid-cols-[96px_minmax(0,1fr)_240px_160px] gap-4 lg:gap-7 py-7 px-4 sm:px-6 lg:px-14 border-t border-unit-border items-start ${
        isLast ? 'border-b' : ''
      }`}
    >
      <div className="font-display text-3xl lg:text-[46px] font-bold leading-none text-unit-orange">
        {project.number}
      </div>

      <div>
        <h3 className="font-display text-xl lg:text-[26px] font-semibold tracking-wide mb-2 text-unit-bone">
          {project.title}
        </h3>
        <p className="text-sm lg:text-base font-light leading-relaxed text-unit-steel-4 max-w-[600px] text-pretty">
          {project.summary}
        </p>

        {variant === 'detail' && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-unit-steel-3 leading-relaxed">
                <span className="text-unit-orange mt-[3px]" aria-hidden="true">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech shows here on small screens where the dedicated column is hidden */}
        <div className="lg:hidden mt-4 font-display text-xs font-medium tracking-[0.1em] uppercase text-unit-steel">
          {project.tech.join(' · ')}
        </div>
      </div>

      <div className="hidden lg:block font-display text-sm font-medium tracking-[0.1em] uppercase text-unit-steel leading-loose">
        {project.tech.join(' · ')}
      </div>

      <div className="flex sm:col-span-2 lg:col-span-1 flex-row sm:flex-col gap-3 items-center sm:items-start">
        <span
          className={`font-display text-xs font-semibold tracking-[0.14em] uppercase px-2.5 py-1 border ${statusStyle.border} ${statusStyle.bg} ${statusStyle.text}`}
        >
          {project.statusLabel}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-sm font-semibold tracking-[0.1em] uppercase text-unit-bone hover:text-unit-orange transition-colors duration-200"
        >
          {project.linkLabel} &rarr;
        </a>
      </div>
    </div>
  );
};

export default WorkRow;
