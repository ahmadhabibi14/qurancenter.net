<script lang="ts">
  import Head from "@/partials/Head.svelte";
	import type { PageData } from "../$types";
	import { onMount } from "svelte";
	import type { WPPost } from "@/types/posts";
	import PostItem from "@/partials/posts/PostItem.svelte";
	import Pagination from "@/partials/posts/Pagination.svelte";
	import LeftSide from "@/partials/posts/LeftSide.svelte";

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

   // Pagination state
  let roundTotal: number              = 0;
  let paginationTotal: number         = 1;
  let currentRows: number             = 10;
  let paginationsAll: number[]        = [];
  let paginationShow: number[]        = [];
  let currentPage: number             = 1;

  function paginate(): void {
    roundTotal      = Math.ceil(total / currentRows) * currentRows;
    paginationTotal = roundTotal / currentRows;
    paginationsAll = [];

    if (currentRows > total) paginationTotal = 1;

    for (let i = 0; i < paginationTotal; i++) {
      paginationsAll = [...paginationsAll, i+1]
    }

		let start: number = 0;
    let end: number   = 0;

		if (paginationTotal < 5) {
      start = 0;
      end   = paginationTotal;
    } else if ((currentPage < 5) && (currentPage-3 < 0)) {
      start = 0;
      end   = 5;
    } else if ((currentPage > paginationTotal-5) && (currentPage+3 < paginationTotal)) {
      start = currentPage-3;
      end   = currentPage+2;
    } else if (currentPage+3 >= paginationTotal) {
      start = paginationTotal-5;
      end   = paginationTotal;
    } else {
      start = currentPage-3;
      end   = currentPage+2;
    }

		paginationShow = paginationsAll.slice(start, end);
  }

  onMount(() => {
    paginate();
  });

  // +==================================+ //
  // +==================================+ //
  // +======= PAGINATION LOGIC =========+ //
  // +==================================+ //
  // +==================================+ //

  async function ToPage(page: number) {
  }

  async function NextPage(page: number) {
  }

  async function PrevPage(page: number) {
  }

  async function FirstPage() {
   
  }

  async function LastPage() {
   
  }
</script>

<Head
  title="Qurancenter"
/>

<div class="h-auto w-full flex flex-col">
  <div class="container max-w-6xl mx-auto flex flex-col gap-8 my-10">
    <h1 class="text-4xl font-bold text-center">Nantikan Berita-berita terbaru dari Qurancenter</h1>
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
          bind:paginationTotal

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