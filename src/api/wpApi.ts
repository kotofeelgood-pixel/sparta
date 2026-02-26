import axios from 'axios'

const WP_BASE = 'https://spart.pro/wp-json/wp/v2'

const wpApi = axios.create({
  baseURL: WP_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const wpPages = {
  getById (id: number) {
    return wpApi.get(`/pages/${id}`)
  },

  getBySlug(slug: string) {
    return wpApi.get(`/pages`, { params: { slug } })
  },

  getList(params?: Record<string, unknown>) {
    return wpApi.get('/pages', { params })
  },
}

export default wpApi
