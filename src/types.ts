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
export type Location = { city?: string; countryCode?: string };

export type Basics = {
  name?: string;
  label?: string;
  phone?: string;
  email?: string;
  url?: string;
  summary?: string;
  location?: Location;
  profiles?: Array<Profile>;
};

export type Skill = {
  name?: string;
  keywords?: Array<string>;
};

export type Project = {
  name?: string;
  description?: string;
  highlights?: Array<string | null>;
  startDate?: string | number;
  endDate?: string | number;
  url?: string;
};

export type EducationPlace = {
  institution?: string;
  url?: string;
  area?: string;
  score?: string;
  courses?: Array<string | null>;
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
  highlights?: Array<string | null>;
  startDate?: string | number;
  endDate?: string | number;
};

export type Meta = {
  accentColor?: string;
  baseFontSize?: number;
  sectionsOrder?: ResumeSectionName[];
};

export type Resume = {
  basics?: Basics;
  work?: Array<Job | null>;
  skills?: Array<Skill | null>;
  projects?: Array<Project | null>;
  education?: Array<EducationPlace | null>;
  awards?: Array<Award | null>;
  certificates?: Array<Certificate | null>;
  publications?: Array<Publication | null>;
  volunteer?: Array<Voluteering | null>;
  meta?: Meta;
};

export type ResumeSectionName = Exclude<keyof Resume, "meta">;
