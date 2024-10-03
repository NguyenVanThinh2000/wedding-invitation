import { Container } from '@/components'

import styles from './thanks-section.module.scss'

export const ThanksSection = () => {
  return (
    <Container className={styles.thanksSectionWrapper}>
      <p className={styles.title}>Thank you!</p>
      <p className={styles.name}>-- Thoan Thoan & Thịnh Nguyễn --</p>
    </Container>
  )
}
