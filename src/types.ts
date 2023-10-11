export type Job = {
  name?: string;
  location?: string;
  position?: string;
  url?: string;
  summary?: string;
  startDate?: string | number;
  endDate?: string | number;
  highlights?: Array<string>;
};

export type Profile = {
  network?: "github" | "linkedin";
  url?: string;
};

export type Basics = {
  name?: string;
  label?: string;
  phone?: string;
  email?: string;
  url?: string;
  summary?: string;
  location?: { address?: string };
  profiles: Array<Profile>;
};

export type Skill = {
  name?: string;
  keywords?: Array<string>;
};

export type Project = {
  name?: string;
  description?: string;
  highlights?: Array<string>;
  startDate?: string | number;
  endDate?: string | number;
  url?: string;
};

export type EducationPlace = {
  institution?: string;
  url?: string;
  area?: string;
  score?: string;
  courses?: Array<string>;
  startDate?: string | number;
  endDate?: string | number;
};

export type Resume = {
  basics?: Basics;
  work?: Array<Job>;
  skills?: Array<Skill>;
  projects?: Array<Project>;
  education?: Array<EducationPlace>;
};
