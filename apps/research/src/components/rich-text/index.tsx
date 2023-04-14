import { getAssetById } from '@/api';
import {
  BLOCKS,
  Block,
  INLINES,
  Inline,
  MARKS,
} from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';
import * as React from 'react';
import { Divider } from 'ui';

interface RichTextElements {
  children: React.ReactNode;
}

const Text: React.FC<RichTextElements> = ({ children }) => (
  <p className="text-body2 text-label-light-primary">{children}</p>
);

const Heading1: React.FC<RichTextElements> = ({ children }) => (
  <h1 className="text-label-light-primary md:text-heading7 text-heading8">
    {children}
  </h1>
);

const Heading2: React.FC<RichTextElements> = ({ children }) => (
  <h2 className="text-label-light-primary md:text-heading8 text-[24px] font-normal leading-8">
    {children}
  </h2>
);

const Heading3: React.FC<RichTextElements> = ({ children }) => (
  <h3 className="text-label-light-primary text-[24px] md:font-normal leading-8 font-[275]">
    {children}
  </h3>
);

//
const Heading4: React.FC<RichTextElements> = ({ children }) => (
  <h4 className="text-label-light-primary text-[24px] md:font-[275] font-[250] leading-8">
    {children}
  </h4>
);

const Heading5: React.FC<RichTextElements> = ({ children }) => (
  <h5 className="text-label-light-primary md:text-heading6 text-heading7">
    {children}
  </h5>
);

const Heading6: React.FC<RichTextElements> = ({ children }) => (
  <h6 className="text-label-light-primary md:text-heading7 text-heading8">
    {children}
  </h6>
);

export const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
      <Text>{children}</Text>
    ),
    [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
      <Heading1>{children}</Heading1>
    ),
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => (
      <Heading2>{children}</Heading2>
    ),
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
      <Heading3>{children}</Heading3>
    ),
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
      <Heading4>{children}</Heading4>
    ),
    [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => (
      <Heading5>{children}</Heading5>
    ),
    [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => (
      <Heading6>{children}</Heading6>
    ),
    [BLOCKS.HR]: (node: Block | Inline, children: React.ReactNode) => (
      <Divider />
    ),

    [INLINES.HYPERLINK]: (
      { data }: Block | Inline,
      children: React.ReactNode
    ) => {
      return (
        <a
          href={data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body2 text-label-light-primary underline hover:text-label-light-secondary"
        >
          {children}
        </a>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-outside list-disc pl-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-outside">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  },
};
