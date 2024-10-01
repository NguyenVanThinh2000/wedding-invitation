import {
  AlbumSection,
  CalendarSection,
  EventSection,
  GroomBrideSection,
  InvitationSection,
  LoveStory,
  TitleSection,
  VideoWeddingSection,
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
    </div>
  )
}

export default Home
