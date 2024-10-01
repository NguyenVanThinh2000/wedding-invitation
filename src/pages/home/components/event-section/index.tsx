import { Container, SectionTitle } from '@/components'

import styles from './event-section.module.scss'

export const EventSection = () => {
  return (
    <Container className={styles.eventSectionWrapper}>
      <SectionTitle
        description="Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!"
        title="Sự Kiện Cưới"
      />
    </Container>
  )
}
