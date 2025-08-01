import { Box, Button, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Card from "../../components/Card";

function Singleplayer(props: SingleplayerProps) {
  const { returnHome } = props;
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
      <Box>
        <Button
          startIcon={<ArrowLeftIcon />}
          variant="text"
          color="secondary"
          size="medium"
          sx={{ mb: 1 }}
          onClick={returnHome}
        >
          BACK
        </Button>
        <Typography color="secondary.main" variant="h4">
          SINGLE PLAYER
        </Typography>
        <Typography color="secondary.dark" variant="subtitle1">
          Sample description for now
        </Typography>
      </Box>
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
          title="SURVIVAL"
          subtitle="Body text"
          imgSrc="/src/images/triviaOfTheDay.png"
          onClick={() => console.log("survival")}
        />
        <Card
          title="TRIVIA OF THE DAY"
          subtitle="Body text"
          imgSrc="/src/images/triviaOfTheDay.png"
          onClick={() => console.log("trivia of the day")}
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

type SingleplayerProps = {
  /** callback function to return to home page */
  returnHome: () => void;
};
