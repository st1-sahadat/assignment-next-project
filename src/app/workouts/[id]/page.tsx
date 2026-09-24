import DataFatch from "@/app/components/DataFatch";
import { IWorkoutType } from "@/app/components/Type/type";
import Image from "next/image";
import { FiBookmark, FiCalendar } from "react-icons/fi";




interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getData = async () => {
    try {
        return await DataFatch();

    } catch (error) {
        console.error("Error fetching books data:", error);
        return [];
    }
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;
    const workoutData = await getData();

    const workoutId = workoutData.find(
        (f: IWorkoutType) => String(f.id) === id,
    ) as IWorkoutType;

    return (
        <div className="min-h-screen bg-[#0b0c10] text-gray-300 p-6 md:p-12 flex flex-col justify-between">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

                {/* Left Column: Image Card */}
                <div className="lg:col-span-6 relative aspect-square w-full rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl">
                    <Image
                        src={workoutId.image}
                        alt={workoutId.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Right Column: Workout Info */}
                <div className="lg:col-span-6 flex flex-col space-y-6">

                    {/* Header & Description */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
                            {workoutId.name}
                        </h1>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {workoutId.description}
                        </p>
                    </div>

                    {/* Muscle Group Badges */}
                    <div className="flex flex-wrap gap-2">
                        {workoutId.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Stats Specifications Table Box */}
                    <div className="bg-[#111319] border border-gray-800/80 rounded-xl p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm">
                        <div className="flex justify-between items-center border-b border-gray-800/60 pb-2.5">
                            <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">EQUIPMENT</span>
                            <span className="text-gray-200 font-medium">{workoutId.equipment}</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-800/60 pb-2.5">
                            <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">DIFFICULTY</span>
                            <span className="text-gray-200 font-medium">{workoutId.difficulty}</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-800/60 pb-2.5">
                            <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">SETS</span>
                            <span className="text-gray-200 font-medium">{workoutId.sets}</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-800/60 pb-2.5">
                            <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">REPS</span>
                            <span className="text-gray-200 font-medium">{workoutId.reps}</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-800/60 pb-2.5">
                            <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">DURATION</span>
                            <span className="text-gray-200 font-medium">{workoutId.duration} min</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-800/60 pb-2.5">
                            <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">CALORIES</span>
                            <span className="text-gray-200 font-medium">{workoutId.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">RATING</span>
                            <span className="text-gray-200 font-medium">{workoutId.rating}</span>
                        </div>
                    </div>

                    {/* Instructions List */}
                    <div className="pt-2">
                        <h2 className="text-sm font-black text-white uppercase tracking-wider mb-3">
                            INSTRUCTIONS
                        </h2>
                        <ol className="space-y-2.5 text-xs sm:text-sm text-gray-400">
                            {workoutId.instructions?.map((step, index) => (
                                <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                                    <span className="font-semibold text-gray-300">{index + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                        <button className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
                            <FiCalendar className="w-4 h-4" />
                            <span>Add to today&apos;s plan</span>
                        </button>

                        <button className="flex items-center gap-2 bg-transparent hover:bg-gray-800/50 text-gray-300 border border-gray-800 font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors">
                            <FiBookmark className="w-4 h-4" />
                            <span>Save for later</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
