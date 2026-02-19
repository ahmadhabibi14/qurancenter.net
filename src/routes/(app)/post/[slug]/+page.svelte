<script lang="ts">
	import type { WPAttachment, WPPost, WPTag } from '@/types/posts';
	import type { PageData } from './$types';
	import { formatIndonesianDateTime } from '@/lib/datetime';
	import type { WPUser } from '@/types/author';
	import { capitalizeWords, decodeHTML } from '@/lib/formatter';
	import HeadPost from '@/partials/HeadPost.svelte';
	import { SiteAuthor, SiteImageUrl } from '@/lib/constant';
	import { Icon } from 'svelte-icons-pack';
	import { RiArrowsArrowRightSLine, RiBuildingsHome4Line } from 'svelte-icons-pack/ri';
	import { onMount } from 'svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { FaSolidTags } from 'svelte-icons-pack/fa';

	export let data: PageData;

	const { post, exist } = data as {
		post: WPPost;
		exist: boolean;
	};

	function handleImgSrcError(event: any) {
		event.target.onerror = null;
		event.target.src = '/img/placeholder.png';
	}

	const wpFeaturedMedia = post?._embedded?.['wp:featuredmedia'] as WPAttachment[] | undefined;
	const author = post?._embedded?.author?.[0] as WPUser | undefined;

	const thumb = wpFeaturedMedia?.[0];

	const imageUrl = thumb?.source_url ?? SiteImageUrl;
	const imageHeight = thumb?.media_details?.height?.toString() ?? '630';
	const imageWidth = thumb?.media_details?.width?.toString() ?? '1200';

	const authorName = capitalizeWords(author?.name ?? SiteAuthor);

  let tags: WPTag[] = [];

  onMount(async () => {
    // Scroll to top when component is mounted
    // window.scrollTo(0, 0);

    if (post?.tags && post?.tags?.length > 0) {
      const tagRes = await fetch(
        `${PUBLIC_API_URL}/tags?include=${post.tags.join(',')}`
      );

      tags = await tagRes.json() as WPTag[];
    }
  })
</script>

{#if exist && post}
	<!-- SEO -->
	<HeadPost
		title={decodeHTML(post.title?.rendered ?? '', 'Berita')}
		description={post.excerpt?.rendered ?? ''}
		path={`/post/${post.slug}`}
		image={imageUrl}
		imgHeight={imageHeight}
		imgWidth={imageWidth}
		publishedTime={post.date_gmt}
		modifiedTime={post.modified_gmt}
		author={authorName}
		tags={(tags ?? []).map(tag => tag.name)}
	/>
{:else}
	<!-- SEO Not Found -->
	<HeadPost
		title="Berita tidak ditemukan"
		description="Berita tidak ditemukan"
		path="/post/not-found"
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
        prose-h1:my-3 prose-h1:md:my-4 prose-h1:text-4xl prose-h1:font-bold prose-h1:leading-12
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
					<a href="/posts" class="hover:underline"> Berita </a>
					<Icon
						src={RiArrowsArrowRightSLine}
						size="15"
						className="text-qc-darker fill-qc-darker shrink-0"
					/>
					<span class="line-clamp-1">
						{@html post.title?.rendered}
					</span>
				</div>

        <!-- Title -->
				<h1>{@html post.title?.rendered}</h1>

				<!-- Meta, Author, Date/Time -->
				<div class="not-prose text-gray-600 flex flex-col md:flex-row gap-1 md:gap-2 md:items-center mb-6">
					<p class="text-base md:text-lg">
						oleh <b>{authorName}</b>
					</p>
					<span class="text-base hidden md:block">●</span>
					<time datetime={post.date_gmt} class="text-sm md:text-base">
						{formatIndonesianDateTime(post.date_gmt)}
					</time>
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

				<!-- Content -->
				<article>
					{@html post.content?.rendered}
				</article>

        <div class="not-prose flex flex-col gap-6">
          <div class="w-full bg-sky-400/20 py-4 px-5 text-sm">
            <p>Dilarang keras mengambil konten, melakukan crawling atau pengindeksan otomatis untuk AI di situs web ini tanpa izin tertulis dari pihak Majelis al-Qur’an Hidayatullah.</p>
          </div>
        </div>

        <!-- TAGS -->
        {#if tags && tags?.length > 0}
          <div class="not-prose flex flex-wrap items-center gap-2 mt-5 text-sm">
            <div>
              <Icon
                src={FaSolidTags}
                size="20"
                className="text-qc-darker fill-qc-darker shrink-0"
              />
            </div>
            {#each tags as tag}
              <span class="bg-white border border-gray-300 px-3 py-1 rounded-md">
                {tag.name}
              </span>
            {/each}
          </div>
        {/if}
			</div>
		</div>
	{:else}
		<!-- Not Found UI -->
		<div class="container max-w-6xl mx-auto flex flex-col gap-8 my-20">
			<h1 class="text-4xl font-bold text-center">Berita tidak ditemukan</h1>
		</div>
	{/if}
</div>
