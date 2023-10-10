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

export type Resume = {
  basics?: Basics;
  work?: Array<Job>;
};
