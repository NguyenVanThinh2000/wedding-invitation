import { useEffect, useRef, useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container } from '@/components'
import { CoupleName } from '@/components'
import { invitationInfo, weddingPhotos } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { PropsParams } from '@/types'

import heart from '../../../../assets/images/heart-icon.png'
import weddinglabel from '../../../../assets/images/wedding-label.png'
import styles from './title-section.module.scss'

export const TitleSection = ({ host }: PropsParams) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const data = invitationInfo[host]
  const ref1 = useRef<HTMLDivElement>(null)
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  useGSAP(() => {
    if (!isImageLoaded) return
    gsap.from('#titleSection1', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#titleSection1',
        scrub: 2,
        start: scroll_trigger,
        end: scroll_trigger,
      },
    })
  }, [isImageLoaded])
  useEffect(() => {
    const img = new Image()
    img.src = weddingPhotos[9]
    img.onload = () => {
      setIsImageLoaded(true)
    }
  }, [])
  return (
    <Container className={styles.titleSectionWrapper}>
      <div className={styles.title}>
        <div className={styles.we}>Chúng tôi</div>
        <div className={styles.dayMonth}>
          <span className={styles.day}>{data.day}</span>
          <span className={styles.month}>{data.month}</span>
        </div>
        <div className={styles.marry}>Sắp kết hôn</div>
      </div>
      <div className={styles.image}>
        <img alt="" className={styles.image1} src={weddingPhotos[9]} />
        <img alt="" className={styles.label} src={weddinglabel} />
      </div>

      <div ref={ref1} id="titleSection1">
        <CoupleName className={styles.name} />

        <div className={styles.fullDate}>
          {invitationInfo[host].weekDay}. {invitationInfo[host].day} / {invitationInfo[host].month}{' '}
          / 2024{' '}
        </div>
        <div className={styles.dayMonth2}>
          <span className={styles.day}>{invitationInfo[host].day}</span>
          <img alt="" src={heart} />
          <span className={styles.month}>{invitationInfo[host].month}</span>
        </div>
      </div>
    </Container>
  )
}
