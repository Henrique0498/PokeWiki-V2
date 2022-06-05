const searchItem = (
  value: string,
  valueId: string,
  array: { [key: string]: string }[]
) => {
  let index = 1

  array.map((item, i) => {
    if (item[valueId] === value) {
      index = i
    }
  })

  return index
}

export default searchItem
