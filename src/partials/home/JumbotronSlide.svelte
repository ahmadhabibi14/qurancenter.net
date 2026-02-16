<script lang="ts">
	import { browser } from '$app/environment';
  import Carousel from 'svelte-carousel';

  const slides: string[] = [
    '/img/slides/slide-1.png',
    '/img/slides/slide-2.png',
    '/img/slides/slide-3.png'
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
      class="relative z-10 h-fit"
    >
      {#each slides as img, idx}
        <div class="w-full h-auto aspect-auto">
          <img
            onerror={handleImgSrcError}
            src={img}
            alt="Slide {idx + 1}"
            class="w-full object-cover"
          />
        </div>
      {/each}
    </Carousel>
  {/if}
</section>