import { DialogActions, DialogContentText, DialogTitle } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

import {
  ButtonDialogControl,
  DialogContent,
  StyledModalWrapper,
} from "./styles"
import { ModalProps } from "./types"
import AppsButton from "components/AppsButton/AppsButton"
import { APPS_COLORS } from "enums"

function ModalDelete({ open, onClose, onCansel}: ModalProps) {
  return (
    
      <StyledModalWrapper
        open={open}
        onClose={onClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DeleteIcon style={{ color: APPS_COLORS.ERROR, fontSize: "32px" }} />
        <DialogTitle>Delete All Cards?</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to remove all cards? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonDialogControl>
            <AppsButton onClick={onCansel} name="Cansel" />
          </ButtonDialogControl>
          <ButtonDialogControl>
            <AppsButton onClick={onClose} name="Delete" isRed />
          </ButtonDialogControl>
        </DialogActions>
      </StyledModalWrapper>
    
  )
}

export default ModalDelete
