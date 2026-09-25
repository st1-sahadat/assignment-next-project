'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import TodayPlanItem from './PlanSavedBtn/TodayPlanItem';
import SavedItem from './PlanSavedBtn/SavedItem';
import PlanItemCalculate from './PlanSavedBtn/PlanItemCalculate';
import SavedItemCalculate from './PlanSavedBtn/SavedItemCalculate';

export default function MyPlanPage() {
    const [activeTab, setActiveTab] = useState('saved'); // 'todaysPlan' or 'saved'
    const [sortBy, setSortBy] = useState('Duration');


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

               
                {activeTab === 'saved' && <SavedItemCalculate /> }
                {activeTab === 'todaysPlan' && <PlanItemCalculate /> }
               

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

                {activeTab === 'todaysPlan' && <TodayPlanItem /> }
                {activeTab === 'saved' && <SavedItem /> }

            </div>
        </div>
    );
}