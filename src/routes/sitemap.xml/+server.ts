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

  const postsLastmod = data[0]?.modified_gmt
    ? new Date(data[0].modified_gmt + "Z").toISOString()
    : new Date().toISOString();

  const nowIso = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type='text/xsl' href='${SiteBaseUrl}/sitemap.xsl'?>
<!-- generated-on='${formatSitemapDate()}' -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SiteBaseUrl}/</loc>
    <lastmod>${nowIso}</lastmod>
    <priority>1.0</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>${SiteBaseUrl}/program</loc>
    <lastmod>${nowIso}</lastmod>
    <priority>0.9</priority>
    <changefreq>yearly</changefreq>
  </url>
  ${programShortNames.map(program => `<url>
    <loc>${SiteBaseUrl}/program/${program.slug}</loc>
    <lastmod>${nowIso}</lastmod>
    <priority>0.8</priority>
    <changefreq>yearly</changefreq>
  </url>
  `).join("")}<url>
    <loc>${SiteBaseUrl}/posts</loc>
    <lastmod>${postsLastmod}</lastmod>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
