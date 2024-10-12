import { Button, CoupleName } from '@/components'
import { invitationInfo, weddingPhotos } from '@/constants'

import styles from './invitation-cover.module.scss'
import { THost } from '@/types'

interface Props {
  onOpen: () => void
  host: THost
  guestName: string
}
export const InvitationCover = ({ onOpen, host, guestName }: Props) => {
  return (
    <div className={styles.coverWrapper}>
      <div className={styles.image}>
        <img alt="" className={styles.image} src={weddingPhotos[4]} />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>Save The Date</p>
        <p className={styles.date}>
          {invitationInfo[host].day}.{invitationInfo[host].month}.2024
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
