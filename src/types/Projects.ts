import { Stack } from "./Stack.ts";

export type Projects = {
  id: number;
  element: ProjectElement;
};

export type ProjectElement = {
  stacks: Stack[];
  icon: string;
  url: string;
  title: string;
  desc: string;
};
