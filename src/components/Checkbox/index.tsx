import React, {
  ChangeEvent,
  useCallback,
  CSSProperties,
  FC,
  InputHTMLAttributes,
  useMemo,
} from "react";
import { Checkbox as MUICheckbox, FormControlLabel as MUIFormControlLabel } from "@mui/material";

import { ICheckbox } from "../../types/Checkbox";

const Checkbox: FC<ICheckbox> = ({
  disabled = false,
  intermediate = false,
  label,
  labelPlacement = "start",
  onChange: externalOnChange,
  required = false,
  size = "medium",
  style,
  value = false,
}) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (externalOnChange) {
        externalOnChange(event.target.checked);
      }
    },
    [externalOnChange]
  );

  const wrapperStyle = useMemo(
    (): CSSProperties => ({
      ...(!label ? { margin: 0 } : {}),
    }),
    [label]
  );

  return (
    <MUIFormControlLabel
      control={
        <MUICheckbox
          checked={value}
          disabled={disabled}
          indeterminate={intermediate}
          onChange={onChange}
          required={required}
          size={size}
          style={style}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
      style={wrapperStyle}
    />
  );
};

export default Checkbox;
