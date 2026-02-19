<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import AboutUs from '@/partials/profile/AboutUs.svelte';
	import MaknaLogo from '@/partials/profile/MaknaLogo.svelte';
	import Struktur from '@/partials/profile/Struktur.svelte';
	import VisiMisi from '@/partials/profile/VisiMisi.svelte';
</script>

<Head title="Qurancenter Hidayatullah - Profil Yayasan" />

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
		<div class="flex flex-col justify-center items-center px-5 gap-2 relative z-20">
			<h1 class="text-3xl md:text-4xl font-bold text-center">
				Profil Qur’an Center Hidayatullah
			</h1>
      <p class="text-sm md:text-base">“Membumikan Al-Qur’an, Menguatkan Peradaban.”</p>
		</div>
	</div>

  <AboutUs />
  <VisiMisi />
  <Struktur />
  <MaknaLogo />
</div>
