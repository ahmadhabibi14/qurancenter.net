<script lang="ts">
  const companyDetails: {
    name?: string;
    link?: string;
    icon: string;
  }[] = [
    {
      name: "Tentang",
      link: "/#tentang",
      icon: "/icons/tentang.svg"
    },
    {
      name: "Visi",
      link: "/#visi",
      icon: "/icons/visi.svg"
    },
    {
      name: "Misi",
      link: "/#misi",
      icon: "/icons/misi.svg"
    },
    {
      name: "Jaringan",
      link: "/#jaringan",
      icon: "/icons/jaringan.svg"
    }
  ]
</script>

<section class="container max-w-4xl mx-auto mt-14 mb-7 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0" id="company-details">
  <div class="md:gap-6 grid grid-cols-4 gap-2 items-center justify-center">
    {#each companyDetails as detail}
      <a href={detail.link} class="cursor-pointer group flex
        md:first:justify-end md:last:justify-start justify-center
        items-center
        md:last:h-[130px] md:first:h-[130px] h-auto
        md:first:pr-3 md:last:pl-3
      "
        aria-label={detail.name}
        title={detail.name}
      >
        <img
          src={detail.icon}
          alt={detail.name}
          class="w-auto h-full group-hover:opacity-85"
        />
      </a>
    {/each}
  </div>
</section>
