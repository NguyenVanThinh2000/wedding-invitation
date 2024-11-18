import { Button, CoupleName } from '@/components'
import { weddingPhotos } from '@/constants'
import { TGuest } from '@/types'
import { getInformation } from '@/utils'

import styles from './invitation-cover.module.scss'

interface Props {
  onOpen: () => void
  guest?: TGuest
}
export const InvitationCover = ({ onOpen, guest }: Props) => {
  const data = guest && getInformation(guest.location)[guest.host]
  return (
    <div className={styles.coverWrapper}>
      <div className={styles.image}>
        <img alt="" className={styles.image} src={weddingPhotos[1]} />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>Save The Date</p>
        <p className={styles.date}>
          {data?.day}.{data?.month}.2024
        </p>

        <CoupleName className={styles.coupleName} />

        <p className={styles.invitation}>
          Kính mời: <span className={styles.name}>{guest?.nameInInvitation}</span>
        </p>

        <Button className={styles.button} onClick={onOpen}>
          Mở thiệp
        </Button>
      </div>
    </div>
  )
}
