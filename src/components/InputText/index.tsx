import React, {
  ChangeEvent,
  CSSProperties,
  FC,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { TextField as MUITextField } from "@mui/material";

import { IInputText } from "../../types/InputText";
import { getAdornment } from "../Input/utils";

const BASE_STYLE: CSSProperties = { width: "100%" };

const InputText: FC<IInputText> = ({
  adornment: externalAdornment,
  disabled = false,
  label,
  multiline,
  placeholder,
  required = false,
  shrink,
  size = "medium",
  style,
  type = "text",
  variant = "outlined",
  autoFocus,
  value: propValue = "",
  onChange,
}) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    // Update internal state when the prop value changes
    setValue(propValue);
  }, [propValue]);

  const adornment = useMemo(() => getAdornment(externalAdornment), [externalAdornment]);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      setValue(newValue); // Update internal state
      if (onChange) {
        onChange(newValue); // Pass the new value to the parent component
      }
    },
    [onChange]
  );

  return (
    <MUITextField
      disabled={disabled}
      InputLabelProps={{
        shrink,
      }}
      inputProps={{
        style: { ...BASE_STYLE, ...style },
      }}
      InputProps={{
        endAdornment: adornment,
        readOnly: disabled,
      }}
      label={label}
      margin="normal"
      multiline={!!multiline}
      minRows={multiline?.rows}
      maxRows={multiline?.rowsMax}
      onChange={onChangeHandler}
      placeholder={placeholder}
      required={required}
      size={size}
      style={{ ...BASE_STYLE }}
      type={type}
      variant={variant}
      value={value} // Use the internal state for the value
      autoFocus={autoFocus}
    />
  );
};

export default InputText;
