export function parseDate(date: string): Date {
  const parts = date.split('/')
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1 // Subtract 1 from month because it's zero-indexed
  const year = parseInt(parts[2], 10)
  return new Date(year, month, day)
}
export function formatTime(value: number): string {
  return value < 10 ? `0${value}` : `${value}`
}
export function countdown(futureDateStr: string) {
  const futureDate = parseDate(futureDateStr)
  const now = new Date()
  const timeDiff = futureDate.getTime() - now.getTime()
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

  return {
    days: formatTime(days),
    hours: formatTime(hours),
    minutes: formatTime(minutes),
    seconds: formatTime(seconds),
  }
}
