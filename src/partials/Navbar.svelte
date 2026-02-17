<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
	import { Icon } from 'svelte-icons-pack';
	import { BsList, BsX } from 'svelte-icons-pack/bs';
	import { RiArrowsArrowDownSLine, RiBusinessCalendar2Line, RiBusinessMailLine, RiLogosFacebookFill, RiLogosInstagramLine, RiLogosTwitterXFill, RiLogosWhatsappLine, RiLogosYoutubeLine } from 'svelte-icons-pack/ri';
	import { formatDate } from '@/lib/datetime';
  import * as HoverCard from "$lib/components/ui/hover-card/index.js";

  const isShowMenu: Writable<Boolean> = writable(false);

  function closeMenu() {
    $isShowMenu = false;
  }
</script>

<div id="top" class="top-0 z-99 fixed w-full flex flex-col items-center justify-center py-auto bg-white shadow-lg">
  <div class="hidden md:flex h-8 w-full bg-qc-darker">
    <div class="container max-w-6xl mx-auto">
      <div class="w-full h-full flex flex-row justify-between items-center text-xs text-qc-white">
        <div class="flex flex-row items-center">
          <div class="px-2.5 border-x-white/20 border-x h-8 flex flex-row items-center gap-2">
            <Icon
              src={RiBusinessCalendar2Line}
              size="16"
              className="fill-qc-white "
            />
            <span>{formatDate(new Date().toISOString())}</span>
          </div>
          <a href="mailto:info@qurancenter.net" class="px-2.5 border-r-white/20 border-r h-8 flex flex-row items-center gap-2 group hover:text-qc-melon">
            <Icon
              src={RiBusinessMailLine}
              size="16"
              className="fill-qc-white group-hover:fill-qc-melon"
            />
            <span>info@qurancenter.net</span>
          </a>
          <a href="https://wa.me/6281285960701" class="px-2.5 border-r-white/20 border-r h-8 flex flex-row items-center gap-2 group hover:text-qc-melon">
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
  <div class="h-16 px-5 md:px-0 container max-w-6xl flex flex-row items-center justify-between mx-auto">
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
      <a href="/#tentang" class="hover:text-qc">Tentang</a>
      <a href="/#layanan" class="hover:text-qc">Layanan</a>
      <a href="/program">
        <HoverCard.Root openDelay={100} closeDelay={100}>
          <HoverCard.Trigger class="flex flex-row items-center gap-1 hover:text-qc">
            <span>Program</span>
            <Icon
              src={RiArrowsArrowDownSLine}
              size="20"
              className=""
            />
          </HoverCard.Trigger>
          <HoverCard.Content class="z-100 px-2 py-3">
            <div class="flex flex-col">
              <a href="/program" class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md">Event Nasional</a>
              <a href="/program" class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md">Sanad al-Qur'an</a>
              <a href="/program" class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md">Wisuda</a>
              <a href="/program" class="block px-4 py-2 hover:bg-gray-100 hover:text-qc rounded-md">Sinergi Kebaikan</a>
            </div>
          </HoverCard.Content>
        </HoverCard.Root>
      </a>
      <a href="/posts" class="hover:text-qc">Berita</a>
      <a href="/#kontak" class="hover:text-qc">Kontak</a>
    </nav>
    <a
      href="https://wa.me/6281285960701"
      class="md:block hidden w-fit h-fit cursor-pointer py-2 px-6 rounded-full text-qc-white bg-qc-darker hover:bg-qc text-sm"
    >
      Donasi
    </a>
    <div class="flex md:hidden">
      <button
        type="button"
        onclick={() => $isShowMenu = !$isShowMenu}
        class="">
        <Icon
          src={$isShowMenu ? BsX : BsList}
          size="30"
        />
      </button>
    </div>
  </div>
</div>

<aside class="{$isShowMenu ? 'translate-y-0' : ''}
  top-16
  fixed z-98 transition-all
  duration-300
  ease-in-out
  bg-white
  shadow-lg
  w-full h-fit
  -translate-y-full
  ">
  <div class="flex flex-col gap-3 py-5 justify-center items-center font-medium">
    <a href="/" class="hover:text-qc" onclick={closeMenu}>Beranda</a>
    <a href="/#tentang" class="hover:text-qc" onclick={closeMenu}>Tentang</a>
    <a href="/#layanan" class="hover:text-qc" onclick={closeMenu}>Layanan</a>
    <a href="/program"
      class="hover:text-qc flex flex-row gap-1 items-center" onclick={closeMenu}
    >
      <span>Program</span>
      <Icon
        src={RiArrowsArrowDownSLine}
        size="18"
        className=""
      />
    </a>
    <a href="/posts" class="hover:text-qc" onclick={closeMenu}>Berita</a>
    <a href="/#kontak" class="hover:text-qc" onclick={closeMenu}>Kontak</a>
  </div>
</aside>