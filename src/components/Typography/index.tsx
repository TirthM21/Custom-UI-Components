import React, { FC, memo, PropsWithChildren, useMemo } from "react";
import {
  Skeleton as MUISkeleton,
  Typography as MUITypography,
  TypographyVariant as MUITypographyVariant,
} from "@mui/material";

import { ITypography, TypographyVariants } from "../../types/Typography";

const VARIANT_COMPONENT_MAP: { [key in MUITypographyVariant]?: string } = {
  body1: "p",
  caption: "span",
  h5: "h1",
  h6: "h2",
  overline: "h4",
  subtitle1: "h3",
};

const Typography: FC<PropsWithChildren<ITypography>> = ({
  bottomSpacing = false,
  children,
  content,
  display = "initial",
  loading = false,
  style,
  truncated = false,
  variant = "body",
}) => {
  const muiVariant = useMemo((): MUITypographyVariant => {
    switch (variant) {
      case "body":
      case TypographyVariants.body:
        return "body1";
      case "caption":
      case TypographyVariants.caption:
        return "caption";
      case "label":
      case TypographyVariants.label:
        return "subtitle1";
      case "overline":
      case TypographyVariants.overline:
        return "overline";
      case "pagetitle":
      case TypographyVariants.pagetitle:
        return "h5";
      case "title":
      case TypographyVariants.title:
        return "h6";
      default:
        return "body1";
    }
  }, [variant]);

  const textContent = useMemo(() => {
    if (loading) {
      return <MUISkeleton />;
    }

    return content || children;
  }, [children, content, loading]);

  return (
    <MUITypography
      display={display}
      gutterBottom={bottomSpacing}
      noWrap={truncated}
      style={style}
      variant={muiVariant}
      variantMapping={VARIANT_COMPONENT_MAP}>
      {textContent}
    </MUITypography>
  );
};

export default memo(Typography);
