"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IWorkoutType } from "../components/Type/type";

interface IWorkoutContext {
  workoutTodayPlan: IWorkoutType[];
  setWorkoutTodayPlan: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
  workoutSaved: IWorkoutType[];
  setWorkoutSaved: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
  markAsDone: number;
  setMarkAsDone: React.Dispatch<React.SetStateAction<number>>;
}

export const workoutContext = createContext<IWorkoutContext>({
  workoutTodayPlan: [],
  setWorkoutTodayPlan: () => {},
  workoutSaved: [],
  setWorkoutSaved: () => {},
  markAsDone: 0,
  setMarkAsDone: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [workoutTodayPlan, setWorkoutTodayPlan] = useState<IWorkoutType[]>([]);
  const [workoutSaved, setWorkoutSaved] = useState<IWorkoutType[]>([]);
  const [markAsDone, setMarkAsDone] = useState(0);

  const sharedData = {
    workoutTodayPlan,
    setWorkoutTodayPlan,
    workoutSaved,
    setWorkoutSaved,
    markAsDone,
    setMarkAsDone,
  };

  return (
    <workoutContext.Provider value={sharedData}>{children}</workoutContext.Provider>
  );
};

export default WorkoutProvider;
