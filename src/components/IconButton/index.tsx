import React, { FC, MouseEvent, useCallback } from "react";
import MUIIconButton from "@mui/material/IconButton";
import { IIconButton, IIconButtonSubpart } from "../../types/IconButton";
import { ISubpartMap, suppressEvent } from "../../utils";
import Adornment, { ADORNMENT_SUBPARTS } from "../Adornment";
import IconWrapper from "../IconWrapper";
import { Icons } from "../Icon/icons";

export const SUBPARTS_MAP: ISubpartMap<IIconButtonSubpart> = {
  ...ADORNMENT_SUBPARTS,
  icon: {
    label: "Icon",
  },
};

const IconButton: FC<IIconButton> = ({
  badge,
  icon,
  onClick,
  disabled = false,
  rotate = false,
  size = "medium",
  style,
  tooltip,
}) => {
  const onClickHandler = useCallback(
    (event: MouseEvent) => {
      suppressEvent(event);
      onClick();
    },
    [onClick]
  );

  return (
    <Adornment badge={badge} tooltip={tooltip}>
      <MUIIconButton color="inherit" disabled={disabled} onClick={onClickHandler} style={style}>
        <IconWrapper icon={icon} rotate={rotate} size={size} />
      </MUIIconButton>
    </Adornment>
  );
};

export default IconButton;
