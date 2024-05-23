"use client";
import { IContext, ITask } from "@/types/types";
import { getLocalStorage, setLocalStorage } from "@/utils/utils";
import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext<IContext | null>(null);

const ContextState = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(getLocalStorage());
  // add task function
  const addTask = (text: string) => {
    if (text.trim().length <= 0) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
    return;
  };
  // remove task function
  const removeTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  // toggle Completed function
  const toggleCompleted = (id: number) => {
    tasks.forEach(
      (task) => task.id === id && (task.completed = !task.completed)
    );
    const newTasks = tasks.map((task) => {
      task.id === id && task.completed === !task.completed;
      return task;
    });
    setTasks(newTasks);
  };

  useEffect(() => {
    setLocalStorage(tasks);
  }, [tasks]);
  return (
    <UserContext.Provider
      value={{ addTask, removeTask, toggleCompleted, tasks }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default ContextState;
