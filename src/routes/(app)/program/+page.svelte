<script lang="ts">
	import type { ProgramDetail } from '@/lib/programs';
	import Head from '@/partials/Head.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { RiArrowsArrowRightUpLine } from 'svelte-icons-pack/ri';

	const programs: ProgramDetail[] = [
		{
			slug: 'ngaji-dasar',
			name: 'Ngaji Dasar (Tahsinul Qira’ah Pemula)',
			description:
				'Program pembelajaran membaca Al-Qur’an dari nol bagi anak-anak, remaja, maupun orang dewasa. Fokus pada pengenalan huruf hijaiyah, makharijul huruf, dan dasar-dasar tajwid agar peserta mampu membaca Al-Qur’an dengan benar dan tartil.'
		},
		{
			slug: 'tahsin',
			name: 'Tahsin (Perbaikan Bacaan Al-Qur’an)',
			description:
				'Program peningkatan kualitas bacaan bagi yang sudah bisa membaca Al-Qur’an namun ingin memperbaiki kefasihan, tajwid, panjang pendek bacaan, serta adab tilawah sesuai kaidah yang benar.'
		},
		{
			slug: 'tahfizh',
			name: 'Tahfizh (Menghafal Al-Qur’an)',
			description:
				'Program pembinaan hafalan Al-Qur’an secara terstruktur dan berjenjang, mulai dari juz pilihan hingga target hafalan tertentu. Dilengkapi dengan sistem muroja’ah dan evaluasi berkala untuk menjaga kualitas hafalan.'
		},
		{
			slug: 'tadabbur',
			name: 'Tadabbur Al-Qur’an',
			description:
				'Program pendalaman makna ayat secara tematik untuk membangun kesadaran spiritual dan pembentukan karakter Qur’ani, sehingga Al-Qur’an tidak hanya dibaca, tetapi juga dipahami dan diamalkan.'
		},
		{
			slug: 'tafsir',
			name: 'Tafsir Al-Qur’an',
			description:
				'Program kajian tafsir secara sistematis dan ilmiah berdasarkan rujukan tafsir yang mu’tabar. Ditujukan bagi peserta yang ingin memahami kandungan Al-Qur’an secara lebih mendalam dan komprehensif.'
		},
		{
			slug: 'pembinaan-dai',
			name: 'Pembinaan Dai & Penguatan Organisasi Qur’ani',
			description:
				'Program kaderisasi untuk melahirkan pengajar Al-Qur’an dan dai Qur’ani yang siap membina masyarakat. Fokus pada penguatan manhaj, kepemimpinan, manajemen dakwah, dan sistem pembinaan di bawah naungan Hidayatullah.'
		},
		{
			slug: 'training',
			name: 'Training Al-Qur’an (Pelatihan Intensif & Sertifikasi)',
			description:
				'Program pelatihan intensif yang dirancang untuk meningkatkan kompetensi guru, pembina, dan pegiat Al-Qur’an. Materi meliputi metodologi pengajaran Al-Qur’an, manajemen halaqah, strategi pembinaan, serta standar kualitas pembelajaran. Program ini bertujuan mencetak tenaga pendidik Al-Qur’an yang profesional, terstruktur, dan siap memperkuat jaringan pembinaan Qur’an Center Hidayatullah.'
		}
	];
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
					"name": "Tahsin",
					"url": "https://qurancenter.net/program/tahsin"
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
	<div
		class="h-60 w-full flex justify-center items-center text-center
    bg-linear-to-bl from-qc-darker via-qc to-qc-melon text-white
    relative overflow-hidden"
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
				Program Qur’an Center Hidayatullah
			</h1>
		</div>
	</div>

	<div class="container max-w-6xl mx-auto px-5 md:px-0 my-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each programs as pg}
				<card
					class="flex flex-col h-auto justify-between gap-3 p-4 border border-gray-300 rounded-lg bg-white"
					id={pg.slug}
				>
					<div class="flex flex-col gap-2">
						<h5 class="font-bold leading-6">{pg.name}</h5>
						<p class="text-xs line-clamp-4">{pg.description}</p>
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
