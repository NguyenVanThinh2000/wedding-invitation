import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container, SectionTitle } from '@/components'
import { loveStories } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { TGuest } from '@/types'

import styles from './love-story.module.scss'

interface IProps {
  guest?: TGuest
}
export const LoveStory = ({ guest }: IProps) => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()

  useGSAP(() => {
    gsap.from('#story1', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#story1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })

    loveStories.forEach((_story, index) => {
      gsap.from(`#story2_${index}`, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        scrollTrigger: {
          trigger: `#story2_${index}`,
          start: scroll_trigger,
          end: scroll_trigger,
          scrub: 2,
        },
      })
    })
  })

  return (
    <Container className={styles.loveStoryWrapper} id="story">
      <div id="story1">
        <SectionTitle
          description={`Chỉ mất 3 giây để nói lời yêu nhưng phải mất cả cuộc đời để chứng minh điều đó`}
          title="Câu chuyện tình yêu"
        />
      </div>

      <div className={styles.stories}>
        {loveStories.map((story, index) => (
          <div key={story.id} className={styles.story} id={`story2_${index}`}>
            <p className={styles.date}>{story.date}</p>
            <h2
              dangerouslySetInnerHTML={{
                __html: story.title,
              }}
              className={styles.title}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: guest ? story.content[guest.host] : '',
              }}
              className={styles.content}
            ></p>
            <div className={styles.image}>
              <img alt="" src={story.image} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
