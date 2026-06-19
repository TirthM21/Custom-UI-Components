import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions/transition";

interface Action {
  icon: JSX.Element;
  name: string;
  onClick: () => void;
}

interface DynamicSpeedDialProps {
  ariaLabel: string;
  actions: Action[];
  direction?: "up" | "down" | "left" | "right";
  open?: boolean;
  onClose?: (event: React.BaseSyntheticEvent, reason: string) => void;
  onOpen?: (event: React.BaseSyntheticEvent, reason: string) => void;
  openIcon?: JSX.Element;
  hidden?: boolean;
  TransitionComponent?: React.ComponentType<TransitionProps>;
  transitionDuration?: number | { appear?: number; enter?: number; exit?: number };
  TransitionProps?: object;
  FabProps?: object;
  sx?: any; // Adjust the type based on your style system
}

const DynamicSpeedDial: React.FC<DynamicSpeedDialProps> = ({
  ariaLabel,
  actions,
  direction = "up",
  open = false,
  onClose,
  onOpen,
  openIcon,
  hidden = false,
  TransitionComponent = Zoom,
  transitionDuration = {
    enter: 225,
    exit: 195,
  },
  TransitionProps,
  FabProps,
  sx,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = (event: React.BaseSyntheticEvent, reason: string) => {
    setIsOpen(false);
    onClose && onClose(event, reason);
  };

  const handleOpen = (event: React.BaseSyntheticEvent, reason: string) => {
    setIsOpen(true);
    onOpen && onOpen(event, reason);
  };

  const handleActionClick = (action: Action) => {
    action.onClick();
    setIsOpen(false);
  };

  return (
    <Box sx={{ position: "absolute", bottom: 16, right: 16, ...sx }}>
      <SpeedDial
        ariaLabel={ariaLabel}
        icon={<SpeedDialIcon openIcon={openIcon} />}
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        direction={direction}
        hidden={hidden}
        transitionDuration={transitionDuration}
        TransitionProps={TransitionProps}
        FabProps={FabProps}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default DynamicSpeedDial;
