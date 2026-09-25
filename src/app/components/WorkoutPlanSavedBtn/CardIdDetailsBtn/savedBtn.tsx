'use client'
import { workoutContext } from '@/app/context/workoutContext';
import React, { useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { IWorkoutType } from '../../Type/type';



const SavedBtn = ({ workoutId }: { workoutId: IWorkoutType }) => {
    const { workoutSaved, setWorkoutSaved } = useContext(workoutContext);
    const handleWorkoutPlan = () => {

        const alreadyAdded = workoutSaved.find(
            (plan) => plan.id === workoutId.id
        );
        if (alreadyAdded) {
            toast(`${workoutId.name} Already Added.`);
            return;
        }
        setWorkoutSaved([...workoutSaved, workoutId]);
        toast(`${workoutId.name} Successfully Added`);
    }


    return (
        <button
            onClick={() => handleWorkoutPlan()}
            className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
            <FiBookmark className="w-4 h-4" />
            <span>Save for later</span>
        </button>
    );
};

export default SavedBtn;