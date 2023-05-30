import dayjs from 'dayjs'

export function dateParser(date: Date): string {
  const dateOfPtBr = date
  const formattedDate = dayjs(dateOfPtBr).format('DD/MM/YYYY [às] HH:mm')
  return formattedDate
}
