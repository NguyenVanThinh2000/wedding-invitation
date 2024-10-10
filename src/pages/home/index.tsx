import { useEffect, useRef, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Snowfall from 'react-snowfall'

import clsx from 'clsx'

import { invitationApiEndPoints } from '@/api'
import audio from '@/assets/audios/beautifulInWhite.mp3'
import useScrollLock from '@/hooks/useScrollLock'
import { TGuest, TMainName, TParam } from '@/types'

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
  const { invitationId } = useParams<TParam>()
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
      <div className={clsx(styles.invitationCover, { [styles.close]: isOpen })}>
        <InvitationCover
          guestName={guest?.nameInInvitation || 'Bạn'}
          mainName={invitationId as TMainName}
          onOpen={() => setIsOpen(true)}
        />
      </div>
      <div className={clsx(styles.wrapper, { [styles.open]: isOpen })}>
        <TitleSection mainName={invitationId as TMainName} />
        <VideoWeddingSection />
        <CalendarSection mainName={invitationId as TMainName} />
        <Event2Section
          guestName={guest?.nameInInvitation as string}
          mainName={invitationId as TMainName}
        />
        <GroomBrideSection />
        <LoveStory />
        <AlbumSection />
        <InvitationSection />
        <DonateSection mainName={invitationId as TMainName} />
        <WishesSection defaultWishes={guest?.wishes} guestId={guest?.id} />
        <ThanksSection />
      </div>

      <Floats guestId={guest?.id} isAudioPlaying={isAudioPlaying} onToggleSound={onToggleSound} />

      <audio ref={audioRef} autoPlay src={audio} onEnded={handleAudioEnd} />

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
