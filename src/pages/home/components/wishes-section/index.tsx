import { ChangeEvent, useEffect, useState } from 'react'

import { invitationApiEndPoints } from '@/api'
import { Button, Container, SectionTitle } from '@/components'

import { Modal } from '../modal'
import styles from './wishes-section.module.scss'

interface Props {
  defaultWishes?: string
  guestId?: string
}
export const WishesSection = ({ defaultWishes, guestId }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [wishes, setWishes] = useState<string>(defaultWishes ?? '')
  const [guestName, setGuestName] = useState('')
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWishes(e.target.value)
  }
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestName(e.target.value)
  }

  const handleSubmit = async () => {
    if (!wishes) return
    if (!guestId) {
      await invitationApiEndPoints.findAndUpdateGuest({
        name: guestName,
        wishes,
      })
    } else {
      const {
        data: { data },
      } = await invitationApiEndPoints.addWishes(guestId, wishes)
      if (data) {
        setIsOpenModal(true)
      }
    }
  }

  useEffect(() => {
    setWishes(defaultWishes ?? '')
  }, [defaultWishes])

  return (
    <Container className={styles.wishesSectionWrapper} id="wishes">
      <SectionTitle
        description="Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!"
        title="Sổ Lưu Bút"
      />

      <div className={styles.form}>
        {!guestId && <input name="guestName" type="text" onChange={handleChangeName} />}
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
      <Modal
        content="Cảm ơn bạn đã gửi lời chúc tới bọn mình nha !!!"
        open={isOpenModal}
        onClose={setIsOpenModal}
      />
    </Container>
  )
}
