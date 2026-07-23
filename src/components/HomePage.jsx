import React from 'react';
import Link from 'next/link';

export const HomePage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://i.ibb.co/zyhQKYz/ai.jpg')` }}
        >
          
          <div className=""></div>
        </div>

       
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          
       

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight   ">
            Engineered for Innovation. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-500">
              Built for Industry.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl font-light">
            We pioneer advanced Robotics, AI Vision, and Embedded Controllers to transform complex challenges into industrial solutions.
          </p>

          {/* Call To Actions */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/technologies"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-red-600/30"
            >
              Explore Technologies
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-slate-900/80 hover:bg-slate-800 text-gray-300 border border-slate-700/80 backdrop-blur-sm font-semibold rounded-lg transition-all"
            >
              View R&D Projects
            </Link>
          </div>

          {/* Live Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-20 border-t border-slate-800/80 pt-10">
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-sm text-gray-400 mt-1">R&D Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-sm text-gray-400 mt-1">Patents Filed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">99.9%</h3>
              <p className="text-sm text-gray-400 mt-1">System Precision</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-sm text-gray-400 mt-1">Industrial Uptime</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;