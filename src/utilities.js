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
