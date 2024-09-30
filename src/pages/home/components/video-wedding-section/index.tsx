import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container, SectionTitle } from '@/components'

import YoutubeEmbed from '../youtube-embed'
import styles from './video-wedding-section.module.scss'

const VideoWeddingSection = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  const triggerOptions = {
    trigger: containerRef.current,
    start: 'top 80%',
    end: 'top 80%',
    scrub: 1,
  }

  useGSAP(
    () => {
      gsap.from(videoRef.current, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          ...triggerOptions,
          trigger: videoRef.current,
          start: 'top 86%',
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <Container>
        <SectionTitle description="Tình yêu không làm cho thế giới quay tròn." title="Video Cưới" />
        <YoutubeEmbed ref={videoRef} url="https://www.youtube.com/watch?v=HxNWvmqKLeA" />
      </Container>
    </div>
  )
}

export default VideoWeddingSection
