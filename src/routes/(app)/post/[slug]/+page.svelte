<script lang="ts">
	import type { WPAttachment, WPPost } from "@/types/posts";
	import type { PageData } from "./$types";
	import { formatIndonesianDateTime } from "@/lib/datetime";
	import type { WPUser } from "@/types/author";
	import { capitalizeWords } from "@/lib/formatter";
	import HeadPost from "@/partials/HeadPost.svelte";
	import { SiteAuthor } from "@/lib/constant";
	import { Icon } from "svelte-icons-pack";
	import { RiArrowsArrowRightSLine, RiBuildingsHome4Line } from "svelte-icons-pack/ri";

  export let data: PageData;

  const { post, exist, thumb, author } = data as {
    post: WPPost;
    exist: boolean;
    thumb: WPAttachment;
    author: WPUser;
  };

  function handleImgSrcError(event: any) {
    event.target.onerror = null;
    event.target.src = '/img/placeholder.png';
  }

  const imageUrl = thumb?.source_url ?? "/img/placeholder.png";
  const imageHeight = thumb?.media_details?.height?.toString() ?? "630";
  const imageWidth = thumb?.media_details?.width?.toString() ?? "1200";

  const authorName = capitalizeWords(author?.name ?? SiteAuthor);
</script>

{#if exist && post}
  <!-- SEO -->
  <HeadPost
    title={post.title?.rendered ?? "Berita"}
    description={post.excerpt?.rendered ?? ""}
    path={`/post/${post.slug}`}
    image={imageUrl}
    imgHeight={imageHeight}
    imgWidth={imageWidth}
    publishedTime={post.date_gmt}
    modifiedTime={post.modified_gmt}
    author={authorName}
    tags={post.tags ?? []}
  />
{:else}
  <!-- SEO Not Found -->
  <HeadPost
    title="Berita tidak ditemukan"
    description="Berita tidak ditemukan"
    path="/post/not-found"
    image="/img/placeholder.png"
    imgHeight="630"
    imgWidth="1200"
    publishedTime={new Date().toISOString()}
    modifiedTime={new Date().toISOString()}
    author={SiteAuthor}
    tags={[]}
  />
{/if}


<div class="min-h-[900px] w-full flex flex-col">
  {#if exist && post}
    <div class="container max-w-6xl mx-auto flex flex-col gap-8 my-10">
      <div
        class="prose wrap-break-word md:prose-2xl w-full mx-auto px-5 md:px-0
        prose-headings:font-bold
        prose-headings:tracking-tight 
        prose-img:rounded-xl
        prose-h1:my-4 prose-h1:text-4xl prose-h1:font-bold prose-h1:leading-12
        prose-h2:my-3 prose-h2:text-3xl prose-h2:font-bold
        prose-h3:my-2 prose-h3:text-2xl prose-h3:font-bold
        prose-h4:my-2 prose-h4:text-xl prose-h4:font-bold
        prose-h5:my-2 prose-h5:text-lg prose-h5:font-bold
        prose-h6:my-2 prose-h6:text-base prose-h6:font-bold
        prose-p:text-base"
      >
        <div class="not-prose text-gray-600 text-sm mb-6 flex flex-row gap-1 md:gap-2 items-center">
          <a href="/" class="flex flex-row items-center gap-1 md:gap-2 hover:underline">
            <Icon
              src={RiBuildingsHome4Line}
              size="15"
              className="text-qc-darker fill-qc-darker shrink-0"
            />
            <span>Beranda</span>
          </a>
          <Icon
            src={RiArrowsArrowRightSLine}
            size="15"
            className="text-qc-darker fill-qc-darker shrink-0"
          />
          <a href="/posts" class="hover:underline">
            Berita
          </a>
          <Icon
            src={RiArrowsArrowRightSLine}
            size="15"
            className="text-qc-darker fill-qc-darker shrink-0"
          />
          <span class="line-clamp-1">
            {@html post.title?.rendered}
          </span>
        </div>
        <!-- Thumbnail -->
        <div class="flex flex-col gap-2 items-center not-prose">
          <div class="w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              alt={thumb?.alt_text ?? post.title?.rendered}
              onerror={handleImgSrcError}
              class="object-cover w-full h-full"
            />
          </div>

          {#if thumb?.caption?.rendered}
            <p class="text-xs not-prose-p">
              {@html thumb.caption.rendered}
            </p>
          {/if}
        </div>

        <!-- Title -->
        <h1>{@html post.title?.rendered}</h1>

        <!-- Meta -->
        <div class="not-prose text-gray-600 flex flex-row gap-2 items-center">
          <span class="text-lg">
            oleh <b>{authorName}</b>
          </span>
          <span class="text-base">●</span>
          <time datetime={post.date_gmt} class="text-base">
            {formatIndonesianDateTime(post.date_gmt)}
          </time>
        </div>

        <!-- Content -->
        <div>
          {@html post.content?.rendered}
        </div>
      </div>
    </div>
  {:else}
    <!-- Not Found UI -->
    <div class="container max-w-6xl mx-auto flex flex-col gap-8 my-20">
      <h1 class="text-4xl font-bold text-center">
        Berita tidak ditemukan
      </h1>
    </div>
  {/if}
</div>