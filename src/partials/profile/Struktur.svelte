<script lang="ts">
  const organizationStructures: {
    name: string;
    position: string;
  }[] = [
    {
      name: '+++++',
      position: 'Pembina'
    },
    {
      name: '+++++',
      position: 'Dewan Pengarah'
    },
    {
      name: '+++++',
      position: 'Direktur Quran Center'
    },
    {
      name: '+++++',
      position: 'Wakil Direktur'
    }
  ]
</script>

<section
	class="container max-w-6xl mx-auto my-10 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0"
	id="struktur"
>
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl font-bold text-center">Struktur Organisasi</h2>
		<div class="flex flex-col gap-5 md:flex-row md:gap-14 justify-center items-center">
			<div class="flex flex-col gap-3 justify-center items-center">
        {#each organizationStructures as os, idx}
          <div class="bg-qc-darker rounded-xl py-2 px-14 text-qc-white w-fit flex flex-col gap-1 justify-center items-center">
            <span class="text-lg md:text-xl font-bold">{os.name}</span>
            <span class="w-full h-px bg-qc-white"></span>
            <span class="font-poppins">{os.position}</span>
          </div>
          {#if idx !== organizationStructures.length - 1}
            <div class="w-1 bg-qc md:h-8 h-7 rounded-full"></div>
          {/if}
        {/each}
      </div>
      <div class="flex flex-col gap-5 h-fit w-fit border border-gray-300 p-5 rounded-lg shadow">
        <h4 class="text-3xl font-bold">Divisi</h4>
        <div class="flex">
          <ol class="ml-8 list-decimal marker:text-qc-darker marker:text-xl">
            <li>Divisi Pendidikan & Kurikulum</li>
            <li>Divisi Tahfizh & Tahsin</li>
            <li>Divisi Dakwah & Kajian</li>
            <li>Divisi Training & Pengembangan SDM</li>
            <li>Divisi Humas & Kemitraan</li>
            <li>Divisi Keuangan & Administrasi</li>
          </ol>
        </div>
      </div>
		</div>
	</div>
</section>
