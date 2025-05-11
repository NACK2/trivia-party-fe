import { Box, Typography } from "@mui/material";
import Card from "./components/Card";

function Singleplayer() {
  return (
    <Box
      sx={{
        py: 6,
        px: 8,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography color="secondary.main" variant="h4">
        SINGLE PLAYER
      </Typography>
      <Typography color="secondary.dark" variant="subtitle1">
        Sample description for now
      </Typography>
      <Box
        sx={{
          mt: 4,
          p: 4,
          bgcolor: "primary.dark",
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Card
          title="UNTITLED"
          subtitle="Body text"
          imgSrc="/src/images/triviaOfTheDay.png"
          onClick={() => console.log("untitled gamemode")}
        />
        <Card
          title="TRIVIA OF THE DAY"
          subtitle="Body text"
          imgSrc="/src/images/triviaOfTheDay.png"
          onClick={() => console.log("test")}
        />
        <Card
          title="TIME ATTACK"
          subtitle="Body text"
          imgSrc="/src/images/timeAttack.png"
          onClick={() => console.log("time attack")}
        />
      </Box>
    </Box>
  );
}

export default Singleplayer;
