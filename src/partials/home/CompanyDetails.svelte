<script lang="ts">
  const companyDetails: {
    name?: string;
    icon: string;
  }[] = [
    {
      name: "Tentang",
      icon: "/icons/tentang.svg"
    },
    {
      name: "Visi",
      icon: "/icons/visi.svg"
    },
    {
      name: "Misi",
      icon: "/icons/misi.svg"
    },
    {
      name: "Program",
      icon: "/icons/jaringan.svg"
    }
  ]
</script>

<section class="container max-w-4xl mx-auto mb-10 mt-20 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0" id="company-details">
  <div class="md:gap-6 grid grid-cols-4 gap-2">
    {#each companyDetails as detail}
      <button class="cursor-pointer group flex flex-col md:gap-4 items-center justify-center
        gap-2 md:pt-6 md: pb-4 md:px-6 px-3 py-2 border border-qc rounded-md"
        aria-label={detail.name}
        title={detail.name}
      >
        <img
          src={detail.icon}
          alt={detail.name}
          class="w-full h-auto group-hover:opacity-85"
        />
        <span class="font-semibold md:text-xl text-xs">{detail.name}</span>
      </button>
    {/each}
  </div>
</section>