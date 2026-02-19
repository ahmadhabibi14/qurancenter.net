<script lang="ts">
	import { Icon } from "svelte-icons-pack";
	import { RiArrowsArrowRightUpLine } from "svelte-icons-pack/ri";
</script>


<section class="w-full h-[300px]
  md:grid md:grid-cols-2 flex flex-col
  md:scroll-mt-24 scroll-mt-20"
  id="jaringan"
>
  <a href="https://www.youtube.com/watch?v=4SF0rT9ATmA" target="_blank"
    class="bg-qc-darker relative overflow-hidden
    flex flex-row gap-6 items-center justify-center
    py-8 group">
    <img
      src="/illustration/chain-right.svg"
      alt=""
      class="rotate-180 absolute z-0 opacity-10 group-hover:opacity-20 h-full w-auto top-0 left-0 bottom-0"
    />
    <img
      src="/illustration/chain-right.svg"
      alt=""
      class="absolute z-0 opacity-10 group-hover:opacity-20 h-full w-auto top-0 right-0 bottom-0"
    />
    <div class="h-full w-auto relative z-10">
      <img
        src="/illustration/mono-radio.svg"
        alt=""
        class="h-full w-auto"
      />
    </div>
    <h5 class="relative z-10 drop-shadow-md text-lg md:text-2xl font-semibold text-qc-melon leading-5 md:leading-7 text-center">
      Siaran Radio <br/> Live Streaming <br/> Qur'an Center <br/> Hidayatullah
    </h5>

    <div class="group-hover:flex hidden items-center justify-center p-3 bg-qc-melon text-qc-darker rounded-md absolute z-10 bottom-0 right-0 m-2">
      <Icon
        src={RiArrowsArrowRightUpLine}
        size="20"
      />
    </div>
  </a>

  <a href="https://www.youtube.com/@tvbaitulkarim/streams" target="_blank"
    class="bg-qc-melon relative overflow-hidden
    flex flex-row gap-6 items-center justify-center
    py-8 group">
    <img
      src="/illustration/chain-left.svg"
      alt=""
      class="rotate-180 absolute z-0 opacity-10 group-hover:opacity-20 h-full w-auto top-0 right-0 bottom-0"
    />
    <img
      src="/illustration/chain-left.svg"
      alt=""
      class="absolute z-0 opacity-10 group-hover:opacity-20 h-full w-auto top-0 left-0 bottom-0"
    />
    <h5 class="relative z-10 drop-shadow-md text-lg md:text-2xl font-semibold text-qc-darker leading-5 md:leading-7 text-center">
      Podcast <br/> Live TV <br/> Qur'an Center <br/> Hidayatullah
    </h5>
    <div class="h-full w-auto relative z-10">
      <img
        src="/illustration/mono-tv.svg"
        alt=""
        class="h-full w-auto"
      />
    </div>

    <div class="group-hover:flex hidden items-center justify-center p-3 bg-qc-darker text-qc-melon rounded-md absolute z-10 bottom-0 right-0 m-2">
      <Icon
        src={RiArrowsArrowRightUpLine}
        size="20"
      />
    </div>
  </a>
</section>