<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import type { PageData } from './$types';
	import type { ProgramContent } from '@/lib/programs';
	import { Icon } from 'svelte-icons-pack';
	import {
		RiArrowsArrowRightLine,
		RiBusinessMedalLine,
		RiBusinessServiceLine,
		RiDesignLayoutHorizontalLine,
		RiDocumentBookMarkedLine
	} from 'svelte-icons-pack/ri';

	export let data: PageData;

	const { program, exist } = data as {
		program: ProgramContent;
		exist: boolean;
	};
</script>

{#if exist}
	<Head title={program.name} description={program.content} path={`/program/${program.slug}`} />
{:else}
	<Head title="Program Tidak Ditemukan" />
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
				{#if !program.withLevels}
					<div class="flex flex-row gap-2 items-center">
						<img src="/icons/misi.svg" alt="Target" class="w-10 h-10 shrink-0" />
						<h3 class="grow text-3xl font-bold">Target</h3>
					</div>
					<p>{program.target}</p>
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

					<div class="flex flex-row gap-2 items-center">
						<Icon
							src={RiDesignLayoutHorizontalLine}
							size="38"
							className="shrink-0 text-qc-darker fill-qc-darker"
						/>
						<h3 class="grow text-3xl font-bold">Output</h3>
					</div>
					<p>{program.output}</p>
				{:else}
					<div class="flex flex-col gap-3">
						{#each program.levels as level, idx}
							<div class="flex flex-col gap-2">
								<div class="flex flex-row gap-2 items-center">
									<Icon
										src={RiBusinessMedalLine}
										size="30"
										className="shrink-0 text-qc-darker fill-qc-darker"
									/>
									<h4 class="grow text-lg md:text-2xl font-bold">Level {idx + 1}: {level.name}</h4>
								</div>
								<p class="font-medium">Fokus: {level.focus}</p>
								<p class="font-medium">Target: {level.target}</p>
								<div class="flex flex-col gap-1">
									<span class="text-lg font-semibold">Kurikulum:</span>
									<ul class="ml-8 list-disc marker:text-qc-darker marker:text-xl">
										{#each level.curriculum as cr}
											<li>{cr}</li>
										{/each}
									</ul>
								</div>
								<p class="font-medium">Output: {level.output}</p>
							</div>
						{/each}
					</div>
				{/if}

				{#if program.levelsShort && program.levelsShort.length > 0}
					<div class="flex flex-row gap-2 items-center">
						<Icon
							src={RiBusinessMedalLine}
							size="38"
							className="shrink-0 text-qc-darker fill-qc-darker"
						/>
						<h4 class="grow text-3xl font-bold capitalize">Level Tahfidz</h4>
					</div>
					<div class="flex flex-col gap-1">
						<ul class="ml-8 list-disc marker:text-qc-darker marker:text-xl">
							{#each program.levelsShort as lv}
								<li>{lv}</li>
							{/each}
						</ul>
					</div>
				{/if}
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
					<img
						src="/illustration/mop-1.png"
						alt="Logo Illustration"
						class="pointer-events-none select-none h-full w-auto object-cover left-0"
						draggable="false"
					/>
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
