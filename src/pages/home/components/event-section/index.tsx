import { Container, SectionTitle } from '@/components'
import { invitationInfo } from '@/constants'

import styles from './event-section.module.scss'
import { THost } from '@/types'

interface Props {
  host: THost
}
export const EventSection = ({ host }: Props) => {
  const locationList = invitationInfo[host].location

  return (
    <Container className={styles.eventSectionWrapper} id="event">
      <SectionTitle description="" title="Sự Kiện Cưới" />

      <div className={styles.scheduleList}>
        {locationList.map((schedule) => (
          <div key={schedule.id} className={styles.scheduleItem}>
            <div className={styles.image}>
              {/* <img alt={schedule.title} src={schedule.image} /> */}
            </div>
            <div className={styles.content}>
              {/* <p className={styles.title}>{schedule.title}</p> */}
              <div className={styles.middleContent}>
                {/* <p>{schedule.dateTime}</p> */}
                {/* <p>{schedule.location}</p> */}
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
