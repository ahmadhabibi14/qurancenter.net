<script lang="ts">
	import { programShortDetails } from '@/lib/programs';
	import Head from '@/partials/Head.svelte';
	import Header from '@/partials/Header.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { RiArrowsArrowRightUpLine } from 'svelte-icons-pack/ri';
</script>

<Head title="Qurancenter Hidayatullah - Program" />

<svelte:head>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			"name": "Program Qur’an Center Hidayatullah",
			"url": "https://qurancenter.net/program",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Ngaji Dasar",
					"url": "https://qurancenter.net/program/ngaji-dasar"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Tajwid",
					"url": "https://qurancenter.net/program/tajwid"
				},
				{
					"@type": "ListItem",
					"position": 3,
					"name": "Tahfizh",
					"url": "https://qurancenter.net/program/tahfizh"
				},
				{
					"@type": "ListItem",
					"position": 4,
					"name": "Tadabbur",
					"url": "https://qurancenter.net/program/tadabbur"
				},
				{
					"@type": "ListItem",
					"position": 5,
					"name": "Tafsir",
					"url": "https://qurancenter.net/program/tafsir"
				},
				{
					"@type": "ListItem",
					"position": 6,
					"name": "Pembinaan Dai",
					"url": "https://qurancenter.net/program/pembinaan-dai"
				},
				{
					"@type": "ListItem",
					"position": 7,
					"name": "Training Al-Qur’an",
					"url": "https://qurancenter.net/program/training"
				}
			]
		}
	</script>
</svelte:head>

<div class="h-auto w-full flex flex-col">
	<Header title="Program Qur’an Center Hidayatullah" />
	<div class="container max-w-6xl mx-auto px-5 md:px-0 my-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each programShortDetails as pg}
				<card
					class="flex flex-col h-auto justify-between gap-3 p-4 border border-gray-300 rounded-lg bg-white"
					id={pg.slug}
				>
					<div class="flex flex-col gap-2">
						<h5 class="font-bold leading-6">{pg.name}</h5>
						<p class="text-xs line-clamp-6">{pg.description}</p>
						<div class="w-full h-1 border-dashed border-t border-qc-melon"></div>
					</div>
					<div class="flex flex-row justify-end items-center">
						<a
							href="/program/{pg.slug}"
							class="flex flex-row gap-2 items-center text-xs
              bg-qc-darker hover:bg-qc py-1.5 px-3 text-qc-white rounded-md"
						>
							<span>Selengkapnya</span>
							<Icon src={RiArrowsArrowRightUpLine} size="15" />
						</a>
					</div>
				</card>
			{/each}
		</div>
	</div>
</div>
