// components/Login.tsx
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Alert, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface LoginFormInputs {
  email: string;
  password: string;
}

interface LoginProps {
  loginTitle?: React.ReactNode;
  emailLabel?: string;
  passwordLabel?: string;
  loginButtonLabel?: string;
  registerLink?: string;
  registerText?: string;
  forgotPasswordLink?: string;
  forgotPasswordText?: string;
  validationSchema?: ZodSchema<any>;
  onLogin: (data: { email: string; password: string }) => Promise<void>;
  onPasswordReset?: (email: string) => void;
  avatar?: React.ReactNode;
}

const Login: React.FC<LoginProps> = ({
  loginTitle,
  emailLabel = "Email Address",
  passwordLabel = "Password",
  loginButtonLabel = "Login",
  registerLink = "/register",
  registerText = "Don't have an account? Register",
  forgotPasswordLink = "/forgotPassword",
  forgotPasswordText = "Forgot password?",
  validationSchema,
  onLogin,
  onPasswordReset,
  avatar,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const schema =
    validationSchema ||
    z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters long"),
    });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async ({ email, password }: LoginFormInputs) => {
    try {
      await onLogin({ email, password });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setSubmitError("Login failed. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {avatar && <Box sx={{ m: 1 }}>{avatar}</Box>}
        {loginTitle && (
          <Typography component="h1" variant="h5">
            {loginTitle}
          </Typography>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit(handleLogin)}
          noValidate
          sx={{ mt: 1, width: "100%" }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="email"
                label={emailLabel}
                autoComplete="email"
                autoFocus
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="password"
                label={passwordLabel}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {loginButtonLabel}
          </Button>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href={forgotPasswordLink} passHref>
                <Typography variant="body2" color="primary" className="cursor-pointer">
                  {forgotPasswordText}
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href={registerLink} passHref>
                <Typography variant="body2" color="primary" className="cursor-pointer">
                  {registerText}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
        {submitError && <Alert severity="error">{submitError}</Alert>}
      </Box>
    </Container>
  );
};

export default Login;
