'use client'
import { workoutContext } from '@/app/context/workoutContext';
import React, { useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { IWorkoutType } from '../Type/type';



const PlanBtn = ({workoutId} : {workoutId : IWorkoutType}) => {
    const { workoutTodayPlan, setWorkoutTodayPlan } = useContext(workoutContext);

    const handleWorkoutPlan = () => {        
        const alreadyAdded = workoutTodayPlan.find(
            (plan) => plan.id === workoutId.id
        );        
        if (alreadyAdded) {
            toast(`${workoutId.name} Already Added.`);
            return;
        }

        setWorkoutTodayPlan([...workoutTodayPlan, workoutId]);
        toast(`${workoutId.name} Successfully Add.`);
    }


    return (
        <button
            onClick={() => handleWorkoutPlan()}
            className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
            <FiCalendar className="w-4 h-4"
            />
            <span>Add to today&apos;s plan</span>
        </button>
    );
};

export default PlanBtn;