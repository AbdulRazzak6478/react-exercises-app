import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const[search,setSearch]=useState('');

  const handleSearch=async()=>{
    if(search){
      // const exercisesData=await fetchData
    }
  }
  return (
    <Stack alignItems={"center"} justifyContent={"center"} p="10px" ml="10px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mt="5px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" my="50px" justifyContent={"center"} ml="40px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          m="10px"
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            width: { lg: "175px", sx: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
