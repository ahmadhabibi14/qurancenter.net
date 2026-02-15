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
  tags: number[];
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
  curies: WPLink[];
}
