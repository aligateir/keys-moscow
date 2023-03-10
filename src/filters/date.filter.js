export default function dateFilter (value, format = 'date') {
  value = new Date()
  const options = {}
  if (format.includes('date')) {
    options.day = 'numeric'
    options.month = 'numeric'
    options.year = 'numeric'
  }
  if (format.includes('time')) {
    options.hour = 'numeric'
    options.minute = 'numeric'
    options.second = 'numeric'
  }
  // console.log(options)
  return new Intl.DateTimeFormat('ru-RU', options).format(value)
}
