const specialCases: { find: string; replace: string, skip?: number }[] = [
  {find: '[^qQ]uý', replace: 'úy', skip: 1},
  {find: '[^qQ]uỷ', replace: 'ủy', skip: 1},
  {find: '[^qQ]uỳ', replace: 'ùy', skip: 1},
  {find: '[^qQ]uỵ', replace: 'ụy', skip: 1},
  {find: 'oà', replace: 'òa'},
]

export const normalizeSpecialVietnameseText = (text: string) => {
  specialCases.forEach(({find, replace, skip = 0}) => {
    const regex = new RegExp(`${find}($|\\s)`)

    let firstIndex = text.search(regex)
    while (firstIndex >= 0) {
      text = text.slice(0, firstIndex + skip) + replace + text.slice(firstIndex + replace.length + skip)
      firstIndex = text.search(regex)
    }
  })

  return text
}

