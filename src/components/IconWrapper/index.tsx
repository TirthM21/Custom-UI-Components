"use client";
import React, { FC, useMemo } from "react";
import { IIcon } from "../../types/Icon";
import { IIconWrapper } from "../../types/IconWrapper";
import Icon from "../Icon";
import { Icons } from "../../types/Icon";

const IconWrapper: FC<IIconWrapper> = ({
  forwarded,
  icon,
  loading = false,
  rotate = false,
  size = "medium",
  style,
}) => {
  const props = useMemo(
    (): IIcon => ({
      forwarded,
      loading,
      rotate,
      size,
      style,
    }),
    [forwarded, loading, rotate, size, style]
  );

  if (!icon) {
    console.warn("IconWrapper", "Skip rendering, both children and name are not set");
    return null;
  }

  if (typeof icon === "string") {
    // Ensure icon is a valid key of Icons
    if (!Object.values(Icons).includes(icon as Icons)) {
      console.warn("IconWrapper", `Icon "${icon}" is not a valid icon name.`);
      return null;
    }
    return <Icon {...props} name={icon as Icons} />;
  }

  return <Icon {...props}>{icon}</Icon>;
};

export default IconWrapper;
