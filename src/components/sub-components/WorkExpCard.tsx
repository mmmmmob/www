import { WorkExperienceDesc } from "../../types/WorkExperience.ts";

function WorkExpCard(experience: WorkExperienceDesc) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-400/20 p-4 dark:bg-slate-800">
      <div className="collapse collapse-arrow justify-start" tabIndex={0}>
        <div className="collapse-title">
          <p className="text-xs font-light text-zinc-600 underline decoration-dashed underline-offset-4 dark:text-zinc-400">
            {experience.duration}
          </p>
          <div className="flex flex-grow flex-col">
            <a
              className="mt-2 font-mono text-xl font-semibold after:content-['_↗'] hover:text-slate-500 dark:hover:text-slate-100"
              href={experience.url}
              target="_blank"
            >
              {experience.title}
            </a>
            <p className="mt-2 w-fit rounded-xl bg-stone-900/50 px-2 py-1 text-xs font-light text-slate-200 dark:bg-stone-600">
              {experience.workplace}
            </p>
          </div>
        </div>
        <div className="collapse-content text-pretty">
          <p>{experience.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkExpCard;
