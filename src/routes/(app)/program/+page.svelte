<script lang="ts">
	import { programs } from "@/lib/programs";
  import Head from "@/partials/Head.svelte";
</script>

<Head
  title="Qurancenter Hidayatullah - Program"
/>

<div class="min-h-[900px] w-full flex flex-col">
  <div class="container max-w-6xl mx-auto px-5 md:px-0">
    {#each programs as pg}
      <section class="my-10 md:scroll-mt-28 scroll-mt-20 flex flex-col gap-4 md:gap-6"
        id={pg.id}
      >
        <h2 class="text-2xl md:text-3xl font-bold">{pg.name}</h2>
        <p class="">{pg.description}</p>
      </section>
    {/each}
  </div>
</div>