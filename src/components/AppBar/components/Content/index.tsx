import React, { CSSProperties, FC, PropsWithChildren, useMemo } from "react";

import { AppBarContentProps } from "../../../../types/Appbar";
import { ISubpartMap } from "../../../../utils";
import IconButton from "../../../IconButton";
import AppBarTitle, { APPBAR_TITLE_SUBPARTS } from "../Title";

export const APPBAR_CONTENT_SUBPARTS: ISubpartMap = {
  ...APPBAR_TITLE_SUBPARTS,
  menu: {
    label: "Menu",
  },
};

const AppBarContent: FC<PropsWithChildren<AppBarContentProps>> = ({
  children,
  menu,
  onTitleClick,
  title,
}) => {
  const mainMenu = useMemo(() => {
    if (!menu) {
      return null;
    }

    const { badge, icon, onClick, tooltip } = menu;
    return <IconButton badge={badge} icon={icon} onClick={onClick} tooltip={tooltip} />;
  }, [menu]);

  const style = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
      flex: 1,
    }),
    []
  );

  return (
    <div style={style}>
      {mainMenu}
      <AppBarTitle onTitleClick={onTitleClick} title={title}>
        {children}
      </AppBarTitle>
    </div>
  );
};

export default AppBarContent;
