import subTitle from '@/assets/images/sub_title.png'
import { Container, CoupleName } from '@/components'
import { weddingPhotos } from '@/constants'

import styles from './invitation-section.module.scss'

export const InvitationSection = () => {
  return (
    <Container className={styles.invitationSectionWrapper} id="invitation">
      <div className={styles.invitationCard}>
        <img alt="" src="" />
        <div className={styles.content}>
          <div className={styles.title}>
            <span>Lời ngỏ</span>
            <img alt="" src={subTitle} />
          </div>
          <span>Một lần nữa muốn gửi lời cảm ơn đến bạn！</span>
          <span>
            Tuy bận rộn với công việc và gia đình nhưng đám cưới của tụi mình sẽ rất hạnh phúc nếu
            như có sự hiện diện của bạn!
          </span>
          <span>
            Nếu câu chuyện tình yêu của chúng mình là một cuốn sách thì bạn chính là người đọc cuồng
            nhiệt nhất!
          </span>
          <p
            dangerouslySetInnerHTML={{
              __html: `Rất vinh dự được đón tiếp các bạn trong ngày vui của tụi mình 😘`,
            }}
          ></p>
        </div>

        <img alt="" src={weddingPhotos[3]} />

        <CoupleName className={styles.coupleName} />
      </div>
    </Container>
  )
}
