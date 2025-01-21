import styled from "@emotion/styled"
import { Dialog } from "@mui/material"
import { APPS_COLORS } from "../../enums"


export const StyledModalWrapper = styled(Dialog)`
  & .MuiPaper-root {
    display: flex;
    gap: 15px;
    width: 600px;
    height: 400px;
    padding: 40px;
    border-radius: 18px;
    background: ${APPS_COLORS.MODAL_BACKGROUND};
  }
  & #delete-dialog-title {
    font-size: 26px;
    display: flex;
    justify-content: center;
    font-family: Inter, sans-serif;
    font-weight: 500;
    color: ${APPS_COLORS.TEXT_WHITE};
  }
  & #delete-dialog-description {
    font-size: 24px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: ${APPS_COLORS.TEXT_WHITE};
  }
`

export const DialogActions = styled.div`
  width: 100%;
  height: 80px;
`

export const ButtonDialogControl = styled.div`
  width: 200px;
  margin: 0px 40px;
`
export const DialogContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  padding-top: 0px;
`
