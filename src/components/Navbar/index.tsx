"use client";
import React, { useState, ReactNode, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface CustomNavbarProps {
  title: string;
  menuItems?: string[];
  showSearch?: boolean;
  showMenuIcon?: boolean;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  enableColorOnDark?: boolean;
  children?: ReactNode;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({
  title,
  menuItems = [],
  showSearch = false,
  showMenuIcon = true,
  position = "static",
  enableColorOnDark = false,
  children,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position={position} enableColorOnDark={enableColorOnDark} {...props}>
      <Toolbar>
        {showMenuIcon && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" color="inherit" component="div">
          {title}
        </Typography>
        {showSearch && (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          </Search>
        )}
        {children}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
