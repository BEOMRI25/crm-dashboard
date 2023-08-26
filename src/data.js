import { getDateWithOffset } from './utilities'

export const tasks = [
  {
    id: 1,
    type: 'שיחה',
    description: 'להתקשר ללקוחות שהשאירו פרטים',
    dateTime: getDateWithOffset(-1),
    displayTime: false,
    assignedUser: 'אני',
    customerId: 1,
    productId: 1,
    comment: 'הערה חשובה מאוד',
  },
  {
    id: 2,
    type: 'כללי',
    description: 'לכתוב תסריט לארבעה סרטונים חדשים',
    dateTime: getDateWithOffset(0, 23, 59, 59, 999),
    displayTime: false,
    assignedUser: 'אוראל ספיר',
    customerId: null,
    productId: 2,
    comment: 'לשאול רשימת שאלות',
  },
  {
    id: 3,
    type: 'פיננסי',
    description: 'להעביר את התשלום לצוות הפיתוח',
    dateTime: getDateWithOffset(0, 8, 0),
    displayTime: true,
    assignedUser: 'אני',
    customerId: 2,
    productId: null,
    comment: null,
  },
  {
    id: 4,
    type: 'פגישה',
    description: 'לקבוע פגישה עם אוראל ספיר',
    dateTime: getDateWithOffset(0, 20, 0),
    displayTime: true,
    assignedUser: 'אני',
    customerId: 3,
    productId: null,
    comment: 'לא לשכוח לקחת מסמכים',
  },
  {
    id: 5,
    type: 'כללי',
    description: 'לכתוב את הבריף לפגישה של יום חמישי',
    dateTime: null,
    displayTime: false,
    assignedUser: 'עמרי ברגמן',
    customerId: null,
    productId: 2,
    comment: 'הערה חשובה מאוד',
  },
  {
    id: 6,
    type: 'פיננסי',
    description: 'להעביר את הדו"חות לרואה חשבון',
    dateTime: getDateWithOffset(1, 16, 0),
    displayTime: true,
    assignedUser: 'אביב כהן',
    customerId: 4,
    productId: 1,
    comment: null,
  },
  {
    id: 7,
    type: 'כללי',
    description: 'לחפש ספקים למוצר החדש',
    dateTime: getDateWithOffset(2, 8, 0),
    displayTime: true,
    assignedUser: 'אני',
    customerId: null,
    productId: null,
    comment: 'הערה חשובה מאוד',
  },
  {
    id: 8,
    type: 'פגישה',
    description: 'פגישה עם המנכ"ל',
    dateTime: getDateWithOffset(7, 10, 0),
    displayTime: true,
    assignedUser: 'אני',
    customerId: null,
    productId: null,
    comment: 'הערה חשובה מאוד',
  },
]

export const customers = [
  {
    id: 1,
    name: 'שירי מזור',
  },
  {
    id: 2,
    name: 'הדר כץ',
  },
  {
    id: 3,
    name: 'ירדן סמואלוב',
  },
  {
    id: 4,
    name: 'יהודית וייס',
  },
  {
    id: 5,
    name: 'פזית בן שמואל',
  },
  {
    id: 6,
    name: 'ליאת בת אבן',
  },
  {
    id: 7,
    name: 'רועי פינקלשטיין',
  },
  {
    id: 8,
    name: 'נועה אלוש',
  },
]

export const products = [
  {
    id: 1,
    name: 'סימפלאן מערכת מלאה - מנוי חודשי',
  },
  {
    id: 2,
    name: 'מוצרי עבר CEO',
  },
]

export const leads = [
  {
    id: 1,
    customerId: 5,
    source: 'instagram',
  },
  {
    id: 2,
    customerId: 2,
    source: 'whatsapp',
  },
  {
    id: 3,
    customerId: 3,
    source: 'website',
  },
  {
    id: 4,
    customerId: 6,
    source: 'facebook',
  },
  {
    id: 5,
    customerId: 7,
    source: 'website',
  },
  {
    id: 6,
    customerId: 7,
    source: 'instagram',
  },
  {
    id: 7,
    customerId: 3,
    source: 'facebook',
  },
  {
    id: 8,
    customerId: 6,
    source: 'whatsapp',
  },
  {
    id: 9,
    customerId: 7,
    source: 'whatsapp',
  },
]

export const trackedCustomers = [
  {
    id: 1,
    customerId: 8,
    dateTime: getDateWithOffset(10, 18, 0),
  },
  {
    id: 2,
    customerId: 2,
    dateTime: getDateWithOffset(7, 9, 30),
  },
  {
    id: 3,
    customerId: 3,
    dateTime: getDateWithOffset(2, 16, 30),
  },
  {
    id: 4,
    customerId: 6,
    dateTime: getDateWithOffset(1, 9, 0),
  },
  {
    id: 5,
    customerId: 1,
    dateTime: getDateWithOffset(5, 13, 30),
  },
  {
    id: 6,
    customerId: 5,
    dateTime: getDateWithOffset(4, 15, 0),
  },
  {
    id: 7,
    customerId: 1,
    dateTime: getDateWithOffset(2, 12, 30),
  },
]

export const recentViews = [
  {
    id: 1,
    customerId: 8,
  },
  {
    id: 2,
    customerId: 2,
  },
  {
    id: 3,
    customerId: 3,
  },
  {
    id: 4,
    customerId: 6,
  },
  {
    id: 5,
    customerId: 7,
  },
  {
    id: 6,
    customerId: 4,
  },
  {
    id: 7,
    customerId: 5,
  },
]
