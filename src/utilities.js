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
  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const dayAfterTomorrow = new Date()
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
  const dayBeforeYesterday = new Date()
  dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2)
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

export function formatTime(dateTime) {
  return dateTime.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
}
