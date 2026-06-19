import React, { FC, Fragment, PropsWithChildren, useMemo } from "react";
import { Tooltip as MUITooltip } from "@mui/material";

import { IAdornment, IAdornmentTooltipSubpart } from "../../../../types/Adornment";
import { getComposedDataCy, ISubpartMap, slugify } from "../../../../utils";

export const ADORNMENT_TOOLTIP_SUBPARTS: ISubpartMap<IAdornmentTooltipSubpart> = {
  tooltip: {
    label: "Tooltip",
  },
};

const AdornmentTooltip: FC<PropsWithChildren<IAdornment>> = ({ children, tooltip }) => {
  if (!tooltip) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <MUITooltip aria-label={slugify(tooltip)} title={tooltip}>
      <span>{children}</span>
    </MUITooltip>
  );
};

export default AdornmentTooltip;
