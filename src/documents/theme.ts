import { Meta } from "../types";

export type Theme = {
  lineHeight: number;
  space: Array<number>;
  fontSize: Array<number>;
  color: {
    text: string;
    lightText: string;
    accent: string;
  };
};

const DEFAULT_THEME: Theme = {
  lineHeight: 1.4,

  //      0  1  2  3   4   5   6   7   8   9  10  11  12
  space: [2, 4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 28, 32],

  //          0   1   2
  fontSize: [10, 14, 18],

  color: {
    text: "black",
    lightText: "#6b7280",
    accent: "#2563eb",
  },
};

export function createTheme(meta: Meta = {}) {
  const { accentColor = DEFAULT_THEME.color.accent } = meta;

  const result: Theme = {
    ...DEFAULT_THEME,
    color: { ...DEFAULT_THEME.color, accent: accentColor },
  };
  return result;
}
