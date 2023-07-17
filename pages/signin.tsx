import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { initializeMagicLink } from "@/lib/magiclink";
import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [storageEmail, setStorageEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const magic = initializeMagicLink();
    if (!magic) {
      return;
    }
    await magic.auth.loginWithMagicLink({ email });
    const userInfo = await magic.user.getInfo();
    if (userInfo.email !== email) {
      // Not logged in properly
      return;
    }
    //logged in properly
    localStorage.setItem("email", email);
  };

  const handleLogout = async () => {
    const magic = initializeMagicLink();
    if (!magic) {
      return;
    }
    await magic.user.logout();
    localStorage.removeItem("email");
  };

  useEffect(() => {
    const se = localStorage.getItem("email");
    if (!se) {
      return;
    }
    setStorageEmail(se);
  }, []);

  return (
    <div className="center">
      <Navbar />
      <Typography fontWeight="bold" variant="h2" color="#22324f" padding={4}>
        Sign In
      </Typography>
      <Typography fontWeight="bold" variant="body1" color="#22324f">
        {" "}
        Refresh once Submitted{" "}
      </Typography>
      {storageEmail ? (
        <>
          <Typography>Logged in as {storageEmail}</Typography>
          <Button onClick={handleLogout} variant="contained">
            Logout
          </Button>
        </>
      ) : (
        <>
          <Typography>Not Signed in</Typography>
          <TextField
            variant="filled"
            className="right"
            fullWidth
            placeholder="Ex. geoffrey123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </>
      )}
      <Footer />
    </div>
  );
};

export default SignIn;
