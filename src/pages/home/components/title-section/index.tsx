import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import gsap from 'gsap'

import { Button, Container } from '@/components'
import { weddingPhotos } from '@/constants'

import styles from './title-section.module.scss'

export const TitleSection = () => {
  const triggerOptions = {
    trigger: '.button1',
    start: 'top 90%',
    end: 'top 90%',
    scrub: 1,
  }

  useGSAP(() => {
    gsap.from('.button1', {
      x: -200,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: triggerOptions,
    })
    gsap.from('.button2', {
      y: 200,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: triggerOptions,
    })
    gsap.from('.button3', {
      x: 200,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: triggerOptions,
    })
  })
  return (
    <Container>
      <div className={styles.title}>
        Thoan Thoan <span className={styles.heart}>❤ </span> Thịnh Nguyễn <br /> sắp kết hôn
      </div>
      <div className={styles.image}>
        <img alt="" className={styles.image1} src={weddingPhotos[3]} />
      </div>
      <div className={styles.name}>{`Thoan Thoan & Thịnh Nguyễn`}</div>
      <div className={styles.groupButton}>
        <Button className={clsx(styles.button, 'button1')}>Gửi lời chúc</Button>
        <Button className={clsx(styles.button, 'button2')}>Xác nhận tham dự</Button>
        <Button className={clsx(styles.button, 'button3')}>Mừng cưới</Button>
      </div>
    </Container>
  )
}
