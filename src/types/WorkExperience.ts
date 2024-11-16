export type WorkExperience = {
  id: number;
  description: WorkExperienceDesc;
};

export type WorkExperienceDesc = {
  duration: string;
  workplace: string;
  url: string;
  title: string;
  desc: string;
};
