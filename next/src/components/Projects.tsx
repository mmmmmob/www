import {
  SiAxios,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSwift,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import ProjectCard from "./sub-components/ProjectCard";
import { Projects } from "../types/Projects.ts";

const projects: Projects[] = [
  {
    id: 1,
    element: {
      stacks: [
        {
          id: 1,
          element: {
            name: "Swift",
            color: "bg-orange-600",
            reactIcon: SiSwift,
          },
        },
        {
          id: 2,
          element: {
            name: "SwiftUI",
            color: "bg-blue-700",
            reactIcon: SiSwift,
          },
        },
        {
          id: 3,
          element: {
            name: "SwiftData",
            color: "bg-slate-700",
            reactIcon: SiSwift,
          },
        },
        {
          id: 4,
          element: {
            name: "Alamofire",
            color: "bg-amber-600",
            reactIcon: SiAxios,
          },
        },
        {
          id: 5,
          element: {
            name: "SwiftyJSON",
            color: "bg-indigo-600",
            reactIcon: VscJson,
          },
        },
      ],
      icon: "/lottojournal.png",
      url: "https://github.com/mmmmmob/lotto-journal",
      title: "Lotto Journal",
      desc: "A full-featured project that adopts the MVVM pattern into the design from the ground up. This app helps users store their lottery numbers they bought and automatically checks for prizes from the Government Lottery Office result's APIs, along with standard number searching capability.",
    },
  },
  {
    id: 2,
    element: {
      stacks: [
        {
          id: 1,
          element: {
            name: "Swift",
            color: "bg-orange-600",
            reactIcon: SiSwift,
          },
        },
        {
          id: 2,
          element: {
            name: "SwiftUI",
            color: "bg-blue-700",
            reactIcon: SiSwift,
          },
        },
      ],
      icon: "/resume.png",
      url: "https://github.com/mmmmmob/resume-swiftui",
      title: "Resume",
      desc: "One of the first projects I started learning SwiftUI was where I learned how to arrange user interface elements using basic tools like HStack, VStack, and other modifiers from Apple's latest library.",
    },
  },
  {
    id: 3,
    element: {
      stacks: [
        {
          id: 1,
          element: {
            name: "MongoDB",
            color: "bg-teal-800",
            reactIcon: SiMongodb,
          },
        },
        {
          id: 2,
          element: {
            name: "Express",
            color: "bg-slate-950",
            reactIcon: SiExpress,
          },
        },
        {
          id: 3,
          element: { name: "React", color: "bg-cyan-600", reactIcon: SiReact },
        },
        {
          id: 4,
          element: {
            name: "Node.js",
            color: "bg-lime-700",
            reactIcon: SiNodedotjs,
          },
        },
        {
          id: 5,
          element: {
            name: "DaisyUI",
            color: "bg-orange-500/80",
            reactIcon: SiDaisyui,
          },
        },
      ],
      icon: "/loglife.png",
      url: "https://loglife.guru",
      title: "LogLife",
      desc: "A final group project from the Generation Thailand bootcamp, where I contributed to both the design and coding of the front-end, as well as project management to ensure effective teamwork.",
    },
  },
];

const Project = () => {
  return (
    <div className="mx-5 mt-5 self-center rounded-lg bg-slate-500/10 p-5 md:w-8/12">
      <p className="font-fkDisplay text-2xl font-bold">Projects</p>
      <div className="mt-3 flex flex-col space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project.element} />
        ))}
      </div>
    </div>
  );
};

export default Project;
