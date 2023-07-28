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

export function formatDate(dateTime) {
  const today = getDateWithOffset(0)
  const yesterday = getDateWithOffset(-1)
  const tomorrow = getDateWithOffset(1)
  const dayAfterTomorrow = getDateWithOffset(2)
  const dayBeforeYesterday = getDateWithOffset(-2)
  if (dateTime.getDate() === today.getDate() && dateTime.getMonth() === today.getMonth() && dateTime.getFullYear() === today.getFullYear()) {
    return 'היום'
  } else if (dateTime.getDate() === yesterday.getDate() && dateTime.getMonth() === yesterday.getMonth() && dateTime.getFullYear() === yesterday.getFullYear()) {
    return 'אתמול'
  } else if (dateTime.getDate() === tomorrow.getDate() && dateTime.getMonth() === tomorrow.getMonth() && dateTime.getFullYear() === tomorrow.getFullYear()) {
    return 'מחר'
  } else if (dateTime.getDate() === dayAfterTomorrow.getDate() && dateTime.getMonth() === dayAfterTomorrow.getMonth() && dateTime.getFullYear() === dayAfterTomorrow.getFullYear()) {
    return 'מחרתיים'
  } else if (dateTime.getDate() === dayBeforeYesterday.getDate() && dateTime.getMonth() === dayBeforeYesterday.getMonth() && dateTime.getFullYear() === dayBeforeYesterday.getFullYear()) {
    return 'שלשום'
  } else {
    return dateTime.toLocaleDateString('he-IL', { month: 'long', day: 'numeric' })
  }
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

export function formatTime(dateTime) {
  return dateTime.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
}
