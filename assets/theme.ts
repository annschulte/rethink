import { extendTheme } from "native-base";

export const theme = extendTheme({
  components: {
    TextArea: {
      baseStyle: {
        multiline: true,
        padding: 4,
        textAlignVertical: "top",
      },
      defaultProps: {
        fontSize: "lg",
        variant: "outline",
      },
    },
  },
  colors: {
    primary: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
  },
  fontConfig: {
    Mulish: {
      100: {
        normal: "Mulish_200ExtraLight",
      },
      200: {
        normal: "Mulish_200ExtraLight",
      },
      300: {
        normal: "Mulish_300Light",
      },
      400: {
        normal: "Mulish_400Regular",
      },
      500: {
        normal: "Mulish_400Regular",
      },
      600: {
        normal: "Mulish_700Bold",
      },
      700: {
        normal: "Mulish_700Bold",
      },
    },
  },

  fonts: {
    heading: "Mulish",
    body: "Mulish",
    mono: "Mulish",
  },
});
