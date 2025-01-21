type ButtonType = "button" | 'submit' | "reset";

export interface ButtonProps {
  name: string;
  type?: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  isRed?: boolean;
  isMain?: boolean;
  backgroundColor?: string;
  borderColor?: string;
}