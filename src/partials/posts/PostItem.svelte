<script lang="ts">
  import type { WPPost } from "@/types/posts";
  import { formatIndonesianDateTime } from "@/lib/datetime";
	import { Icon } from "svelte-icons-pack";
	import { RiSystemTimeLine } from "svelte-icons-pack/ri";

  export let post: WPPost;
</script>

<a
  href={`/post/${post.slug}`}
  class="group flex flex-col gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-semibold group-hover:underline">{@html post.title.rendered}</h2>
    <time class="text-qc text-sm flex flex-row gap-1.5 items-center" datetime={post.date_gmt}>
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