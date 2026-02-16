export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: WPRendered;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: "post";
  link: string;
  title: WPRendered;
  content: WPContent;
  excerpt: WPContent;
  author: number;
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  meta: WPPostMeta;
  categories: number[];
  tags: any[];
  class_list: string[];
  _links: WPLinks;
}

export interface WPRendered {
  rendered: string;
}

export interface WPContent {
  rendered: string;
  protected: boolean;
}

export interface WPPostMeta {
  footnotes: string;
}

export interface WPLink {
  href: string;
  embeddable?: boolean;
  taxonomy?: string;
  templated?: boolean;
  count?: number;
  targetHints?: {
    allow: string[];
  };
}

export interface WPLinks {
  self: WPLink[];
  collection: WPLink[];
  about: WPLink[];
  author: WPLink[];
  replies: WPLink[];
  "version-history": WPLink[];
  "wp:attachment": WPLink[];
  "wp:term": WPLink[];
  "wp:featuredmedia": WPLink[];
  curies: WPLink[];
}

export interface WPAttachment {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;

  slug: string;
  status: 'inherit' | string;
  type: 'attachment';

  link: string;

  title: WPRendered;
  description: WPRendered;
  caption: WPRendered;

  guid: WPRendered;

  author: number;
  featured_media: number;

  comment_status: 'open' | 'closed' | string;
  ping_status: 'open' | 'closed' | string;

  template: string;
  meta: unknown[];

  class_list: string[];

  alt_text: string;

  media_type: 'image' | 'file' | 'video' | 'audio' | string;
  mime_type: string;

  media_details: WPMediaDetails;

  post: number; // parent post ID

  source_url: string;

  _links: WPAttachmentLinks;
}

export interface WPMediaDetails {
  width: number;
  height: number;
  file: string;
  filesize?: number;

  sizes: Record<string, WPMediaSize>;

  image_meta: WPImageMeta;
}

export interface WPMediaSize {
  file: string;
  width: number;
  height: number;
  filesize?: number;
  mime_type: string;
  source_url: string;
}

export interface WPImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: string[];
}

export interface WPAttachmentLinks {
  self: Array<{
    href: string;
    targetHints?: {
      allow: string[];
    };
  }>;

  collection: Array<{
    href: string;
  }>;

  about: Array<{
    href: string;
  }>;

  author: Array<{
    embeddable: boolean;
    href: string;
  }>;

  replies: Array<{
    embeddable: boolean;
    href: string;
  }>;

  'wp:attached-to': Array<{
    embeddable: boolean;
    post_type: string;
    id: number;
    href: string;
  }>;

  curies: Array<{
    name: string;
    href: string;
    templated: boolean;
  }>;
}
