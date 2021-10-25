export const cepMask = (e: KeyboardEvent) => {
  const element = e.target as HTMLInputElement

  let filteredNumbers = element.value.match(/\d+/g)?.join('')

  if (filteredNumbers && filteredNumbers.length > 8) {
    filteredNumbers = filteredNumbers.slice(0, 7)
  }
  filteredNumbers ? (element.value = filteredNumbers) : (element.value = '')

  switch (element.value.length) {
    case 3:
    case 4:
    case 5:
      element.value = element.value.replace(
        /(\d{2})(\d+)/,
        '$1.$2'
      )
      break

    case 6:
    case 7:
    case 8:
      element.value = element.value.replace(
        /(\d{2})(\d{3})(\d+)/,
        '$1.$2-$3'
      )
      break


    default:
      break
  }
}
