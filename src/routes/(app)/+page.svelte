<script lang="ts">
  import Head from "@/partials/Head.svelte";
	import AboutUs from "@/partials/home/AboutUs.svelte";
	import JumbotronSlide from "@/partials/home/JumbotronSlide.svelte";
	import Services from "@/partials/home/Services.svelte";
</script>

<Head
  title="Qurancenter Hidayatullah - Pusat Pembinaan dan Pengembangan Al-Qur’an yang Unggul dalam Melahirkan Generasi Qur’ani"
/>

<div class="min-h-[900px] w-full flex flex-col">
  <JumbotronSlide />
  <AboutUs />
  <Services />
</div>