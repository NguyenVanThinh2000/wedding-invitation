import { useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Button, Container, SectionTitle } from '@/components'
import { weddingPhotos } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'

import ImagesSlider from '../images-slider'
import styles from './album-section.module.scss'

export const AlbumSection = () => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  const [showImagesSlider, setShowImagesSlider] = useState(false)
  const [firstShowIndex, setFirstShowIndex] = useState(0)

  const handleClickImage = (index: number) => {
    setShowImagesSlider(true)
    setFirstShowIndex(index)
  }

  useGSAP(() => {
    gsap.from('#album1', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#album1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
    weddingPhotos.forEach((_photo, index) => {
      gsap.from(`#album2_${index}`, {
        x: index % 3 === 0 ? -100 : 100,
        opacity: 0,
        scrollTrigger: {
          trigger: `#album2_${index}`,
          start: scroll_trigger,
          end: scroll_trigger,
          scrub: index * 1 + 2,
        },
      })
    })
  })
  return (
    <>
      <Container className={styles.albumWrapper}>
        <div id="album1">
          <SectionTitle
            description="Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí."
            title="Album Hình Cưới"
          />
        </div>
        <div className={styles.images}>
          {weddingPhotos.map((imgSrc, index) => (
            <div key={imgSrc} className={styles.image} id={`album2_${index}`}>
              <img alt="" src={imgSrc} onClick={handleClickImage.bind(null, index)} />
            </div>
          ))}
        </div>

        <Button
          onClick={() => {
            setShowImagesSlider(true)
            setFirstShowIndex(0)
          }}
        >
          Xem tất cả
        </Button>
      </Container>
      <ImagesSlider
        firstShowIndex={firstShowIndex}
        isOpen={showImagesSlider}
        onClose={() => setShowImagesSlider(false)}
      />
    </>
  )
}
