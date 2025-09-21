import { ProjectElement } from "@/types/Projects";
import { Stack } from "@/types/Stack";
import Image from "next/image";
import Link from "next/link";
import StacksTag from "./StackTag";

function ProjectCard(project: ProjectElement) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-400/20 p-4 dark:bg-slate-800">
      <div className="flex flex-col">
        <div className="flex">
          <Image
            src={project.icon}
            width={48}
            height={48}
            alt="icon"
            className="mr-3 size-12 self-center rounded-md"
          />
          <Link
            className="self-center font-mono text-xl font-semibold after:content-['_↗'] hover:text-slate-500 dark:hover:text-slate-100"
            href={project.url}
            target="_blank"
          >
            {project.title}
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-1">
          {project.stacks.map((stack: Stack) => (
            <StacksTag key={stack.id} {...stack.element} />
          ))}
        </div>
        <p className="mt-4 text-pretty">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
