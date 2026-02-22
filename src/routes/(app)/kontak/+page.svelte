<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import { Icon } from 'svelte-icons-pack';
	import {
		RiBusinessMailLine,
		RiDevicePhoneLine,
		RiLogosWhatsappLine,
		RiMapMapPinLine,
		RiMapMapPinRangeLine
	} from 'svelte-icons-pack/ri';
</script>

<Head title="Qurancenter Hidayatullah - Kontak" />

<div class="min-h-[900px] w-full flex flex-col">
	<div
		class="h-60 w-full flex justify-center items-center text-center
    bg-linear-to-bl from-qc-darker via-qc to-qc-darker text-white
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
				Kontak Kami untuk Informasi Lebih Lanjut
			</h1>
		</div>
	</div>

	<div class="container max-w-6xl mx-auto px-5 md:px-0 my-8">
		<div class="flex flex-col md:grid md:grid-cols-[30%_1fr] gap-6">
			<div class="flex flex-col gap-1 text-lg">
				<a
					href="https://maps.app.goo.gl/D5JcyKYwyHBXSkWc6"
					target="_blank"
					class="cursor-pointer flex flex-row gap-2 items-start hover:underline hover:text-qc-darker"
				>
					<Icon
						size="25"
						className="text-qc-darker fill-qc-darker shrink-0"
						src={RiMapMapPinRangeLine}
					/>
					<p class="grow">Jl. Cipinang Cempedak 1.no.14 Polonia Jakarta Timur</p>
				</a>
				<a
					href="mailto:info@qurancenter.net"
					target="_blank"
					class="cursor-pointer flex flex-row gap-2 items-center hover:underline hover:text-qc-darker"
				>
					<Icon
						size="25"
						className="text-qc-darker fill-qc-darker shrink-0"
						src={RiBusinessMailLine}
					/>
					<p class="grow">info@qurancenter.net</p>
				</a>
				<a
					href="tel:+6282146021999"
					class="cursor-pointer flex flex-row gap-2 items-center hover:underline hover:text-qc-darker"
				>
					<Icon
						size="25"
						className="text-qc-darker fill-qc-darker shrink-0"
						src={RiDevicePhoneLine}
					/>
					<p class="grow">(+62) 812-8596-0701</p>
				</a>
			</div>
			<div class="w-full h-[400px]">
				<iframe
					title="Lokasi Qurancenter Hidayatullah"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1007812399703!2d106.87111177167888!3d-6.237142500037268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f30cae38ff81%3A0x4db033a3621efa90!2sDPP%20Hidayatullah!5e0!3m2!1sid!2sid!4v1771738544969!5m2!1sid!2sid"
					width="100%"
					height="400"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</div>
