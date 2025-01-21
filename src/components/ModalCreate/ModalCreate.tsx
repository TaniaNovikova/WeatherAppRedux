import { DialogActions, DialogContentText, DialogTitle } from "@mui/material"
import {
  ButtonDialogControl,
  DialogContent,
  StyledModalWrapper,
} from "./styles"
import { ModalProps } from "./types"
import AppsButton from "../AppsButton/AppsButton"
import { APPS_COLORS } from "../../enums"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DoneIcon from "@mui/icons-material/Done"
import TaskAltIcon from "@mui/icons-material/TaskAlt"

function ModalCreate({ open, onClose, children }: ModalProps) {
  return (
    <>
      {/* <StyledModalWrapper open={open} onClose={onClose}>
        {children}
      </StyledModalWrapper> */}
      <StyledModalWrapper
        open={open}
        onClose={onClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
          <TaskAltIcon
            style={{ color: APPS_COLORS.TEXT_WHITE, fontSize: "40px" }}
          />
        <DialogTitle>Weather card is created</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="delete-dialog-description">
            Are you sure you want to remove all cards? This action cannot be
            undone.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <ButtonDialogControl>
            <AppsButton onClick={onClose} name="Save" />
          </ButtonDialogControl>
          <ButtonDialogControl>
            <AppsButton onClick={onClose} name="Remove" />
          </ButtonDialogControl>
        </DialogActions>
      </StyledModalWrapper>
    </>
  )
}

export default ModalCreate
