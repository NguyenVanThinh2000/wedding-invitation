import clsx from 'clsx'

import { Container } from '@/components'
import { weekDays } from '@/constants'
import { generateCalendar } from '@/utils'

import styles from './calendar-section.module.scss'

export const CalendarSection = () => {
  const month = 12
  const year = 2024
  const weeks = generateCalendar(month, year)

  return (
    <Container className={styles.calendarSectionWrapper}>
      <div className={styles.title}>Thoan Thoan ♥ Thịnh Nguyễn</div>

      <div className={styles.date}>
        Tháng {month} / {year}
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
                      [styles.active]: day === 10,
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
            <div className={styles.number}>00</div>
            <div className={styles.text}>Ngày</div>
          </div>
          <div className={styles.countDownItem}>
            <div className={styles.number}>00</div>
            <div className={styles.text}>Giờ</div>
          </div>
          <div className={styles.countDownItem}>
            <div className={styles.number}>00</div>
            <div className={styles.text}>Phút</div>
          </div>
          <div className={styles.countDownItem}>
            <div className={styles.number}>00</div>
            <div className={styles.text}>Giây</div>
          </div>
        </div>
      </div>
    </Container>
  )
}
