import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
   
        <Box
      sx={{
        bgcolor: "#283445",
        py: 1.3,
        borderTopLeftRaduis: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        color={"HighlightText"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7798",
          }}
          variant="text"
          color="primary"
        >
          Ismail Bakhach
        </Button>
        ©2023
      </Typography>
    </Box>
 
  );
};

export default Footer;
