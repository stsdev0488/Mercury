import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 848,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#297FBE",
      light: "#5398CB",
      dark: "#1C5885",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EEEEEE",
    },
    error: {
      main: "#CC0000",
      light: "#D63333",
      dark: "#8E0000",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#1860A8",
      light: "#467fb9",
      dark: "#104375",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#7AC06E",
      light: "#94cc8b",
      dark: "#55864d",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: "400",
          textTransform: "capitalize",
          padding: "24px 36px",
          borderRadius: "38px",
          [theme.breakpoints.down("md")]: {
            padding: "12px 18px",
            fontSize: "16px",
            lineHeight: "24px",
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "28px",
          [theme.breakpoints.down("md")]: {
            fontSize: "16px",
            lineHeight: "24px",
          },
        }),
      },
    },
  },
});

export { theme };
