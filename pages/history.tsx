import ExpenseCard from "@/components/ExpenseCard";
import { Category } from "@/components/ExpenseForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  MenuItem,
  SelectChangeEvent,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Button,
  Link,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export type ExpenseType = {
  _id: string;
  created_at: string;
  description: string;
  budget: number;
  category: Category;
  value: number;
  title: string;
};
const zip = (a: any, b: any) => a.map((k: any, i: any) => [k, b[i]]);

export enum Filter {
  High = "Price: High to Low",
  Low = "Price: Low to High",
  Category = "Category",
  Oldest = "Oldest to Newest",
  Newest = "Newest to Oldest",
}

const History = () => {
  const [data, setData] = useState<ExpenseType[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const [budget, setBudget] = useState<string | "">("");
  const [monthlyBudget, setMonthlyBudget] = useState<string>("");
  const [filter, setFilter] = useState<Filter | string>("Price: High to Low");
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const fetchData = async () => {
    const response = await fetch(`/api/expenses/list/${userEmail}`, {
      method: "GET",
    });
    const expenses = await response.json();
    console.log(expenses);
    setData(expenses.expenses);
    const result = await fetch("/api/finances/getBudget", {
      method: "GET",
    });
    const budgets = await result.json();
    if (budgets.length === 0) {
      return;
    }
    const finalBudget = budgets[0].budget;
    setMonthlyBudget(finalBudget);
    setDataLoaded(true);
  };
  const calculateTotalSpending = () => {
    let totalSpending = 0;
    data.map((expense) => {
      totalSpending += expense.value;
    });
    return totalSpending;
  };

  const handleAdd = async (): Promise<void> => {
    console.log("reached");
    const p = await fetch(`/api/finances/clear`, {
      method: "DELETE",
    });
    await p.json();
    const response = await fetch("/api/finances/budget", {
      method: "POST",
      body: JSON.stringify({
        budget,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataResponse = await response.json();
    const result = await fetch("/api/finances/getBudget", {
      method: "GET",
    });
    const budgets = await result.json();
    const finalBudget = budgets[0].budget;
    setMonthlyBudget(finalBudget);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!userEmail && email) {
      setUserEmail(email);
    }
    if (!userEmail) {
      return;
    }
    console.log("FETCHING DATA ");
    fetchData();
  }, [userEmail]);

  if (!dataLoaded) {
    console.log("Data laoded is ", dataLoaded);
    console.log("user email is", userEmail);
    if (userEmail === "") {
      return (
        <div>
          <Link href="/signin">Go to Sign in</Link>
        </div>
      );
    }

    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Stack padding={3}>
        <Stack direction="row">
          <Typography fontWeight="bold" justifyContent={"center"}>
            Monthly Budget: $
          </Typography>
          {monthlyBudget === "" ? (
            <Stack direction="row">
              <TextField
                variant="outlined"
                label="budget"
                placeholder="$0"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                sx={{ width: "10vw" }}
              />
              <Button onClick={handleAdd}>Add</Button>
            </Stack>
          ) : (
            <Stack direction="row">
              {monthlyBudget}
              <Button
                sx={{ marginLeft: "10px", fontSize: "12px", padding: "3px" }}
                className="editButton"
                variant="contained"
                onClick={() => setMonthlyBudget("")}
              >
                Edit
              </Button>
            </Stack>
          )}
        </Stack>
        <Stack direction="row">
          <Typography fontWeight="bold">Total Spent:&nbsp;</Typography>$
          {calculateTotalSpending()}
        </Stack>
        <Stack direction="row">
          <Typography fontWeight="bold">Total Remaining:&nbsp;</Typography>$
          {parseInt(monthlyBudget) - calculateTotalSpending()}
        </Stack>
        <LinearProgress
          variant="determinate"
          value={(calculateTotalSpending() / parseInt(monthlyBudget)) * 100}
          sx={{
            height: "10px",
            borderRadius: "5px",
            backgroundColor: "#f1f1f1",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#4caf50",
            },
          }}
        />
      </Stack>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={filter}
          sx={{ width: "30vw" }}
          onChange={(e: SelectChangeEvent) =>
            setFilter(e.target.value as Filter)
          }
        >
          {zip(Object.keys(Filter), Object.values(Filter)).map(
            ([k, v]: any) => (
              <MenuItem key={v} value={v}>
                {v}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

      {filter === "Price: High to Low" &&
        data
          .sort((expense1, expense2) => {
            return expense1.value < expense2.value ? 1 : -1;
          })
          .map((expense) => (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              fetchData={fetchData}
            />
          ))}
      {filter === "Price: Low to High" &&
        data
          .sort((expense1, expense2) => {
            return expense1.value < expense2.value ? -1 : 11;
          })
          .map((expense) => (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              fetchData={fetchData}
            />
          ))}
      {filter === "Category" &&
        data
          .sort((expense1, expense2) => {
            return expense1.category.localeCompare(expense2.category);
          })
          .map((expense) => (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              fetchData={fetchData}
            />
          ))}
      {filter === "Newest to Oldest" &&
        data
          .sort((expense1, expense2) => {
            return expense2.created_at.localeCompare(expense1.created_at);
          })
          .map((expense) => (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              fetchData={fetchData}
            />
          ))}
      {filter === "Oldest to Newest" &&
        data
          .sort((expense1, expense2) => {
            return expense1.created_at.localeCompare(expense2.created_at);
          })
          .map((expense) => (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              fetchData={fetchData}
            />
          ))}

      <Footer />
    </div>
  );
};

export default History;
