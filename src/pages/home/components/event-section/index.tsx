import { Container, SectionTitle } from '@/components'
import { weddingSchedule } from '@/constants'

import styles from './event-section.module.scss'

export const EventSection = () => {
  return (
    <Container className={styles.eventSectionWrapper}>
      <SectionTitle
        description="Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!"
        title="Sự Kiện Cưới"
      />

      <div className={styles.scheduleList}>
        {weddingSchedule.map((schedule) => (
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
