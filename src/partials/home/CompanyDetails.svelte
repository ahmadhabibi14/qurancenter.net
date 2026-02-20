<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { RiSystemCloseFill } from 'svelte-icons-pack/ri';

	type CompanyDetailName = 'tentang' | 'visi' | 'misi';

	const companyDetails: {
		name?: string;
		nameUnique?: CompanyDetailName;
		icon: string;
		networkPopup?: boolean;
	}[] = [
		{
			nameUnique: 'tentang',
			name: 'Tentang',
			icon: '/icons/tentang.svg'
		},
		{
			nameUnique: 'visi',
			name: 'Visi',
			icon: '/icons/visi.svg'
		},
		{
			nameUnique: 'misi',
			name: 'Misi',
			icon: '/icons/misi.svg'
		},
		{
			name: 'Jaringan',
			icon: '/icons/jaringan.svg',
			networkPopup: true
		}
	];

	let isPopUpNetworkOpen: boolean = $state(false);

	const CompanyDetailsObj: Record<
		CompanyDetailName,
		{
			name: string;
			content: string | string[];
		}
	> = {
		tentang: {
			name: 'Tentang',
			content: `<p>Quran Center Hidayatullah merupakan lembaga pendidikan dan pembinaan Al-Qur’an yang berkomitmen melahirkan generasi Qur’ani yang berakhlak mulia, berilmu, dan berdaya guna bagi umat. Berada di bawah naungan Hidayatullah, Quran Center hadir sebagai pusat pembelajaran dan pengkajian Al-Qur’an yang menanamkan nilai-nilai Qur’ani dalam kehidupan individu maupun masyarakat.</p>
    <p>Melalui program unggulan mulai dari pembelajaran dasar membaca Al-Qur’an, tahsin, tahfidz, kajian tafsir, hingga pelatihan Al-Qur’an, setiap kegiatan dirancang secara sistematis dan berkelanjutan. Dengan semangat penguatan dakwah berbasis Al-Qur’an, Quran Center menjadi wadah strategis dalam membina karakter, mencetak kader Qur’ani, serta berkontribusi bagi penguatan umat dan peradaban Islam.</p>`
		},
		visi: {
			name: 'Visi',
			content: `Menjadi pusat pembinaan dan pengembangan Al-Qur’an yang unggul dalam melahirkan generasi Qur’ani serta memperkuat dakwah dan organisasi Hidayatullah.`
		},
		misi: {
			name: 'Misi',
			content: [
				'Menyelenggarakan pendidikan dan pembelajaran Al-Qur’an yang sistematis, berkualitas, dan berkelanjutan.',
				'Membina kualitas bacaan (tahsin) dan hafalan (tahfidz) Al-Qur’an secara profesional dan terukur.',
				'Mengembangkan kajian tafsir dan pemahaman Al-Qur’an yang aplikatif dalam kehidupan.',
				'Menyelenggarakan pelatihan dan training Al-Qur’an untuk meningkatkan kapasitas guru dan kader dakwah.',
				'Membangun penguatan organisasi Hidayatullah melalui pembinaan berbasis nilai-nilai Al-Qur’an.'
			]
		}
	};

	let isPopUpCompanyDetailOpen: boolean = $state(false);

	let openedCompanyDetail: CompanyDetailName = $state('tentang');

	function openCompanyDetail(name: CompanyDetailName) {
		isPopUpCompanyDetailOpen = true;
		openedCompanyDetail = name;
	}
</script>

{#if isPopUpNetworkOpen}
	<div class="popup-container">
		<div class="rounded-xl bg-white p-6 flex flex-col gap-4 md:w-7/12 lg:6/12 h-fit">
			<header class="flex justify-between items-center flex-row">
				<h3 class="text-xl text-qc-darker font-bold">Jaringan Hidayatullah</h3>
				<button
					class="p-1 rounded-full border-[3px] border-qc-darker hover:bg-qc/20
          right-2 top-2 cursor-pointer"
					onclick={() => (isPopUpNetworkOpen = false)}
				>
					<Icon src={RiSystemCloseFill} size="20" />
				</button>
			</header>
			<img src="/img/jaringan.jpg" alt="Jaringan Hidayatullah" class="w-full h-auto" />
		</div>
	</div>
{/if}

{#if isPopUpCompanyDetailOpen}
	<div class="popup-container">
		<div class="rounded-xl bg-white p-6 flex flex-col gap-4 md:w-7/12 lg:6/12 h-fit">
			<header class="flex justify-between items-center flex-row">
				<h3 class="text-xl text-qc-darker font-bold">{CompanyDetailsObj[openedCompanyDetail].name}</h3>
				<button
					class="p-1 rounded-full border-[3px] border-qc-darker hover:bg-qc/20
          right-2 top-2 cursor-pointer"
					onclick={() => (isPopUpCompanyDetailOpen = false)}
				>
					<Icon src={RiSystemCloseFill} size="20" />
				</button>
			</header>
			{#if openedCompanyDetail === 'misi'}
				<div class="flex ml-6 text-lg">
					<ul class="list-disc marker:text-qc-darker marker:text-lg">
						{#each CompanyDetailsObj[openedCompanyDetail].content as misi}
							<li>
								{misi}
							</li>
						{/each}
					</ul>
				</div>
			{:else}
				<div class="flex flex-col gap-2">
					{@html CompanyDetailsObj[openedCompanyDetail].content}
				</div>
			{/if}
		</div>
	</div>
{/if}

<section
	class="container max-w-4xl mx-auto mt-14 mb-7 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0"
	id="company-details"
>
	<div class="md:gap-6 grid grid-cols-4 gap-2 items-center justify-center">
		{#each companyDetails as detail}
			{#if detail.networkPopup}
				<button
					onclick={() => (isPopUpNetworkOpen = true)}
					class="cursor-pointer group flex
          md:first:justify-end md:last:justify-start justify-center
          items-center
          md:last:h-[130px] md:first:h-[130px] h-auto
          md:first:pr-3 md:last:pl-3
        "
					aria-label={detail.name}
					title={detail.name}
				>
					<img src={detail.icon} alt={detail.name} class="w-auto h-full group-hover:opacity-85" />
				</button>
			{:else}
				<button
					onclick={() => openCompanyDetail(detail.nameUnique as CompanyDetailName)}
					class="cursor-pointer group flex
          md:first:justify-end md:last:justify-start justify-center
          items-center
          md:last:h-[130px] md:first:h-[130px] h-auto
          md:first:pr-3 md:last:pl-3
        "
					aria-label={detail.name}
					title={detail.name}
				>
					<img src={detail.icon} alt={detail.name} class="w-auto h-full group-hover:opacity-85" />
				</button>
			{/if}
		{/each}
	</div>
</section>

<style>
	.popup-container {
		display: flex;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 2000;
		background-color: rgba(0 0 0 / 40%);
		backdrop-filter: blur(1px);
		justify-content: center;
		padding: 40px 15px 15px;
		overflow: auto;
	}
</style>
