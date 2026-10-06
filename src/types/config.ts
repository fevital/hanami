interface SiteConfig {
  /** Deployed URL of the site, e.g. "https://example.com" */
  url: string;
  /** Blog title shown in header and meta tags */
  title: string;
  /** Short description used in SEO meta and RSS feed */
  description: string;
  /** Default post author name */
  author: string;
  /** Author profile URL (used in structured data) */
  profile?: string;
  /** Fallback OG image filename in /public, e.g. "og.jpg" */
  ogImage?: string;
  /** HTML lang attribute, defaults to "en" */
  lang?: string;
  /** IANA timezone for post dates, e.g. "Asia/Bangkok" */
  timezone?: string;
  /** Text direction */
  dir?: "ltr" | "rtl" | "auto";
  /** Google Search Console verification meta tag value */
  googleVerification?: string;
}

interface PostsConfig {
  /** Posts per page on paginated listing pages */
  perPage?: number;
  /** Posts shown on the index/home page */
  perIndex?: number;
  /**
   * Scheduled posts within this window (ms) of their pubDatetime
   * are shown as published. Defaults to 15 minutes.
   */
  scheduledPostMargin?: number;
}

interface FeaturesConfig {
  /** Enable light/dark mode toggle. Defaults to true. */
  lightAndDarkMode?: boolean;

  /**
   * Generate dynamic OG images per post and provide `/og.png`
   * when the static public image is absent.
   */
  dynamicOgImage?: boolean;

  /** Show the /archives page and link it in nav. Defaults to true. */
  showArchives?: boolean;

  /** Show back button on post detail pages. Defaults to true. */
  showBackButton?: boolean;

  /** "Edit page" link shown on post detail pages. */
  editPost?:
    | {
        enabled: true;
        url: string;
      }
    | {
        enabled: false;
      };

  /**
   * Search provider. "pagefind" ships in the base template.
   * Set to false to disable search entirely.
   */
  search?: "pagefind" | false;
}

interface SocialLink {
  /**
   * Must match an SVG filename in src/assets/icons/socials/.
   */
  name: string;

  url: string;

  linkTitle?: string;
}

interface ShareLink {
  /**
   * Must match an SVG filename in src/assets/icons/socials/.
   */
  name: string;

  /**
   * Base share URL.
   */
  url: string;

  linkTitle?: string;
}

interface AstroPaperConfig {
  site: SiteConfig;

  posts?: PostsConfig;

  features?: FeaturesConfig;

  socials?: SocialLink[];

  shareLinks?: ShareLink[];
}

type ResolvedSiteConfig = Required<
  Pick<
    SiteConfig,
    | "url"
    | "title"
    | "description"
    | "author"
    | "lang"
    | "timezone"
    | "dir"
    | "ogImage"
  >
> &
  Pick<SiteConfig, "profile" | "googleVerification">;

export interface ResolvedAstroPaperConfig {
  site: ResolvedSiteConfig;

  posts: Required<PostsConfig>;

  features: Required<FeaturesConfig>;

  socials: SocialLink[];

  shareLinks: ShareLink[];
}

/**
 * Type helper for astro-paper.config.ts.
 */
export function defineAstroPaperConfig(
  config: AstroPaperConfig
): AstroPaperConfig {
  return config;
}
