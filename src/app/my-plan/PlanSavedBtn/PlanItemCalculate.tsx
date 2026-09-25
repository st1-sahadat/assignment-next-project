import { workoutContext } from '@/app/context/workoutContext';
import React, { useContext } from 'react';

const PlanItemCalculate = () => {
    const { workoutTodayPlan } = useContext(workoutContext);
    const calculatePlan = () => workoutTodayPlan.reduce((acc, workout) => {
        const totalMin  = acc.totalMin + workout.duration;
        const totalCalories  = acc.totalCalories + workout.caloriesBurned;
        return {totalMin, totalCalories};
    }, { totalMin: 0, totalCalories: 0 });
    const {totalMin, totalCalories} = calculatePlan();
    
    
    return (
                <div className="bg-[#111319] border border-gray-800/80 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Stats Summary Bar */}
                    {/* Exercises Count */}
                    <div className="flex flex-col space-y-2">
                        <span className="text-gray-400 text-xs font-semibold">Exercises</span>
                        <span className="text-4xl md:text-5xl font-black text-[#ccff00]">{workoutTodayPlan.length}</span>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col space-y-2 md:border-l md:border-gray-800/60 md:pl-8">
                        <span className="text-gray-400 text-xs font-semibold">Minutes</span>
                        <span className="text-4xl md:text-5xl font-black text-white">{totalMin}</span>
                    </div>

                    {/* Calories */}
                    <div className="flex flex-col space-y-2 md:border-l md:border-gray-800/60 md:pl-8">
                        <span className="text-gray-400 text-xs font-semibold">Calories</span>
                        <span className="text-4xl md:text-5xl font-black text-white">{totalCalories}</span>
                    </div>
                </div>
    );
};

export default PlanItemCalculate;