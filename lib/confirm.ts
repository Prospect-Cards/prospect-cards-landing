import { createConfirmation } from 'react-confirm'
import Confirmation from 'components/common/Confirmation'

// create confirm function
export const confirmation = createConfirmation(Confirmation)

const confirm: (
  text: string,
  title?: string,
  confirmText?: string
) => Promise<string> = (text, title, confirmText) => {
  return confirmation({ text, title, confirmText })
}

export default confirm
