import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Homepage = () => {
  return (
    <>
      <div className="intro">
        <Stack
          justifyContent="center"
          alignItems={"center"}
          width={"100vw"}
          height={"100vh"}
        >
          <Typography
            fontWeight="bold"
            color="white"
            variant="h1"
            textAlign={"center"}
          >
            Get Started with Smart Save
          </Typography>
          <Typography
            textAlign={"center"}
            padding={3}
            justifyContent={"center"}
            color="white"
            variant="h6"
          >
            Thank you for choosing Smart Save. By far, the best way to manage
            your finances to ensure a financially literate lifestyle. <br />{" "}
            Start exploring the features by adding or viewing your own expense
            below!
          </Typography>
          <Stack padding={3} spacing={2} direction="row">
            <Link href="/history">
              <Button color="success" variant="contained">
                Expense History&nbsp; {<VisibilityIcon />}
              </Button>
            </Link>
            <Button variant="contained">Add Expense{<AddIcon />}</Button>
          </Stack>
        </Stack>
      </div>
      <Typography
        className="header2"
        padding={3}
        fontWeight="bold"
        variant="h4"
        align={"center"}
      >
        Take Control of Your Finances
      </Typography>
      <Typography color="grey" variant="inherit" align={"center"}>
        With Smart Save, you can ensure complete awareness <br /> over all your
        expenses while never exceeding your budget!
      </Typography>
      <Box padding={3} textAlign="center">
        <Button
          style={{ borderRadius: "30px" }}
          variant="contained"
          href="/learn"
        >
          Learn More {<ArrowForwardIcon />}
        </Button>
      </Box>

      <Stack direction="row">
        <img
          alt="woman managing her money with charts and tables"
          src="https://www.quicken.com/sites/default/files/manage-spending.jpg"
        ></img>
        <div className="sideText">
          <Typography
            paddingTop={10}
            color="#22324f"
            fontWeight="bold"
            variant="h3"
          >
            Manage your spending <br /> and save for retirement
          </Typography>
          <Typography padding={3} color="grey" variant="inherit">
            Stay on top of your spending by tracking what’s left after the bills
            are paid. Make more informed money decisions by creating custom
            budgets you’ll stick to. Remember, needs first and luxuries come
            after.
          </Typography>
        </div>
      </Stack>
    </>
  );
};

export default Homepage;
