import { Container, SectionTitle } from '@/components'

import { YoutubeEmbed } from '../youtube-embed'
import styles from './video-wedding-section.module.scss'

export const VideoWeddingSection = () => {
  return (
    <Container className={styles.wrapper} id="video">
      <SectionTitle
        description="Chàng trai 17 tuổi năm ấy đã giữ đúng lời hứa của mình"
        title="Hành trình 7 năm <br /> yêu nhau đầy cảm xúc"
      />
      <YoutubeEmbed url="https://www.youtube.com/watch?v=HxNWvmqKLeA" />
    </Container>
  )
}
