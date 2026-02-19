import { programContents, programSlugs } from '@/lib/programs';
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;

  if (programSlugs[slug]) {
    return {
      program: programContents[slug],
      exist: true
    }
  }

  return {
    program: null,
    exist: false
  }
}