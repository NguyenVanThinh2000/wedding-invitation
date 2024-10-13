import { Container, SectionTitle } from '@/components'
import { loveStories } from '@/constants'

import styles from './love-story.module.scss'

export const LoveStory = () => {
  return (
    <Container className={styles.loveStoryWrapper} id="story">
      <SectionTitle
        description={`Chỉ mất 3 giây để nói lời yêu nhưng mất cả cuộc đời để chứng minh điều đó.`}
        title="Câu chuyện tình yêu"
      />

      <div className={styles.stories}>
        {loveStories.map((story) => (
          <div key={story.id} className={styles.story}>
            <p className={styles.date}>{story.date}</p>
            <h2
              dangerouslySetInnerHTML={{
                __html: story.title,
              }}
              className={styles.title}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: story.content,
              }}
              className={styles.content}
            ></p>
            <img alt="" className={styles.image} src={story.image} />
          </div>
        ))}
      </div>
    </Container>
  )
}
