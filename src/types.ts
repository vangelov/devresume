export type Work = {
  name?: string;
  url?: string;
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
  work?: Array<Work>;
};
