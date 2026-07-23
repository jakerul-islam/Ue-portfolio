import Link from "next/link";
import React from "react";
import { navItems } from "@/data/navigation";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="bg-[#080B10]/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50 py-3 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center text-cyan-400 font-bold text-xl group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
            UE
          </div>
          <span className="text-xl font-extrabold tracking-tight uppercase text-slate-100 group-hover:text-cyan-400 transition-colors">
            Ulterior <span className="text-cyan-400">Engineering</span>
          </span>
        </Link>

        {/* Navigation Items */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item, index) => (
            <li key={index} className="relative group/main py-2">
              
              {/* Main Link */}
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-900/60 flex items-center gap-1.5"
              >
                {item.name}
                {item.categories && item.categories.length > 0 && (
                  <FaChevronDown className="text-[10px] text-slate-500 group-hover/main:text-cyan-400 group-hover/main:rotate-180 transition-transform duration-200" />
                )}
              </Link>

              {/* Dropdown Menu (Level 2 Categories) */}
              {item.categories && item.categories.length > 0 && (
                <div className="absolute left-0 top-full hidden group-hover/main:block w-64 bg-[#0F141C] border border-slate-800/90 shadow-2xl rounded-xl z-50 py-2.5 pt-1 backdrop-blur-xl">
                  {item.categories.map((cat, catIndex) => (
                    <div key={catIndex} className="relative group/sub px-2">
                      <div className="flex items-center justify-between rounded-lg hover:bg-slate-800/70 transition-colors">
                        <Link
                          href={`${item.href}/${cat.slug}`}
                          className="w-full px-3 py-2.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center justify-between"
                        >
                          <span>{cat.name}</span>
                          {cat.subcategories && cat.subcategories.length > 0 && (
                            <FaChevronRight className="text-[10px] text-slate-500 group-hover/sub:text-cyan-400" />
                          )}
                        </Link>
                      </div>

                      {/* Sub-categories Flyout (Level 3) */}
                      {cat.subcategories && cat.subcategories.length > 0 && (
                        <div className="absolute left-full top-0 hidden group-hover/sub:block w-60 bg-[#111622] border border-slate-800/90 shadow-2xl rounded-xl z-50 py-2 pl-1">
                          {cat.subcategories.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`${item.href}/${cat.slug}/${sub.slug}`}
                              className="block px-4 py-2 text-xs text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right CTA Button */}
        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-400/20 block"
          >
            Get In Touch
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;