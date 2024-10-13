import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container, SectionTitle } from '@/components'
import { useInvitationContext } from '@/hooks/context/userInvitation'

import { YoutubeEmbed } from '../youtube-embed'
import styles from './video-wedding-section.module.scss'

export const VideoWeddingSection = () => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  console.log('scroll_trigger', scroll_trigger)
  useGSAP(() => {
    gsap.from('#video1', {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#video1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
    gsap.from('#video2', {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#video2',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
  })
  return (
    <Container className={styles.wrapper} id="video">
      <div id="video1">
        <SectionTitle
          description="Chàng trai 17 tuổi năm ấy đã giữ đúng lời hứa của mình"
          title="Hành trình 7 năm <br /> yêu nhau đầy cảm xúc"
        />
      </div>
      <div id="video2">
        <YoutubeEmbed url="https://www.youtube.com/watch?v=HxNWvmqKLeA" />
      </div>
    </Container>
  )
}
