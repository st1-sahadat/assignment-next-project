// Different method:- AI Generate but don't understand

// 'use client'
// import { IWorkoutType } from '@/app/components/Type/type';
// import { workoutContext } from '@/app/context/workoutContext';
// import React, { useContext, useState, useEffect } from 'react';
// import { FiChevronDown } from 'react-icons/fi';

// const SortBy = () => {
//     const { workoutTodayPlan, setWorkoutTodayPlan, workoutSaved, setWorkoutSaved } = useContext(workoutContext);
//     const [sortBy, setSortBy] = useState('Duration');

//     // Move the logic inside useEffect
//     useEffect(() => {
//         const sortWorkout = (workOut: IWorkoutType[]) => {
//             const sortedWorkout = [...workOut];

//             if (sortBy === "Duration") {
//                 sortedWorkout.sort((a, b) => a.duration - b.duration);
//             } else if (sortBy === "Calories") {
//                 sortedWorkout.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
//             } else if (sortBy === "Rating") {
//                 sortedWorkout.sort((a, b) => b.rating - a.rating);
//             }

//             return sortedWorkout;
//         };

//         const sortPlan = sortWorkout(workoutTodayPlan);
//         const sortSaved = sortWorkout(workoutSaved);

//         setWorkoutTodayPlan(sortPlan);
//         setWorkoutSaved(sortSaved);
//     }, [sortBy]); // Only re-run when sortBy changes

//     return (
//         <div className="flex items-center space-x-3 self-end sm:self-auto">
//             <span className="text-gray-400 text-xs font-semibold">Sort By</span>
//             <div className="relative">
//                 <select
//                     value={sortBy}
//                     onChange={(event) => setSortBy(event.target.value)}
//                     aria-label="Sort workouts by"
//                     className="appearance-none rounded-xl border border-gray-700 bg-[#1b1e28] px-4 py-2 pr-10 text-sm font-semibold text-white outline-none transition-colors hover:border-gray-500 focus:border-[#ccff00] focus:ring-2 focus:ring-[#ccff00]/20"
//                 >
//                     <option className="bg-[#111319]">Duration</option>
//                     <option className="bg-[#111319]">Calories</option>
//                     <option className="bg-[#111319]">Rating</option>
//                 </select>
//                 <FiChevronDown
//                     aria-hidden="true"
//                     className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 />
//             </div>
//         </div>
//     );
// };

// export default SortBy;