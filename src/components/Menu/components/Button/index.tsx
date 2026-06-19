import React, { useMemo } from "react";

import { Icons } from "../../../../types/Icon";
import { IMenuButton } from "../../../../types/Menu";
import Button from "../../../Button";
import IconButton from "../../../IconButton";

interface MenuButtonProps extends IMenuButton {
  onMenu: () => void;
}

const MenuButton = ({
  icon: externalIcon,
  label,
  onMenu,
  style,
  type = "button",
}: MenuButtonProps) => {
  const icon = useMemo(() => {
    if (!externalIcon) {
      return Icons.menu;
    }

    return externalIcon;
  }, [externalIcon]);

  const buttonIcon = useMemo(
    () => (typeof icon === "string" ? { name: icon } : { component: icon }),
    [icon]
  );

  if (type === "icon") {
    return <IconButton icon={icon} onClick={onMenu} style={style} tooltip={label} />;
  }

  return <Button icon={buttonIcon} label={label} onClick={onMenu} style={style} />;
};

export default MenuButton;
