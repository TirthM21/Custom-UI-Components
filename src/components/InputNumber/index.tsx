"use client";
import React, {
  ChangeEvent,
  CSSProperties,
  FC,
  KeyboardEvent,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { TextField as MUITextField } from "@mui/material";

import { IInputNumber, INullableNumber } from "../../types/InputNumber";
import { getAdornment } from "../Input/utils";

const BASE_STYLE: CSSProperties = { textAlign: "right", width: "100%" };

const InputNumber: FC<IInputNumber> = ({
  adornment: externalAdornment,
  disabled = false,
  integer = true,
  label,
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER,
  onChange,
  placeholder,
  required = false,
  shrink = true,
  size = "medium",
  style,
  value: propValue = null,
  variant = "outlined",
}) => {
  const getControlledValue = useCallback(
    (value: INullableNumber) => (value === null ? "" : value.toString()),
    []
  );

  const [value, setValue] = useState(getControlledValue(propValue));

  useEffect(() => {
    // Update internal state when the prop value changes
    setValue(getControlledValue(propValue));
  }, [propValue, getControlledValue]);

  const adornment = useMemo(() => getAdornment(externalAdornment), [externalAdornment]);

  const getNumericValue = useCallback(
    (value: string) => (integer ? parseInt(value, 10) : parseFloat(value)),
    [integer]
  );

  const parseOnChangeValue = useCallback(
    (value: string): INullableNumber => {
      const numericValue = getNumericValue(value);
      if (isNaN(numericValue)) {
        return null;
      }

      if (numericValue > maxValue) {
        return maxValue;
      }

      return numericValue;
    },
    [getNumericValue, maxValue]
  );

  const parseOnBlurValue = useCallback(
    (value: string): INullableNumber => {
      const numericValue = getNumericValue(value);
      if (isNaN(numericValue)) {
        return null;
      }

      if (numericValue < minValue) {
        return minValue;
      }

      return numericValue;
    },
    [getNumericValue, minValue]
  );

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      const numericValue = parseOnChangeValue(newValue);
      setValue(newValue); // Update internal state
      onChange && onChange(numericValue);
    },
    [parseOnChangeValue, onChange]
  );

  const onBlurHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      const numericValue = parseOnBlurValue(newValue);
      setValue(newValue); // Update internal state
      onChange && onChange(numericValue);
    },
    [parseOnBlurValue, onChange]
  );

  const onKeyDownHandler = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
      e.preventDefault();
    }
  }, []);

  return (
    <MUITextField
      onKeyDown={onKeyDownHandler}
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
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      placeholder={placeholder}
      required={required}
      size={size}
      style={{ ...BASE_STYLE }}
      type="number"
      variant={variant}
      value={value} // Use the internal state for the value
    />
  );
};

export default InputNumber;
