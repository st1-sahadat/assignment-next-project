import Link from 'next/link';
import React from 'react';

const NotAvialibleItem = () => {
    return (
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
    );
};

export default NotAvialibleItem;