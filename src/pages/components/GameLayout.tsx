import { Box, Typography } from "@mui/material";

function GameLayout() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.dark",
          display: "flex",
          height: "60%",
          width: "40%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Typography variant="body1" align='center' sx={{ color: "secondary.main", p: 2}}>
            test
        </Typography>
      </Box>
    </Box>
  );
}

export default GameLayout;
