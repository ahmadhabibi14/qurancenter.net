<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import {
    CgChevronDoubleLeft, CgChevronDoubleRight,
    CgChevronLeft, CgChevronRight
  } from 'svelte-icons-pack/cg';

  export let OnFirstPage = () => {};
  export let OnLastPage = () => {};
  export let OnNextPage = (page: number) => {};
  export let OnPrevPage = (page: number) => {};
  export let OnToPage = (page: number) => {};

  export let currentPage: number;
  export let paginationShow: number[];
  export let paginationTotal: number;
</script>

<div class="flex flex-row gap-2 justify-center items-center font-semibold text-xs mt-4 p-3 bg-white rounded-xl w-fit mx-auto">
  <div class="flex flex-row items-center gap-0">
    <button
      onclick={OnFirstPage}
      disabled={currentPage == 1}
      class="cursor-pointer hidden md:block py-2 px-2.5  hover:bg-zinc-100 rounded-md disabled:cursor-not-allowed"
      title="Go to first page"
    >
      <Icon size="16" src={CgChevronDoubleLeft}/>
    </button>
    <button
      onclick={() => OnPrevPage(currentPage - 1)}
      disabled={currentPage == 1}
      class="py-2 pl-2.5 pr-3 hover:bg-zinc-100 rounded-md disabled:cursor-not-allowed flex flex-row gap-1"
      title="Go to previous page"
    >
      <Icon size="16" src={CgChevronLeft}/>
      <span class="hidden md:block">Previous</span>
    </button>
  </div>
  <div class="flex flex-row items-center gap-2">
    {#each paginationShow as i}
      <button
        onclick={() => OnToPage(i)}
        disabled={currentPage == i}
        class="cursor-pointer py-2 px-3 disabled:cursor-not-allowed {currentPage === i
            ? 'bg-qc/20 text-qc'
            : 'hover:bg-zinc-100'
          } rounded-md"
        title={`Go to page ${i}`}
      >{i}</button>
    {/each}
  </div>
  <div class="flex flex-row items-center gap-0">
    <button
      onclick={() => OnNextPage(currentPage + 1)}
      disabled={currentPage == paginationTotal}
      class="cursor-pointer py-2 pl-3 pr-2.5 hover:bg-zinc-100 rounded-md disabled:cursor-not-allowed flex flex-row gap-1"
      title="Go to next page"
    >
      <span class="hidden md:block">Next</span>
      <Icon size="16" src={CgChevronRight}/>
    </button>
    <button
      onclick={OnLastPage}
      disabled={currentPage == paginationTotal}
      class="cursor-pointer hidden md:block py-2 px-2.5 hover:bg-zinc-100 rounded-md disabled:cursor-not-allowed"
      title="Go to last page"
    >
      <Icon size="16" src={CgChevronDoubleRight}/>
    </button>
  </div>
</div>