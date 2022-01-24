import { computed, ComputedRef, ref, Ref } from 'vue'

export type Response = {
  hasNextPage: ComputedRef<boolean>
  hasBackPage: ComputedRef<boolean>
  amountOfPages: ComputedRef<number>
  currentPage: Ref<number>
  total: Ref<number>
  next: () => Promise<any>
  back: () => Promise<any>
  page: Ref<any[]>
  reload: () => any
}

export default async function useAPIPagination({
  opts: { initialPage = 1 },
  getters: { fetchList }
}): Promise<Response> {
  // state
  let currentPage = ref(initialPage)
  let page = ref([])
  let totalAvailable = ref(0)

  // computed
  let amountOfPages = computed(() => Math.round(totalAvailable.value / 100))
  let hasNextPage = computed(() => currentPage.value < amountOfPages.value)
  let hasBackPage = computed(() => currentPage.value > 1)

  // methods
  let next = async () => {
    currentPage.value++
    page.value = []

    await getPage()
  }

  let back = async () => {
    currentPage.value--
    page.value = []

    await getPage()
  }

  let getPage = async () => {
    let response = await fetchList({
      offset: currentPage.value === 1 ? 0 : (currentPage.value - 1) * 100
    })

    page.value = [...response.data]
    totalAvailable.value = response.total
  }

  await getPage()

  return {
    hasNextPage,
    hasBackPage,
    amountOfPages,
    currentPage,
    total: totalAvailable,
    next,
    back,
    page,
    reload: getPage
  }
}
