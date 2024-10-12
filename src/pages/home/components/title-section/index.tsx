import { Container } from '@/components'
import { CoupleName } from '@/components'
import { invitationInfo, weddingPhotos } from '@/constants'
import { PropsParams } from '@/types'

import heart from '../../../../assets/images/heart-icon.png'
import weddinglabel from '../../../../assets/images/wedding-label.png'
import styles from './title-section.module.scss'

export const TitleSection = ({ host }: PropsParams) => {
  const data = invitationInfo[host]
  return (
    <Container className={styles.titleSectionWrapper}>
      <div className={styles.title}>
        <div className={styles.we}>Chúng tôi</div>
        <div className={styles.dayMonth}>
          <span className={styles.day}>{data.day}</span>
          <span className={styles.month}>{data.month}</span>
        </div>
        <div className={styles.marry}>Sắp kết hôn</div>
      </div>
      <div className={styles.image}>
        <img alt="" className={styles.image1} src={weddingPhotos[3]} />
        <img alt="" className={styles.label} src={weddinglabel} />
      </div>

      <CoupleName className={styles.name} />

      <div className={styles.fullDate}>
        {invitationInfo[host].weekDay}. {invitationInfo[host].day} /{' '}
        {invitationInfo[host].month} / 2024{' '}
      </div>
      <div className={styles.dayMonth2}>
        <span className={styles.day}>{invitationInfo[host].day}</span>
        <img alt="" src={heart} />
        <span className={styles.month}>{invitationInfo[host].month}</span>
      </div>
    </Container>
  )
}
