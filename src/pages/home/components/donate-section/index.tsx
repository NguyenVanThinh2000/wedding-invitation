import { Container, SectionTitle } from '@/components'
import { donateList } from '@/constants'

import styles from './donate-section.module.scss'

export const DonateSection = () => {
  return (
    <Container className={styles.donateSectionWrapper}>
      <SectionTitle
        description="Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi."
        title="Hộp mừng cưới"
      />

      <div className={styles.cardList}>
        {donateList.map((donate) => (
          <div key={donate.id} className={styles.card}>
            <p className={styles.title}>{donate.title}</p>
            <div className={styles.image}>
              <img alt="" src={donate.qrCode} />
            </div>
            <div className={styles.content}>
              <p>{donate.bankName}</p>
              <p>{donate.accountNumber}</p>
              <p>{donate.accountName}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
