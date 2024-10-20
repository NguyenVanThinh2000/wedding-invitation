import { useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Button, Container, SectionTitle } from '@/components'
import { img1, img7, img19, img20, img26, img27 } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'

import ImagesSlider from '../images-slider'
import styles from './album-section.module.scss'

const images = [
  {
    src: img1,
    index: 0,
  },
  {
    src: img7,
    index: 6,
  },
  {
    src: img26,
    index: 16,
  },
  {
    src: img27,
    index: 17,
  },
  {
    src: img19,
    index: 19,
  },
  {
    src: img20,
    index: 20,
  },
]
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
    images.forEach((_photo, index) => {
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
      <Container className={styles.albumWrapper} id="album">
        <div id="album1">
          <SectionTitle
            description="Một đám cưới là kết quả của một mối tình đẹp đẽ, lãng mạn và bền bỉ"
            title="Album Hình Cưới"
          />
        </div>
        <div className={styles.images}>
          {images.map((image, index) => (
            <div key={image.index} className={styles.image} id={`album2_${index}`}>
              <img alt="" src={image.src} onClick={handleClickImage.bind(null, image.index)} />
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
