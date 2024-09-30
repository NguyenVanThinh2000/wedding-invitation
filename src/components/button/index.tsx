import { ReactNode } from 'react'

import clsx from 'clsx'

import styles from './button.module.scss'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}
export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </div>
  )
}
