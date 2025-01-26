import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  onCansel: () => void;
  children: ReactNode;
}