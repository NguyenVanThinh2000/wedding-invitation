import { Button, CoupleName } from '@/components'
import { invitationInfo, weddingPhotos } from '@/constants'

import styles from './invitation-cover.module.scss'

interface Props {
  onOpen: () => void
  mainName: 'thoan' | 'thinh'
  guestName: string
}
export const InvitationCover = ({ onOpen, mainName, guestName }: Props) => {
  return (
    <div className={styles.coverWrapper}>
      <div className={styles.image}>
        <img alt="" className={styles.image} src={weddingPhotos[4]} />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>Save The Date</p>
        <p className={styles.date}>
          {invitationInfo[mainName].day}.{invitationInfo[mainName].month}.2024
        </p>

        <CoupleName className={styles.coupleName} />

        <p className={styles.invitation}>
          Kính mời: <span className={styles.name}>{guestName}</span>
        </p>

        <Button className={styles.button} onClick={onOpen}>
          Mở thiệp
        </Button>
      </div>
    </div>
  )
}
