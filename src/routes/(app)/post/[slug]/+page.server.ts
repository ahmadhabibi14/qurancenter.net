import { PRIVATE_API_URL } from "$env/static/private";
import type { WPPost } from "@/types/posts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params, fetch}) => {
  const { slug } = params;
  
  const res = await fetch(`${PRIVATE_API_URL}/posts?_embed&slug=${slug}`);
  const posts: WPPost[] = await res.json() as WPPost[];

  if (!posts || posts.length === 0) {
    return {
      post: null,
      exist: false
    };
  }
  
  const post = posts[0];

  return {
    post,
    exist: true,
  };
}