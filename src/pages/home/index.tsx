import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Snowfall from 'react-snowfall'

import clsx from 'clsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { invitationApiEndPoints } from '@/api'
import audio from '@/assets/audios/beautifulInWhite.mp3'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { TGuest } from '@/types'

import {
  AlbumSection,
  CalendarSection,
  DonateSection,
  Event2Section,
  Floats,
  GroomBrideSection,
  Header,
  InvitationCover,
  InvitationSection,
  Loading,
  LoveStory,
  Menu,
  ThanksSection,
  TitleSection,
  VideoWeddingSection,
  WishesSection,
} from './components'
import styles from './home.module.scss'

const Home = () => {
  const {
    actions: { updateScrollLock, updateIsTouch },
  } = useInvitationContext()
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [guest, setGuest] = useState<TGuest>({
    name: '',
    nameInInvitation: '',
    isAttending: false,
    wishes: '',
    host: 'thoan',
    role: 'bạn',
    id: '',
  })
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const onToggleSound = () => {
    if (isAudioPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsAudioPlaying(!isAudioPlaying)
  }

  const handleAudioEnd = () => {
    audioRef.current?.play()
  }

  useEffect(() => {
    const fetchData = async () => {
      const guestId = searchParams.get('code')
      if (guestId) {
        const {
          data: { data, error },
        } = await invitationApiEndPoints.getGuest(guestId)
        if (!error) setGuest(data)
        setGuest(data)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [searchParams])

  const setSoundPlay = (value: boolean) => {
    if (value) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
    setIsAudioPlaying(value)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (isOpen) {
      audioRef.current?.play()
      setIsAudioPlaying(true)
    }
  }, [isOpen])

  useLayoutEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 500)
    }

    return () => {
      ScrollTrigger.refresh()
    }
  }, [isOpen])

  useEffect(() => {
    updateScrollLock(!isOpen || isOpenMenu)
  }, [isOpen, isOpenMenu])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.type === 'touchstart') {
        updateIsTouch('-200px 95%')
      }
    }
    window.addEventListener('touchstart', handleTouchStart)
    return () => window.removeEventListener('touchstart', handleTouchStart)
  }, [])

  return (
    <>
      <Loading isLoading={isLoading} />
      <Header setOpenMenu={setIsOpenMenu} />
      <Menu open={isOpenMenu} setOpenMenu={setIsOpenMenu} />
      <div className={clsx(styles.invitationCover, { [styles.close]: isOpen })}>
        <InvitationCover
          guestName={guest.nameInInvitation}
          host={guest.host}
          onOpen={() => setIsOpen(true)}
        />
      </div>
      <div className={clsx(styles.wrapper, { [styles.open]: isOpen })}>
        <TitleSection host={guest.host} />
        <VideoWeddingSection setSoundPlay={setSoundPlay} />
        <CalendarSection host={guest.host} />
        <Event2Section guestName={guest.nameInInvitation as string} host={guest.host} />
        <GroomBrideSection />
        <LoveStory guest={guest} />
        <AlbumSection />
        <InvitationSection guest={guest} />
        <DonateSection guest={guest} />
        <WishesSection guest={guest} />
        <ThanksSection />
      </div>
      <Floats guest={guest} isAudioPlaying={isAudioPlaying} onToggleSound={onToggleSound} />

      <audio ref={audioRef} src={audio} onEnded={handleAudioEnd} />

      <Snowfall
        color="#e57d90"
        snowflakeCount={20}
        style={{
          position: 'fixed',
          inset: 0,
        }}
      />
    </>
  )
}

export default Home
