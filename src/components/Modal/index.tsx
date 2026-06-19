import React, { FC, PropsWithChildren, useCallback, useMemo } from "react";
import {
  Dialog as MUIDialog,
  DialogActions as MUIDialogActions,
  DialogContent as MUIDialogContent,
  DialogTitle as MUIDialogTitle,
} from "@mui/material";

import { Icons } from "../Icon/icons";
import { IModal, IModalViewOptions } from "../../types/Modal";
import { suppressEvent } from "../../utils";
import Button from "../Button";
import IconButton from "../IconButton";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "modal";
export const DATA_CY_SHORTCUT = "title";
export const SUBPARTS_MAP = {
  title: {
    label: "Title",
  },
  content: {
    label: "Content",
  },
  actionCancel: {
    label: "Action Cancel",
  },
  actionConfirm: {
    label: "Action Confirm",
  },
};

const Modal: FC<PropsWithChildren<IModal>> = ({
  cancel,
  children,
  closable = false,
  confirm,
  onClose: externalOnClose,
  open = false,
  responsive = true,
  size = "md",
  title = "",
}) => {
  const hasActions = useMemo(() => cancel || confirm, [cancel, confirm]);

  const onCloseHandler = useCallback(
    (event?: any) => {
      if (event) {
        suppressEvent(event);
      }

      externalOnClose && externalOnClose();
    },
    [externalOnClose]
  );

  const viewOptions: IModalViewOptions = useMemo(() => {
    return {
      fullScreen: size === "xl",
      maxWidth: size === "xl" ? "xl" : undefined,
    };
  }, [size]);

  return (
    <MUIDialog
      {...viewOptions}
      aria-labelledby="modal-title"
      fullWidth
      onClose={onCloseHandler}
      open={open}>
      <MUIDialogTitle
        id="modal-title"
        style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <Typography variant="caption">{title}</Typography>
        {closable && <IconButton icon={Icons.close} size="small" onClick={onCloseHandler} />}
      </MUIDialogTitle>
      <MUIDialogContent dividers>{children}</MUIDialogContent>
      {hasActions && (
        <MUIDialogActions>
          {cancel && (
            <Button
              disabled={cancel.disabled}
              label={cancel.label}
              onClick={cancel.action}
              style={cancel.style}
              variant={cancel.variant}
            />
          )}
          {confirm && (
            <Button
              disabled={confirm.disabled}
              label={confirm.label}
              onClick={confirm.action}
              style={confirm.style}
              variant={confirm.variant}
            />
          )}
        </MUIDialogActions>
      )}
    </MUIDialog>
  );
};

export const ModalWithProps = Modal;

export default Modal;
