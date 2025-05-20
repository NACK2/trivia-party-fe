import type { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const theme = createTheme({
    palette: {
      primary: { main: grey[800], dark: grey[900], light: grey[700] }, // dark mode
      secondary: { main: grey[300], dark: grey[400], light: grey[200] }, // light mode
    },
    typography: {
      fontFamily: "Bungee, sans-serif",
      h1: {
        fontSize: 65,
      },
      h2: {
        fontSize: 45,
      },
      h6: {
        fontSize: 20,
      },
      subtitle1: {
        fontFamily: "monospace",
        fontSize: 18,
      },
      body1: {
        fontFamily: "monospace",
        fontSize: 30,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

type CustomThemeProviderProps = {
  children: ReactNode;
};

export default CustomThemeProvider;
