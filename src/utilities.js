export function getTypeSubclass(type) {
  switch (type) {
    case 'כללי':
      return 'general'
    case 'פגישה':
      return 'meeting'
    case 'שיחה':
      return 'call'
    case 'פיננסי':
      return 'financial'
  }
}

export function areDatesEqual(date1, date2) {
  if (!date1 || !date2) {
    return false
  }
  return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
}

export function isFutureDate(date) {
  return date !== null && new Date() < date
}

export function isPastDate(date) {
  return date !== null && new Date() > date
}

export function getDateWithOffset(offset, hours, minutes, seconds, milliseconds) {
  const date = new Date()
  if (hours !== undefined) date.setHours(hours)
  if (minutes !== undefined) date.setMinutes(minutes)
  if (seconds !== undefined) date.setSeconds(seconds)
  if (milliseconds !== undefined) date.setMilliseconds(milliseconds)
  date.setDate(date.getDate() + offset)
  return date
}

export function formatDate(dateTime) {
  const today = getDateWithOffset(0)
  const yesterday = getDateWithOffset(-1)
  const tomorrow = getDateWithOffset(1)
  const dayAfterTomorrow = getDateWithOffset(2)
  const dayBeforeYesterday = getDateWithOffset(-2)
  if (areDatesEqual(dateTime, today)) {
    return 'היום'
  } else if (areDatesEqual(dateTime, yesterday)) {
    return 'אתמול'
  } else if (areDatesEqual(dateTime, tomorrow)) {
    return 'מחר'
  } else if (areDatesEqual(dateTime, dayAfterTomorrow)) {
    return 'מחרתיים'
  } else if (areDatesEqual(dateTime, dayBeforeYesterday)) {
    return 'שלשום'
  } else {
    return dateTime.toLocaleDateString('he-IL', { month: 'long', day: 'numeric' })
  }
}

export function formatTime(dateTime) {
  return dateTime.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
}
