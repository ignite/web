import { ref, Ref } from 'vue'

type Response = {
  next: () => Promise<any>
  back: () => Promise<any>
  page: Ref<any[]>
}

export default async function usePagination({
  opts: { pageSize = 200, initialOffset = 0 },
  getters: { fetchList }
}): Promise<Response> {
  // state
  let offset = ref(initialOffset)
  let page = ref([])
  let totalAvailable = ref(0)

  // methods
  let next = async () => {
    offset.value -= pageSize
    page.value = []

    await fillPage()
  }

  let back = async () => {
    offset.value -= pageSize
    page.value = []

    await fillPage()
  }

  let getNextLimit = (total: number): number =>
    getRemainingToBeFetched(total) > 100 ? 100 : getRemainingToBeFetched(total)

  let getRemainingToBeFetched = (total: number): number => {
    let desired = pageSize - page.value.length
    let available = total - page.value.length

    return Math.min(desired, available)
  }

  let fillPage = async () => {
    let count = 0
    while (count == 0 || getRemainingToBeFetched(totalAvailable.value) > 0) {
      let response = await fetchList({
        offset: offset.value,
        limit: getNextLimit(totalAvailable.value)
      })

      page.value = [...page.value, ...response.data]
      totalAvailable.value = response.total

      if (getRemainingToBeFetched(totalAvailable.value) > 0) {
        offset.value = page.value.length
      }

      count++
    }
  }

  await fillPage()

  return {
    next,
    back,
    page
  }
}
