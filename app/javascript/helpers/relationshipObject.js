// Returns an object from API compound document included

export const relationshipObject = (includedList, type, id) => {
  const filteredIncludedList = includedList.filter(
    (object) => object.type === type && object.id === id,
  )

  return filteredIncludedList[0]
}
