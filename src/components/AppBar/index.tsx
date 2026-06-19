"use client";
import React, { CSSProperties, FC, useMemo } from "react";
import { AppBar as MUIAppBar, Toolbar as MUIToolbar } from "@mui/material";

import { AppBarProps } from "../../types/Appbar";
import { IMenu } from "../../types/Menu";
import { ISubpartMap } from "../../utils";

import AppBarActions, { APPBAR_ACTIONS_SUBPARTS } from "./components/Actions";
import AppBarContent, { APPBAR_CONTENT_SUBPARTS } from "./components/Content";

export const SUBPARTS_MAP: ISubpartMap = {
  ...APPBAR_CONTENT_SUBPARTS,
  ...APPBAR_ACTIONS_SUBPARTS,
};

const AppBar: FC<AppBarProps> = ({
  actions = [],
  children,
  menu,
  onTitleClick,
  style,
  title,
  user,
}) => {
  const toolbarStyle = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
    }),
    []
  );

  // Deprecated logic for userMenu and username
  const userProps = useMemo((): IMenu | undefined => {
    if (user) {
      return { ...user };
    }

    return;
  }, [user]);

  return (
    <MUIAppBar position="sticky" style={style}>
      <MUIToolbar style={toolbarStyle}>
        <AppBarContent menu={menu} onTitleClick={onTitleClick} title={title}>
          {children}
        </AppBarContent>
        <AppBarActions actions={actions} user={userProps} />
      </MUIToolbar>
    </MUIAppBar>
  );
};

export default AppBar;
