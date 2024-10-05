import { ReactNode } from 'react'

import clsx from 'clsx'

import styles from './container.module.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={clsx(styles.container, className)} id={id}>
      {children}
    </div>
  )
}
