import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box sx={{ bgcolor: "primary.main", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          fontFamily: "Bungee, sans-serif",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            justifyContent: "end",
            fontFamily: "inherit",
            width: "50%",
            color: "secondary.main",
            pr: 4,
          }}
        >
          TRIVIA
        </Typography>
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            bgcolor: "primary.dark",
            justifyContent: "start",
            fontFamily: "inherit",
            width: "50%",
            color: "secondary.main",
            pl: 4,
          }}
        >
          PARTY
        </Typography>
      </Box>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box
          sx={{
            ...cardStyles,
          }}
          onClick={() => {
            console.log("lobby");
          }}
        >
          SINGLE PLAYER
        </Box>
        <Box
          sx={{
            ...cardStyles,
            bgcolor: "primary.dark",
          }}
          onClick={() => {
            console.log("online");
          }}
        >
          ONLINE
        </Box>
      </Box>
    </Box>
  );
}

const cardStyles = {
  fontFamily: "Bungee, sans-serif",
  width: "50%",
  color: "secondary.main",
  fontSize: 70,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    fontSize: 80,
    cursor: "pointer",
  },
};

export default Home;
