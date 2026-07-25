'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { FaSearch, FaArrowRight, FaThLarge, FaList, FaTag, FaCheckCircle, FaSpinner } from 'react-icons/fa';

// Swiper CSS Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Link from 'next/link';

// ---------------- 1. BANNER SLIDER DATA ----------------
const categoryBanners = [
  {
    id: 'software',
    categoryName: 'Software Products',
    title: 'Enterprise Cloud & Analytics Suite',
    subtitle: 'Centralized dashboard for monitoring multi-robot fleets & automated workflows.',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
    tag: 'Cloud & SaaS'
  },
  {
    id: 'automation',
    categoryName: 'Automation Products',
    title: 'High-Precision Factory Automation',
    subtitle: 'Streamline your assembly line with real-time SCADA integration.',
    bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600',
    tag: 'Industrial Automation'
  },
  {
    id: 'embedded',
    categoryName: 'Embedded Products',
    title: 'Rugged Edge Compute Modules',
    subtitle: 'Ultra-low latency hardware processors built for extreme operations.',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600',
    tag: 'Hardware & IoT'
  },
  {
    id: 'robotics',
    categoryName: 'Robotics Products',
    title: 'Autonomous Mobile & Articulated Robots',
    subtitle: 'All-terrain quadrupeds and 6-axis cobots for hazardous missions.',
    bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600',
    tag: 'Robotics'
  },
  {
    id: 'ai',
    categoryName: 'AI Products',
    title: 'Neural Vision & Perception Models',
    subtitle: 'Deep learning models engineered for instant surface defect inspection.',
    bgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600',
    tag: 'Computer Vision'
  }
];

// ক্যাটাগরি ফিল্টার অপশনসমূহ
const categoriesList = [
  'All Products',
  'Software Products',
  'Automation Products',
  'Embedded Products',
  'Robotics Products',
  'AI Products'
];

export default function ProductsPage() {
  // States
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // ---------------- 2. DATA FETCHING FUNCTION ----------------
  useEffect(() => {
    const fetchProductsData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
        const data = await res.json();
        
        console.log(data, 'from product page');

     
        const productList = Array.isArray(data) ? data : (data.products || data.data || []);
        
        setProducts(productList);

      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  // ---------------- 3. SEARCH FILTER LOGIC ----------------
  const filteredProducts = products.filter((item) => {
    const title = item?.title || item?.name || '';
    const description = item?.description || '';
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-[#080B10] text-slate-100 font-sans">

      {/* 🖼️ SECTION 1: HERO CATEGORY BANNER SLIDER */}
      <section className="relative w-full h-[60vh] sm:h-[75vh] overflow-hidden border-b border-slate-800/80">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full h-full mySwiper"
        >
          {categoryBanners.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={slide.bgImage}
                  alt={slide.categoryName}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080B10] via-[#080B10]/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent z-10" />

                <div className="relative z-20 max-w-6xl w-full mx-auto px-6 sm:px-12 space-y-4">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block bg-cyan-950/90 text-cyan-400 border border-cyan-800/80 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md"
                  >
                    {slide.tag}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-6xl font-extrabold text-white leading-tight max-w-2xl"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-300 text-sm sm:text-lg max-w-xl line-clamp-2 leading-relaxed"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-2"
                  >
                    <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-400/20">
                      Explore {slide.categoryName} <FaArrowRight />
                    </button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔍 SECTION 2: FILTER & SEARCH BAR */}
      <section className="sticky top-0 z-30 bg-[#080B10]/90 backdrop-blur-xl border-b border-slate-800/80 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {categoriesList.map((cat, index) => (
              <button
                key={cat}
                type="button"
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold cursor-default transition-all duration-300 flex items-center gap-1.5 ${
                  index === 0
                    ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20'
                    : 'bg-[#0F141C] text-slate-400 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0F141C] border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
              />
            </div>

            <div className="hidden sm:flex items-center bg-[#0F141C] border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <FaThLarge />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg text-xs transition-colors ${
                  viewMode === 'list' ? 'bg-cyan-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="List View"
              >
                <FaList />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 🛍️ SECTION 3: PRODUCTS DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              All Catalog Products
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              High-performance industrial solutions engineered for reliability.
            </p>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Showing {filteredProducts.length} results
          </span>
        </div>

        {/* 1. Loading State */}
        {loading && (
          <div className="min-h-[300px] flex flex-col items-center justify-center gap-4 text-slate-400">
            <FaSpinner className="animate-spin text-3xl text-cyan-400" />
            <p className="text-sm font-medium">Fetching products from database...</p>
          </div>
        )}

        {/* 2. Empty Data State */}
        {!loading && filteredProducts.length === 0 && (
          <div className="min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-[#0F141C]/50 border border-slate-800 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
              <FaTag />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">No Products Found</h3>
              <p className="text-slate-400 text-xs max-w-sm">
                No matching products found. Try adjusting your search query or add items in backend database.
              </p>
            </div>
          </div>
        )}

        {/* 3. Render Fetched Products */}
        {!loading && filteredProducts.length > 0 && (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-4'
            }
          >
            {filteredProducts.map((item) => (
              <motion.div
                key={item._id || item.id}
                whileHover={{ y: -5 }}
                className="bg-[#0F141C] border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden group transition-all"
              >
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={item.heroImage || item.imageUrl || 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800'}
                    alt={item.title || item.name || 'Product Image'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.category && (
                    <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md border border-slate-800">
                      {item.category}
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {item.title || item.name}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {item.description || 'No description available for this product.'}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                    <span className="text-sm font-extrabold text-cyan-400">
                      {item.price ? `$${item.price}` : 'Quote on Request'}
                    </span>
                   <Link href={`/products/${item._id}`}> <button className="text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                      Details <FaArrowRight className="text-[10px]" />
                    </button></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </section>

      {/* 💡 EXTRA SECTION 1 */}
      <section className="border-t border-slate-800/80 bg-[#0F141C]/40 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Built for High Reliability</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Why global industrial leaders rely on our hardware & software ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Military-Grade Ruggedness', desc: 'Tested in extreme environments with IP67 water and dust sealing.' },
              { title: 'Sub-Millimeter Precision', desc: 'Neural vision models and sensors tuned for zero-margin errors.' },
              { title: 'Seamless SCADA/IIoT', desc: 'Plug and play setup with industrial controllers and cloud analytics.' },
              { title: '24/7 Deployment Support', desc: 'Global field engineering support and automated OTA firmware updates.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#080B10] border border-slate-800/90 p-6 rounded-2xl space-y-3">
                <FaCheckCircle className="text-cyan-400 text-xl" />
                <h3 className="text-base font-bold text-white">{feature.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📧 EXTRA SECTION 2 */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 via-[#0F141C] to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Need a Customized Solution?</h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mx-auto">
            Our engineers can tailor custom software modules, embedded boards, or robotic payloads for your enterprise needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-400/20">
              Schedule Live Demo
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all">
              Talk to an Engineer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}