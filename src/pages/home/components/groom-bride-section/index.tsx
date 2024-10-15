import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container, CoupleName, SectionTitle } from '@/components'
import { groomBrideInfo } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'

import styles from './groom-bride-section.module.scss'

export const GroomBrideSection = () => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  useGSAP(() => {
    gsap.from('#brideGroom1', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#brideGroom1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
    gsap.from('#brideGroomCard0', {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#brideGroomCard0',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
    gsap.from('#brideGroomCard1', {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#brideGroomCard1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
  })
  return (
    <Container className={styles.groomBrideSectionWrapper} id="bride-groom">
      <div id="brideGroom1">
        <SectionTitle
          description="Giới thiệu một cô dâu xinh đẹp và một chú rể đẹp trai"
          title="- Bride & Groom -"
        />

        <CoupleName className={styles.name} />
      </div>

      <div className={styles.groomBrideInfo}>
        {groomBrideInfo.map((info, index) => (
          <div key={index} className={styles.groomBride} id={`brideGroomCard${index}`}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <div className={styles.image}>
                  <img alt={info.tag} src={info.image} />
                </div>
                <p className={styles.tag}>{info.tag}</p>
                <div>
                  <p className={styles.dad}>
                    Con ông: <span>{info.dad}</span>
                  </p>
                  <p className={styles.mom}>
                    Con bà: <span>{info.mom}</span>
                  </p>
                </div>
              </div>
              <div className={styles.back}>
                <p className={styles.description}>{info.description}</p>
                <div className={styles.social}>
                  {info.social.map((social, index) => (
                    <a key={index} href={social.link} rel="noreferrer" target="_blank">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
