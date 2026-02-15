export type SiteObj = {
  path: string,
  priority: 'low' | 'medium' | 'high';
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified?: string | Date | unknown;
}

export const SitePriorityMap: Record<string, string> = {
  'low': '0.5',
  'medium': '0.7',
  'high': '1.0'
}

export const StaticPages: SiteObj[] = [
  {
    path: '/',
    priority: 'high',
    changefreq: 'yearly',
    lastModified: '2026-02-04T12:19:01Z'
  }
]