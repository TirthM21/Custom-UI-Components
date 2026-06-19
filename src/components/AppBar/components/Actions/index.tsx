import React, { CSSProperties, FC, useMemo } from "react";
import { useTheme } from "@mui/material";

import { AppBarActionsProps } from "../../../../types/Appbar";
import { Icons } from "../../../../types/Icon";
import IconButton from "../../../IconButton";
import Menu from "../../../Menu";
import { ISubpartMap } from "../../../../utils";

export const APPBAR_ACTIONS_SUBPARTS: ISubpartMap = {
  action: {
    label: "Action (at index n)",
    value: (n = `{n}`) => `action-${n}`,
  },
  localesMenu: {
    label: "Locales Menu",
  },
  localesMenuItem: {
    label: "Locales Menu Item (at index n)",
    value: (n = `{n}`) => `locales-menu-item-${n}`,
  },
  userMenu: {
    label: "User Menu",
  },
  userMenuItem: {
    label: "User Menu Item (at index n)",
    value: (n = `{n}`) => `user-menu-item-${n}`,
  },
};

const AppBarActions: FC<AppBarActionsProps> = ({ actions, locale, user }) => {
  const theme = useTheme();

  const userMenuStyle = useMemo(
    (): CSSProperties => ({
      textTransform: "lowercase",
    }),
    []
  );

  const actionsButtons = useMemo(() => {
    if (!actions) {
      return null;
    }

    return actions.map(({ badge, icon, onClick, style, tooltip }, index) => (
      <IconButton
        key={`action-${index}`}
        badge={badge}
        icon={icon}
        onClick={onClick}
        style={{ marginRight: `${theme.spacing(0.5)}`, ...style }}
        tooltip={tooltip}
      />
    ));
  }, [actions, theme]);

  const localeMenu = useMemo(() => {
    if (!locale) {
      return null;
    }

    return <Menu icon={Icons.language} {...locale} />;
  }, [locale]);

  const userMenu = useMemo(() => {
    if (!user) {
      return null;
    }

    return <Menu icon={Icons.account} style={userMenuStyle} {...user} />;
  }, [user, userMenuStyle]);

  const empty = useMemo(
    () => !actionsButtons && !localeMenu && !userMenu,
    [actionsButtons, localeMenu, userMenu]
  );

  const style = useMemo((): CSSProperties => ({ alignItems: "center", display: "flex" }), []);

  if (empty) {
    return null;
  }

  return (
    <div style={style}>
      {actionsButtons}
      {localeMenu}
      {userMenu}
    </div>
  );
};

export default AppBarActions;
