import React, {
  CSSProperties,
  FC,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useMemo,
} from "react";
import { useTheme } from "@mui/material";

import { AppBarTitleProps } from "../../../../types/Appbar";
import { ISubpartMap, suppressEvent } from "../../../../utils";
import Typography from "../../../Typography";

export const APPBAR_TITLE_SUBPARTS: ISubpartMap = {
  titleClickable: {
    label: "Title Clickable",
  },
  titleText: {
    label: "Title Text",
  },
};

const AppBarTitle: FC<PropsWithChildren<AppBarTitleProps>> = ({
  children,
  onTitleClick: externalOnTitleClick,
  title: externalTitle,
}) => {
  const theme = useTheme();

  const title = useMemo(() => {
    if (!externalTitle) {
      return null;
    }

    return <Typography variant="title">{externalTitle}</Typography>;
  }, [externalTitle]);

  const titleClickableStyle = useMemo(
    (): CSSProperties => ({
      borderRadius: `${theme.shape.borderRadius}px`,
      cursor: "pointer",
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      userSelect: "none",
    }),
    [theme]
  );

  const onTitleClick = useCallback(
    (event: MouseEvent) => {
      suppressEvent(event);
      externalOnTitleClick && externalOnTitleClick();
    },
    [externalOnTitleClick]
  );

  if (children) {
    return <>{children}</>;
  }

  if (!title) {
    return null;
  }

  if (!externalOnTitleClick) {
    return <>{title}</>;
  }

  return (
    <div onClick={onTitleClick} style={titleClickableStyle}>
      {title}
    </div>
  );
};

export default AppBarTitle;
