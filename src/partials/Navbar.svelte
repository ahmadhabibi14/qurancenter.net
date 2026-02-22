<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { Icon } from 'svelte-icons-pack';
	import { BsList, BsX } from 'svelte-icons-pack/bs';
	import {
		RiArrowsArrowDownSLine,
		RiBusinessCalendar2Line,
		RiBusinessMailLine,
		RiLogosFacebookFill,
		RiLogosInstagramLine,
		RiLogosTwitterXFill,
		RiLogosWhatsappLine,
		RiLogosYoutubeLine
	} from 'svelte-icons-pack/ri';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import { programShortNames } from '@/lib/programs';
	import NavMenuItems from './NavMenuItems.svelte';
	import { NAVBAR_OPEN } from '@/states/navbar';

	function closeNavbar() {
    NAVBAR_OPEN.set(false)
	}
</script>

<div
	id="top"
	class="top-0 z-99 fixed w-full flex flex-col items-center justify-center py-auto bg-white shadow-lg"
>
	<div class="hidden md:flex h-8 w-full bg-qc-darker">
		<div class="container max-w-6xl mx-auto">
			<div class="w-full h-full flex flex-row justify-between items-center text-xs text-qc-white">
				<div class="flex flex-row items-center">
					<div class="px-2.5 border-x-white/20 border-x h-8 flex flex-row items-center gap-2">
						<Icon src={RiBusinessCalendar2Line} size="16" className="fill-qc-white " />
						<span
							>{new Date().toLocaleDateString('id-ID', {
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							})}
						</span>
					</div>
					<a
						href="mailto:info@qurancenter.net"
						class="px-2.5 border-r-white/20 border-r h-8 flex flex-row items-center gap-2 group hover:text-qc-melon"
					>
						<Icon
							src={RiBusinessMailLine}
							size="16"
							className="fill-qc-white group-hover:fill-qc-melon"
						/>
						<span>info@qurancenter.net</span>
					</a>
					<a
						href="https://wa.me/6281285960701"
						class="px-2.5 border-r-white/20 border-r h-8 flex flex-row items-center gap-2 group hover:text-qc-melon"
					>
						<Icon
							src={RiLogosWhatsappLine}
							size="16"
							className="fill-qc-white group-hover:fill-qc-melon"
						/>
						<span>(+62) 812-8596-0701</span>
					</a>
				</div>
				<div class="flex flex-row items-center border-collapse">
					<a href="/" class="px-2.5 border-x-white/20 border-x h-8 flex items-center group">
						<Icon
							src={RiLogosFacebookFill}
							size="16"
							className="fill-qc-white group-hover:fill-qc-melon"
						/>
					</a>
					<a href="/" class="px-2.5 border-r-white/20 border-r h-8 flex items-center group">
						<Icon
							src={RiLogosInstagramLine}
							size="16"
							className="fill-qc-white group-hover:fill-qc-melon"
						/>
					</a>
					<a href="/" class="px-2.5 border-r-white/20 border-r h-8 flex items-center group">
						<Icon
							src={RiLogosYoutubeLine}
							size="16"
							className="fill-qc-white group-hover:fill-qc-melon"
						/>
					</a>
					<a href="/" class="px-2.5 border-r-white/20 border-r h-8 flex items-center group">
						<Icon
							src={RiLogosTwitterXFill}
							size="15"
							className="fill-qc-white group-hover:fill-qc-melon"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div
		class="h-16 px-5 md:px-0 container max-w-6xl flex flex-row items-center justify-between mx-auto"
	>
		<div class="flex flex-row gap-3 items-center">
			<a href="/" class="w-fit h-fit focus:outline-none focus:ring-0 focus:ring-offset-0">
				<img
					src="/icons/logo-text.svg"
					alt="Quran Center"
					class="h-auto w-40"
					fetchpriority="high"
				/>
			</a>
		</div>
		<nav class="hidden md:flex flex-row gap-8 items-center justify-center w-fit font-medium">
			<a href="/" class="hover:text-qc">Beranda</a>
			<a href="/profile">
				<HoverCard.Root openDelay={100} closeDelay={100}>
					<HoverCard.Trigger class="flex flex-row items-center gap-1 hover:text-qc">
						<span>Profil</span>
						<Icon src={RiArrowsArrowDownSLine} size="20" className="" />
					</HoverCard.Trigger>
					<HoverCard.Content class="z-100 px-2 py-3">
						<div class="flex flex-col text-sm">
							<a
								href="/profile#tentang"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md"
							>
								Tentang
							</a>
							<a
								href="/profile#visi"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md"
							>
								Visi
							</a>
							<a
								href="/profile#misi"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md"
							>
								Misi
							</a>
							<a
								href="/profile#struktur"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md"
							>
								Struktur
							</a>
							<a
								href="/profile#logo"
								class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md"
							>
								Makna Logo
							</a>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</a>
			<a href="/#layanan" class="hover:text-qc">Layanan</a>
			<a href="/program">
				<HoverCard.Root openDelay={100} closeDelay={100}>
					<HoverCard.Trigger class="flex flex-row items-center gap-1 hover:text-qc">
						<span>Program</span>
						<Icon src={RiArrowsArrowDownSLine} size="20" className="" />
					</HoverCard.Trigger>
					<HoverCard.Content class="z-100 px-2 py-3">
						<div class="flex flex-col text-sm">
							{#each programShortNames as program}
								<a
									href="/program/{program.slug}"
									data-sveltekit-reload
									class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md"
								>
									{program.shortName}
								</a>
							{/each}
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</a>
			<a href="/posts" class="hover:text-qc">Berita</a>
			<a href="/khutbah" class="hover:text-qc">Khutbah</a>
			<a href="/#kontak" class="hover:text-qc">Kontak</a>
		</nav>
		<a
			href="https://wa.me/6281285960701"
			class="md:block hidden w-fit h-fit cursor-pointer py-2 px-6 rounded-full text-qc-white bg-qc-darker hover:bg-qc text-sm"
		>
			Donasi
		</a>
		<div class="flex md:hidden">
			<button type="button" onclick={() => ($NAVBAR_OPEN = !$NAVBAR_OPEN)} class="">
				<Icon src={$NAVBAR_OPEN ? BsX : BsList} size="30" />
			</button>
		</div>
	</div>
</div>

<aside
	class="{$NAVBAR_OPEN ? 'translate-y-0' : ''}
  top-16
  fixed z-98 transition-all
  duration-300
  ease-in-out
  bg-white
  shadow-lg
  w-full h-fit
  -translate-y-full
  "
>
	<div class="flex flex-col gap-3 py-5 font-medium">
		<a href="/" class="hover:text-qc px-5" onclick={closeNavbar}>Beranda</a>
    <span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<NavMenuItems
			name="Profil"
			links={[
				{name: 'Tentang', link: '/profile#tentang'},
        {name: 'Visi', link: '/profile#visi'},
        {name: 'Misi', link: '/profile#misi'},
        {name: 'Struktur', link: '/profile#struktur'},
        {name: 'Logo', link: '/profile#logo'},
			]}
		/>
    <span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/#layanan" class="hover:text-qc px-5" onclick={closeNavbar}>Layanan</a>
    <span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<NavMenuItems
			name="Program"
			links={[
				{ name: 'Semua Program', link: '/program' },
				...programShortNames.map((program) => ({
					name: String(program.shortName),
					link: `/program/${program.slug}`
				}))
			]}
		/>
    <span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/posts" class="hover:text-qc px-5" onclick={closeNavbar}>Berita</a>
    <span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/khutbah" class="hover:text-qc px-5" onclick={closeNavbar}>Khutbah</a>
    <span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/#kontak" class="hover:text-qc px-5" onclick={closeNavbar}>Kontak</a>
	</div>
</aside>
