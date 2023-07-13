import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import SocialLinkIcon from "./SocialLinkIcon";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        marginTop: 20,
      }}
    >
      <Stack
        spacing={2}
        justifyContent={"center"}
        direction="row"
        fontSize="20px"
      >
        <Typography variant="h5" color="grey" align="center">
          Made by: Geoffrey Lee
        </Typography>
        <SocialLinkIcon
          ariaLabel="Github link"
          link="https://github.com/lgeoff31"
          icon={<BsGithub />}
          size="sm"
        />
        <SocialLinkIcon
          ariaLabel="Linkedin link"
          link="https://linkedin.com/lgeoff31"
          icon={<BsLinkedin />}
          size="sm"
        />
        <SocialLinkIcon
          ariaLabel="Instagram"
          link="https://www.instagram.com/electricochy/"
          icon={<BsInstagram />}
          size="sm"
        />
        {/* <SocialLinkIcon
          ariaLabel="Download resume"
          link="/resume.pdf"
          icon={<BsYoutube />}
          size="sm"
        /> */}
      </Stack>
    </Box>
  );
};

export default Footer;
