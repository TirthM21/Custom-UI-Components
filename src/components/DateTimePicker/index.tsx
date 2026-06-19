import React, { FC, useCallback, useMemo } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTime, Settings } from "luxon";

import { DateTimePickerType, viewType } from "../../types/DateTimePicker";

const DateTimePicker: FC<DateTimePickerType> = ({
  type = "dateTime",
  value,
  onAccept,
  onChange,
  ampm = false,
  mobileView,
  timeView = "min",
  format,
  timeZone,
}: DateTimePickerType) => {
  const views: viewType[] = useMemo(() => {
    if (timeView === "hrs") {
      return ["year", "month", "day", "hours"];
    }
    if (timeView === "sec") {
      return ["year", "month", "day", "hours", "minutes", "seconds"];
    }
    return ["year", "month", "day", "hours", "minutes"];
  }, [timeView]);

  const zone = useMemo(() => {
    Settings.defaultZone = timeZone ? timeZone : "system";
    return timeZone;
  }, [timeZone]);

  const isDate = useCallback((date: Date) => {
    const valueDateTime = DateTime.fromJSDate(date);
    return valueDateTime.isValid;
  }, []);

  const dateTimeValue = useMemo(() => {
    if (value) {
      const valueDate = new Date(value);
      const validDate = isDate(valueDate);
      if (validDate) {
        return DateTime.fromJSDate(valueDate);
      }
      console.error("DateTimePicker", "Invalid Date");
      return undefined;
    }
  }, [value, isDate]);

  const onAcceptIso = useCallback(
    (value: DateTime | undefined | null) => {
      if (onAccept) {
        onAccept(value?.toJSDate());
      }
    },
    [onAccept]
  );

  const onChangeIso = useCallback(
    (value: DateTime | undefined | null) => {
      if (onChange) {
        onChange(value?.toJSDate());
      }
    },
    [onChange]
  );

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      {type === "dateTime" ? (
        <MuiDateTimePicker
          timezone={zone}
          value={dateTimeValue}
          onAccept={onAcceptIso}
          onChange={onChangeIso}
          views={views}
          format={format}
          ampm={ampm}
        />
      ) : type === "date" ? (
        <DatePicker
          timezone={zone}
          value={dateTimeValue}
          onAccept={onAcceptIso}
          onChange={onChangeIso}
          format={format}
        />
      ) : (
        <TimePicker
          timezone={zone}
          value={dateTimeValue}
          onAccept={onAcceptIso}
          onChange={onChangeIso}
          format={format}
          ampm={ampm}
        />
      )}
    </LocalizationProvider>
  );
};

export default DateTimePicker;
