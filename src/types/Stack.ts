import React from "react";

export type Stack = {
  id: number;
  element: StackElement;
};

export type StackElement = {
  name: string;
  color: string;
  reactIcon: React.ElementType;
};
