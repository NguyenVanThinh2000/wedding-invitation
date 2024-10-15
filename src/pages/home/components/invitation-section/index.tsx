import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import subTitle from '@/assets/images/sub_title.png'
import { Container, CoupleName } from '@/components'
import { thanksWishesTitleMapping, weddingPhotos } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { TGuest } from '@/types'

import styles from './invitation-section.module.scss'

interface IProps {
  guest: TGuest
}
export const InvitationSection = ({ guest }: IProps) => {
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
    <Container className={styles.invitationSectionWrapper} id="invitation">
      <div className={styles.invitationCard}>
        <div className={styles.content} id="invitation1">
          <div className={styles.title}>
            <span>Lời ngỏ</span>
            <img alt="" src={subTitle} />
          </div>
          <span>Một lần nữa muốn gửi lời cảm ơn đến {guest.role}！</span>
          <span>
            Tuy bận rộn với công việc và gia đình nhưng đám cưới của chúng{' '}
            {thanksWishesTitleMapping[guest.role]} sẽ rất hạnh phúc nếu như có sự hiện diện của{' '}
            {guest.role}!
          </span>
          {guest.role === 'bạn' && (
            <span>
              Nếu câu chuyện tình yêu của chúng mình là một cuốn sách thì bạn chính là người đọc
              cuồng nhiệt nhất!
            </span>
          )}
          <p
            dangerouslySetInnerHTML={{
              __html: `Rất vinh dự được đón tiếp ${guest.role} trong ngày vui của chúng ${thanksWishesTitleMapping[guest.role]} 😘`,
            }}
          ></p>
        </div>

        <img alt="" id="invitation2" src={weddingPhotos[12]} />

        <div id="invitation3">
          <CoupleName className={styles.coupleName} />
        </div>
      </div>
    </Container>
  )
}
