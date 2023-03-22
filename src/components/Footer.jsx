import React from 'react'
import { Box,Stack, Typography } from '@mui/material';
import Logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <Box mt="80px"  bgColor="#fff3f4">
      <Stack gap="40px" alignItems='center' px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="60px" style={{backgroundColor:'black',padding:'5px',borderRadius:'40%'}} />
        <Typography variant='h5' pb="40px" mt="0">Made by MARQ</Typography>
      </Stack>
    </Box>
  )
}

export default Footer;