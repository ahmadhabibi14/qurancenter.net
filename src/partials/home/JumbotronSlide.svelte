<script lang="ts">
	import { browser } from '$app/environment';
  import Carousel from 'svelte-carousel';

  const slidesDesktop: string[] = [
    '/img/slides/slide-long-1.jpg',
    '/img/slides/slide-long-2.jpg',
    '/img/slides/slide-long-3.jpg'
  ];

  const slidesMobile: string[] = [
    '/img/slides/slide-1.jpg',
    '/img/slides/slide-2.jpg',
    '/img/slides/slide-3.jpg'
  ];

  function handleImgSrcError(event: any) {
    event.target.onerror = null;
    event.target.src = '/img/placeholder.png';
  }
</script>

<section id="jumbotron" class="relative overflow-hidden w-full h-fit">
  {#if browser}
    <Carousel
      autoplay
      autoplayDuration={5000}
      autoplayProgressVisible
      pauseOnFocus
      pauseOnHover
      arrows={false}
      dots={false}
      class="relative z-10 h-fit md:block hidden"
    >
      {#each slidesDesktop as img, idx}
        <div class="w-full h-auto aspect-auto md:block hidden">
          <img
            onerror={handleImgSrcError}
            src={img}
            alt="Slide {idx + 1}"
            class="w-full object-cover"
          />
        </div>
      {/each}
    </Carousel>

    <Carousel
      autoplay
      autoplayDuration={5000}
      autoplayProgressVisible
      pauseOnFocus
      pauseOnHover
      arrows={false}
      dots={false}
      class="relative z-10 h-fit block md:hidden"
    >
      {#each slidesMobile as img, idx}
        <div class="w-full h-auto aspect-auto block md:hidden">
          <img
            onerror={handleImgSrcError}
            src={img}
            alt="Slide {idx + 1}"
            class="w-full object-cover"
            fetchpriority="high"
          />
        </div>
      {/each}
    </Carousel>
  {/if}
</section>