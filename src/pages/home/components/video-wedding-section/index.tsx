import { Container, SectionTitle } from '@/components'

import { YoutubeEmbed } from '../youtube-embed'
import styles from './video-wedding-section.module.scss'

export const VideoWeddingSection = () => {
  return (
    <Container className={styles.wrapper} id="video">
      <SectionTitle description="Tình yêu không làm cho thế giới quay tròn." title="Video Cưới" />
      <YoutubeEmbed url="https://www.youtube.com/watch?v=HxNWvmqKLeA" />
    </Container>
  )
}
