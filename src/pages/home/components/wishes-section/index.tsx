import { ChangeEvent, useState } from 'react'

import { Button, Container, SectionTitle } from '@/components'

import styles from './wishes-section.module.scss'

export const WishesSection = () => {
  const [wishes, setWishes] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWishes(e.target.value)
  }

  const handleSubmit = () => {
    if (!wishes) return
    console.log(wishes)
  }

  return (
    <Container className={styles.wishesSectionWrapper} id="wishes">
      <SectionTitle
        description="Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!"
        title="Sổ Lưu Bút"
      />

      <div className={styles.form}>
        <textarea
          id="wishes"
          name="wishes"
          placeholder="Nhập lời chúc của bạn *"
          value={wishes}
          onChange={handleChange}
        ></textarea>
      </div>

      <Button className={styles.buttonSubmit} onClick={handleSubmit}>
        Gửi lời chúc
      </Button>
    </Container>
  )
}
