<script lang="ts">
	import { Icon } from "svelte-icons-pack";
	import { FaSolidBookOpen, FaSolidBookQuran, FaSolidHandsHolding, FaSolidMicrophoneLines, FaSolidMosque, FaSolidUserTie } from "svelte-icons-pack/fa";

  const services = [
    {
      title: 'Ngaji Online',
      icon: FaSolidBookOpen
    },
    {
      title: 'Training Metode Al Qur’an',
      icon: FaSolidBookQuran
    },
    {
      title: 'Dauroh Tahsin Alqur’an',
      icon: FaSolidBookQuran
    },
    {
      title: 'Panggil Ustadz',
      icon: FaSolidUserTie
    },
    {
      title: 'Ceramah',
      icon: FaSolidMicrophoneLines
    },
    {
      title: 'Khutbah',
      icon: FaSolidMosque
    },
    {
      title: 'Do’a',
      icon: FaSolidHandsHolding
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
          p-5 flex flex-row gap-3 items-center
          text-xl font-medium w-full md:w-[350px] h-20">
          <Icon
            src={service.icon}
            size="30"
            className="fill-qc-melon shrink-0"
          />
          <span class="grow">{service.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>