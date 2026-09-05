// pages/documents.tsx
import React from 'react';

interface DocEntry {
  title: string;
  description: string;
  /** Styled web version, opened in a tab. */
  viewUrl: string;
  /** Print-ready A4 PDF — regenerate with `npm run resume:pdf` after editing the HTML. */
  downloadUrl: string;
  /** Filename the browser saves the download as. */
  downloadName: string;
}

// Files in public/ are served under the deployment's basePath. Plain <a> hrefs
// are not rewritten by Next, so they carry the prefix explicitly.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const DOCUMENTS: DocEntry[] = [
  {
    title: 'Résumé / CV',
    description:
      'Graduate Software Engineer at Boxfusion, working on Shesha. Full experience, education, and skills.',
    viewUrl: `${BASE_PATH}/documents/resume.html`,
    downloadUrl: `${BASE_PATH}/documents/resume.pdf`,
    downloadName: 'Nhlakanipho-Masilela-CV.pdf',
  },
];

export default function Documents() {
  return (
    <div className="bg-unit-bg text-unit-bone">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-[3px] h-5 bg-unit-orange inline-block" aria-hidden="true" />
          <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-unit-orange">
            Documents
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6 max-w-xl text-pretty">
          Résumé
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col gap-4">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.downloadName}
              className="border border-unit-border bg-unit-panel p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-unit-bone mb-1.5">{doc.title}</h3>
                <p className="text-sm text-unit-steel-3 leading-relaxed max-w-lg text-pretty">{doc.description}</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href={doc.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-semibold tracking-[0.12em] uppercase border border-unit-border-2 text-unit-bone px-5 py-2.5 hover:border-unit-orange transition-colors duration-200"
                >
                  View
                </a>
                <a
                  href={doc.downloadUrl}
                  download={doc.downloadName}
                  className="font-display text-sm font-semibold tracking-[0.12em] uppercase bg-unit-orange text-unit-bg px-5 py-2.5 hover:bg-unit-orange-hover transition-colors duration-200"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
