import React, { CSSProperties, FC, memo, useMemo } from "react";
import { Avatar as MUIAvatar, Skeleton as MUISkeleton, useTheme } from "@mui/material";

import { IAvatar } from "../../types/Avatar";
import IconWrapper from "../IconWrapper";
import Typography from "../Typography";

const Avatar: FC<IAvatar> = ({
  alt = "avatar",
  icon,
  loading = false,
  src,
  style,
  text,
  variant = "circular",
}) => {
  const { palette } = useTheme();

  const avatarStyle = useMemo(
    (): CSSProperties => ({
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      ...style,
    }),
    [palette, style]
  );

  if (loading) {
    return (
      <MUISkeleton variant={variant === "circular" ? "circular" : "rectangular"}>
        <MUIAvatar />
      </MUISkeleton>
    );
  }

  if (icon) {
    return (
      <MUIAvatar style={avatarStyle} variant={variant}>
        <IconWrapper icon={icon} />
      </MUIAvatar>
    );
  }

  if (text) {
    return (
      <MUIAvatar style={avatarStyle} variant={variant}>
        <Typography>{text}</Typography>
      </MUIAvatar>
    );
  }

  return <MUIAvatar alt={alt} src={src} style={avatarStyle} variant={variant} />;
};

export default memo(Avatar);
