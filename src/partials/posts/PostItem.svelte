<script lang="ts">
  import type { WPAttachment, WPPost } from "@/types/posts";
  import { formatDate, formatIndonesianDateTime } from "@/lib/datetime";
	import { Icon } from "svelte-icons-pack";
	import { RiSystemTimeLine } from "svelte-icons-pack/ri";
	import Image from "@/lib/components/Image.svelte";

  export let post: WPPost;
  export let preSlug: string = "/post/";

  const wpFeaturedMedia: WPAttachment[] | undefined = post?._embedded?.['wp:featuredmedia'] as WPAttachment[] | undefined;
	const thumb: WPAttachment | undefined = wpFeaturedMedia?.[0];

	const imageUrl: string = thumb?.source_url ?? '/img/placeholder.png';
</script>

<a
  href="{preSlug}{post.slug}"
  target="_self"
  data-sveltekit-reload
  class="group flex flex-col md:gap-4 gap-1 md:border border-gray-200 md:rounded-lg md:hover:shadow-md transition-shadow overflow-hidden"
>
  <Image
    src={imageUrl}
    alt={post.title?.rendered ?? 'Post Image'}
    classNameContainer="h-30 md:h-48 rounded-lg md:rounded-none overflow-hidden"
    classNameImg="w-full h-full object-cover"
  />
  <div class="flex flex-col gap-1 md:gap-2 md:px-4 md:pb-4">
    <h2 class="text-base md:text-xl font-semibold group-hover:underline line-clamp-3
      md:leading-6 leading-5">
      {@html post.title.rendered}
    </h2>
    <time class="text-qc text-xs block md:hidden" datetime={post.date_gmt+'Z'}>
      {formatDate(post.date_gmt)}
    </time>
    <time class="text-qc text-sm hidden md:flex flex-row gap-1.5 items-center" datetime={post.date_gmt+'Z'}>
      <Icon
        src={RiSystemTimeLine}
        size="16"
        className="inline-block fill-qc"
      />
      {formatIndonesianDateTime(post.date_gmt)}
    </time>
    <div class="line-clamp-2 text-gray-800 text-sm">
      {@html post.excerpt.rendered}
    </div>
  </div>
</a>