import React, { FC, MouseEvent, useCallback, useMemo } from "react";
import MUIButton from "@mui/material/Button";
import { IButton, IMUIButtonIcon } from "../../types/Button";
import IconWrapper from "../IconWrapper";
import { Icons } from "../Icon/icons";

const Button: FC<IButton> = ({
  color = "primary",
  disabled = false,
  elevated = false,
  icon: externalIcon,
  label,
  onClick,
  style,
  variant = "contained",
  hoverStyle,
}) => {
  const icon = useMemo(() => {
    const muiIcon: IMUIButtonIcon = {};
    if (!externalIcon) {
      return muiIcon;
    }

    const { component, name, position, rotate } = externalIcon;
    const iconComponent = <IconWrapper icon={name || component} rotate={rotate} />;

    switch (position) {
      case "right":
        return { endIcon: iconComponent };
      case "left":
      default:
        return { startIcon: iconComponent };
    }
  }, [externalIcon]);

  const onClickHandler = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      onClick();
    },
    [onClick]
  );

  return (
    <MUIButton
      disabled={disabled}
      disableElevation={!elevated}
      onClick={onClickHandler}
      style={style}
      variant={variant}
      color={color}
      {...icon}
      sx={
        hoverStyle && {
          "&:hover": hoverStyle,
        }
      }>
      {label}
    </MUIButton>
  );
};

export default Button;
