import {
  Grid,
  Card,
  CardContent,
  Button,
  Link,
  Stack,
  Typography,
  CardActions,
  Box,
  Paper,
  styled,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LearnMore = () => {
  return (
    <div className="learn-more">
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
          paddingTop={70}
        >
          Track and Manage your Spending
        </Typography>
        <Typography
          textAlign={"center"}
          padding={3}
          justifyContent={"center"}
          color="white"
          variant="h6"
        >
          Stay on top of your spending by tracking what’s left after the bills
          are paid. <br /> Make more informed money decisions by creating custom
          budgets you’ll stick to.
        </Typography>

        <img
          className="laptop"
          src="https://www.quicken.com/sites/default/files/lp-core--hero-laptop.png?cc=1"
        ></img>
        <Typography
          fontWeight="bold"
          color="black"
          variant="h3"
          textAlign={"center"}
          paddingBottom={4}
        >
          What can you do with Smart Save?
        </Typography>
        <Box>
          <Grid container spacing={1}>
            <Grid container item spacing={3}>
              <Grid item xs={4}>
                <Item>
                  <CardContent>
                    <Typography variant="h4">Track Monthly Expenses</Typography>
                    <Typography padding={1} variant="body1">
                      Track each expense you make with a click of a button.
                      Finance should never come as a surprise! Tracking expenses
                      has never been so easy!
                    </Typography>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </CardContent>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <CardContent>
                    <Typography variant="h4">Analyze Key Features</Typography>
                    <Typography padding={1} variant="body1">
                      Filter your expenses to your preference and Visualize your
                      spending habits through a Pi Chart analysis diagram.
                    </Typography>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </CardContent>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <CardContent>
                    <Typography variant="h4">Never Go Over Budget</Typography>
                    <Typography padding={1} variant="body1">
                      Update your monthly budget to your preference & Reminder
                      how much you've spent and have left to spend!
                    </Typography>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </CardContent>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* <Grid>
          <Card variant="contained">
            <Grid item xs={8}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  blent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Grid>
          </Card>
        </Grid> */}
      </Stack>
    </div>
  );
};

export default LearnMore;
