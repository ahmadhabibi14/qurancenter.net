<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
	import { Icon } from 'svelte-icons-pack';
	import { BsList, BsX } from 'svelte-icons-pack/bs';

  const isShowMenu: Writable<Boolean> = writable(false);

  function closeMenu() {
    $isShowMenu = false;
  }
</script>

<div id="top" class="top-0 z-99 fixed w-full h-20 flex flex-row items-center justify-center py-auto bg-white shadow-lg">
  <div class="px-5 md:px-0 container max-w-6xl flex flex-row items-center justify-between mx-auto">
    <div class="flex flex-row gap-3 items-center">
      <a href="/" class="w-fit h-fit">
        <img
          src="/icons/logo-text.svg"
          alt="Quran Center"
          class="h-12 w-auto"
        />
      </a>
    </div>
    <nav class="hidden md:flex flex-row gap-8 items-center justify-center w-fit font-semibold">
      <a href="/#jumbotron" class="hover:text-qc">Beranda</a>
      <a href="/#tentang" class="hover:text-qc">Tentang</a>
      <a href="/#layanan" class="hover:text-qc">Layanan</a>
      <a href="/#khutbah" class="hover:text-qc">Khutbah</a>
      <a href="/posts" class="hover:text-qc">Berita</a>
      <a href="/#kontak" class="hover:text-qc">Kontak</a>
    </nav>
    <a
      href="https://wa.me/6281285960701"
      class="md:block hidden w-fit h-fit cursor-pointer py-3 px-6 rounded-full text-qc-white bg-qc-darker hover:bg-qc text-sm"
    >
      Konsultasi Gratis
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
  fixed z-98 transition-all
  duration-300
  ease-in-out
  bg-white
  w-full h-fit
  -translate-y-full
  ">
  <div class="flex flex-col gap-3 py-5 justify-center items-center font-medium">
    <a href="/#top" class="hover:text-qc" onclick={closeMenu}>Beranda</a>
    <a href="/#tentang" class="hover:text-qc" onclick={closeMenu}>Tentang Kami</a>
    <a href="/#layanan" class="hover:text-qc" onclick={closeMenu}>Layanan</a>
    <a href="/#proses-halal" class="hover:text-qc" onclick={closeMenu}>Proses Halal</a>
    <a href="/#kontak" class="hover:text-qc" onclick={closeMenu}>Kontak</a>
  </div>
</aside>