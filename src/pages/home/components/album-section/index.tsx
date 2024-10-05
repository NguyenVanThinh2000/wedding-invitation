import { Button, Container, SectionTitle } from '@/components'
import { weddingPhotos } from '@/constants'

import styles from './album-section.module.scss'

export const AlbumSection = () => {
  return (
    <Container className={styles.albumWrapper} id="album">
      <SectionTitle
        description="Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí."
        title="Album Hình Cưới"
      />
      <div className={styles.images}>
        {weddingPhotos.map((imgSrc) => (
          <div key={imgSrc} className={styles.image}>
            <img alt="" src={imgSrc} />
          </div>
        ))}
      </div>

      <Button>Xem tất cả</Button>
    </Container>
  )
}
