import chunkSubstr from "./chunkSubstr"

export const cpfMask = (e: KeyboardEvent) => {
  const element = e.target as HTMLInputElement

  let filteredNumbers = element.value.match(/\d+/g)?.join('')

  if (filteredNumbers && filteredNumbers.length > 11) {
    filteredNumbers = filteredNumbers.slice(0, 10)
  }
  filteredNumbers ? (element.value = filteredNumbers) : (element.value = '')

  let arr = ['']
  switch (element.value.length) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      arr = chunkSubstr(element.value, 3)
      element.value = arr.join('.')
      break

    case 10:
    case 11:
      element.value = element.value.replace(
        /(\d{3})(\d{3})(\d{3})(\d+)/,
        '$1.$2.$3-$4'
      )
      break

    default:
      break
  }
}
