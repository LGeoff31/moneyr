import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PiChart from "@/components/PiChart";
import { Link, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const Analysis = () => {
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

  if (userEmail === "") {
    return (
      <div>
        <Link href="/signin">Go to Sign in</Link>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Stack justifyContent={"center"}>
        <PiChart />
      </Stack>
      <Footer />
    </div>
  );
};

export default Analysis;
