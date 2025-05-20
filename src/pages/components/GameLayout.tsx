import { Box, Button, Typography } from "@mui/material";

function GameLayout(props: GameLayoutProps) {
  const { question, choices } = props;

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.dark",
          display: "flex",
          height: "55%",
          width: "40%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          px: 2,
        }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "secondary.main" }}
        >
          {question}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", columnGap: 2, mt: 8 }}>
        {choices.map((choice: string, index: number) => (
          <Button
            key={index}
            variant="contained"
            color="secondary"
            size="large"
          >
            {choice}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default GameLayout;

export type GameLayoutProps = {
  /** trivia question to be displayed */
  question: string;
  /** possible answers for the question */
  choices: string[];
};
