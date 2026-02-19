<script lang="ts">
  import Head from "@/partials/Head.svelte";
	import CompanyDetails from "@/partials/home/CompanyDetails.svelte";
	import JumbotronSlide from "@/partials/home/JumbotronSlide.svelte";
	import Networks from "@/partials/home/Networks.svelte";
	import Partners from "@/partials/home/Partners.svelte";
	import Programs from "@/partials/home/Programs.svelte";
	import Services from "@/partials/home/Services.svelte";
	import Testimonials from "@/partials/home/Testimonials.svelte";
</script>

<Head
  title="Qurancenter Hidayatullah - Pusat Pembinaan dan Pengembangan Al-Qur’an yang Unggul dalam Melahirkan Generasi Qur’ani"
/>

<div class="min-h-[900px] w-full flex flex-col">
  <JumbotronSlide />
  <CompanyDetails />
  <Programs />
  <Networks />
  <Services />
  <Testimonials />
  <Partners />
</div>