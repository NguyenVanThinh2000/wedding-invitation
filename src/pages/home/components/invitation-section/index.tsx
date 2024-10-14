import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import subTitle from '@/assets/images/sub_title.png'
import { Container, CoupleName } from '@/components'
import { weddingPhotos } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'

import styles from './invitation-section.module.scss'

export const InvitationSection = () => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()

  useGSAP(() => {
    gsap.from('#invitation1', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#invitation1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
    gsap.from('#invitation2', {
      x: 100,
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#invitation2',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
    gsap.from('#invitation3', {
      x: -100,
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#invitation3',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
  })
  return (
    <Container className={styles.invitationSectionWrapper}>
      <div className={styles.invitationCard}>
        <div className={styles.content} id="invitation1">
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

        <img alt="" id="invitation2" src={weddingPhotos[3]} />

        <div id="invitation3">
          <CoupleName className={styles.coupleName} />
        </div>
      </div>
    </Container>
  )
}
