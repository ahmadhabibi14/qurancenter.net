<script lang="ts">
  const partners: {
    name?: string;
    image: string;
  }[] = [
    {
      image: '/icons/partners/1.jpg',
    },
    {
      image: '/icons/partners/2.png',
    },
    {
      image: '/icons/partners/3.png',
    },
    {
      image: '/icons/partners/4.png',
    },
    {
      image: '/icons/partners/5.png',
    },
    {
      image: '/icons/partners/6.png',
    },
    {
      image: '/icons/partners/7.png',
    },
    {
      image: '/icons/partners/8.png',
    },
    {
      image: '/icons/partners/9.png',
    },
    {
      image: '/icons/partners/10.png',
    },
    {
      image: '/icons/partners/11.png',
    },
    {
      image: '/icons/partners/12.png',
    },
    {
      image: '/icons/partners/13.png',
    },
    {
      image: '/icons/partners/14.png',
    },
    {
      image: '/icons/partners/15.png',
    },
    {
      image: '/icons/partners/16.png',
    },
    {
      image: '/icons/partners/17.png',
    },
    {
      image: '/icons/partners/18.png',
    },
    {
      image: '/icons/partners/19.png',
    },
    {
      image: '/icons/partners/20.png',
    },
    {
      image: '/icons/partners/21.png',
    },
    {
      image: '/icons/partners/22.png',
    },
    {
      image: '/icons/partners/23.png',
    },
    {
      image: '/icons/partners/24.png',
    },
    {
      image: '/icons/partners/25.png',
    },
    {
      image: '/icons/partners/26.png',
    },
    {
      image: '/icons/partners/27.png',
    },
    {
      image: '/icons/partners/28.png',
    },
    {
      image: '/icons/partners/29.png',
    },
    {
      image: '/icons/partners/30.png',
    },
    {
      image: '/icons/partners/31.png',
    },
    {
      image: '/icons/partners/32.png',
    },
    {
      image: '/icons/partners/33.png',
    },
    {
      image: '/icons/partners/34.png',
    },
    {
      image: '/icons/partners/35.png',
    },
    {
      image: '/icons/partners/36.png',
    },
    {
      image: '/icons/partners/37.png',
    },
    {
      image: '/icons/partners/38.png',
    },
    {
      image: '/icons/partners/39.jpg',
    },
    {
      image: '/icons/partners/40.png',
    },
    {
      image: '/icons/partners/41.png',
    },
    {
      image: '/icons/partners/42.png',
    },
    {
      image: '/icons/partners/43.png',
    },
    {
      image: '/icons/partners/44.png',
    },
    {
      image: '/icons/partners/45.png',
    },
    {
      image: '/icons/partners/46.png',
    },
    {
      image: '/icons/partners/47.png',
    },
    {
      image: '/icons/partners/48.png',
    },
    {
      image: '/icons/partners/49.png',
    },
    {
      image: '/icons/partners/50.png',
    },
  ]
</script>

<section class="container max-w-6xl mx-auto mb-16 md:px-5 lg:px-0 px-5" id="partners">
  <div class="flex flex-col gap-7">
    <div class="flex flex-col gap-2 text-center">
      <span class="text-qc-darker text-xl font-medium">Mitra Kami</span>
      <h3 class="font-semibold text-4xl">Bersama Membangun Generasi Qur’ani</h3>
    </div>
    <div class="partners-wrapper h-[120px] group">
      {#each partners as prt, idx}
        <div
          style="animation-delay: calc(30s / 6 * (6 - {idx+1}) * -1);"
          class="group-hover:[animation-play-state:paused] h-[120px] w-[200px]
            py-5 px-7 partner-item cursor-pointer flex justify-center items-center
          bg-white rounded-md border border-gray-200"
          title={prt.name}
        >
          <img
            src={prt.image}
            alt=""
            class="h-full w-auto object-contain"
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";

  .partners-wrapper {
    width: 100%;
    max-width: 1536px;
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }

  @keyframes scrollLeftPartner {
    to {
      left: -200px;
    }
  }

  .partner-item {
    width: 200px;
    position: absolute;
    left: max(calc(170px * 6), 100%);
    animation-name: scrollLeftPartner;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>