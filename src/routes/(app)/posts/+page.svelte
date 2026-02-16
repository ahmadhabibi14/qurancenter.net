<script lang="ts">
  import Head from "@/partials/Head.svelte";
	import { onMount } from "svelte";
	import type { WPPost } from "@/types/posts";
	import PostItem from "@/partials/posts/PostItem.svelte";
	import Pagination from "@/partials/posts/Pagination.svelte";
	import LeftSide from "@/partials/posts/LeftSide.svelte";
	import { PUBLIC_API_URL } from "$env/static/public";

  let posts: WPPost[] = [];

  let total = 0;
  let totalPages = 0;
  let currentRows = 10;

  let paginationsAll: number[] = [];
  let paginationShow: number[] = [];
  let currentPage = 1;

  // ================================
  // FETCH POSTS (Reusable)
  // ================================
  async function fetchPosts() {
    const res = await fetch(
      `${PUBLIC_API_URL}/posts?per_page=${currentRows}&page=${currentPage}`
    );

    posts = await res.json() as WPPost[];
    total = Number(res.headers.get("X-WP-Total") ?? 0);
    totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 0);

    paginate();
  }

  // ================================
  // PAGINATION CALCULATION
  // ================================
  function paginate(): void {
    paginationsAll = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationsAll.push(i);
    }

    let start = 0;
    let end = 0;

    if (totalPages <= 5) {
      start = 0;
      end = totalPages;
    } else if (currentPage <= 3) {
      start = 0;
      end = 5;
    } else if (currentPage >= totalPages - 2) {
      start = totalPages - 5;
      end = totalPages;
    } else {
      start = currentPage - 3;
      end = currentPage + 2;
    }

    paginationShow = paginationsAll.slice(start, end);
  }

  // ================================
  // PAGINATION ACTIONS
  // ================================

  async function ToPage(page: number) {
    if (page === currentPage) return;
    currentPage = page;
    await fetchPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function NextPage() {
    if (currentPage >= totalPages) return;
    currentPage += 1;
    await fetchPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function PrevPage() {
    if (currentPage <= 1) return;
    currentPage -= 1;
    await fetchPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function FirstPage() {
    if (currentPage === 1) return;
    currentPage = 1;
    await fetchPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function LastPage() {
    if (currentPage === totalPages) return;
    currentPage = totalPages;
    await fetchPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  onMount(fetchPosts);
</script>

<Head
  title="Qurancenter"
/>

<div class="h-auto w-full flex flex-col">
  <div class="container max-w-6xl mx-auto flex flex-col gap-8 my-10">
    <h1 class="text-4xl font-bold text-center">Nantikan Berita-berita terbaru dari Qur’an Center</h1>
    <div class="grid grid-cols-[400px_1fr] gap-6 items-start">
      <LeftSide />
      <div class="flex flex-col gap-7">
        <div class="flex flex-col gap-6">
          {#each posts as post}
            <PostItem {post} />
          {/each}
        </div>
        <Pagination
          bind:currentPage
          bind:paginationShow
          bind:paginationTotal={totalPages}

          OnPrevPage={PrevPage}
          OnNextPage={NextPage}
          OnFirstPage={FirstPage}
          OnLastPage={LastPage}
          OnToPage={ToPage}
        />
      </div>
    </div>
  </div>
</div>