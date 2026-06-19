import React, { FC, useMemo } from "react";
import { useTheme } from "@mui/material";

import { Icons } from "../../../../types/Icon";
import { ITablePaginationActions } from "../../../../types/Table";
import IconButton from "../../../IconButton";

const TablePaginationActions: FC<ITablePaginationActions> = ({
  count: rowsTotal,
  onPageChange,
  page,
  rowsPerPage: pageSize,
}) => {
  const theme = useTheme();

  const lastPage = useMemo(
    () => (!rowsTotal || !pageSize ? 0 : Math.ceil(rowsTotal / pageSize) - 1),
    [pageSize, rowsTotal]
  );

  const leftDisabled = useMemo(() => !page, [page]);

  const rightDisabled = useMemo(() => page >= lastPage, [lastPage, page]);

  const style = useMemo(
    () => ({
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(1),
    }),
    [theme]
  );

  return (
    <div style={style}>
      <IconButton
        disabled={leftDisabled}
        icon={Icons.first}
        onClick={() => onPageChange(null, 0)}
      />
      <IconButton
        disabled={leftDisabled}
        icon={Icons.left}
        onClick={() => onPageChange(null, page - 1)}
      />
      <IconButton
        disabled={rightDisabled}
        icon={Icons.right}
        onClick={() => onPageChange(null, page + 1)}
      />
      <IconButton
        disabled={rightDisabled}
        icon={Icons.last}
        onClick={() => onPageChange(null, lastPage)}
      />
    </div>
  );
};

export default TablePaginationActions;
