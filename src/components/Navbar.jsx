import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    // <div className="navbar">
    <Stack
      className="navbar"
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", sx: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="10px"
      alignItems="center"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ margin: "0 20px", backgroundColor: "black" }}
          className="navbar-logo"
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="25px"
        xs="15px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
    // </div>
  );
};

export default Navbar;
