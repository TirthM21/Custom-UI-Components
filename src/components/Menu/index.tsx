import React, { FC, Fragment, useCallback, useMemo, useState } from "react";
import { Menu as MUIMenu, PopoverOrigin as MUIPopoverOrigin } from "@mui/material";

import { IMenu } from "../../types/Menu";

import MenuButton from "./components/Button";
import MenuItem from "./components/Item";

const MENU_ITEMS_ANCHORING: MUIPopoverOrigin = {
  vertical: "top",
  horizontal: "right",
};

const Menu: FC<IMenu> = ({
  icon,
  label,
  items,
  onItemClick: externalOnItemClick,
  style,
  type = "button",
}) => {
  const [anchor, setAnchor] = useState<Element | null>(null);

  const onClose = useCallback(() => setAnchor(null), []);

  const onMenu = useCallback(() => setAnchor(document.querySelector(`button`)), []);

  return (
    <Fragment>
      <MenuButton icon={icon} label={label} onMenu={onMenu} style={style} type={type} />
      <MUIMenu
        anchorEl={anchor}
        anchorOrigin={MENU_ITEMS_ANCHORING}
        keepMounted
        transformOrigin={MENU_ITEMS_ANCHORING}
        open={!!anchor}
        onClose={onClose}>
        {items.map(({ label, onClick, value }, index) => (
          <MenuItem
            key={`menu-item-${index}`}
            index={index}
            label={label}
            onClick={onClick}
            onClose={onClose}
            onItemClick={externalOnItemClick}
            value={value}
          />
        ))}
      </MUIMenu>
    </Fragment>
  );
};

export default Menu;
