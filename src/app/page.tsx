import Info from "@/components/Info";
import Project from "@/components/Projects";
import Title from "@/components/Title";
import WorkExp from "@/components/WorkExp";

export default function Home() {
  return (
    <>
      <Title />
      <hr className="m-5 h-px self-center border-0 bg-gray-400 max-sm:w-11/12 md:w-8/12 dark:bg-gray-600" />
      <Info />
      <WorkExp />
      <Project />
    </>
  );
}
