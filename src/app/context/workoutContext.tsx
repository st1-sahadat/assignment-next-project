"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IWorkoutType } from "../components/Type/type";

interface IWorkoutContext {
  readBooks: IWorkoutType[];
  setReadBooks: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
  wishlist: IWorkoutType[];
  setWishlist: React.Dispatch<React.SetStateAction<IWorkoutType[]>>;
}

export const workoutContext = createContext<IWorkoutContext>({
  workoutTodayPlan: [],
  setWorkoutTodayPlan: () => {},
  workoutSaved: [],
  setWorkoutSaved: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [workoutTodayPlan, setWorkoutTodayPlan] = useState<IWorkoutType[]>([]);
  const [workoutSaved, setWorkoutSaved] = useState<IWorkoutType[]>([]);

  const sharedData = {
    workoutTodayPlan,
    setWorkoutTodayPlan,
    workoutSaved,
    setWorkoutSaved,
  };

  return (
    <workoutContext.Provider value={sharedData}>{children}</workoutContext.Provider>
  );
};

export default WorkoutProvider;
