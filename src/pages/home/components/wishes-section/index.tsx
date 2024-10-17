import { ChangeEvent, useEffect, useState } from 'react'

import { invitationApiEndPoints } from '@/api'
import { Button, Container, SectionTitle } from '@/components'
import { thanksForWishesMapping, thanksWishesTitleMapping } from '@/constants'
import { TGuest } from '@/types'

import { Modal } from '../modal'
import styles from './wishes-section.module.scss'

interface Props {
  guest: TGuest
}
export const WishesSection = ({ guest }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [wishes, setWishes] = useState<string>(guest.wishes)
  const [guestName, setGuestName] = useState('')
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWishes(e.target.value)
  }
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestName(e.target.value)
  }

  const handleSubmit = async () => {
    if (!wishes) return
    if (!guest.id) {
      await invitationApiEndPoints.findAndUpdateGuest({
        name: guestName,
        wishes,
      })
    } else {
      const {
        data: { data },
      } = await invitationApiEndPoints.addWishes(guest.id, wishes)
      if (data) {
        setIsOpenModal(true)
      }
    }
  }

  useEffect(() => {
    setWishes(guest.wishes)
  }, [guest])

  return (
    <Container className={styles.wishesSectionWrapper} id="wishes">
      <SectionTitle
        description={`Cảm ơn ${guest.role} rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của ${thanksWishesTitleMapping[guest.role]}!`}
        title="Sổ Lưu Bút"
      />

      <div className={styles.form}>
        {!guest.id && <input name="guestName" type="text" onChange={handleChangeName} />}
        <textarea
          id="wishes"
          name="wishes"
          placeholder={`Hãy nhập lời chúc của ${guest.role}...`}
          value={wishes}
          onChange={handleChange}
        ></textarea>
      </div>

      <Button className={styles.buttonSubmit} onClick={handleSubmit}>
        Gửi lời chúc
      </Button>
      <Modal
        content={thanksForWishesMapping[guest.role]}
        open={isOpenModal}
        onClose={setIsOpenModal}
      />
    </Container>
  )
}
