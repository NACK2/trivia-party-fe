import type { ReactNode } from "react";
import { MantineProvider, createTheme, Title, Text } from "@mantine/core";
import styles from "./Global.module.css";
import "@mantine/core/styles.css";

function CustomMantineThemeProvider(props: CustomMantineThemeProviderProps) {
  const { children } = props;
  const theme = createTheme({
    components: {
      Title: Title.extend({
        classNames: (_, props) => ({
          root: props.c === "white" ? styles.outlinedText : undefined,
        }),
      }),
      Text: Text.extend({
        classNames: (_, props) => ({
          root: props.c === "white" ? styles.outlinedText : undefined,
        }),
      }),
    },
    fontFamily: "Luckiest Guy, sans-serif",
    headings: {
      sizes: {
        h1: {
          fontSize: "8rem",
        },
        h2: {
          fontSize: "6rem",
        },
      },
    },
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

type CustomMantineThemeProviderProps = {
  children: ReactNode;
};

export default CustomMantineThemeProvider;
