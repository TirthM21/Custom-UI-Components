import React, { CSSProperties, FC, useMemo } from "react";
import { Toolbar as MUIToolbar, useTheme } from "@mui/material";

import { ITableAction, ITableDataCallbackOptions } from "../../../../types/Table";
import Typography from "../../../Typography";
import TableToolbarAction from "../ToolbarAction";
import { HEADER_Z_INDEX } from "../../utils"; // Assuming HEADER_Z_INDEX is defined in your utils file

interface ITableToolbar {
  actions: ITableAction[];
  selectedRowsData: any[];
  selectedRowsIndexes: number[];
  selectionActions: ITableAction[];
  sticky?: boolean;
  title: string;
}

const TableToolbar: FC<ITableToolbar> = ({
  actions: defaultActions,
  selectedRowsData,
  selectedRowsIndexes,
  selectionActions,
  sticky = false,
  title,
}) => {
  const theme = useTheme();

  const selectedRows = useMemo(() => selectedRowsIndexes.length, [selectedRowsIndexes]);

  const actions = useMemo(
    () => (!selectedRows ? defaultActions : selectionActions),
    [defaultActions, selectedRows, selectionActions]
  );

  const dataCallbackOptions = useMemo(
    (): ITableDataCallbackOptions => ({ indexes: selectedRowsIndexes, multiple: !!selectedRows }),
    [selectedRows, selectedRowsIndexes]
  );

  const positioning = useMemo((): CSSProperties => {
    if (!sticky) {
      return {
        position: "inherit",
      };
    }

    return {
      position: "sticky",
      top: 0,
      zIndex: HEADER_Z_INDEX,
      backgroundColor: selectedRows ? theme.palette.background.default : "inherit",
      display: "flex",
      justifyContent: "space-between",
    };
  }, [sticky, selectedRows, theme]);

  const toolbarActions = useMemo(
    () =>
      actions.map((action) => (
        <TableToolbarAction
          {...action}
          key={`action-${action.label}`}
          data={selectedRowsData}
          dataCallbackOptions={dataCallbackOptions}
        />
      )),
    [actions, selectedRowsData, dataCallbackOptions]
  );

  return (
    <MUIToolbar style={positioning}>
      <Typography variant="title">
        {!selectedRows ? title : `${selectedRows} row(s) selected`}
      </Typography>
      <div style={{ display: "flex" }}>{toolbarActions}</div>
    </MUIToolbar>
  );
};

export default TableToolbar;
