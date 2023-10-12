import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "RobotoRegular.ttf",
      fontWeight: "normal",
    },

    {
      src: "RobotoMedium.ttf",
      fontWeight: "medium",
    },

    {
      src: "RobotoItalic.ttf",
      fontStyle: "italic",
    },
  ],
});
