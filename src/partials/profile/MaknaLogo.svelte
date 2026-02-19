<script lang="ts">
  const logoPhilosophy: {
    title: string;
    description: string;
    contentList?: string[];
  }[] = [
    {
      title: "Bentuk Utama (Representasi Huruf Q dan C)",
      description: "Bentuk utama logo yang tersusun dari dua bidang melengkung dan saling terhubung secara tersirat membentuk huruf Q dan C sebagai singkatan dari Qur’an Center. Huruf Q melambangkan Al-Qur’an sebagai poros dan pusat seluruh aktivitas pembinaan, pendidikan, dan dakwah. Sementara huruf C merepresentasikan center atau pusat hidayah, yaitu ruang pembinaan yang terbuka, inklusif, dan berkesinambungan bagi umat. Bentuk melengkung yang menyerupai rangkulan juga menggambarkan makna perlindungan, kebersamaan, serta pendampingan umat dalam naungan nilai-nilai Qur’ani."
    },
    {
      title: "Simbol Al-Qur’an Terbuka sebagai Landasan Utama",
      description: "Pada bagian tengah logo terdapat simbol Al-Qur’an terbuka yang menjadi landasan seluruh elemen visual. Simbol ini menggambarkan kesiapan wahyu Allah SWT untuk dipelajari, dikaji, dan diamalkan secara terus-menerus. Al-Qur’an ditempatkan sebagai fondasi utama yang menopang seluruh aktivitas Qur’an Center Hidayatullah, baik dalam aspek pembinaan individu, pengembangan keilmuan, maupun penguatan organisasi."
    },
    {
      title: "Lima Pilar sebagai Representasi Visi Lembaga",
      description: "Di atas simbol Al-Qur’an terbuka tergambar lima pilar yang menjulang ke atas sebagai representasi visi Qur’an Center Hidayatullah. Lima pilar ini melambangkan fondasi strategis penguatan organisasi di bawah naungan Hidayatullah, yang mencakup kesatuan visi perjuangan, penguatan sumber daya manusia, sistem pembinaan Qur’ani, kesinambungan dakwah, serta tata kelola organisasi yang kokoh dan berintegritas. Pilar-pilar tersebut juga dimaknai sebagai cahaya hidayah yang mengantarkan umat menuju kebenaran, ilmu, dan akhlak mulia."
    },
    {
      title: "Makna Warna Logo",
      description: "Perubahan warna pada logo mempertegas identitas Qur’an Center Hidayatullah sebagai lembaga Qur’ani yang hidup, meneduhkan, dan bertumbuh.",
      contentList: [
        "Hijau Tua melambangkan keteguhan iman, kedalaman ilmu, kestabilan, dan kematangan organisasi yang berakar kuat pada nilai-nilai Islam dan tradisi keilmuan Qur’ani.",
        "Hijau Terang merepresentasikan hidayah, pertumbuhan, harapan, dan keberlangsungan dakwah yang terus berkembang serta relevan dengan zaman."
      ]
    },
    {
      title: "Tipografi Nama Lembaga",
      description: "Penggunaan tipografi modern dan bersih pada nama Qur’an Center Hidayatullah mencerminkan profesionalisme, keterbukaan, dan kesiapan lembaga dalam menjawab tantangan zaman, tanpa meninggalkan nilai-nilai Qur’ani sebagai identitas dan ruh perjuangan utama."
    }
  ]
</script>

<section
	class="container max-w-6xl mx-auto my-10 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0"
	id="logo"
>
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl font-bold">Filosofi Logo</h2>
		<div class="text-lg flex flex-col gap-3">
      <div class="mb-7 mt-4">
        <img
          src="/icons/logo-text.svg" 
          alt="Filosofi Logo"
          class="w-96 h-auto"
        />
      </div>
			<p>
				Logo Qur’an Center Hidayatullah merepresentasikan lembaga pembinaan Al-Qur’an yang berlandaskan nilai keilmuan, dakwah, dan hidayah Ilahiyah, serta berorientasi pada penguatan organisasi Qur’ani di bawah naungan Hidayatullah. Seluruh elemen visual dalam logo dirancang sebagai satu kesatuan makna yang mencerminkan Al-Qur’an sebagai pusat pembinaan, sumber petunjuk hidup, dan fondasi pergerakan dakwah yang berkelanjutan.
			</p>
      <div class="flex flex-col gap-3">
        {#each logoPhilosophy as lp, idx}
          <div class="flex flex-col gap-3">
            <h3 class="text-xl font-bold">{idx + 1}. {lp.title}</h3>
            <p>{lp.description}</p>
            {#if lp.contentList}
              <div class="flex">
                <ul class="ml-8 list-disc marker:text-qc-darker marker:text-xl">
                  {#each lp.contentList as cnt}
                    <li>{cnt}</li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
        {/each}
      </div>
      <div class="flex flex-col gap-3">
        <h3 class="text-xl font-bold">Kesimpulan Makna Logo</h3>
        <p>Secara keseluruhan, logo Qur’an Center Hidayatullah merepresentasikan lembaga yang berkomitmen menjadikan Al-Qur’an sebagai pusat pembinaan, pencerahan, dan penguatan organisasi. Logo ini mencerminkan dakwah yang terstruktur, meneduhkan, dan berorientasi pada pembangunan peradaban Islam yang kokoh, berakhlak, dan berkelanjutan di bawah naungan Hidayatullah.</p>
      </div>
		</div>
	</div>
</section>
