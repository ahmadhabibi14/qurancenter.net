<script lang="ts">
	import { Icon, type IconType } from "svelte-icons-pack";
	import { FaSolidBookOpen, FaSolidBookQuran, FaSolidHandsHolding, FaSolidMicrophoneLines, FaSolidMosque, FaSolidUserTie } from "svelte-icons-pack/fa";

  const services: {
    title: string;
    icon: IconType;
    content?: string;
  }[] = [
    {
      title: 'Ngaji Online',
      icon: FaSolidBookOpen,
      content: `Layanan pembelajaran Al-Qur’an jarak jauh secara interaktif bersama pengajar berkompeten yang dapat diakses dari mana saja.`
    },
    {
      title: 'Training Metode Al Qur’an',
      icon: FaSolidBookQuran,
      content: `Program pelatihan khusus untuk mempelajari dan menguasai metode pengajaran Al-Qur’an secara efektif, sistematis, dan aplikatif.`
    },
    {
      title: 'Dauroh Tahsin Alqur’an',
      icon: FaSolidBookQuran,
      content: `Program pembinaan intensif untuk memperbaiki bacaan Al-Qur’an sesuai makharijul huruf dan kaidah tajwid yang benar.`
    },
    {
      title: 'Panggil Ustadz',
      icon: FaSolidUserTie,
      content: `Layanan menghadirkan ustadz/ustadzah untuk mengisi kajian, pembinaan, atau pendampingan keislaman sesuai kebutuhan.`
    },
    {
      title: 'Ceramah',
      icon: FaSolidMicrophoneLines,
      content: `Penyampaian tausiyah dan materi keislaman yang inspiratif dan berbasis nilai-nilai Al-Qur’an untuk berbagai momentum kegiatan.`
    },
    {
      title: 'Khutbah',
      icon: FaSolidMosque,
      content: `Layanan penyediaan khatib untuk khutbah Jumat atau hari besar Islam dengan materi yang aktual dan mencerahkan.`
    },
    {
      title: 'Do’a',
      icon: FaSolidHandsHolding,
      content: `Layanan memimpin doa pada pembukaan, penutupan, atau acara khusus dengan penuh kekhusyukan dan adab Islami.`
    }
  ];

</script>

<section class="container max-w-6xl mx-auto my-10 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0" id="layanan">
  <div class="flex flex-col gap-7">
    <div class="flex flex-col gap-2 text-center">
      <h3 class="font-semibold text-4xl">Layanan Qur’an Center</h3>
    </div>

    <div class="flex flex-wrap md:gap-4 gap-3 items-center justify-center bg-qc-darker px-5 py-7 rounded-4xl">
      {#each services as service}
        <div class="border border-white/20 rounded-lg bg-qc text-qc-white
          p-5 w-full md:w-[350px] h-auto
          flex flex-col gap-4">
          <div class="flex flex-row gap-3 items-center text-xl font-medium">
            <Icon
              src={service.icon}
              size="30"
              className="fill-qc-melon shrink-0"
            />
            <span class="grow">{service.title}</span>
          </div>
          <div class="text-sm">
            <p>{service.content}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>