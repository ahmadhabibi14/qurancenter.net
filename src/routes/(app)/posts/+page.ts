import type { PageLoad } from './$types'

export const load: PageLoad = async ({ parent, data }) => {
  await parent()
  const { posts, total, totalPages } = data
  return {
    posts, total, totalPages
  }
}