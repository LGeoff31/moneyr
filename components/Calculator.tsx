import { Typography, Card, Box, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const Calculator = () => {
  const [money, setMoney] = useState<string>("");
  return (
    <div>
      <br />
      <Stack direction="row">
        <Card className="card">
          <Typography textAlign="center" color="#22324f" variant="h6">
            {" "}
            50/30/20 Budget Calculator{" "}
          </Typography>
          <Typography
            paddingLeft={2}
            // paddingLeft={10}
            // paddingRight={10}
            // textAlign={"center"}
            color="grey"
          >
            Find out how this budgeting approach applies to your money. Our
            50/30/20 calculator divides <br />
            your take-home income into suggested spending in three categories:
            50% of net pay for needs, 30% for wants and 20% for savings and debt
            repayment.
          </Typography>
          <Box padding={3}>
            <TextField
              variant="outlined"
              label="Monthly after-tax income"
              placeholder="$0"
              value={money}
              sx={{ width: "30vw" }}
              onChange={(e) => setMoney(e.target.value)}
            />
          </Box>
          <Typography
            paddingBottom={1}
            paddingLeft={3}
            fontWeight="bold"
            variant="h6"
          >
            Your 50/30/20 numbers:
          </Typography>

          <Typography paddingLeft={3} fontWeight="bold" variant="h6">
            NECESSITIES
          </Typography>
          <Typography fontSize={30} paddingLeft={3} color="blue">
            ${(parseInt(money) * 0.5).toFixed(2)}
          </Typography>
          <Typography paddingLeft={3} fontWeight="bold" variant="h6">
            WANTS
          </Typography>
          <Typography fontSize={30} paddingLeft={3} color="blue">
            ${(parseInt(money) * 0.3).toFixed(2)}
          </Typography>
          <Typography paddingLeft={3} fontWeight="bold" variant="h6">
            SAVINGS AND DEBT REPAYMENT
          </Typography>
          <Typography fontSize={30} paddingLeft={3} color="blue">
            ${(parseInt(money) * 0.2).toFixed(2)}
          </Typography>
        </Card>
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/hOPc0SFKBiw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Stack>
    </div>
  );
};

export default Calculator;
