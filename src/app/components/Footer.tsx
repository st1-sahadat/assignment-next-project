import React from 'react';
import { FaDumbbell } from 'react-icons/fa';

const FooterPage = () => {
    return (
        <footer className="w-full bg-[#0b0c10] border-t border-gray-800/40 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center space-x-2">
          <FaDumbbell  className="w-6 h-6 text-[#ccff00] " />
          <span className="text-white font-black text-lg tracking-wider uppercase">
            FITLOG
          </span>
        </div>

        {/* Right: Copyright & Tagline */}
        <p className="text-gray-400 text-xs sm:text-sm font-normal text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
    );
};

export default FooterPage;