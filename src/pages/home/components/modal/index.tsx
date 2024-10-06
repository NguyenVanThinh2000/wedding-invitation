import { Dispatch, ReactNode, SetStateAction } from 'react'
import { createPortal } from 'react-dom'

import clsx from 'clsx'

import { Button } from '@/components'
import useScrollLock from '@/hooks/useScrollLock'

import styles from './modal.module.scss'

interface Props {
  open?: boolean
  onClose?: Dispatch<SetStateAction<boolean>>
  onConfirm?: (value: boolean) => void
  content: ReactNode
}
export const Modal = ({ open, onClose, onConfirm, content }: Props) => {
  useScrollLock(open ?? false)

  const handleClose = () => {
    onClose?.(false)
  }

  const handleConfirm = (value: boolean) => {
    onConfirm?.(value)
  }

  return createPortal(
    <div className={clsx(styles.modal, { [styles.open]: open })}>
      <div className={styles.modalWrapper}>
        <div className={styles.overlay} onClick={handleClose} />
        <div className={styles.modalContent}>
          <div className={styles.content}>{content}</div>
          <div className={styles.buttons}>
            {onConfirm && (
              <Button className={styles.buttonConfirmYes} onClick={handleConfirm.bind(null, true)}>
                Có
              </Button>
            )}
            {onConfirm && (
              <Button className={styles.buttonConfirmNo} onClick={handleConfirm.bind(null, false)}>
                Không
              </Button>
            )}
            {onClose && !onConfirm && (
              <Button className={styles.buttonClose} onClick={handleClose}>
                Đóng
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
