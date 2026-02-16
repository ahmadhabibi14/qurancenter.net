import { PRIVATE_API_URL } from "$env/static/private";
import type { WPPost } from "@/types/posts";
import type { PageServerLoad } from "./$types";
import type { WPUser } from "@/types/author";

export const load: PageServerLoad = async ({params, fetch}) => {
  const { slug } = params;
  
  const res = await fetch(`${PRIVATE_API_URL}/posts?slug=${slug}`);
  const posts: WPPost[] = await res.json() as WPPost[];

  if (!posts || posts.length === 0) {
    return {
      post: null,
      exist: false,
      thumb: {},
      author: null
    };
  }
  
  const post = posts[0];

  const authorPromise = fetch(
    `${PRIVATE_API_URL}/users/${post.author}`
  ).then((res) => res.json() as Promise<WPUser>);

  const thumbPromise =
    post._links?.['wp:featuredmedia']?.length > 0
      ? fetch(post._links['wp:featuredmedia'][0].href)
          .then((res) => res.json())
      : Promise.resolve(null);

  const [author, thumb] = await Promise.all([
    authorPromise,
    thumbPromise
  ]);

  return {
    post,
    exist: true,
    thumb,
    author
  };
}