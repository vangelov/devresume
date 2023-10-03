export type Work = {
  name?: string;
  url?: string;
};

export type Basics = {
  name?: string;
  label?: string;
  phone?: string;
  email?: string;
};

export type Resume = {
  basics?: Basics;
  work?: Array<Work>;
};
