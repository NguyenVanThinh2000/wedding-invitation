import { Container, SectionTitle } from '@/components'
import { loveStories } from '@/constants'

import styles from './love-story.module.scss'

export const LoveStory = () => {
  return (
    <Container className={styles.loveStoryWrapper}>
      <SectionTitle
        description="Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh."
        title="Chuyện tình yêu"
      />

      <div className={styles.stories}>
        {loveStories.map((story) => (
          <div key={story.id} className={styles.story}>
            <p className={styles.date}>{story.date}</p>
            <h2 className={styles.title}>{story.title}</h2>
            <p className={styles.content}>{story.content}</p>
            <img alt="" className={styles.image} src={story.image} />
          </div>
        ))}
      </div>
    </Container>
  )
}
