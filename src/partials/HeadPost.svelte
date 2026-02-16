<script lang="ts">
	import { SiteAuthor, SiteBaseUrl, SiteDesc, SiteImageUrl, SiteName } from "@/lib/constant";

  export let title: string = SiteName;
  export let description: string = SiteDesc;
	export let path: string = '';
  export let image: string = SiteImageUrl;
  export let imgWidth: string = '1200';
	export let imgHeight: string = '630';
  export let publishedTime: string; // ISO
  export let modifiedTime: string;  // ISO
  export let author: string = SiteAuthor;
  export let tags: string[] = [];
  export let locale: string = 'id_ID';
  export let twitterSite: string = '';
  export let twitterCreator: string = '';
  export let wordCount: number | null = null;

	const siteUrl: string = SiteBaseUrl + path;

  const keywords = tags.join(',');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    author: {
      "@type": "Person",
      name: author
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl
    },
    keywords: tags,
    wordCount
  };
</script>

<svelte:head>
  <!-- Basic -->
  <title>{title}</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />

  <!-- Article meta -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="datePublished" content={publishedTime} />
  <meta itemprop="dateModified" content={modifiedTime} />
  {#if wordCount}
    <meta itemprop="wordCount" content={wordCount.toString()} />
  {/if}

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:image" content={image} />
	<meta property="og:image:secure_url" content={image} />
  <meta property="og:image:width" content={imgWidth} />
	<meta property="og:image:height" content={imgHeight} />
  <meta property="og:locale" content={locale} />
  <meta property="article:published_time" content={publishedTime} />
  <meta property="article:modified_time" content={modifiedTime} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  {#if twitterSite}
    <meta name="twitter:site" content={twitterSite} />
  {/if}
  {#if twitterCreator}
    <meta name="twitter:creator" content={twitterCreator} />
  {/if}
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <!-- JSON-LD -->
  {@html `
  <script type="application/ld+json">
    ${JSON.stringify(jsonLd)}
  </script>
  `}

  <link rel="icon" href="/favicon.png" />
</svelte:head>
