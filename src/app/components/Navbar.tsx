"use client";

import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Link from "next/link";
import { useContext, useState } from "react";
import { workoutContext } from "../context/workoutContext";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("workouts");
  const { workoutTodayPlan, workoutSaved } = useContext(workoutContext);

  return (
    <header className="border-b border-zinc-900 px-4 py-4 text-white sm:px-6 sm:py-5">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Logo Section */}
        <Link href="../" className="flex items-center gap-2.5 self-center sm:self-auto">
          {/* <Dumbbell className="w-6 h-6 text-[#a8f000] -rotate-45" /> */}
          <Image src={Logo} alt="Fitlog logo" />
          <span className="font-extrabold tracking-wider text-xl text-white uppercase">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <Link
            href="../workouts"
            onClick={() => setActiveTab("workouts")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${activeTab === "workouts"
              ? "bg-[#1b2609] text-[#a8f000]"
              : "text-zinc-400 hover:text-white"
              }`}
          >
            Workouts
          </Link>

          <Link
            href="../my-plan"
            onClick={() => setActiveTab("my-plan")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${activeTab === "my-plan"
              ? "bg-[#1b2609] text-[#a8f000]"
              : "text-zinc-400 hover:text-white"
              }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Badges */}
        <div className="flex items-center justify-center gap-3 text-sm font-medium text-zinc-300 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="../my-plan"
              onClick={() => setActiveTab("plan")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${activeTab === "plan"
                ? "bg-[#1b2609] text-[#a8f000]"
                : "text-zinc-400 hover:text-white"
                }`}
            >
              Plan
            </Link>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
              {workoutTodayPlan.length}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="../my-plan"
              onClick={() => setActiveTab("saved")}



              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:text-sm 
                ${activeTab === "saved"
                  ? "bg-[#1b2609] text-[#a8f000]"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              Saved
            </Link>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs font-bold text-zinc-400">
              {workoutSaved.length}
            </span>
          </div>
        </div>

      </nav>
    </header>
  );
};




export default Navbar;