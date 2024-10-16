import clsx from 'clsx'

import styles from './couple-name.module.scss'

interface Props {
  className?: string
}
export const CoupleName = ({ className }: Props) => {
  return (
    <div className={clsx(styles.coupleName, className)}>
      Thoan Thoan <span>♥</span> Nguyễn Thịnh
    </div>
  )
}
