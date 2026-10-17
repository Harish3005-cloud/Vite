import React from 'react';
import TitleHeader from '../components/TitleHeader.jsx';
import {
  featuredFrameworks,
  backendSkills,
  aiEngineeringSkills,
  programmingLanguages,
  infrastructureTools,
} from '../constants/index.js';

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="tech-container">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />

        {/* 1. Prominently Featured Backend Frameworks */}
        <div className="mt-14 space-y-4">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            <h3 className="tech-subheading">
              Core Backend Frameworks
            </h3>
          </div>
          <div className="tech-grid-2-cols">
            {featuredFrameworks.map((fw) => (
              <div
                key={fw.name}
                className="tech-card group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${fw.badgeColor}`}>
                      {fw.language}
                    </span>
                    <span className="text-xs text-blue-50 font-medium">
                      {fw.role}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-white-50 transition-colors">
                    {fw.name}
                  </h4>
                  <p className="text-sm md:text-base text-white-50 leading-relaxed mb-6">
                    {fw.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black-50/50">
                  {fw.highlights.map((h) => (
                    <span
                      key={h}
                      className="tech-highlight-tag"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Backend Engineering & AI Engineering */}
        <div className="tech-grid-2-cols mt-6">
          {/* Backend Engineering */}
          <div className="tech-card">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="tech-subheading">Architecture & Protocols</span>
                <span className="hero-badge text-xs py-1 px-3">Backend Engineering</span>
              </div>
              <h3 className="tech-heading">Systems & Distributed Backend</h3>
              <p className="tech-description">
                Scalable API design, high-concurrency real-time events, relational and non-relational storage, and production auth mechanisms.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {backendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="tech-skill-pill flex flex-col gap-1"
                  >
                    <span className="text-sm font-semibold text-white">{skill.name}</span>
                    <span className="text-xs text-blue-50">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Engineering Skills */}
          <div className="tech-card">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="tech-subheading">Applied AI & LLMs</span>
                <span className="hero-badge text-xs py-1 px-3">Applied Skills</span>
              </div>
              <h3 className="tech-heading">AI Engineering Skills</h3>
              <p className="tech-description">
                Practical application of foundation models, context-augmented generation pipelines, and standardized tool protocols.
              </p>
              <div className="space-y-3">
                {aiEngineeringSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="tech-skill-pill flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1"
                  >
                    <div>
                      <span className="text-sm font-semibold text-white">{skill.name}</span>
                      <span className="text-xs text-blue-50 sm:ml-2 block sm:inline">({skill.label})</span>
                    </div>
                    <span className="text-xs text-white-50 sm:text-right sm:max-w-[55%]">{skill.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Programming & DSA, Infrastructure, and LeetCode Statistics */}
        <div className="tech-grid-2-cols mt-6">
          {/* Left Column: Languages & Infrastructure */}
          <div className="space-y-6">
            {/* Programming Languages & DSA */}
            <div className="tech-card-static">
              <div className="flex items-center justify-between mb-4">
                <span className="tech-subheading">Languages & Algorithms</span>
                <span className="hero-badge text-xs py-1 px-3">Problem Solving</span>
              </div>
              <h3 className="tech-heading">Programming & DSA</h3>
              <p className="tech-description !mb-5">
                Core languages used for systems programming, data structures, algorithms, and application logic.
              </p>
              <div className="space-y-2.5">
                {programmingLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`p-3 rounded-xl border transition-colors duration-200 flex items-center justify-between gap-3 ${
                      lang.isPrimary
                        ? 'bg-amber-500/10 border-amber-500/30'
                        : 'bg-black-200/50 border-black-50 hover:bg-black-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-bold text-white">{lang.name}</span>
                      {lang.isPrimary && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          ★ Primary DSA Language
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-blue-50 text-right">{lang.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure & Tooling */}
            <div className="tech-card-static">
              <div className="flex items-center justify-between mb-4">
                <span className="tech-subheading">DevOps & Cloud</span>
                <span className="hero-badge text-xs py-1 px-3">Tooling</span>
              </div>
              <h3 className="tech-heading">Infrastructure & Tools</h3>
              <p className="tech-description !mb-5">
                Containerization, cloud deployments, object storage, and collaborative version control workflows.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {infrastructureTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="tech-skill-pill flex flex-col gap-1"
                  >
                    <span className="text-sm font-semibold text-white">{tool.name}</span>
                    <span className="text-xs text-blue-50">{tool.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: LeetCode Statistics Card */}
          <div className="tech-card">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="tech-subheading">Competitive Problem Solving</span>
                <a
                  href="https://leetcode.com/u/hari308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Harish's LeetCode profile on leetcode.com"
                  className="text-xs text-white-50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span>hari308</span>
                  <svg className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <h3 className="tech-heading">LeetCode Problem Solving</h3>
              <p className="tech-description">
                Live problem-solving activity and algorithmic progress across data structures, algorithms, and complex edge cases.
              </p>
            </div>
            <div className="tech-leetcode-frame">
              <a
                href="https://leetcode.com/u/hari308/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Harish's LeetCode statistics on leetcode.com"
                className="block w-full"
              >
                <img
                  src="https://camo.githubusercontent.com/dc82985c1bbbb6a0cc5887f84fe1428c65dddf3e7d08ab87f91bf2a008497d74/68747470733a2f2f6c656574636172642e6a61636f626c696e2e636f6f6c2f686172693330383f7468656d653d6461726b26666f6e743d5562756e7475266578743d6163746976697479"
                  alt="LeetCode problem solving statistics for hari308 showing problem-solving metrics and recent activity"
                  width={500}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto max-w-[500px] mx-auto rounded-lg object-contain transition-transform duration-300 hover:scale-[1.01]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;