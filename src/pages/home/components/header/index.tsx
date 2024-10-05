import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import clsx from 'clsx'
import { Menu } from 'lucide-react'

import styles from './header.module.scss'

interface Props {
  setOpenMenu?: Dispatch<SetStateAction<boolean>>
}
export const Header = ({ setOpenMenu }: Props) => {
  const [isShowHeader, setIsShowHeader] = useState(false)
  const handleOpenMenu = () => {
    setOpenMenu?.((prev) => !prev)
  }
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleShowHeader = () => {
      if (window.scrollY > 800) {
        setIsShowHeader(true)
      } else {
        setIsShowHeader(false)
      }
    }

    window.addEventListener('scroll', handleShowHeader)
    return () => window.removeEventListener('scroll', handleShowHeader)
  }, [])
  return (
    <div className={clsx(styles.headerWrapper, { [styles.show]: isShowHeader })}>
      <div className={styles.logo} onClick={handleScrollToTop}>
        T & T
      </div>
      <div className={styles.menuIcon}>
        <Menu size={24} onClick={handleOpenMenu} />
      </div>
    </div>
  )
}
