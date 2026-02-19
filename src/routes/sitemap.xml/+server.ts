import { PRIVATE_API_URL } from "$env/static/private";
import { SiteBaseUrl } from "@/lib/constant";
import { programShortNames } from "@/lib/programs";
import type { RequestHandler } from "@sveltejs/kit";

function formatSitemapDate(date = new Date()) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // convert 0 → 12

  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}

export const GET: RequestHandler = async () => {
  const res = await fetch(
    `${PRIVATE_API_URL}/posts?per_page=1&orderby=modified&order=desc&_fields=modified_gmt`
  );

  const data = await res.json();
  const lastmod = data[0]?.modified_gmt;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type='text/xsl' href='${SiteBaseUrl}/sitemap.xsl'?>
<!-- sitemap-generator-url='http://www.arnebrachhold.de' sitemap-generator-version='4.1.23' -->
<!-- generated-on='${formatSitemapDate()}' -->
<urlset
  xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'
  xsi:schemaLocation='http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'
  xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'
>
  <url>
    <loc>https://qurancenter.net/</loc>
    <lastmod>2026-02-18T09:10:47+00:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://qurancenter.net/program</loc>
    <lastmod>2026-02-18T04:23:47+00:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>2.0</priority>
  </url>
  ${
    programShortNames.map(program => `<url>
    <loc>https://qurancenter.net/program/${program.slug}</loc>
    <lastmod>2026-02-18T04:23:47+00:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>2.0</priority>
  </url>
  `).join('')
  }<url>
    <loc>https://qurancenter.net/posts</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>2.0</priority>
  </url>
</urlset>`
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}