import React from 'react';
import Link from 'next/link';
import { aboutData } from '@/data/about';
import { FaBullseye, FaEye, FaMicrochip, FaUsers, FaPaperPlane } from 'react-icons/fa';

export const metadata = {
  title: 'About Us - Ulterior Engineering',
  description: 'Learn more about Ulterior Engineering, our mission, vision, and core team.',
};

export default function AboutPage() {
  const { hero, stats, missionVision, coreValues, team } = aboutData;

  return (
    <main className="bg-[#080B10] text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* HERO BANNER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/50 px-3.5 py-1.5 rounded-full inline-block">
            {hero.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {hero.title}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {hero.subtitle}
          </p>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#0F141C] border border-slate-800/90 p-6 rounded-2xl text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                {stat.number}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111622] border border-slate-800 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl flex items-center justify-center text-cyan-400 text-xl">
              <FaBullseye />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {missionVision.mission}
            </p>
          </div>

          <div className="bg-[#111622] border border-slate-800 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl flex items-center justify-center text-cyan-400 text-xl">
              <FaEye />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {missionVision.vision}
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-2">
              <FaMicrochip className="text-cyan-400" /> What Drives Us
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">The engineering principles behind everything we construct.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-[#0F141C] border border-slate-800/80 p-6 rounded-2xl space-y-3">
                <span className="text-cyan-400 text-xs font-mono">0{idx + 1}.</span>
                <h3 className="text-lg font-bold text-white">{val.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-cyan-950/30 to-slate-900 border border-cyan-800/40 p-8 sm:p-12 rounded-3xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Automate Your Operations?</h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Partner with our R&D team to turn complex technical challenges into efficient automated systems.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-400/20"
          >
            <FaPaperPlane /> Talk to Our Engineers
          </Link>
        </div>

      </div>
    </main>
  );
}