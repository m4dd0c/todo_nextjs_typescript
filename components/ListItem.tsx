"use client";
import { UserContext } from "@/context/UserContext";
import { ITask } from "@/types/types";
import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

const ListItem = ({ task }: { task: ITask }) => {
  const ctx = useContext(UserContext);
  const removeTask = () => ctx && ctx.removeTask(task.id);
  const toggleTask = () => ctx && ctx.toggleCompleted(task.id);
  return (
    <div className="flex justify-evenly items-center   my-4 mx-auto bg-neutral-800 py-1 rounded-md">
      <div>
        <button className="w-fit p-2" onClick={toggleTask}>
          {!task.completed ? (
            <MdOutlineRadioButtonUnchecked size={20} />
          ) : (
            <MdOutlineRadioButtonChecked color="lightgreen" size={20} />
          )}
        </button>
      </div>
      <div className="w-full py-1 px-2">
        <h1 className={`${task.completed && "line-through"}`}>{task.text}</h1>
      </div>
      <button className="w-fit p-2" onClick={removeTask}>
        <AiOutlineDelete color="red" size={25} />
      </button>
    </div>
  );
};

export default ListItem;
