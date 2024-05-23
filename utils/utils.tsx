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
  {
    id: 3,
    completed: false,
    text: "task 3",
  },
  {
    id: 4,
    completed: false,
    text: "task 4",
  },
  {
    id: 5,
    completed: true,
    text: "task 5",
  },
  {
    id: 6,
    completed: false,
    text: "task 5",
  },
  {
    id: 7,
    completed: false,
    text: "task 5",
  },
  {
    id: 8,
    completed: false,
    text: "task 5end",
  },
];

export const getLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

export const setLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
