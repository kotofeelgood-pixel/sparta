import { defineStore, storeToRefs } from 'pinia'
import { wpRepair } from '@/api/wpApi'
import { ref } from 'vue'

export const useRepairStore = defineStore('repair', () => {
  const repair = ref<any | null>(null)
  const repairs = ref<any[]>([])

  const fetchRepair = async () => {
    try {
      const response = await wpRepair.getList()
      repairs.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  const fetchRepairById = async (id: number) => {
    try {
      const response = await wpRepair.getById(id)
      repair.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    repair,
    repairs,
    fetchRepair,
    fetchRepairById,
  }
})

export const useRepairStoreRefs = () => storeToRefs(useRepairStore())
