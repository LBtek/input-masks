export const cepMask = (e: KeyboardEvent) => {
  const element = e.target as HTMLInputElement

  element.value = element.value.replace(/\D/g, '')

  if (element.value.length > 8) {
    element.value = element.value.slice(0, 7)
  }

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
