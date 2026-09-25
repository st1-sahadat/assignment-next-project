import React from 'react';
import { FiBookmark } from 'react-icons/fi';

const SavedBtn = () => {
    return (
        <button className="flex items-center gap-2 bg-transparent hover:bg-gray-800/50 text-gray-300 border border-gray-800 font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
            <FiBookmark className="w-4 h-4" />
            <span>Save for later</span>
        </button>

    );
};

export default SavedBtn;