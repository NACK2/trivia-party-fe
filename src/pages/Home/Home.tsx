import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Singleplayer from "./Singleplayer";

function Home() {
  const [openSingleplayer, setOpenSingleplayer] = useState(false);

  return (
    <Box sx={{ bgcolor: "primary.main", height: "100vh" }}>
      {openSingleplayer ? (
        <Singleplayer returnHome={() => setOpenSingleplayer(false)} />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                justifyContent: "end",
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
                width: "50%",
                color: "secondary.main",
                pl: 4,
              }}
            >
              PARTY
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box
              sx={{
                ...cardStyles,
              }}
              onClick={() => setOpenSingleplayer(true)}
            >
              <Typography
                variant="h2"
                sx={{
                  "&:hover": {
                    fontSize: 50,
                    cursor: "pointer",
                  },
                }}
              >
                SINGLE PLAYER
              </Typography>
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
              <Typography
                variant="h2"
                sx={{
                  "&:hover": {
                    fontSize: 50,
                    cursor: "pointer",
                  },
                }}
              >
                ONLINE
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
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
};

export default Home;
