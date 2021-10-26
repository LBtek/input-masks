import chunkSubstr from "./chunkSubstr"

export const cpfCnpjMask = (e: KeyboardEvent) => {
  const element = e.target as HTMLInputElement

  element.value = element.value.replace(/\D/g, '')

  if (element.value.length > 14) {
    element.value = element.value.slice(0, 13)
  }

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

    case 12:
      element.value = element.value.replace(
        /(\d{2})?(\d{3})?(\d{3})?(\d{4})/,
        '$1.$2.$3/$4'
      )
      break

    case 13:
    case 14:
      element.value = element.value.replace(
        /(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d+)/,
        '$1.$2.$3/$4-$5'
      )
      break

    default:
      break
  }
}
