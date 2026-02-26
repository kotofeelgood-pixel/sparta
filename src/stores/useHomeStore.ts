import { defineStore, storeToRefs } from 'pinia'
import { wpPages } from '@/api/wpApi'
import { ref } from 'vue'

export const useHomeStore = defineStore('home', () => {
  const home = ref<any | null>(null)

  const fetchHome = async () => {
    const response = await wpPages.getById(238295)
    home.value = response.data
  }

  return {
    home,
    fetchHome,
  }
})

export const useHomeStoreRefs = () => storeToRefs(useHomeStore())
