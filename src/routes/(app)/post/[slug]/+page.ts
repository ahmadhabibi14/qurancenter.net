import type { PageLoad } from './$types'

export const load: PageLoad = async ({ parent, data }) => {
  await parent()
  const { post, exist, thumb, author } = data
  return {
    post, exist, thumb, author
  }
}