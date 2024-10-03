import { weddingPhotos } from '@/constants'

import weddinglabel from '../../../../assets/images/wedding-label.png'
import styles from './title-section.module.scss'

export const TitleSection = () => {
  return (
    <div className={styles.titleSectionWrapper}>
      <div className={styles.title}>
        Thoan Thoan <span className={styles.heart}>❤ </span> Thịnh Nguyễn sắp kết hôn
      </div>
      <div className={styles.image}>
        <img alt="" className={styles.image1} src={weddingPhotos[3]} />
        <img alt="" className={styles.label} src={weddinglabel} />
      </div>
      <div className={styles.name}>Thoan Thoan ♥ Thịnh Nguyễn</div>

      <div className={styles.dates}>
        <div className={styles.date}>Thứ 5. 04 / 04 / 2024 - Nhà Nữ</div>
        <div className={styles.date}>Thứ 5. 04 / 04 / 2024 - Nhà Nam</div>
      </div>
    </div>
  )
}
