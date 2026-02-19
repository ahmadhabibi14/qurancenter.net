<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import type { PageData } from './$types';
	import type { ProgramContent } from '@/lib/programs';
	import { Icon } from 'svelte-icons-pack';
	import { RiArrowsArrowRightLine, RiBusinessServiceLine, RiDesignLayoutHorizontalLine, RiDocumentBookMarkedLine } from 'svelte-icons-pack/ri';

  export let data: PageData;

  const { program, exist } = data as {
    program: ProgramContent;
    exist: boolean;
  }
</script>

{#if exist}
  <Head
    title={program.name}
    description={program.content}
    path={`/program/${program.slug}`}
  />
{:else}
  <Head
    title="Program Tidak Ditemukan"
  />
{/if}

<div class="h-auto w-full flex flex-col">
  {#if exist}
    <div class="container max-w-6xl mx-auto px-5 mt-6">
      <div
        class="h-60 w-full flex justify-center items-center text-center
        bg-linear-to-bl from-qc-darker via-qc to-qc-melon text-white
        relative overflow-hidden rounded-xl"
      >
        <div class="absolute w-full h-full top-0 left-0 bottom-0 flex z-10">
          <img src="/illustration/mop-1.png" alt="" class="h-full w-auto object-cover left-0" />
        </div>
        <div class="flex justify-center items-center px-5">
          <h1 class="text-3xl md:text-4xl font-bold text-center relative z-20">
            {program.name}
          </h1>
        </div>
      </div>
    </div>
    <div class="container max-w-4xl mx-auto px-5 md:px-0 mt-8 mb-14">
      <div class="flex flex-col gap-5">
        <p>{program.content}</p>
        <div class="flex flex-row gap-2 items-center">
          <img
            src="/icons/misi.svg"
            alt="Target"
            class="w-10 h-10 shrink-0"
          />
          <h3 class="grow text-3xl font-bold">Target</h3>
        </div>
        <p>{program.target}</p>
        {#if program.type === 'course'}
          <div class="flex flex-row gap-2 items-center">
            <Icon
              src={RiDocumentBookMarkedLine}
              size="38"
              className="shrink-0 text-qc-darker fill-qc-darker"
            />
            <h3 class="grow text-3xl font-bold">Kurikulum</h3>
          </div>
          <div class="flex">
            <ul class="ml-8 list-disc marker:text-qc-darker marker:text-xl">
              {#each program.curriculum as cr}
                <li>{cr}</li>
              {/each}
            </ul>
          </div>
        {:else}
          <div class="flex flex-row gap-2 items-center">
            <Icon
              src={RiBusinessServiceLine}
              size="38"
              className="shrink-0 text-qc-darker fill-qc-darker"
            />
            <h3 class="grow text-3xl font-bold">Layanan</h3>
          </div>
          <div class="flex">
            <ul class="ml-8 list-disc marker:text-qc-darker marker:text-xl">
              {#each program.services as srv}
                <li>{srv}</li>
              {/each}
            </ul>
          </div>
        {/if}
        <div class="flex flex-row gap-2 items-center">
          <Icon
            src={RiDesignLayoutHorizontalLine}
            size="38"
            className="shrink-0 text-qc-darker fill-qc-darker"
          />
          <h3 class="grow text-3xl font-bold">Output</h3>
        </div>
        <p>{program.output}</p>
      </div>
    </div>
  {:else}
    <div class="container max-w-6xl mx-auto px-5 mt-6">
      <div
        class="h-60 w-full flex justify-center items-center text-center
        bg-linear-to-bl from-qc-darker via-qc to-qc-melon text-white
        relative overflow-hidden rounded-xl"
      >
        <div class="absolute w-full h-full top-0 left-0 bottom-0 flex z-10">
          <img src="/illustration/mop-1.png" alt="" class="h-full w-auto object-cover left-0" />
        </div>
        <div class="flex justify-center items-center px-5">
          <h1 class="text-3xl md:text-4xl font-bold text-center relative z-20">
            Program Tidak Ditemukan
          </h1>
        </div>
      </div>
      <div class="my-10 flex items-center justify-center">
        <a
          href="/program"
          class="py-2 px-5 bg-qc hover:bg-qc-2 text-qc-white rounded-xl flex flex-row gap-2 items-center justify-center"
        >
          <span>Kembali ke daftar Program</span>
          <Icon src={RiArrowsArrowRightLine} size="16" />
        </a>
      </div>
    </div>
  {/if}
</div>
