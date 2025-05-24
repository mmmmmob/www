import { StackElement } from "@/types/Stack";
import React from "react";

const StacksTag = (stack: StackElement) => {
  return (
    <div
      className={`flex w-fit gap-x-1 rounded-xl text-gray-200 max-sm:my-1 ${stack.color} px-2 py-1 text-xs font-light`}
    >
      <div className="self-center">
        {React.createElement(stack.reactIcon, { size: 12 })}
      </div>
      <p className="text-xs">{stack.name}</p>
    </div>
  );
};

export default StacksTag;
