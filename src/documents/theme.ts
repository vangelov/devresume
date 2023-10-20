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

export function createTheme(accentColor = "#2B5DD6", baseFontSize = 10) {
  const clampedBaseFontSize = Math.min(Math.max(10, baseFontSize), 16);

  const result: Theme = {
    //      0  1  2  3   4   5   6   7   8   9  10  11  12
    space: [2, 4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 28, 32],

    lineHeight: 1.4,

    fontSize: [
      clampedBaseFontSize,
      1.4 * clampedBaseFontSize,
      1.8 * clampedBaseFontSize,
    ],
    color: {
      text: "black",
      lightText: "#6b7280",
      accent: accentColor,
    },
  };

  return result;
}
