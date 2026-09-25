import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const PlanBtn = () => {
    return (
        <button className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
            <FiCalendar className="w-4 h-4" />
            <span>Add to today&apos;s plan</span>
        </button>
    );
};

export default PlanBtn;