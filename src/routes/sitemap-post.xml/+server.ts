import { SiteBaseUrl } from "@/lib/constant";
import { formatSitemapDate } from "@/lib/datetime";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const response = await fetch('https://admin.qurancenter.net/post-sitemap.xml');

  if (!response.ok) {
    console.error(response)
    return new Response('Failed to fetch sitemap', { status: 500 });
  }

  const xml = await response.text();

  // Extract only <urlset>...</urlset>
  const match = xml.match(/<urlset[\s\S]*<\/urlset>/);

  if (!match) {
    return new Response('Invalid sitemap format', { status: 500 });
  }  

  const cleanUrlset = String(match[0]).trim();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type='text/xsl' href='${SiteBaseUrl}/sitemap.xsl'?>
<!-- generated-on='${formatSitemapDate()}' -->
${cleanUrlset}`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
