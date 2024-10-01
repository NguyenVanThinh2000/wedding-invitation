import subTitle from '@/assets/images/sub_title.png'
import { Container } from '@/components'
import { weddingPhotos } from '@/constants'

import styles from './invitation-section.module.scss'

export const InvitationSection = () => {
  return (
    <Container className={styles.invitationSectionWrapper}>
      <div className={styles.invitationSectionWrapper}>
        <img alt="" src={weddingPhotos[3]} />

        <div className={styles.invitationCard}>
          <img alt="" src="" />
          <div className={styles.content}>
            <div className={styles.title}>
              <span>Lời ngỏ</span>
              <img alt="" src={subTitle} />
            </div>
            <span>Cảm ơn tất cả những người bạn thân yêu của tôi!</span>
            <span>
              Tôi biết các bạn rất bận rộn, bận rộn với công việc, bận rộn với công việc gia đình…
            </span>
            <span>
              Nhưng tất cả đã có mặt hôm nay để chúc mừng tinh yêu và hạnh phúc của chúng tôi.
            </span>
            <span>Một lần nữa chân thành cảm ơn tất cả các bạn!</span>
          </div>

          <div className={styles.coupleName}>Thoan Thoan &amp; Thịnh Nguyễn</div>
        </div>
      </div>
    </Container>
  )
}
