import React, { useState, FC, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Typography from "../Typography"; // Adjust the import path accordingly

interface CustomRatingProps {
  defaultValue?: number;
  precision?: number;
  max?: number;
  customIcon?: React.ReactNode;
  customEmptyIcon?: React.ReactNode;
  title?: string; // Optional title prop for the component
  controlled?: boolean; // Indicates if the rating is controlled by parent
  disabled?: boolean; // Indicates if the rating is disabled
  value?: number | null; // Controlled value from parent
  onChange?: (newValue: number | null) => void; // Handler for value change
}

const CustomRating: FC<CustomRatingProps> = ({
  defaultValue = 2.5,
  precision = 0.5,
  max = 5,
  customIcon,
  customEmptyIcon,
  title,
  controlled = false,
  disabled = false,
  value = null,
  onChange,
}) => {
  const [internalRating, setInternalRating] = useState<number | null>(defaultValue);
  const [hover, setHover] = useState<number>(-1);

  const rating = controlled ? value : internalRating;

  useEffect(() => {
    if (controlled && value !== null) {
      setInternalRating(value);
    }
  }, [controlled, value]);

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (!controlled) {
      setInternalRating(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleHoverChange = (event: React.ChangeEvent<{}>, newHover: number) => {
    setHover(newHover);
  };

  const labels: { [index: number]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {title && <Typography variant="title">{title}</Typography>}
      <Rating
        name="hover-feedback"
        value={rating}
        precision={precision}
        max={max}
        onChange={handleRatingChange}
        onChangeActive={handleHoverChange}
        icon={customIcon ? customIcon : <StarIcon fontSize="inherit" />}
        emptyIcon={
          customEmptyIcon ? (
            customEmptyIcon
          ) : (
            <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
          )
        }
        disabled={disabled}
      />
      {rating !== null && !disabled && (
        <Box sx={{ ml: 2 }}>
          <Typography variant="body">{labels[hover !== -1 ? hover : rating]}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CustomRating;
