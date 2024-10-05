import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Snowfall from 'react-snowfall'

import clsx from 'clsx'

import { Button } from '@/components'
import useScrollLock from '@/hooks/useScrollLock'
import { TParam } from '@/types'

import {
  AlbumSection,
  CalendarSection,
  DonateSection,
  EventSection,
  Floats,
  GroomBrideSection,
  Header,
  InvitationSection,
  LoveStory,
  Menu,
  ThanksSection,
  TitleSection,
  VideoWeddingSection,
  WishesSection,
} from './components'
import styles from './home.module.scss'

const Home = () => {
  const { invitationId } = useParams<TParam>()
  const mainName = invitationId === 'thinh' ? 'thinh' : 'thoan'

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  useScrollLock(!isOpen)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [isOpen])

  return (
    <>
      <Header setOpenMenu={setIsOpenMenu} />
      <Menu open={isOpenMenu} setOpenMenu={setIsOpenMenu} />
      <div className={clsx(styles.invitationCover, { [styles.close]: isOpen })}>
        <Button onClick={() => setIsOpen(true)}>Mở thiệp</Button>
      </div>
      <div className={clsx(styles.wrapper, { [styles.open]: isOpen })}>
        <TitleSection mainName={mainName} />
        <VideoWeddingSection />
        <AlbumSection />
        <CalendarSection />
        <LoveStory />
        <InvitationSection />
        <GroomBrideSection />
        <EventSection mainName={mainName} />
        <DonateSection />
        <WishesSection />
        <ThanksSection />
      </div>

      <Floats />

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
