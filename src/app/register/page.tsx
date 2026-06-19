// pages/register-page.tsx
"use client";
// pages/register-page.tsx
import React from "react";
import Register from "../../components/Register";
import Card from "../../components/Card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const RegisterPage: React.FC = () => {
  const router = useRouter();

  const handleRegister = async (data: { email: string; password: string }) => {
    try {
      console.log("Registration successful:", data);
      alert("Registration successful");
      router.push("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <Card
              title=""
              style={{
                borderRadius: "1rem",
                maxWidth: 400,
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}
              actions={[]}
              collapsible={false}>
              <Register
                registerTitle="Create an Account"
                emailLabel="Email Address"
                passwordLabel="Password"
                confirmPasswordLabel="Confirm Password"
                registerButtonLabel="Register"
                loginLink="/login"
                loginText="Already have an account? Login"
                onRegister={handleRegister}
                themeMode="light"
                buttonColor="hsl(248, 53%, 58%)"
              />
            </Card>
          </motion.div>
        </Grid>
      </Container>
    </div>
  );
};

export default RegisterPage;
