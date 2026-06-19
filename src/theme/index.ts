import { createTheme } from "@mui/material/styles";

// Define your custom colors, shadows, typography, and other settings
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "rgb(136, 150, 255)",
      main: "#5569ff",
      dark: "rgb(68, 84, 204)",
    },
    secondary: {
      light: "rgb(146, 151, 183)",
      main: "#6E759F",
      dark: "rgb(88, 93, 127)",
    },
    error: {
      light: "rgb(255, 94, 123)",
      main: "#FF1943",
      dark: "rgb(204, 20, 53)",
      contrastText: "#ffffff",
    },
    success: {
      light: "rgb(137, 217, 100)",
      main: "#57CA22",
      dark: "rgb(69, 161, 27)",
      contrastText: "#ffffff",
    },
    info: {
      light: "rgb(112, 212, 255)",
      main: "#33C2FF",
      dark: "rgb(40, 155, 204)",
      contrastText: "#ffffff",
    },
    warning: {
      light: "rgb(255, 190, 94)",
      main: "#FFA319",
      dark: "rgb(204, 130, 20)",
      contrastText: "#ffffff",
    },
    text: {
      primary: "rgba(35, 49, 86, 0.9)",
      secondary: "rgba(35, 49, 86, 0.6)",
      disabled: "rgba(35, 49, 86, 0.4)",
    },
    background: {
      default: "#F4F6F8",
      paper: "#ffffff",
    },
    common: {
      black: "#223354",
      white: "#ffffff",
    },
    action: {
      active: "rgba(35, 49, 86, 0.54)",
      hover: "rgba(35, 49, 86, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(35, 49, 86, 0.14)",
      disabled: "rgba(35, 49, 86, 0.26)",
      disabledBackground: "rgba(35, 49, 86, 0.12)",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "35px",
      lineHeight: "40px",
    },
    h2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "36px",
    },
    h3: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: "32px",
    },
    h4: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "28px",
    },
    h5: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    subtitle1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    subtitle2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    button: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
    overline: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "12px",
      textTransform: "uppercase",
    },
  },
  shadows: [
    "none",
    "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)", // success
    "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)", // error
    "0px 1px 4px rgba(85, 105, 255, 0.25), 0px 3px 12px 2px rgba(85, 105, 255, 0.35)", // primary
    "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)", // info
    "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)", // warning
    "none", // default shadow for elevation 6
    "none", // default shadow for elevation 7
    "none", // default shadow for elevation 8
    "none", // default shadow for elevation 9
    "none", // default shadow for elevation 10
    "none", // default shadow for elevation 11
    "none", // default shadow for elevation 12
    "none", // default shadow for elevation 13
    "none", // default shadow for elevation 14
    "none", // default shadow for elevation 15
    "none", // default shadow for elevation 16
    "none", // default shadow for elevation 17
    "none", // default shadow for elevation 18
    "none", // default shadow for elevation 19
    "none", // default shadow for elevation 20
    "none", // default shadow for elevation 21
    "none", // default shadow for elevation 22
    "none", // default shadow for elevation 23
    "none", // default shadow for elevation 24
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(34, 51, 84, 0.85)",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.4px",
          color: "rgba(35, 49, 86, 0.4)",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "rgba(35, 49, 86, 0.9)",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          backgroundColor: "#F4F6F8",
          color: "rgba(35, 49, 86, 0.9)",
          "&:focus": {
            backgroundColor: "#F4F6F8",
          },
        },
        iconOutlined: {
          color: "rgba(35, 49, 86, 0.4)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          backgroundColor: "#F4F6F8",
          "&:hover $notchedOutline": {
            borderColor: "rgba(35, 49, 86, 0.4)",
          },
          "&$focused $notchedOutline": {
            borderColor: "rgba(35, 49, 86, 0.4)",
          },
        },
        notchedOutline: {
          borderColor: "rgba(35, 49, 86, 0.4)",
        },
      },
    },
  },
});

export default theme;
