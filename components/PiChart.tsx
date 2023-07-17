// import React from 'react'
import React, { useState, useEffect } from "react";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { ExpenseType } from "@/pages/history";
import { Category } from "./ExpenseForm";

type PiChartCategory = {
  category: Category;
  value: number;
};

const PiChart = () => {
  const [data, setData] = useState<PiChartCategory[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const indexOfCategory = (
    category: string,
    expenses: PiChartCategory[]
  ): number => {
    for (let i = 0; i < expenses.length; i++) {
      if (category === expenses[i].category) {
        return i;
      }
    }
    return -1;
  };
  const groupCategory = (oldData: ExpenseType[]): PiChartCategory[] => {
    const newData = [];
    for (let expense of oldData) {
      const category = expense.category;
      const value = expense.value;
      const index = indexOfCategory(category, newData);
      if (index === -1) {
        newData.push({ category: category, value: value });
      } else {
        newData[index].value += value;
      }
    }
    return newData;
  };

  const fetchData = async () => {
    const response = await fetch(`/api/expenses/list/${userEmail}`, {
      method: "GET",
    });
    const expenses = await response.json();
    console.log(expenses.expenses);
    const groupedData = groupCategory(expenses.expenses);
    console.log("GROUPED DATA IS", groupedData);
    setData(groupedData);
  };
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!userEmail && email) {
      setUserEmail(email);
    }
    if (!userEmail) {
      return;
    }
    fetchData();
  }, [userEmail]);
  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Chart data={data}>
      <PieSeries
        valueField="value"
        argumentField="category"
        innerRadius={0.25}
      />

      <Title text="Category Distribution" />
      <Animation />
      <Legend />
    </Chart>
  );
};

export default PiChart;
