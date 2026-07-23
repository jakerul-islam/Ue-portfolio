// components/LogoMarquee.jsx
import React from 'react';

const logos = [
  { id: 1, name: 'Logoipsum 1', src: 'https://i.ibb.co/1JwTBJX6/image.png' },
  { id: 2, name: 'Logoipsum 2', src: 'https://i.ibb.co/nqJxTv50/uber.png' },
  { id: 3, name: 'Logoipsum 3', src: 'https://i.ibb.co/ZRSQZVQP/tesla.png' },
  { id: 4, name: 'Logoipsum 4', src: 'https://i.ibb.co/bjJjg8p3/adobe.png' },
  { id: 5, name: 'Logoipsum 5', src: 'https://i.ibb.co/XZKCK2hZ/google.png' },
  { id: 6, name: 'Logoipsum 6', src: 'https://i.ibb.co/XZKCK2hZ/google.png' },
  { id: 7, name: 'Logoipsum 7', src: 'https://i.ibb.co/XZKCK2hZ/google.png' },
  { id: 8, name: 'Logoipsum 8', src: 'https://i.ibb.co/XZKCK2hZ/google.png' },
];

export default function LogoMarquee() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-slate-900 py-12 border-y border-slate-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h3 className="text-gray-400 text-4xl md:text-base font-bold tracking-wide">
          Recent clients & partners
        </h3>
      </div>

      {/* Marquee Wrapper with Fade Effect */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
       
        <div className="flex w-[200%] animate-marquee items-center gap-6 md:gap-8">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
          
              <img
                src={logo.src}
                alt={logo.name}
                className="h-14 md:h-20 w-auto max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}