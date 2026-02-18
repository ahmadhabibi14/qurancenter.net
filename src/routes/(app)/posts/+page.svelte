<script lang="ts">
  import Head from "@/partials/Head.svelte";
	import { onMount } from "svelte";
	import type { WPPost } from "@/types/posts";
	import PostItem from "@/partials/posts/PostItem.svelte";
	import Pagination from "@/partials/posts/Pagination.svelte";
	import LeftSide from "@/partials/posts/LeftSide.svelte";
	import { PUBLIC_API_URL } from "$env/static/public";
	import Skeleton from "@/lib/components/ui/skeleton/skeleton.svelte";

  let posts: WPPost[] = [];

  let isLoading: boolean = false;

  let totalPages: number = 0;
  let currentRows: number = 10;

  let paginationsAll: number[] = [];
  let paginationShow: number[] = [];
  let currentPage = 1;

  // ================================
  // FETCH POSTS (Reusable)
  // ================================
  async function fetchPosts() {
    isLoading = true;

    const res = await fetch(
      `${PUBLIC_API_URL}/posts?_embed&per_page=${currentRows}&page=${currentPage}`
    );

    posts = await res.json() as WPPost[];
    // total = Number(res.headers.get("X-WP-Total") ?? 0);
    totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 0);

    paginate();
    isLoading = false;
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
  title="Qurancenter Hidayatullah - Nantikan Berita-berita terbaru dari Qur’an Center"
  description="Dapatkan informasi terbaru seputar kegiatan, program, dan berita terkini dari Qur’an Center Hidayatullah. Tetap terhubung dengan kami untuk mendapatkan update terbaru tentang pembinaan dan pengembangan Al-Qur’an yang kami lakukan."
  path="/posts"
/>

<div class="h-auto w-full flex flex-col">
  <div class="h-60 w-full flex justify-center items-center text-center
    bg-linear-to-bl from-qc-darker via-qc to-qc-melon text-white
    relative overflow-hidden"
  >
    <div class="absolute w-full h-full top-0 left-0 bottom-0 flex z-10">
      <img
        src="/illustration/mop-1.png"
        alt=""
        class="h-full w-auto object-cover left-0"
      />
    </div>
    <div class="flex justify-center items-center px-5">
      <h1 class="text-3xl md:text-4xl font-bold text-center relative z-20">Nantikan Berita-berita terbaru dari Qur’an Center</h1>
    </div>
  </div>
  <div class="container max-w-6xl mx-auto flex flex-col gap-8 my-10 px-5 md:px-0">
    <div class="flex flex-col-reverse md:grid md:grid-cols-[400px_1fr] gap-6">
      <LeftSide />
      <div class="flex flex-col gap-6">
        <div class="grid grid-cols-2 gap-5 w-full min-w-full auto-rows-fr">
          {#if isLoading}
            {#each Array(4) as _}
              <Skeleton class="h-36 md:h-56 w-full rounded-lg border border-gray-200" />
            {/each}
          {:else}
            {#each (posts || []) as post}
              <PostItem {post} />
            {/each}
          {/if}
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