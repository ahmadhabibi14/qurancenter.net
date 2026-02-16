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

  const authorRes = await fetch(`${PRIVATE_API_URL}/users/${post.author}`);
  const author: WPUser = await authorRes.json() as WPUser;

  let thumbData: any = {};

  if (post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'].length > 0) {
    const thumbRes = await fetch(post._links['wp:featuredmedia'][0].href);
    thumbData = await thumbRes.json(); 
  }

  return {
    post: post,
    exist: true,
    thumb: thumbData,
    author: author
  };
}