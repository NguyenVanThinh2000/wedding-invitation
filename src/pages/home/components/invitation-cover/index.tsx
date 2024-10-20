import { Button, CoupleName } from '@/components'
import { invitationInfo, weddingPhotos } from '@/constants'
import { TGuest } from '@/types'

import styles from './invitation-cover.module.scss'

interface Props {
  onOpen: () => void
  guest?: TGuest
}
export const InvitationCover = ({ onOpen, guest }: Props) => {
  return (
    <div className={styles.coverWrapper}>
      <div className={styles.image}>
        <img alt="" className={styles.image} src={weddingPhotos[1]} />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>Save The Date</p>
        <p className={styles.date}>
          {guest && invitationInfo[guest.host].day}.{guest && invitationInfo[guest.host].month}.2024
        </p>

        <CoupleName className={styles.coupleName} />

        <p className={styles.invitation}>
          Kính mời: <span className={styles.name}>{guest && guest.nameInInvitation}</span>
        </p>

        <Button className={styles.button} onClick={onOpen}>
          Mở thiệp
        </Button>
      </div>
    </div>
  )
}
