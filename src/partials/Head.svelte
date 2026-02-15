<script lang="ts">
	import { SiteName, SiteDesc, SiteBaseUrl, SiteImageUrl, SiteAuthor } from '../lib/constant';

	export let title: string = SiteName;
	export let path: string = '';
	export let description: string = SiteDesc;
	export let imageUrl: string = SiteImageUrl;
	export let author: string = SiteAuthor;
	export let imgWidth: string = '1200';
	export let imgHeight: string = '630';

	const siteUrl: string = SiteBaseUrl + path;
</script>

<svelte:head>
	<title>{title}</title>
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<meta name="author" content={author} />
	<meta name="description" content={description} />
	<meta name="referrer" content="no-referrer-when-downgrade" />

	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:locale:alternate" content="en_UK" />
	<meta property="og:locale:alternate" content="ms_MY" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={imageUrl ? imageUrl : SiteImageUrl} />
	<meta property="og:image:secure_url" content={imageUrl ? imageUrl : SiteImageUrl} />
	<meta property="og:image:width" content={imgWidth} />
	<meta property="og:image:height" content={imgHeight} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:see_also" content="https://www.instagram.com/qurancenter/" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:width" content={imgWidth} />
	<meta name="twitter:image:height" content={imgHeight} />

	<meta name="DC.title" content="Geo Tag Generator" />
	<meta name="geo.region" content="ID-JK" />
	<meta name="geo.placename" content="Jakarta Timur, DKI Jakarta" />
	<meta name="geo.position" content="-6.333851, 106.902487" />
	<meta name="ICBM" content="-6.333851, 106.902487" />

	<link href={SiteBaseUrl} rel="canonical" />
	<link href={SiteBaseUrl} rel="home" />
	<link type="text/plain" href="{SiteBaseUrl}/humans.txt" rel="author" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"@id": "https://qurancenter.net/#organization",
			"name": "Qurancenter",
			"alternateName": "QC",
			"url": "https://qurancenter.net",
			"logo": "https://qurancenter.net/icons/main-logo.svg",
			"image": "https://qurancenter.net/img/preview.png",
			"description": "Qurancenter is a platform dedicated to providing accurate and accessible Islamic knowledge and resources.",
			"telephone": "+62-813-2248-2220",
			"priceRange": "$$",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Jl. Assyafi'iyah No.247, RT.3/RW.5, Cilangkap, Kec. Cipayung",
				"addressLocality": "Jakarta Timur",
				"addressRegion": "DKI Jakarta",
				"postalCode": "13870",
				"addressCountry": "ID"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": -6.333851,
				"longitude": 106.902487
			},
			"openingHoursSpecification": [
				{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday"
					],
					"opens": "07:00",
					"closes": "21:00"
				}
			],
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+62-813-2248-2220",
				"contactType": "customer service",
				"areaServed": "ID",
				"availableLanguage": ["id", "en"]
			},
			"sameAs": ["https://www.instagram.com/qurancenter/", "https://wa.me/6281285960701"],
			"areaServed": {
				"@type": "Country",
				"name": "Indonesia"
			}
		}
	</script>
</svelte:head>
