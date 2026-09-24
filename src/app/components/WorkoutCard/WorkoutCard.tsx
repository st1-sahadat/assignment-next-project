import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFantasyFlightGames } from "react-icons/fa";
import { IWorkoutType } from '../Type/type';

interface WorkoutCardType {
        exercise: IWorkoutType
}
const WorkoutCard = ({ exercise }: WorkoutCardType) => {

    return (
        <Link key={exercise.id} href={``} className="block w-full max-w-sm">
            <div className="bg-[#111319] border border-gray-800/80 rounded-2xl overflow-hidden shadow-lg hover:border-gray-700 transition-colors">

                {/* Top Image Container */}
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={exercise.image}
                        alt={'workout'}
                        fill
                        sizes="(max-width: 640px) 100vw, 384px"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Card Body */}
                <div className="p-5">
                    {/* Muscle Group Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {exercise.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Exercise Title */}
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                        {exercise.name}
                    </h3>

                    {/* Equipment Subtitle */}
                    <p className="text-gray-400 text-sm font-medium mb-4">
                        {exercise.equipment}
                    </p>

                    {/* Separator Line */}
                    <hr className="border-gray-800 mb-4" />

                    {/* Bottom Stats Meta */}
                    <div className="flex items-center space-x-5 text-gray-400 text-xs font-semibold">
                        {/* Duration */}
                        <div className="flex items-center space-x-1.5">
                            <FiClock className="w-4 h-4 text-gray-400" />
                            <span>{exercise.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center space-x-1.5">
                            <FaFantasyFlightGames className="w-3.5 h-3.5 text-gray-400" />
                            <span>{exercise.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-1.5">
                            <FiStar className="w-4 h-4 text-gray-400" />
                            <span>{exercise.rating}</span>
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutCard;