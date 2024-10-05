import { ReactNode } from 'react'

import clsx from 'clsx'

import styles from './float-button.module.scss'

interface Props {
  onClick?: () => void
  icon: ReactNode
  tooltip?: string
  tooltipPosition?: 'left' | 'right'
  animation?: boolean
  announce?: boolean
}

export const FloatButton = ({
  onClick,
  icon,
  tooltip,
  tooltipPosition = 'left',
  animation,
  announce = true,
}: Props) => {
  return (
    <div className={clsx(styles.buttonWrapper, { [styles.shake]: announce })}>
      <button className={clsx(styles.button, { [styles.animation]: animation })} onClick={onClick}>
        {icon}
      </button>
      {tooltip && <div className={clsx(styles.tooltip, styles[tooltipPosition])}>{tooltip}</div>}
    </div>
  )
}
