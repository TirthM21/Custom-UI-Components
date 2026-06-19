import React, { FC, Fragment, PropsWithChildren } from "react";

import { IAdornment, IAdornmentSubpart } from "../../types/Adornment";
import { ISubpartMap } from "../../utils/index";

import AdornmentBadge, { ADORNMENT_BADGE_SUBPARTS } from "./components/Badge";
import AdornmentTooltip, { ADORNMENT_TOOLTIP_SUBPARTS } from "./components/Tooltip";

export const ADORNMENT_SUBPARTS: ISubpartMap<IAdornmentSubpart> = {
  ...ADORNMENT_BADGE_SUBPARTS,
  ...ADORNMENT_TOOLTIP_SUBPARTS,
  adornment: {
    label: "Adornment",
  },
};

const Adornment: FC<PropsWithChildren<IAdornment>> = ({ badge, children, tooltip }) => {
  if (!badge && !tooltip) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <span>
      <AdornmentTooltip tooltip={tooltip}>
        <AdornmentBadge badge={badge}>{children}</AdornmentBadge>
      </AdornmentTooltip>
    </span>
  );
};

export default Adornment;
