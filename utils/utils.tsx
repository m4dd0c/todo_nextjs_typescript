import { ITask } from "@/types/types";

export const data: ITask[] = [
  {
    id: 1,
    completed: false,
    text: "task 1",
  },
  {
    id: 2,
    completed: false,
    text: "task 2",
  },
];

export const getLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

export const setLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
