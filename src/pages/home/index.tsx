import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Snowfall from 'react-snowfall'

import clsx from 'clsx'

import { invitationApiEndPoints } from '@/api'
import audio from '@/assets/audios/beautifulInWhite.mp3'
import useScrollLock from '@/hooks/useScrollLock'
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
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [guest, setGuest] = useState<TGuest | undefined>()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  useScrollLock(!isOpen)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [isOpen])

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
        setGuest({
          name: 'Trần Thúy Trinh',
          nameInInvitation: 'Thúy Trinh + NT',
          isAttending: false,
          wishes: 'Chúc mừng hạnh phúc hai bạn nha',
          host: 'thoan',
          role: 'bạn',
          id: '670244e3a2ea6ecae647587f',
        })
        setIsLoading(false)
      }
    }
    fetchData()
  }, [searchParams])

  useEffect(() => {
    if (isOpen) {
      audioRef.current?.play()
      setIsAudioPlaying(true)
    }
  }, [isOpen])

  return (
    <>
      <Loading isLoading={isLoading} />
      <Header setOpenMenu={setIsOpenMenu} />
      <Menu open={isOpenMenu} setOpenMenu={setIsOpenMenu} />
      {guest && (
        <>
          <div className={clsx(styles.invitationCover, { [styles.close]: isOpen })}>
            <InvitationCover
              guestName={guest.nameInInvitation}
              host={guest.host}
              onOpen={() => setIsOpen(true)}
            />
          </div>
          <div className={clsx(styles.wrapper, { [styles.open]: isOpen })}>
            <TitleSection host={guest.host} />
            <VideoWeddingSection />
            <CalendarSection host={guest.host} />
            <Event2Section guestName={guest.nameInInvitation as string} host={guest.host} />
            <GroomBrideSection />
            <LoveStory />
            <AlbumSection />
            <InvitationSection />
            <DonateSection host={guest.host} />
            <WishesSection guest={guest} />
            <ThanksSection />
          </div>

          <Floats guest={guest} isAudioPlaying={isAudioPlaying} onToggleSound={onToggleSound} />
        </>
      )}

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
