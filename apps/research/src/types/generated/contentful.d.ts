// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IArticleFields {
  /** Title */
  title: string;

  /** Article Slug */
  articleSlug: string;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Image */
  image: Asset;

  /** Body */
  body?: Document | undefined;

  /** Authors */
  authors: IAuthor[];

  /** Summary */
  summary?: Document | undefined;

  /** Key Points */
  keyPoints?: string[] | undefined;

  /** Report Document */
  reportDocument?: Asset | undefined;

  /** Tags */
  tags?: ITag[] | undefined;

  /** Horizontal Thumbnail */
  horizontalThumbnail: Asset;

  /** Vertical Thumbnail */
  verticalThumbnail?: Asset | undefined;

  /** Cover Picture */
  coverPicture: Asset;

  /** Video */
  video?: Asset | undefined;

  /** Published Date */
  publishedDate: string;

  /** Public Snippet */
  publicSnippet: Document;

  /** Sections */
  sections: ISection[];

  /** Related Articles */
  relatedArticles?: IArticle[] | undefined;

  /** Recommended Articles */
  recommendedArticles?: IArticle[] | undefined;

  /** SEO */
  seo?: ISeoMetadata | undefined;
}

/** Topic - An Article is an independent (can be presented by itself), reusable (generic content not locked to a specific layout), and individual (about one thing & can be created on its own) item that forms the basis of how K33 Research core content (PDFs, Webinars, or Opinion) are distributed. */

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'article';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IAuthorFields {
  /** Name */
  name: string;

  /** Title */
  title: string;

  /** Description */
  description: string;

  /** Profile Picture */
  profilePicture: Asset;
}

/** Topic - An Author is an independent (can be presented by itself), reusable (generic content not locked to a specific layout), and individual (about one thing & can be created on its own) item that allows users to know which K33 Research analyst created the  content (PDFs, Webinars, or Opinion) they are viewing. */

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'author';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHomePageFields {
  /** Main Article */
  mainArticle: IArticle;

  /** Sub Article 1 */
  subArticle1: IArticle;

  /** Sub Article 2 */
  subArticle2: IArticle;

  /** Sub Article 3 */
  subArticle3: IArticle;

  /** Sub Article 4 */
  subArticle4: IArticle;

  /** Title */
  title: string;

  /** SEO */
  seo: ISeoMetadata;

  /** Cover Article 1 */
  coverArticle1: IArticle;

  /** Cover Article 2 */
  coverArticle2: IArticle;
}

/** Assembly */

export interface IHomePage extends Entry<IHomePageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'homePage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IIndexFields {
  /** Name */
  name: string;

  /** Slug */
  slug: string;

  /** Selected Tokens */
  selectedTokens: IIndexToken[];

  /** Framework Article */
  frameworkArticle: IArticle;

  /** Assessment Article */
  assessmentArticle: IArticle;

  /** Chart */
  chart: Asset;

  /** Highlight Article */
  highlightArticle: IArticle;

  /** description */
  description: string;

  /** Chart Body */
  chartBody: string;
}

export interface IIndex extends Entry<IIndexFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'index';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IIndexTokenFields {
  /** Name */
  name: string;

  /** Token */
  token: IToken;

  /** Selected */
  selected: 'Yes' | 'No';

  /** Commentary */
  commentary: string;
}

export interface IIndexToken extends Entry<IIndexTokenFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'indexToken';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INewsFields {
  /** Top News */
  topNews: Document;

  /** Other News */
  otherNews: Document;
}

/** Top Stories for industry insights home page */

export interface INews extends Entry<INewsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'news';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionFields {
  /** name */
  name: string;
}

/** Path of sections in web expressed as section/sub-section */

export interface ISection extends Entry<ISectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'section';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISeoMetadataFields {
  /** Title */
  title: string;

  /** Description */
  description: string;

  /** Image */
  image: Asset;
}

/** Seo Metadata Content type that would be added to various assemblies */

export interface ISeoMetadata extends Entry<ISeoMetadataFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'seoMetadata';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITagFields {
  /** Title */
  title: string;
}

/** Topic - */

export interface ITag extends Entry<ITagFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'tag';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITokenFields {
  /** ID */
  id: string;

  /** Name */
  name: string;

  /** Icon */
  icon: Asset;
}

export interface IToken extends Entry<ITokenFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'token';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'article'
  | 'author'
  | 'homePage'
  | 'index'
  | 'indexToken'
  | 'news'
  | 'section'
  | 'seoMetadata'
  | 'tag'
  | 'token';

export type IEntry =
  | IArticle
  | IAuthor
  | IHomePage
  | IIndex
  | IIndexToken
  | INews
  | ISection
  | ISeoMetadata
  | ITag
  | IToken;

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
