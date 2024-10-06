import { useEffect, useState } from 'react'

import { CalendarCheck, CircleDollarSign, NotebookPen, Volume2 } from 'lucide-react'

import { invitationApiEndPoints } from '@/api'

import { FloatButton } from '../float-button'
import { Modal } from '../modal'
import styles from './floats.module.scss'

interface Props {
  guestId?: string
}
export const Floats = ({ guestId }: Props) => {
  const [indexAnnounce, setIndexAnnounce] = useState(1)
  const [isOpenModalConfirmAttend, setIsOpenModalConfirmAttend] = useState(false)
  const handleGoToSection = (id: string) => {
    const section = document.getElementById(id)
    const headerHeight = document.getElementById('header')?.clientHeight ?? 0
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      })
    }
  }

  const onConfirmAttend = (value: boolean) => {
    setIsOpenModalConfirmAttend(false)
    if (guestId)
      invitationApiEndPoints.updateGuest(guestId, {
        isAttending: value,
      })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAnnounce((prev) => (prev % 3) + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
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
              onClick={() => setIsOpenModalConfirmAttend(true)}
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
      <Modal
        content="Bạn sẽ tham gia chứ ???"
        open={isOpenModalConfirmAttend}
        onConfirm={onConfirmAttend}
      />
    </>
  )
}
