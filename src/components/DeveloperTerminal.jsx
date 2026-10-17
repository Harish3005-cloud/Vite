import React from 'react';

const DeveloperTerminal = () => {
  return (
    <div className="w-full h-full min-h-[480px] card-border rounded-3xl p-6 sm:p-8 bg-black-100 border border-[#cd7c2e]/30 flex flex-col justify-between relative overflow-hidden">
      {/* Ambient warm orange glow */}
      <div
        className="absolute -top-12 -right-12 size-64 bg-[#cd7c2e]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Terminal Header */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-black-50">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-[#ef4444]/90 inline-block" />
            <span className="size-3 rounded-full bg-[#eab308]/90 inline-block" />
            <span className="size-3 rounded-full bg-[#22c55e]/90 inline-block" />
          </div>
          <div className="text-xs font-mono text-blue-50 tracking-wider">
            harish@backend-node:~
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>active</span>
          </div>
        </div>

        {/* Code Profile */}
        <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-1 text-white-50 overflow-x-auto">
          <p className="text-blue-50/70 text-[11px] mb-2">// Backend Systems & API Engineering</p>
          <p>
            <span className="text-[#cd7c2e] font-semibold">const</span>{' '}
            <span className="text-[#d9ecff]">engineer</span> = &#123;
          </p>
          <p className="pl-4">
            <span className="text-blue-50">name:</span>{' '}
            <span className="text-emerald-300">"Harish E"</span>,
          </p>
          <p className="pl-4">
            <span className="text-blue-50">role:</span>{' '}
            <span className="text-emerald-300">"Backend Developer"</span>,
          </p>
          <p className="pl-4">
            <span className="text-blue-50">focus:</span>{' '}
            <span className="text-emerald-300">"High-Performance REST APIs & Microservices"</span>,
          </p>
          <p className="pl-4">
            <span className="text-blue-50">primaryStack:</span> [
            <span className="text-emerald-300">"FastAPI"</span>,{' '}
            <span className="text-emerald-300">"Express.js"</span>,{' '}
            <span className="text-emerald-300">"PostgreSQL"</span>,{' '}
            <span className="text-emerald-300">"Redis"</span>],
          </p>
          <p className="pl-4">
            <span className="text-blue-50">primaryDSA:</span>{' '}
            <span className="text-emerald-300">"Java"</span>,
          </p>
          <p className="pl-4">
            <span className="text-blue-50">architecture:</span>{' '}
            <span className="text-emerald-300">"Event-driven & distributed systems"</span>
          </p>
          <p>
            &#125;;<span className="terminal-cursor" aria-hidden="true" />
          </p>
        </div>

        {/* Visual Architecture Flow */}
        <div className="mt-6 pt-5 border-t border-black-50/60">
          <div className="text-[11px] font-mono uppercase tracking-wider text-blue-50 mb-2.5 flex items-center justify-between">
            <span>Architecture Flow</span>
            <span className="text-white-50/40 text-[10px]">request pipeline</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-black-200/80 border border-black-50 text-white-50">
              Client
            </span>
            <span className="text-[#cd7c2e] font-bold">→</span>
            <span className="px-2.5 py-1 rounded-md bg-black-200/80 border border-[#cd7c2e]/40 text-[#cd7c2e] font-medium">
              REST / WS
            </span>
            <span className="text-[#cd7c2e] font-bold">→</span>
            <span className="px-2.5 py-1 rounded-md bg-black-200/80 border border-black-50 text-white-50">
              Services
            </span>
            <span className="text-[#cd7c2e] font-bold">→</span>
            <span className="px-2.5 py-1 rounded-md bg-black-200/80 border border-emerald-500/30 text-emerald-400">
              Postgres / Redis
            </span>
          </div>
        </div>
      </div>

      {/* Terminal Footer: Status & Actions */}
      <div className="mt-6 pt-5 border-t border-black-50/80 space-y-4">
        <div className="flex items-center gap-2 text-xs text-white-50">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span>Have a project or backend challenge in mind? Let's connect.</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="https://github.com/Harish3005-cloud"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Harish's GitHub profile on GitHub (opens in a new tab)"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black-200 border border-black-50 text-xs font-mono text-white hover:border-[#cd7c2e] hover:text-[#cd7c2e] transition-all duration-200 group"
          >
            <span>$ github --view</span>
            <svg
              className="size-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="mailto:eharish3005@gmail.com"
            aria-label="Send an email to Harish at eharish3005@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black-200 border border-black-50 text-xs font-mono text-white hover:border-emerald-500/60 hover:text-emerald-400 transition-all duration-200 group"
          >
            <span>$ mailto:eharish3005</span>
            <svg
              className="size-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTerminal;
