import chunkSubstr from "./chunkSubstr"

export const phoneMask = (e: KeyboardEvent) => {
  const element = e.target as HTMLInputElement

  let filteredNumbers = element.value.match(/\d+/g)?.join('')

  if (filteredNumbers && filteredNumbers.length > 11) {
    filteredNumbers = filteredNumbers.slice(0, 10)
  }
  filteredNumbers ? (element.value = filteredNumbers) : (element.value = '')

  let arr = ['']
  switch (element.value.length) {
    case 1:
    case 2:
      arr = chunkSubstr(element.value, 2)
      arr.unshift('(')
      if (arr.length < 2) arr.push(' )')
      else arr.push(')')
      element.value = arr.join('')
      break

    case 3:
    case 4:
    case 5:
    case 6:
      element.value = element.value.replace(
        /(\d{2})(\d+)/,
        '($1) $2'
      )
      break

    case 7:
    case 8:
    case 9:
    case 10:
      element.value = element.value.replace(
        /(\d{2})(\d{4})(\d+)/,
        '($1) $2-$3'
      )
      break

    case 11:
      element.value = element.value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{3})/,
        '($1) $2-$3-$4'
      )
      break

    default:
      break
  }
}
