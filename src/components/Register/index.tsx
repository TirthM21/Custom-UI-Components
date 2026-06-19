// components/Register.tsx
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Alert, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { withStyles } from "@mui/styles";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";

interface RegisterFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProps {
  registerTitle?: React.ReactNode;
  emailLabel?: string;
  passwordLabel?: string;
  confirmPasswordLabel?: string;
  registerButtonLabel?: string;
  loginLink?: string;
  loginText?: string;
  validationSchema?: ZodSchema<any>;
  onRegister: (data: { email: string; password: string }) => Promise<void>;
  themeMode?: "light" | "dark";
  buttonColor?: string;
  avatar?: React.ReactNode;
  redirectRoute?: string;
}

const Register: React.FC<RegisterProps> = ({
  registerTitle,
  emailLabel = "Email Address",
  passwordLabel = "Password",
  confirmPasswordLabel = "Confirm Password",
  registerButtonLabel = "Register",
  loginLink = "/login",
  loginText = "Already have an account? Login",
  validationSchema,
  onRegister,
  themeMode = "light",
  buttonColor = "#FFA500",
  avatar,
  redirectRoute = "/dashboard",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const schema =
    validationSchema ||
    z
      .object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: z.string().min(6, "Passwords do not match"),
      })
      .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
          ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ["confirmPassword"],
          });
        }
      });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async ({ email, password }: RegisterFormInputs) => {
    try {
      await onRegister({ email, password });
      router.push(redirectRoute);
    } catch (error) {
      console.error("Registration failed:", error);
      setSubmitError("Registration failed. Please try again.");
    }
  };

  const CssTextField = withStyles((theme) => ({
    root: {
      "& label": {
        color: theme.palette.text.primary, // Dynamic label text color based on theme
      },
      "& label.Mui-focused": {
        color: theme.palette.common.white, // Dynamic focused label text color based on theme
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: theme.palette.common.grey, // Dynamic underline color after interaction based on theme
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.common.grey, // Dynamic outline fieldset color based on theme
        },
        "&:hover fieldset": {
          borderColor: theme.palette.primary.main, // Dynamic outline fieldset color on hover based on theme primary color
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.primary.main, // Dynamic outline fieldset color on focus based on theme primary color
        },
        "& input": {
          color: theme.palette.text.primary, // Dynamic input text color based on theme
        },
        "& input::placeholder": {
          color: theme.palette.text.secondary, // Dynamic placeholder text color based on theme
        },
      },
    },
  }))(TextField);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: buttonColor, // Use buttonColor prop for main primary color
      },
      text: {
        primary: themeMode === "light" ? "#000000" : "#FFFFFF", // Adjust primary text color based on theme mode
        secondary: themeMode === "light" ? "rgba(0, 0, 0, 0.54)" : "rgba(255, 255, 255, 0.7)", // Adjust secondary text color based on theme mode
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: buttonColor, // Dynamic button background color based on buttonColor prop
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {avatar && <Box sx={{ m: 1 }}>{avatar}</Box>}
          {registerTitle && (
            <Typography component="h1" variant="h5">
              {registerTitle}
            </Typography>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit(handleRegister)}
            noValidate
            sx={{ mt: 1, width: "100%" }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <CssTextField
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
                  InputLabelProps={{
                    style: { color: theme.palette.text.primary }, // Customize label color
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <CssTextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label={passwordLabel}
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputLabelProps={{
                    style: { color: theme.palette.text.primary }, // Customize label color
                  }}
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
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <CssTextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="confirmPassword"
                  label={confirmPasswordLabel}
                  type="password"
                  autoComplete="new-password"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  InputLabelProps={{
                    style: { color: theme.palette.text.primary }, // Customize label color
                  }}
                />
              )}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {registerButtonLabel}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href={loginLink} passHref>
                  <Typography variant="body2" color="primary" className="cursor-pointer">
                    {loginText}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
          {submitError && <Alert severity="error">{submitError}</Alert>}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
