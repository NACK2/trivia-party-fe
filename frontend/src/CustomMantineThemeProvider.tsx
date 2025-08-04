import type { ReactNode } from "react";
import {
  MantineProvider,
  createTheme,
  ActionIcon,
  Button,
  Title,
  Text,
  TextInput,
} from "@mantine/core";
import clsx from "clsx";
import styles from "./Global.module.css";
import "@mantine/core/styles.css";

function CustomMantineThemeProvider(props: CustomMantineThemeProviderProps) {
  const { children } = props;
  const theme = createTheme({
    other: {
      controlHeight: {
        // global heights for control components such as Button, TextInput, etc.
        xl: "4rem",
        lg: "3.5rem",
        md: "3rem",
        sm: "2.5rem",
      },
    },
    components: {
      ActionIcon: ActionIcon.extend({
        classNames: () => ({
          root: styles.boxShadow,
        }),
        vars: (theme, props) => {
          if (props.size === "sm") {
            return {
              root: {
                "--ai-size": theme.other.controlHeight.sm,
              },
            };
          }

          return { root: {} };
        },
      }),
      Button: Button.extend({
        classNames: (_, props) => ({
          root: clsx(
            props.c === "white" && styles.outlinedText,
            styles.boxShadow
          ),
        }),
        vars: (theme, props) => {
          // can probably refactor this into a single object later if theres enough overlap among sizes
          if (props.size === "xl") {
            return {
              root: {
                "--button-height": theme.other.controlHeight.xl,
                "--button-padding-x": "1.5rem",
              },
              label: {
                padding: "0 2px", // x axis padding needed for label b/c Luckiest Guy font cuts off on edges for some reason
              },
            };
          } else if (props.size === "lg") {
            return {
              root: {
                "--button-height": theme.other.controlHeight.lg,
                "--button-padding-x": "1.5rem",
              },
              label: {
                padding: "0 2px",
              },
            };
          }

          return { root: {} };
        },
      }),
      Title: Title.extend({
        classNames: (_, props) => ({
          root: clsx(
            props.c === "white" && styles.outlinedTitle,
            styles.textShadow
          ),
        }),
      }),
      Text: Text.extend({
        classNames: (_, props) => ({
          root: clsx(
            props.c === "white" && styles.outlinedText,
            styles.textShadow
          ),
        }),
      }),
      TextInput: TextInput.extend({
        classNames: () => ({
          root: styles.boxShadow,
        }),
        vars: (theme, props) => {
          if (props.size === "lg") {
            return {
              wrapper: {
                "--input-height": theme.other.controlHeight.lg,
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
    shadows: {
      xl: "6px 6px 4px rgba(0, 0, 0, .25)",
    },
    headings: {
      sizes: {
        h1: {
          fontSize: "8rem",
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
