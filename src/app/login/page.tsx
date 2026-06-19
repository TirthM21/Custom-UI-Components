// pages/login-page.tsx
"use client";
import React from "react";
import Login from "../../components/Login";
import { useRouter } from "next/navigation"; // Import from next/navigation
import { z } from "zod";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
const LoginPage: React.FC = () => {
  const router = useRouter(); // Use useRouter from next/navigation

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    // Replace this with your actual login logic, e.g., API call
    try {
      // Simulating successful login
      console.log("Login with:", email, password);
      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure
    }
  };

  const handlePasswordReset = (email: string) => {
    // Replace this with your password reset logic, e.g., send reset email
    console.log("Password reset requested for:", email);
  };

  const customSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  return (
    <Container maxWidth="lg" disableGutters>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            backgroundImage:
              "url('https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg')",
            backgroundSize: "cover",
          }}>
          {/* Left side (background image) */}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {/* Optional: Add additional content to the left side */}
          </Box>

          {/* Right side (login form) */}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjust opacity as needed
              backdropFilter: "blur(10px)", // Optional: Adds a blur effect to the background
              p: 4, // Adds padding for the form
            }}>
            <Login
              onLogin={handleLogin}
              loginTitle="Sign In"
              emailLabel="Email"
              passwordLabel="Password"
              loginButtonLabel="Sign In"
              registerLink="/signup"
              registerText="Don't have an account? Sign Up"
              forgotPasswordLink="/forgotPassword"
              forgotPasswordText="Forgot password?"
              validationSchema={customSchema}
              onPasswordReset={handlePasswordReset}
            />
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default LoginPage;
