import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

export default function TechnologyTemplate({ data }) {
  if (!data) return null;

  return (
    <main className="bg-[#080B10] text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* HERO BANNER */}
        <div className="bg-[#0F141C] border border-slate-800/90 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/50 px-3.5 py-1.5 rounded-full inline-block">
              Technology Architecture
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              {data.title}
            </h1>
            <p className="text-base md:text-lg text-cyan-400 font-medium">
              {data.tagline}
            </p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed pt-2">
              {data.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-400/20 flex items-center gap-2"
              >
                Request Technical Proposal <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* CORE CAPABILITIES GRID */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            {/* <FiCpu className="text-cyan-400" /> Key Capabilities */}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features?.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#111622] border border-slate-800/80 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-8 h-8 bg-cyan-400/10 text-cyan-400 rounded-lg flex items-center justify-center text-sm font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK BADGES */}
        <div className="bg-[#0F141C] border border-slate-800/80 p-8 rounded-2xl space-y-4">
          <h3 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Tools, Frameworks & Hardware Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.techStack?.map((item, idx) => (
              <span
                key={idx}
                className="bg-[#080B10] border border-slate-800 text-slate-300 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <FaCheckCircle className="text-cyan-400 text-xs" /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-gradient-to-r from-cyan-950/30 to-slate-900 border border-cyan-800/40 p-8 sm:p-12 rounded-3xl text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Need a Custom Solution in {data.title}?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Discuss your system design and automation requirements directly with our engineering team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-400/20"
          >
            <FaPaperPlane /> Contact Engineers
          </Link>
        </div>

      </div>
    </main>
  );
}