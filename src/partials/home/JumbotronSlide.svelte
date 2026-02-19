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

  let imageLoaded: Record<number, boolean> = {};
</script>

<section id="jumbotron-desktop" class="hidden md:block relative overflow-hidden w-full h-fit">
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
        <div class="relative w-full aspect-2/1 md:block hidden">
          {#if !imageLoaded[idx]}
            <!-- Skeleton -->
            <div class="absolute inset-0 animate-pulse bg-gray-100 flex justify-center items-center">
              <h2 class="text-2xl">Loading image ...</h2>
            </div>
          {/if}
          <img
            onerror={handleImgSrcError}
            src={img}
            alt="Slide {idx + 1}"
            class="w-full object-cover"
            class:opacity-0={!imageLoaded[idx]}
            class:opacity-100={imageLoaded[idx]}
            fetchpriority="high"
            onload={() => (imageLoaded[idx] = true)}
          />
        </div>
      {/each}
    </Carousel>
  {/if}
</section>

<section id="jumbotron-mobile" class="block md:hidden relative overflow-hidden w-full h-fit">
  {#if browser}
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
        <div class="relative w-full aspect-video block md:hidden">
          {#if !imageLoaded[idx]}
            <!-- Skeleton -->
            <div class="absolute inset-0 animate-pulse bg-gray-100 flex justify-center items-center">
              <h2 class="text-2xl">Loading image ...</h2>
            </div>
          {/if}
          <img
            onerror={handleImgSrcError}
            src={img}
            alt="Slide {idx + 1}"
            class="w-full object-cover"
            class:opacity-0={!imageLoaded[idx]}
            class:opacity-100={imageLoaded[idx]}
            fetchpriority="high"
            onload={() => (imageLoaded[idx] = true)}
          />
        </div>
      {/each}
    </Carousel>
  {/if}
</section>