import DataFatch from "./DataFatch";
import { IWorkoutType } from "./Type/type";
import WorkoutCard from "./WorkoutCard/WorkoutCard";




const HomePageCard = async () => {
    const fatchData = await DataFatch();


    return (
        <div className="mt-20 mb-20">
            <div >
                <h2 className="mb-2 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    THE LIBRARY
                </h2>
                <p className="max-w-full text-sm font-normal leading-relaxed text-gray-400 sm:text-base md:max-w-2xl">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
                {fatchData.map((m: IWorkoutType, index: number) => {
                    return <WorkoutCard key={index} exercise={m} />;
                })}
            </div>
        </div>
    );
};

export default HomePageCard;


