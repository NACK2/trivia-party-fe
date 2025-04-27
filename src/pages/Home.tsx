import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex">
          <Typography
            variant="h1"
            sx={{
              ...headerStyles,
              bgcolor: "primary.main",
              justifyContent: "end",
              pr: 4,
            }}
          >
            TRIVIA
          </Typography>
          <Typography
            variant="h1"
            sx={{
              ...headerStyles,
              bgcolor: "primary.dark",
              justifyContent: "start",
              pl: 4,
            }}
          >
            PARTY
          </Typography>
        </div>
        <div className="flex h-full">
          <Box
            sx={{
              ...cardStyles,
              bgcolor: "primary.main",
            }}
            onClick={() => {console.log('lobby')}}
          >
            LOBBY
          </Box>
          <Box
            sx={{
              ...cardStyles,
              bgcolor: "primary.dark",
            }}
            onClick={() => {console.log('online')}}
          >
            ONLINE
          </Box>
        </div>
      </div>
    </>
  );
}

const headerStyles = {
  fontFamily: "Bungee, sans-serif",
  color: "secondary.main",
  width: "50%",
  display: "flex",
};

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
