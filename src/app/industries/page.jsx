import React from "react";
import Image from "next/image";
import { FaIndustry, FaCheckCircle, FaRobot, FaArrowRight } from "react-icons/fa";
import IndustryCard from "@/components/IndustryCard";

export const IndustriesPage =async () => {
  
const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/industries`);
const data =await res.json();


  return (
    <div className="min-h-screen bg-[#080B10] text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto space-y-16 max-w-7xl">
        
        {/* 🔹 HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Glowing Container */}
          <div className="relative group">
            {/* Glow Effect behind Image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0F141C] shadow-2xl h-[320px] sm:h-[420px] w-full">
              <Image
                src="https://i.ibb.co/TM1vXp6p/image.png"
                alt="Innovating Industries"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">
              <FaIndustry className="text-xs" />
              Cross-Industry Solutions
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Innovating how work gets done <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                across industries
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              We specialize in delivering tailored automation and enterprise software solutions for various industries, ensuring seamless integration, maximum safety, and optimal operational performance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-400/20 flex items-center gap-2">
                Explore Solutions <FaArrowRight />
              </button>
            </div>
          </div>

        </div>

        {/* 🔹 BOTTOM SECTION: FEATURES / CAPABILITIES */}
        <div className="bg-[#0F141C] border border-slate-800/90 shadow-2xl rounded-2xl p-6 sm:p-10 space-y-8 backdrop-blur-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-1">
                <FaRobot /> High-Performance Robotics
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Robots that can get the job done
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              Engineered for extreme reliability and precise execution in high-demand industrial environments.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            data.map((item,index)=>( <IndustryCard industry={item} key={index}></IndustryCard>)
             
            )
          }
          </div>

        </div>

      </div>
    </div>
  );
};

export default IndustriesPage;