import { useEffect, useState } from 'react'

import { CalendarCheck, CircleDollarSign, NotebookPen, Volume2, VolumeX } from 'lucide-react'

import { invitationApiEndPoints } from '@/api'
import {
  questionAttendMapping,
  thanksForAttendConfirmNoMapping,
  thanksForAttendConfirmYesMapping,
} from '@/constants'
import { TGuest } from '@/types'

import { FloatButton } from '../float-button'
import { Modal } from '../modal'
import styles from './floats.module.scss'

interface Props {
  guest: TGuest
  onToggleSound?: () => void
  isAudioPlaying?: boolean
}

export const Floats = ({ guest, onToggleSound, isAudioPlaying }: Props) => {
  const [indexAnnounce, setIndexAnnounce] = useState(1)
  const [isOpenModalConfirmAttend, setIsOpenModalConfirmAttend] = useState(false)
  const [isOpenModalThanksYes, setIsOpenModalThanksYes] = useState(false)
  const [isOpenModalThanksNo, setIsOpenModalThanksNo] = useState(false)

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
    if (value) setIsOpenModalThanksYes(true)
    else setIsOpenModalThanksNo(true)
    invitationApiEndPoints.updateGuest(guest.id, {
      isAttending: value,
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAnnounce((prev) => (prev % 3) + 1)
    }, 7000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className={styles.floatWrapper}>
        <div className={styles.left}>
          <FloatButton
            animation
            icon={isAudioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            onClick={onToggleSound}
          />
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
        content={questionAttendMapping[guest.role]}
        open={isOpenModalConfirmAttend}
        onConfirm={onConfirmAttend}
        onClose={() => setIsOpenModalConfirmAttend(false)}
      />
      <Modal
        content={thanksForAttendConfirmYesMapping[guest.role]}
        open={isOpenModalThanksYes}
        onClose={() => setIsOpenModalThanksYes(false)}
      />
      <Modal
        content={thanksForAttendConfirmNoMapping[guest.role]}
        open={isOpenModalThanksNo}
        onClose={() => setIsOpenModalThanksNo(false)}
      />
    </>
  )
}
