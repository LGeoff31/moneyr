import React from "react";
import { Box, Stack, Typography } from "@mui/material";
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
        marginTop: 70,
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
          ariaLabel="Github"
          link="https://github.com/lgeoff31"
          icon={<BsGithub />}
          size="sm"
        />
        <SocialLinkIcon
          ariaLabel="Linkedin"
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
        <SocialLinkIcon
          ariaLabel="Youtube"
          link="https://www.youtube.com/@electricochy"
          icon={<BsYoutube />}
          size="sm"
        />
      </Stack>
    </Box>
  );
};

export default Footer;
