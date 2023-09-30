export type Work = {
  name: string;
  url: string;
};

export type Resume = {
  basics?: {
    name: string;
  };
  work?: Array<Work>;
};
