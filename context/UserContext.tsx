"use client";
import { IContext, ITask } from "@/types/types";
import { getLocalStorage, setLocalStorage } from "@/utils/utils";
import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext<IContext | null>(null);

const ContextState = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  // add task function
  const addTask = (text: string) => {
    if (text.trim().length <= 0) return;
    const task: ITask = { id: Date.now(), text: text.trim(), completed: false };
    setTasks((prev) => [...prev, task]);
  };
  // remove task function
  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  // toggle Completed function
  const toggleCompleted = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    const savedTasks = getLocalStorage();
    if (savedTasks) setTasks(savedTasks);
  }, []);

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
