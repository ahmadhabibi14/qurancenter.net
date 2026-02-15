<script lang="ts">
	import './layout.css';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/state';
	import { CURRENT_PATH } from '@/states/page';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { UNDER_CONSTRUCTION } from '@/states/setting';
	import Head from '@/partials/Head.svelte';
	import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';
	import UnderConstruction from '@/partials/UnderConstruction.svelte';

	let { children } = $props();

	NProgress.configure({
		minimum: 0.16,
		speed: 500,
		showSpinner: false,
		easing: 'ease'
	});

	$effect(() => {
		if (navigating.to) {
			NProgress.start();
			CURRENT_PATH.set(navigating.to.url.pathname);
		} else {
			NProgress.done();
		}
	});

	onMount(() => {
		if (browser) {
			CURRENT_PATH.set(window.location.pathname);
		}
	});
</script>

{#if $UNDER_CONSTRUCTION}
	<Head title="Under Construction - Qurancenter" />
	<UnderConstruction />
{:else}
	{@render children()}
{/if}
