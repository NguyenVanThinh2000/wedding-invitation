import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import clsx from 'clsx'
import { ArrowLeft, ArrowRight, Copy, DownloadIcon, X } from 'lucide-react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { weddingPhotos } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'

import styles from './images-slider.module.scss'

interface ImagesSliderProps {
  isOpen: boolean
  onClose: () => void
  firstShowIndex?: number
}
const ImagesSlider = ({ isOpen, onClose, firstShowIndex }: ImagesSliderProps) => {
  const {
    actions: { updateScrollLock },
  } = useInvitationContext()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)
  const [currentSlide, setCurrentSlide] = useState<{
    src: string
    index: number
  }>({
    src: weddingPhotos[0],
    index: 0,
  })

  const handleCopyToClipboard = async () => {
    try {
      const response = await fetch(currentSlide.src)
      const blob = await response.blob()

      const item = new ClipboardItem({ ['image/png']: blob })

      await navigator.clipboard.write([item])
    } catch (error) {
      console.log('Error copying to clipboard:', error)
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = currentSlide.src
    link.download = currentSlide.src.split('/').pop() as string
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const onClickPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  const onClickNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }

  useEffect(() => {
    updateScrollLock(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (firstShowIndex !== undefined && swiperRef.current) {
      setCurrentSlide({
        src: weddingPhotos[firstShowIndex],
        index: firstShowIndex,
      })
      swiperRef.current.swiper.slideTo(firstShowIndex)
    }
  }, [firstShowIndex])
  return createPortal(
    <div className={clsx(styles.sliderWrapper, { [styles.open]: isOpen })}>
      <div className={styles.header}>
        <div className={styles.left}>
          {currentSlide.index + 1}/{weddingPhotos.length}
        </div>
        <div className={styles.right}>
          <Copy className={styles.copy} size={20} onClick={handleCopyToClipboard} />
          <DownloadIcon className={styles.download} size={20} onClick={handleDownload} />
          <X className={styles.iconClose} size={20} onClick={onClose} />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        className={styles.slider}
        slidesPerView={1}
        spaceBetween={0}
        onSlideChange={(e) => {
          setCurrentSlide({
            src: weddingPhotos[e.activeIndex],
            index: e.activeIndex,
          })
        }}
      >
        {weddingPhotos.map((imgSrc) => (
          <SwiperSlide key={imgSrc}>
            <div className={styles.slideItem}>
              <img alt="" src={imgSrc} />
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>

      <button className={clsx(styles.buttonNavigate, styles.buttonLeft)} onClick={onClickPrev}>
        <ArrowLeft size={20} />
      </button>
      <button className={clsx(styles.buttonNavigate, styles.buttonRight)} onClick={onClickNext}>
        <ArrowRight size={20} />
      </button>
    </div>,
    document.body,
  )
}

export default ImagesSlider
