<script lang="ts">
	import { Icon } from "svelte-icons-pack";
	import { RiSystemCloseFill } from "svelte-icons-pack/ri";

  const companyDetails: {
    name?: string;
    link?: string;
    icon: string;
    popup?: boolean
  }[] = [
    {
      name: "Tentang",
      link: "/profile#tentang",
      icon: "/icons/tentang.svg"
    },
    {
      name: "Visi",
      link: "/profile#visi",
      icon: "/icons/visi.svg"
    },
    {
      name: "Misi",
      link: "/profile#misi",
      icon: "/icons/misi.svg"
    },
    {
      name: "Jaringan",
      link: "/#jaringan",
      icon: "/icons/jaringan.svg",
      popup: true
    }
  ];

  let isPopUpOpen: boolean = $state(false);
</script>


{#if isPopUpOpen}
  <div class="popup-container">
    <div class="rounded-xl bg-white p-6 flex flex-col gap-4 md:w-7/12 lg:6/12 h-fit">
      <header class="flex justify-between items-center flex-row">
        <h3 class="text-xl text-qc-darker font-bold">Jaringan Hidayatullah</h3>
        <button class="p-1 rounded-full border-[3px] border-qc-darker hover:bg-qc/20
          right-2 top-2 cursor-pointer"
        onclick={() => isPopUpOpen = false}>
          <Icon
            src={RiSystemCloseFill}
            size="20"
          />
        </button>
      </header>
      <img
        src="/img/jaringan.jpg"
        alt="Jaringan Hidayatullah"
        class="w-full h-auto"
      />
    </div>
  </div>
{/if}

<section class="container max-w-4xl mx-auto mt-14 mb-7 md:scroll-mt-28 scroll-mt-20 px-5 md:px-0" id="company-details">
  <div class="md:gap-6 grid grid-cols-4 gap-2 items-center justify-center">
    {#each companyDetails as detail}
      {#if detail.popup}
        <button onclick={() => isPopUpOpen = true} class="cursor-pointer group flex
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
        </button>
      {:else}
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