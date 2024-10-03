import {
  AlbumSection,
  CalendarSection,
  DonateSection,
  EventSection,
  GroomBrideSection,
  InvitationSection,
  LoveStory,
  ThanksSection,
  TitleSection,
  VideoWeddingSection,
  WishesSection,
} from './components'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <TitleSection />
      <VideoWeddingSection />
      <AlbumSection />
      <CalendarSection />
      <LoveStory />
      <InvitationSection />
      <GroomBrideSection />
      <EventSection />
      <DonateSection />
      <WishesSection />
      <ThanksSection />
    </div>
  )
}

export default Home
