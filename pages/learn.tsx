import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Stack, Typography } from "@mui/material";
import Calculator from "@/components/Calculator";

const Learn = () => {
  return (
    <>
      <Navbar />
      <Typography
        color="#22324f"
        textAlign="center"
        justifyContent="center"
        variant="h2"
        padding={1}
        fontWeight="bold"
      >
        Learn about the #1 Rule In Finance
      </Typography>
      <Stack paddingTop={3} direction="row">
        <Stack>
          <Typography paddingBottom={2} paddingLeft={3} paddingRight={3}>
            Whether you use an app or a budget worksheet to get a handle on your
            spending, you'll want to know where your money is going — and then
            make a plan for where you want it to go.
          </Typography>

          <Typography paddingLeft={3} paddingRight={3} paddingBottom={2}>
            The 50/30/20 budget is a good tool to do just that.
          </Typography>

          <Typography paddingLeft={3}>
            Use our calculator to estimate how you might divide your monthly
            income into needs, wants and savings. This will give you a
            big-picture view of your finances. The most important number is the
            smallest: the 20% dedicated to savings. Once you achieve that,
            perhaps with an employer-sponsored retirement plan and other
            automated monthly savings transfers, the rest — that big 80% chunk —
            is up for debate.
          </Typography>

          <Typography paddingLeft={3} paddingTop={3}>
            That leaves 50% for needs and 30% for wants, but these are
            parameters you can tweak to suit your reality. For example, if you
            live in an expensive housing market, your monthly mortgage or rent
            payment might spill a bit into your "wants" budget. Budgets are
            meant to bend but not be broken.
          </Typography>

          <Typography paddingLeft={3} paddingTop={3}>
            Our 50/30/20 calculator divides your take-home income into suggested
            spending in three categories: 50% of net pay for needs, 30% for
            wants and 20% for savings and debt repayment.
          </Typography>
        </Stack>
        <img
          className="marginTop"
          width={1000}
          height={500}
          alt="The 50/30/20 budget rule divides take-home income like so: 50% for necessities, 30% for wants and 20% for savings and debt repayment."
          src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2019/11/50-30-20_budget-graphic_final-770x578.jpg"
          id="709397"
        />
      </Stack>
      <Calculator />
      <Footer />
    </>
  );
};

export default Learn;
