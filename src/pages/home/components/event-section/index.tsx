import { Container, SectionTitle } from '@/components'
import { invitationInfo } from '@/constants'

import styles from './event-section.module.scss'

interface Props {
  mainName: 'thoan' | 'thinh'
}
export const EventSection = ({ mainName }: Props) => {
  const locationList = invitationInfo[mainName].location

  return (
    <Container className={styles.eventSectionWrapper} id="event">
      <SectionTitle
        description="Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!"
        title="Sự Kiện Cưới"
      />

      <div className={styles.scheduleList}>
        {locationList.map((schedule) => (
          <div key={schedule.id} className={styles.scheduleItem}>
            <div className={styles.image}>
              <img alt={schedule.title} src={schedule.image} />
            </div>
            <div className={styles.content}>
              <p className={styles.title}>{schedule.title}</p>
              <div className={styles.middleContent}>
                <p>{schedule.dateTime}</p>
                <p>{schedule.location}</p>
              </div>
              <a
                className={styles.mapButton}
                href={schedule.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                Xem bản đồ
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
