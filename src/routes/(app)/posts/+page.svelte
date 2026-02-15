<script lang="ts">
  import Head from "@/partials/Head.svelte";
	import type { PageData } from "../$types";
	import { onMount } from "svelte";
	import type { WPPost } from "@/types/posts";

  export let data: PageData | any;

  let posts: WPPost[] = [];
  let total: number = 0;
  let totalPages: number = 0;

  onMount(() => {
    posts = data.posts;
    total = data.total;
    totalPages = data.totalPages;
    console.log(posts);
  });
</script>

<Head
  title="Qurancenter"
/>

<div class="min-h-[900px] w-full flex flex-col">
  <div class="container max-w-6xl mx-auto flex flex-col gap-8 my-10">
    <h1 class="text-4xl font-bold text-center">Nantikan Berita-berita terbaru dari Qurancenter</h1>
    <div class="flex flex-col gap-6">
      {#each posts as post}
        <a
          href={`/post/${post.id}`}
          class="group flex flex-col gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
        >
          <div class="flex flex-col gap-2">
            <h2 class="text-2xl font-semibold group-hover:underline">{post.title.rendered}</h2>
            <p class="text-gray-600 text-sm">Published on: {new Date(post.date).toLocaleDateString()}</p>
            <div class="prose">
              {@html post.excerpt.rendered}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>