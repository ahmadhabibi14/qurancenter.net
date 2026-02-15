import { PRIVATE_API_URL } from "$env/static/private";
import type { WPPost } from "@/types/posts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const res = await fetch(`${PRIVATE_API_URL}/posts?per_page=10`);

  const posts: WPPost[] = await res.json() as WPPost[];

  const total: string | null = res.headers.get("X-WP-Total");
  const totalPages: string | null = res.headers.get("X-WP-TotalPages");

  return {
    posts: posts || [],
    total: total ? Number(total) : 0,
    totalPages: totalPages ? Number(totalPages) : 0
  };
}