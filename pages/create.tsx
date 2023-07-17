import ExpenseForm, { Category } from "@/components/ExpenseForm";
import { Link } from "@mui/material";
import React, { useState, useEffect } from "react";

const Create = () => {
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!userEmail && email) {
      setUserEmail(email);
    }
    if (!userEmail) {
      return;
    }
  }, [userEmail]);
  const handleSubmit = async (
    title: string,
    value: number,
    category: Category,
    description: string
  ) => {
    const email = localStorage.getItem("email");
    if (!email) {
      console.log("YOU ARE NOT LOGGED IN");
      return;
    }
    const response = await fetch("/api/expenses/create", {
      method: "POST",
      body: JSON.stringify({
        title,
        value,
        category,
        description,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataResponse = await response.json();
  };
  if (userEmail === "") {
    return (
      <div>
        <Link href="/signin">Go to Sign in</Link>
      </div>
    );
  }
  return <ExpenseForm submitAction={handleSubmit} />;
};

export default Create;
