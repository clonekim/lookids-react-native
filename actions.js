export function fetchStores(mallId) {
  return {
    type: 'FETCH_STORES',
    mallId
  }
}

export function fetchItems(params) {
  return {
    type: 'FETCH_ITEMS',
    params
  }

}
