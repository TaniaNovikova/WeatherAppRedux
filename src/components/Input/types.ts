import { ChangeEvent, HTMLInputTypeAttribute } from "react"

export interface InputProps {
  name: string
  id?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string | undefined
  error?: string
}
