'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

export default function MyPlanPage() {
    const [activeTab, setActiveTab] = useState('saved'); // 'todaysPlan' or 'saved'
    const [sortBy, setSortBy] = useState('Duration');

    // Example empty state - replace with your dynamic list logic
    const items = [];

    return (
        <div className="min-h-screen bg-[#0b0c10] text-gray-300 p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Page Title & Subtitle */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-1">
                        MY PLAN
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base font-normal">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats Summary Bar */}
                <div className="bg-[#111319] border border-gray-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Exercises Count */}
                    <div className="flex flex-col space-y-2">
                        <span className="text-gray-400 text-xs font-semibold">Exercises</span>
                        <span className="text-4xl md:text-5xl font-black text-[#ccff00]">0</span>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col space-y-2 md:border-l md:border-gray-800/60 md:pl-8">
                        <span className="text-gray-400 text-xs font-semibold">Minutes</span>
                        <span className="text-4xl md:text-5xl font-black text-white">0</span>
                    </div>

                    {/* Calories */}
                    <div className="flex flex-col space-y-2 md:border-l md:border-gray-800/60 md:pl-8">
                        <span className="text-gray-400 text-xs font-semibold">Calories</span>
                        <span className="text-4xl md:text-5xl font-black text-white">0</span>
                    </div>
                </div>

                {/* Controls Row: Tabs & Sort Dropdown */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                    {/* Segmented Tab Controls */}
                    <div className="bg-[#111319] border border-gray-800/80 p-1.5 rounded-2xl inline-flex items-center space-x-1 max-w-max">
                        <button
                            onClick={() => setActiveTab('todaysPlan')}
                            className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 
                                ${activeTab === 'todaysPlan'
                                    ? 'bg-[#1b1e28] text-white shadow-sm'
                                    : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 
                                ${activeTab === 'saved'
                                    ? 'bg-[#1b1e28] text-white shadow-sm'
                                    : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="flex items-center space-x-3 self-end sm:self-auto">
                        <span className="text-gray-400 text-xs font-semibold">Sort By</span>
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(event) => setSortBy(event.target.value)}
                                aria-label="Sort workouts by"
                                className="appearance-none rounded-xl border border-gray-700 bg-[#1b1e28] px-4 py-2 pr-10 text-sm font-semibold text-white outline-none transition-colors hover:border-gray-500 focus:border-[#ccff00] focus:ring-2 focus:ring-[#ccff00]/20"
                            >
                                <option className="bg-[#111319]">Duration</option>
                                <option className="bg-[#111319]">Calories</option>
                                <option className="bg-[#111319]">Rating</option>
                            </select>
                            <FiChevronDown
                                aria-hidden="true"
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                        </div>
                    </div>

                </div>

                {/* Content Container (Empty State) */}
                {items.length === 0 ? (
                    <div className="border border-dashed border-gray-800/80 rounded-2xl py-24 px-6 flex flex-col items-center justify-center text-center bg-[#111319]/20">
                        <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide mb-2">
                            NOTHING HERE YET
                        </h2>
                        <p className="text-gray-400 text-sm mb-8 max-w-sm">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/workouts"
                            className="bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors shadow-lg shadow-[#ccff00]/10"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    /* Render workout cards when items exist */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Cards mapped here */}
                    </div>
                )}

            </div>
        </div>
    );
}