import { Box, Typography } from "@mui/material";

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
      <Box sx={{ mt: 4, bgcolor: "primary.dark", flexGrow: "1" }}></Box>
    </Box>
  );
}

export default Singleplayer;
