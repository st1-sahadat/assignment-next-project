import DataFatch from "../components/DataFatch";
import { IWorkoutType } from "../components/Type/type";
import WorkoutCard from "../components/WorkoutCard/WorkoutCard";
const WorkoutPage = async() => {
    const fatchData = await DataFatch();
    return (        
        
        <div className="mt-20 mb-20 pl-5 pr-5">
        <div className=" mt-6 grid w-full grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
                {fatchData.map((m: IWorkoutType, index: number) => {
                    return <WorkoutCard key={index} exercise={m} />;
                })}
            </div>
            </div>
    );
};

export default WorkoutPage;