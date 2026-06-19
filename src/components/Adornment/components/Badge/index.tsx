import React, { FC, Fragment, PropsWithChildren, useMemo } from "react";
import { Badge as MUIBadge } from "@mui/material";

import { IAdornment, IAdornmentBadgeSubpart } from "../../../../types/Adornment";
import {  ISubpartMap } from "../../../../utils";

export const ADORNMENT_BADGE_SUBPARTS: ISubpartMap<IAdornmentBadgeSubpart> = {
  badge: {
    label: "Badge",
  },
};

const AdornmentBadge: FC<PropsWithChildren<IAdornment>> = ({ badge, children }) => {
  if (!badge) {
    return <Fragment>{children}</Fragment>;
  }

  const { color = "default", overlap = "circular", value, variant = "standard" } = badge;

  return (
    <MUIBadge badgeContent={value} color={color} overlap={overlap} variant={variant}>
      {children}
    </MUIBadge>
  );
};

export default AdornmentBadge;
