"use client";
/*  eslint-disable */
import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react'; // Updated import
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { lightTheme, darkTheme } from '../index'; // Adjust the import path if necessary

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      // <div style={{ textAlign: 'center', marginTop: '20px' }}>
      //   <IconButton onClick={toggleTheme} color="inherit">
      //     {darkMode ? <WbSunnyIcon /> : <Brightness4Icon />}
      //   </IconButton>
      //   {/* Additional application components can go here */}
      // </div>
    </ThemeProvider>
  );
};

export default ThemeToggle;