export const generateCalendar = (month: number, year: number) => {
  const daysInMonth = new Date(year, month, 0).getDate()
  const firstDay = new Date(year, month - 1, 1).getDay()
  const lastDay = new Date(year, month - 1, daysInMonth).getDay()
  const calendar = []

  for (let i = 0; i < firstDay; i++) {
    calendar.push({
      day: '',
      month,
    })
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({
      day: i,
      month,
    })
  }

  for (let i = 0; i < 6 - lastDay; i++) {
    calendar.push({
      day: '',
      month: month + 1 > 12 ? 1 : month + 1,
    })
  }

  const weeks = []
  for (let i = 0; i < calendar.length; i += 7) {
    weeks.push(calendar.slice(i, i + 7))
  }
  return weeks
}
