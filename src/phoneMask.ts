export const phoneMask = (e: KeyboardEvent) => {
  const element = e.target as HTMLInputElement

  element.value = element.value.replace(/\D/g, '')

  if (element.value.length > 11) {
    element.value = element.value.slice(0, 11)
  }

  switch (element.value.length) {
    case 2:
      if (e.key.toLowerCase() !== 'backspace')
        element.value = element.value.replace(/(\d{2})/, '($1) ')
      break
    case 3:
    case 4:
    case 5:
    case 6:
      element.value = element.value.replace(/(\d{2})(\d+)/, '($1) $2')
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
