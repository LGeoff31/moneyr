import { ExpenseType } from "../pages/history";
import React from "react";
import { Card, Button, Typography, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

const ExpenseCard: React.FunctionComponent<{
  fetchData: () => void;
  expense: ExpenseType;
}> = ({ fetchData, expense }) => {
  const handleDelete = async () => {
    const response = await fetch(`/api/expenses/delete/${expense._id}`, {
      method: "DELETE",
    });
    const dataResponse = await response.json();
    console.log(dataResponse);
    fetchData();
  };
  return (
    <Card variant="outlined">
      <Stack padding={1}>
        <Typography>Expense Title: {expense.title}</Typography>
        <Typography>
          Date created:{" "}
          {expense.created_at
            ? format(new Date(expense.created_at), "MMMM, do, yyyy")
            : "NO DATE"}
        </Typography>
        <Typography>Category: {expense.category} </Typography>

        <Typography>Description: {expense.description}</Typography>
        <Typography>Value: ${expense.value}</Typography>
        {/* </CardContent> */}
        <CardActions>
          <Button color="error" variant="text" onClick={handleDelete}>
            Delete {<DeleteIcon />}
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default ExpenseCard;
