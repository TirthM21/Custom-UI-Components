import React, { CSSProperties, FC, PropsWithChildren, useMemo } from "react";
import { TableHead as MUITableHead, TableRow as MUITableRow } from "@mui/material";

import { ITableHead } from "../../../../types/Table";
import { HEADER_Z_INDEX } from "../../utils";
import TableHeadFilterCell from "../HeadFilter";

const TableHead: FC<PropsWithChildren<ITableHead>> = ({
  children,
  columns,
  showFilters,
  sticky,
}) => {
  const headerStyle = useMemo((): CSSProperties | undefined => {
    if (!showFilters || !sticky) {
      return;
    }

    // Adjust sticky header style as needed
    return {
      position: "sticky",
      top: 0,
      zIndex: HEADER_Z_INDEX,
    };
  }, [showFilters, sticky]);

  return (
    <MUITableHead style={headerStyle}>
      {children}
      {showFilters && (
        <MUITableRow>
          {columns.map((column, index) => (
            <TableHeadFilterCell key={`column-filter-${column.path || index}`} column={column} />
          ))}
        </MUITableRow>
      )}
    </MUITableHead>
  );
};

export default TableHead;
