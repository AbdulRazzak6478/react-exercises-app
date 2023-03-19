import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "100px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Gymate - Ultimate Gym Center
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight={"35px"} mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={"600"}
        color={"#ff2625"}
        sx={{
          opacity: 0.2,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={"200px"}
        mt={"50px"}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="img" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
