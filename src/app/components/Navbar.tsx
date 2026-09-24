"use client";

import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("workouts");
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <header className=" border-b border-zinc-900 px-6 py-5 text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* <Dumbbell className="w-6 h-6 text-[#a8f000] -rotate-45" /> */}
          <Image src={Logo} alt="Fitlog logo" />
          <span className="font-extrabold tracking-wider text-xl text-white uppercase">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("workouts")}
            className={`px-5 py-1.5 rounded-full font-medium text-sm transition-colors ${activeTab === "workouts"
                ? "bg-[#1b2609] text-[#a8f000]"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            Workouts
          </button>

          <button
            onClick={() => setActiveTab("my-plan")}
            className={`px-5 py-1.5 rounded-full font-medium text-sm transition-colors ${activeTab === "my-plan"
                ? "bg-[#1b2609] text-[#a8f000]"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            My Plan
          </button>
        </div>

        {/* Right Badges */}
        <div className="flex items-center gap-6 text-sm text-zinc-300 font-medium">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-5 py-1.5 rounded-full font-medium text-sm transition-colors ${activeTab === "plan"
                  ? "bg-[#1b2609] text-[#a8f000]"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              Plan
            </button>
            <span className="w-6 h-6 rounded-full bg-[#a8f000] text-black font-bold flex items-center justify-center text-xs">
              {planCount}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-1.5 rounded-full font-medium text-sm transition-colors 
                ${activeTab === "saved"
                  ? "bg-[#1b2609] text-[#a8f000]"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              Saved
            </button>
            <span className="w-6 h-6 rounded-full border border-zinc-700 text-zinc-400 font-bold flex items-center justify-center text-xs">
              {savedCount}
            </span>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;