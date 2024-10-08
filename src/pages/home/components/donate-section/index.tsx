import { Container, SectionTitle } from '@/components'
import { invitationInfo } from '@/constants'
import { TMainName } from '@/types'

import styles from './donate-section.module.scss'

interface Props {
  mainName: TMainName
}
export const DonateSection = ({ mainName }: Props) => {
  const donate = invitationInfo[mainName].donate
  return (
    <Container className={styles.donateSectionWrapper} id="donate">
      <SectionTitle
        description="Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi."
        title="Hộp mừng cưới"
      />

      <div className={styles.cardList}>
        <div className={styles.card}>
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
      </div>
    </Container>
  )
}
