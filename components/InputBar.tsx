"use client";
import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const InputBar = () => {
  const [text, setText] = useState("");
  const ctx = useContext(UserContext);
  const addTask = () => {
    ctx && ctx.addTask(text);
    setText("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <div className="flex justify-evenly items-center lg:w-3/4 w-full my-4 mx-auto">
      <input
        type="text"
        className="input lg:w-5/6 w-full"
        placeholder="buy a dishwasher..."
        value={text}
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="button" onClick={addTask}>
        <IoAddOutline size={25} color="lightgreen" />
      </button>
    </div>
  );
};

export default InputBar;
