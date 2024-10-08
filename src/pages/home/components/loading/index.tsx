import { createPortal } from 'react-dom'

import clsx from 'clsx'
import { LoaderCircle } from 'lucide-react'

import styles from './loading.module.scss'

interface Props {
  isLoading: boolean
}
export const Loading = ({ isLoading }: Props) => {
  return createPortal(
    <div className={clsx(styles.loadingWrapper, { [styles.loading]: isLoading })}>
      <LoaderCircle className={styles.loader} size={24} />
    </div>,
    document.body,
  )
}
