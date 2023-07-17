import { Stack } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import PaidIcon from "@mui/icons-material/Paid";

const Navbar = () => {
  return (
    <Stack
      sx={{ boxShadow: 3 }}
      justifyContent="space-between"
      spacing={5}
      direction="row"
      padding={2}
    >
      <Link
        paddingLeft={7}
        underline="hover"
        href="/"
        color="green"
        fontSize={"25px"}
        fontWeight={"bold"}
      >
        {<PaidIcon />} &nbsp;Smart Save
      </Link>

      <Stack direction="row" spacing={4}>
        <Link underline="hover" color="grey" href="/history" fontSize={"20px"}>
          History
        </Link>
        <Link underline="hover" color="grey" href="/create" fontSize={"20px"}>
          Add Expense
        </Link>
        <Link underline="hover" color="grey" href="/analysis" fontSize={"20px"}>
          Analysis
        </Link>
        <Link underline="hover" color="grey" href="/learn" fontSize={"20px"}>
          Learn More
        </Link>
      </Stack>
      <Link
        href="/signin"
        underline="hover"
        color="grey"
        fontSize={"20px"}
        paddingRight={7}
      >
        Sign in
      </Link>
    </Stack>
  );
};

export default Navbar;
