const specialCases: { find: string; replace: string }[] = [
  {find: 'uý', replace: 'úy'},
  {find: 'uỷ', replace: 'ủy'},
  {find: 'uỳ', replace: 'ùy'},
  {find: 'uỵ', replace: 'ụy'},
  {find: 'oà', replace: 'òa'},
]

export const normalizeSpecialVietnameseText = (text: string) => {
  specialCases.forEach(({find, replace}) => {
    const regex = new RegExp(`${find}($|\\s)`)

    let firstIndex = text.search(regex)
    while (firstIndex >= 0) {
      text = text.slice(0, firstIndex) + replace + text.slice(firstIndex + find.length)
      firstIndex = text.search(regex)
    }
  })

  return text
}
