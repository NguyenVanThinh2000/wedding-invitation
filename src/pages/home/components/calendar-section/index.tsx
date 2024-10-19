import { useEffect, useState } from 'react'

import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import gsap from 'gsap'

import { Container, CoupleName } from '@/components'
import { YEAR, invitationInfo, weekDays } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { THost } from '@/types'
import { countdown, generateCalendar } from '@/utils'

import styles from './calendar-section.module.scss'

interface Props {
  host: THost
}
export const CalendarSection = ({ host }: Props) => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  const [dateRemaining, setDateRemaining] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })
  const month = invitationInfo[host].month
  const weeks = generateCalendar(Number(month), YEAR)

  useGSAP(() => {
    gsap.from('#calendar', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#calendar',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { days, hours, minutes, seconds } = countdown(
        `${invitationInfo[host].day}/${month}/${YEAR}`,
      )
      setDateRemaining({ days, hours, minutes, seconds })
      if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
        clearInterval(intervalId)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [host, month])

  return (
    <div id="calendar">
      <Container className={styles.calendarSectionWrapper} id="calendar">
        <CoupleName className={styles.name} />

        <div className={styles.date}>
          Tháng {month} / {YEAR}
        </div>

        <div className={styles.calendarWrapper}>
          <div className={styles.header}>
            {weekDays.map((day) => (
              <div key={day} className={styles.day}>
                {day}
              </div>
            ))}
          </div>

          <div className={styles.body}>
            {weeks.map((week, index) => (
              <div key={`row_${index}`} className={styles.week}>
                {week.map((day, index) => (
                  <div key={index} className={styles.day}>
                    <span
                      className={clsx({
                        [styles.active]: day === Number(invitationInfo[host].day),
                      })}
                    >
                      {day}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.countDown}>
            <div className={styles.countDownItem}>
              <div className={styles.number}>{dateRemaining.days}</div>
              <div className={styles.text}>Ngày</div>
            </div>
            <div className={styles.countDownItem}>
              <div className={styles.number}>{dateRemaining.hours}</div>
              <div className={styles.text}>Giờ</div>
            </div>
            <div className={styles.countDownItem}>
              <div className={styles.number}>{dateRemaining.minutes}</div>
              <div className={styles.text}>Phút</div>
            </div>
            <div className={styles.countDownItem}>
              <div className={styles.number}>{dateRemaining.seconds}</div>
              <div className={styles.text}>Giây</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
