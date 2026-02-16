<script lang="ts">
	import Navbar from '@/partials/Navbar.svelte';
	import Footer from '@/partials/Footer.svelte';
	
	let { children } = $props();
</script>

<div class="bg-white text-qc-black mt-24 min-h-screen flex flex-col">
	<div class="w-full h-full flex flex-col max-w-full">
		<Navbar />
		<main class="flex flex-col left-0 right-0 h-auto flex-1">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>