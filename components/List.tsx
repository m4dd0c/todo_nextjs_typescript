"use client";
import React, { useContext } from "react";
import ListItem from "./ListItem";
import { ITask } from "@/types/types";
import { UserContext } from "@/context/UserContext";

const List = () => {
  const ctx = useContext(UserContext);
  return (
    <div className="md:w-3/4 w-full my-4 mx-auto max-h-[60vh] overflow-y-auto">
      {ctx && ctx.tasks.length > 0 ? (
        ctx.tasks.map((item: ITask) => <ListItem key={item.id} task={item} />)
      ) : (
        <h1>add tasks...</h1>
      )}
    </div>
  );
};

export default List;
