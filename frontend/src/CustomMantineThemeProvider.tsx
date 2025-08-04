import type { ReactNode } from "react";
import {
  MantineProvider,
  createTheme,
  Title,
  Text,
  Button,
} from "@mantine/core";
import styles from "./Global.module.css";
import "@mantine/core/styles.css";

function CustomMantineThemeProvider(props: CustomMantineThemeProviderProps) {
  const { children } = props;
  const theme = createTheme({
    components: {
      Title: Title.extend({
        classNames: (_, props) => ({
          root: props.c === "white" ? styles.outlinedTitle : undefined,
        }),
      }),
      Text: Text.extend({
        classNames: (_, props) => ({
          root: props.c === "white" ? styles.outlinedText : undefined,
        }),
      }),
      Button: Button.extend({
        classNames: (_, props) => ({
          root: props.c === "white" ? styles.outlinedText : undefined,
        }),
        vars: (_, props) => {
          if (props.size === "xl") {
            return {
              root: {
                "--button-height": "4rem",
                "--button-padding-x": "1rem",
              },
              label: {
                padding: "0 2px",
              },
            };
          }

          return { root: {} };
        },
      }),
    },
    fontFamily: "Luckiest Guy, sans-serif",
    fontSizes: {
      xl: "2.25rem",
      lg: "2rem",
      md: "1.5rem",
      sm: "1.25rem",
      xs: "1rem",
    },
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
