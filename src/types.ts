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

export type Award = {
  title?: string;
  date?: string | number;
  awarder?: string;
  summary?: string;
};

export type Certificate = {
  name?: string;
  date?: string | number;
  url?: string;
  issuer?: string;
};

export type Publication = {
  name?: string;
  publisher?: string;
  releaseDate?: string | number;
  url?: string;
  summary?: string;
};

export type Voluteering = {
  organization?: string;
  url?: string;
  position?: string;
  summary?: string;
  highlights?: Array<string>;
  startDate?: string | number;
  endDate?: string | number;
};

export type Meta = {
  accentColor?: string;
};

export type Resume = {
  basics?: Basics;
  work?: Array<Job>;
  skills?: Array<Skill>;
  projects?: Array<Project>;
  education?: Array<EducationPlace>;
  awards?: Array<Award>;
  certificates?: Array<Certificate>;
  publications?: Array<Publication>;
  volunteer?: Array<Voluteering>;
  meta?: Meta;
};
