import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container, SectionTitle } from '@/components'
import { invitationInfo } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { THost } from '@/types'

import styles from './donate-section.module.scss'

interface Props {
  host: THost
}
export const DonateSection = ({ host }: Props) => {
  const donate = invitationInfo[host].donate
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  useGSAP(() => {
    gsap.from('#donate1', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#donate1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
    gsap.from('#donateCard', {
      x: 100,
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#donateCard',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
  })
  return (
    <Container className={styles.donateSectionWrapper} id="donate">
      <div id="donate1">
        <SectionTitle
          description={`Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng mình.`}
          title="Hộp mừng cưới"
        />
      </div>

      <div className={styles.cardList} id="donateCard">
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
