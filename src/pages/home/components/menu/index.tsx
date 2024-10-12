import { Dispatch, SetStateAction } from 'react'

import clsx from 'clsx'
import { X } from 'lucide-react'

import styles from './menu.module.scss'

const menu = [
  {
    id: 1,
    title: 'Video Cưới',
    href: 'video',
  },
  {
    id: 2,
    title: 'Lịch',
    href: 'calendar',
  },
  {
    id: 3,
    title: 'Sự Kiện Cưới',
    href: 'event',
  },
  {
    id: 4,
    title: 'Cô Dâu & Chú Rể',
    href: 'bride-groom',
  },
  {
    id: 5,
    title: 'Chuyện Tình Yêu',
    href: 'story',
  },
  {
    id: 6,
    title: 'Album Hình Cưới',
    href: 'album',
  },
  {
    id: 7,
    title: 'Lời Ngỏ',
    href: 'invitation',
  },
  {
    id: 8,
    title: 'Mừng Cưới',
    href: 'donate',
  },
  {
    id: 9,
    title: 'Sổ Lưu Bút',
    href: 'wishes',
  },
]
interface Props {
  open?: boolean
  setOpenMenu?: Dispatch<SetStateAction<boolean>>
}
export const Menu = ({ open, setOpenMenu }: Props) => {
  const handleHiddenMenu = () => {
    setOpenMenu?.((prev) => !prev)
  }

  const handleLink = (id: string) => {
    const element = document.getElementById(id)
    const headerHeight = document.getElementById('header')?.clientHeight ?? 0
    if (element)
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      })
    setOpenMenu?.(false)
  }

  const handleCloseMenu = () => {
    setOpenMenu?.(false)
  }

  return (
    <div className={clsx(styles.menuWrapper, { [styles.show]: open })}>
      <div className={styles.overlay} onClick={handleHiddenMenu} />
      <div className={styles.menuList}>
        <div className={styles.iconClose} onClick={handleCloseMenu}>
          <X size={24} />
        </div>
        {menu.map((item) => (
          <div key={item.id} className={styles.item} onClick={handleLink.bind(null, item.href)}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}
