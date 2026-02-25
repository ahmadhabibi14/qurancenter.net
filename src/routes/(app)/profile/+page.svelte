<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import Header from '@/partials/Header.svelte';
	import AboutUs from '@/partials/profile/AboutUs.svelte';
	import MaknaLogo from '@/partials/profile/MaknaLogo.svelte';
	import Struktur from '@/partials/profile/Struktur.svelte';
	import VisiMisi from '@/partials/profile/VisiMisi.svelte';
</script>

<Head title="Qurancenter Hidayatullah - Profil Yayasan" />

<div class="h-auto w-full flex flex-col">
	<Header
		title="Profil Qur’an Center Hidayatullah"
		subtitle="“Membumikan Al-Qur’an, Menguatkan Peradaban.”"
	/>

  <AboutUs />
  <VisiMisi />
  <Struktur />
  <MaknaLogo />
</div>
