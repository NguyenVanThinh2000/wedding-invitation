import { useEffect, useState } from 'react'

import { CalendarCheck, CircleDollarSign, NotebookPen, Volume2 } from 'lucide-react'

import { FloatButton } from '../float-button'
import styles from './floats.module.scss'

export const Floats = () => {
  const [indexAnnounce, setIndexAnnounce] = useState(1)
  const handleGoToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAnnounce((prev) => (prev % 3) + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className={styles.floatWrapper}>
      <div className={styles.left}>
        <FloatButton animation icon={<Volume2 size={20} />} />
      </div>
      <div className={styles.right}>
        <div className={styles.buttons}>
          <FloatButton
            animation
            announce={indexAnnounce === 1}
            icon={<NotebookPen size={20} />}
            tooltip="Gửi lời chúc"
            onClick={handleGoToSection.bind(null, 'wishes')}
          />
          <FloatButton
            animation
            announce={indexAnnounce === 2}
            icon={<CalendarCheck size={20} />}
            tooltip="Xác nhận tham dự"
          />
          <FloatButton
            animation
            announce={indexAnnounce === 3}
            icon={<CircleDollarSign size={20} />}
            tooltip="Mừng cưới"
            onClick={handleGoToSection.bind(null, 'donate')}
          />
        </div>
      </div>
    </div>
  )
}
