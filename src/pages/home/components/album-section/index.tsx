import { Button, Container, SectionTitle } from '@/components'
import { weddingPhotos } from '@/constants'

import styles from './album-section.module.scss'

const AlbumSection = () => {
  return (
    <Container className={styles.albumWrapper}>
      <SectionTitle
        description="Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí."
        title="Album Hình Cưới"
      />
      <div className={styles.images}>
        {weddingPhotos.map((imgSrc) => (
          <img key={imgSrc} alt="" src={imgSrc} />
        ))}
      </div>

      <Button className={styles.button}>Xem thêm</Button>
    </Container>
  )
}

export default AlbumSection
