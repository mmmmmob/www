import { WorkExperience } from "@/types/WorkExperience";
import WorkExpCard from "./sub-components/WorkExpCard";

const experiences: WorkExperience[] = [
  {
    id: 4,
    description: {
      duration: "Oct 2024 - Present",
      workplace: "T.C.C. Technology",
      url: "https://www.tcc-technology.com/",
      title: "Front-end Web Developer",
      desc: "It's been quite a journey applying for a job as a junior developer at my age, but this opportunity is one I’m truly hopeful for! Joining an energetic team of experienced developers, I look forward to learning more as a developer in a professional environment and working on fully-packed projects with real clients.",
    },
  },
  {
    id: 3,
    description: {
      duration: "Mar 2024 - Jul 2024",
      workplace: "Self-studied",
      url: "https://www.linkedin.com/in/theppitak-m/details/certifications/",
      title: "iOS Mobile Developer Student",
      desc: "Since high school, I've always been passionate about Apple platform. After finishing the bootcamp, I decided to dive into native iOS development. I taught myself Swift through online courses and various hands-on projects. After two months, I created my first native iOS application, Lotto Journal.",
    },
  },
  {
    id: 2,
    description: {
      duration: "Nov 2023 - Feb 2024",
      workplace: "Generation Thailand",
      url: "https://thailand.generation.org",
      title: "Junior Software Developer Bootcamp",
      desc: "After 7 years of working in publishing and advertising, I enrolled in a full-time bootcamp that taught both web development as well as BSM knowledge to fully pursue the tech industry.",
    },
  },
  {
    id: 1,
    description: {
      duration: "Nov 2028 - Dec 2022",
      workplace: "Glow Story",
      url: "https://glowyourstory.com",
      title: "Project Manager + Operations Management",
      desc: "Starting as a copywriter, I spent four years at Glow Story, where I developed a strong foundation in project management. I handled numerous communication projects and campaigns for clients of all sizes, liaising with stakeholders from start to finish.",
    },
  },
];

const WorkExp = () => {
  return (
    <div className="mx-5 mt-5 flex flex-col self-center rounded-lg bg-slate-500/10 p-5 md:w-8/12">
      <p className="font-fkDisplay text-2xl font-bold">Experiences</p>
      <div className="mt-3 flex flex-col space-y-4">
        {experiences.map((experience: WorkExperience) => (
          <WorkExpCard key={experience.id} {...experience.description} />
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
