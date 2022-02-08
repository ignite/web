import { computed, ComputedRef, Ref, ref } from 'vue'

export type Pager = {
  hasNextPage: ComputedRef<boolean>
  hasBackPage: ComputedRef<boolean>
  amountOfPages: ComputedRef<number>
  currentPage: Ref<number>
  total: Ref<number>
  next: () => Promise<any>
  back: () => Promise<any>
  page: Ref<any[]>
  load: () => any
}

export type Response = {
  pager: Pager
}

// TODO solve last page bug
export default async function ({
  opts: { initialPage = 1 },
  getters: { fetchList }
}): Promise<Response> {
  // state
  let currentPage = ref(initialPage)
  let page = ref([])
  let totalAvailable = ref(0)

  // computed
  let amountOfPages = computed(() => Math.floor(totalAvailable.value / 100))
  let hasNextPage = computed(() => currentPage.value < amountOfPages.value)
  let hasBackPage = computed(() => currentPage.value > 1)

  // methods
  let next = async () => {
    currentPage.value++
    page.value = []

    await load()
  }

  let back = async () => {
    currentPage.value--
    page.value = []

    await load()
  }

  let load = async () => {
    let response = await fetchList({
      offset: currentPage.value === 1 ? 0 : (currentPage.value - 1) * 100
    })

    page.value = [...response.data] as any
    totalAvailable.value = response.total
  }

  return {
    pager: {
      hasNextPage,
      hasBackPage,
      amountOfPages,
      currentPage,
      total: totalAvailable,
      next,
      back,
      page,
      load
    } as Pager
  }
}

export function merge(a: Pager, b: Pager): Pager {
  //state
  let page = ref([...b.page.value, ...a.page.value])
  let amountOfPages: ComputedRef<number> = computed(
    () => b.amountOfPages.value + a.amountOfPages.value
  )

  // computed
  let total: Ref<number> = computed(() => b.total.value + a.total.value)
  let currentPage: Ref<number> = computed(() => -1)
  let hasBackPage: ComputedRef<boolean> = computed(
    () => b.hasBackPage.value || a.hasBackPage.value
  )
  let hasNextPage: ComputedRef<boolean> = computed(
    () => b.hasNextPage.value || a.hasNextPage.value
  )

  // methods
  let back = (): Promise<any> => {
    let promises: Promise<any>[] = []

    if (b.hasBackPage) {
      promises.concat(new Promise(b.back))
    }

    if (a.hasBackPage) {
      promises.concat(new Promise(a.back))
    }

    return Promise.all(promises)
  }
  let next = (): Promise<any> => {
    let promises: Promise<any>[] = []

    if (b.hasNextPage) {
      promises.concat(new Promise(b.next))
    }

    if (a.hasNextPage) {
      promises.concat(new Promise(a.next))
    }

    return Promise.all(promises)
  }

  let load = async () => {
    await b.load()
    await a.load()
  }

  return {
    load,
    total,
    currentPage,
    back,
    next,
    amountOfPages,
    page,
    hasBackPage,
    hasNextPage
  } as Pager
}
