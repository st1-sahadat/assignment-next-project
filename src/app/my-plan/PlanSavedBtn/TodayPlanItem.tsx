import { workoutContext } from '@/app/context/workoutContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import NotAvialibleItem from './NotAvialibleItem';
import { IWorkoutType } from '@/app/components/Type/type';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const TodayPlanItem = ({sortPlan}:{sortPlan:IWorkoutType[]}) => {
    const { setWorkoutTodayPlan } = useContext(workoutContext);
    const [markAsDone, setMarkAsDone] = useState(false);

    const handleClick =()=>{
        setMarkAsDone(true);
        toast("Marks the workout done, ");
    }


    return (
        sortPlan.length === 0 ? (
           <NotAvialibleItem />
        ) : (
            sortPlan.map((m, index:number) => (
                <div key={index}
                className=" bg-[#121212] border border-gray-800 rounded-2xl p-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 transition-all hover:bg-[#181818]"
                >

                    {/* LEFT: IMAGE & DETAILS */}
                    <div className="flex items-center gap-4 grow">
                        {/* Thumbnail Image */}
                        <Image
                            src={m.image}  alt={`${m.name} exercise`} width={300} height={300}
                            className="w-24 h-16 rounded-xl object-cover border border-gray-700"
                        />

                        {/* Text Information */}
                        <div className="flex flex-col justify-center">
                            {/* Title */}
                            <h3 className="text-white font-bold text-lg tracking-wide uppercase">
                                {m.name}
                            </h3>

                            {/* Subtitle (Equipment) */}
                            <p className="text-gray-400 text-sm font-medium mb-1.5">
                                {m.equipment}
                            </p>

                            {/* Metadata Row */}
                            <div className="flex items-center gap-5 text-gray-300 text-xs font-medium">

                                {/* Duration */}
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span>{m.duration} min</span>
                                </div>

                                {/* Calories */}
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-lime-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.63 2.63 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .524 2.575.377 3.62a3 3 0 01.993 2.5z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>{m.caloriesBurned} kcal</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <span>{m.rating}</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT: ACTION BUTTONS */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-end">

                        {/* View Details Button */}
                        <Link 
                            href={`/workouts/${m.id}`}
                            className="px-5 py-2 rounded-full border border-gray-600 text-gray-300 text-sm font-semibold hover:bg-gray-800 transition duration-200">
                            View Details
                        </Link>

                        {/* Mark as Done Button */}
                        <button 
                        onClick={handleClick}
                        className={`px-5 py-2 rounded-full border border-gray-600 text-sm font-semibold transition duration-200 
                            ${markAsDone
                                ? 'bg-[#cf0] text-black'
                                : 'text-gray-300 hover:bg-gray-800'
                            }`}
                        // className="px-5 py-2 rounded-full bg-[#d4ff00] text-black text-sm font-bold flex items-center gap-2 hover:bg-[#bce600] transition duration-200"
                        >
                            {markAsDone ? (
                                <>
                                    <FaCheck className="inline mr-1" />
                                    Mark as Done                                    
                                </>
                            ) : (
                                'Mark as Done'
                            )}
                            
                        </button>

                        {/* Close Icon */}
                        <button 
                            onClick={() => setWorkoutTodayPlan(sortPlan.filter(plan => plan.id !== m.id))}
                            aria-label={`Remove ${m.name} from today's plan`}
                            className="text-gray-500 hover:text-gray-300 p-2 transition duration-200">
                            <RxCross2 />
                        </button>

                    </div>
                </div>
            ))

        )
    );
};

export default TodayPlanItem;