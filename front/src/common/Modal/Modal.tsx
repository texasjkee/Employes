import { FC } from 'react'

import style from './/Modal.module.css'

interface ModalProps {
  message: string
}

export const Modal: FC<ModalProps> = ({ message }) => {
  return <div className={style.modal}>{message} </div>
}
