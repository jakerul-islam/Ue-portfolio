import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaServer, 
  FaCheckCircle, 
  FaArrowLeft, 
  FaShieldAlt, 
  FaSatelliteDish, 
  FaStream, 
  FaCogs, 
  FaMicrochip,
  FaPlayCircle,
  FaTag
} from 'react-icons/fa';

const ProductDetailsPage = ({ data }) => {
  
  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 text-slate-200">
        <h2 className="text-2xl font-bold text-red-500 mb-2">No Data Available</h2>
        <p className="text-slate-400 text-sm">Product details could not be loaded.</p>
      </div>
    );
  }

  const {
    category,
    title,
    tagline,
    heroImage,
    videoUrl,
    overview,
    specs = [],
    features = [],
    productsList = []
  } = data;

  return (
    <div className="min-h-screen bg-[#080B10] text-slate-100 font-sans pb-20">
      
      {/* 🔹 TOP NAVIGATION / BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4">
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 bg-[#0F141C] border border-slate-800 px-4 py-2 rounded-xl transition-all"
        >
          <FaArrowLeft /> Back to Products
        </Link>
      </div>

      {/* 🔹 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-7 space-y-6">
            {category && (
              <div className="inline-flex items-center gap-2 bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">
                <FaTag className="text-xs" />
                {category}
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {title}
            </h1>

            {tagline && (
              <p className="text-lg sm:text-xl text-cyan-200/80 font-medium leading-relaxed">
                {tagline}
              </p>
            )}

            {overview && (
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed border-l-2 border-cyan-500/50 pl-4 py-1">
                {overview}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-400/20">
                Request Live Demo
              </button>
              {videoUrl && (
                <a 
                  href={videoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#0F141C] hover:bg-slate-800 text-slate-200 border border-slate-800 px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <FaPlayCircle className="text-cyan-400 text-base" /> Watch Demo Video
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-800 bg-[#0F141C] shadow-2xl shadow-cyan-950/20 group">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={title || "Product Image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  No Image Available
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>
      </section>

      {/* 🔹 TECHNICAL SPECIFICATIONS GRID */}
      {specs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="bg-[#0F141C] border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-6 flex items-center gap-2">
              <FaMicrochip /> Key Specifications
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="bg-[#080B10] border border-slate-800/80 p-4 rounded-xl space-y-1">
                  <span className="text-slate-500 text-xs font-medium block">{spec.label}</span>
                  <span className="text-white font-bold text-sm sm:text-base">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🔹 CORE FEATURES SECTION */}
      {features.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Platform Capabilities</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Designed to scale seamlessly across enterprise deployments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-[#0F141C] border border-slate-800 hover:border-cyan-500/40 p-6 rounded-2xl space-y-3 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform">
                  {idx === 0 ? <FaServer /> : idx === 1 ? <FaSatelliteDish /> : <FaStream />}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 🔹 INCLUDED PRODUCTS / MODULES LIST */}
      {productsList.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="bg-[#0F141C]/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FaCogs className="text-cyan-400" /> Included Software Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productsList.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#080B10] border border-slate-800 p-4 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-cyan-400 text-base" />
                    <span className="text-sm font-semibold text-slate-200">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    {item.status || 'Active'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🔹 FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        <div className="bg-gradient-to-r from-[#0F141C] via-cyan-950/20 to-[#0F141C] border border-slate-800 rounded-2xl p-8 text-center space-y-4">
          <FaShieldAlt className="text-cyan-400 text-3xl mx-auto" />
          <h3 className="text-xl font-bold text-white">Ready to integrate with your system?</h3>
          <p className="text-slate-400 text-xs max-w-md mx-auto">
            Get in touch with our technical team to schedule an architecture review or request custom deployment documentation.
          </p>
         <Link href={'/contact'}> <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all">
            Contact Technical Team
          </button></Link>
        </div>
      </section>

    </div>
  );
};

export default ProductDetailsPage;