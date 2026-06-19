import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image"; // Adjust import path as per your project structure
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface DrawerItem {
  icon?: React.ReactNode | string; // Icon can be a ReactNode or a string (URL)
  title?: string; // Optional title string
  text?: string; // Optional text string
  divider?: boolean; // Optional divider boolean
  onClick?: () => void; // Optional click handler function
}

interface CustomDrawerSidebarProps {
  items: DrawerItem[];
}

const CustomDrawerSidebar: React.FC<CustomDrawerSidebarProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleToggleDrawer}
        style={{ zIndex: 1 }}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}>
        <List>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.divider && <Divider />}
              <ListItem button onClick={item.onClick ? item.onClick : handleDrawerClose}>
                {item.icon && (
                  <ListItemIcon>
                    {typeof item.icon === "string" ? (
                      <Image src={item.icon} alt="icon" width={24} height={24} />
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>
                )}
                {item.title && (
                  <Typography variant="subtitle1" style={{ marginLeft: item.icon ? 10 : 0 }}>
                    {item.title}
                  </Typography>
                )}
                {item.text && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      variant: "body2",
                      style: { paddingLeft: item.icon ? 34 : 14 },
                    }}
                  />
                )}
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default CustomDrawerSidebar;
