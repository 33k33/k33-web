import { richTextOptions } from '@/components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import styles from './styles.module.css';
import { Article } from '@/types';
import { Image } from 'antd';
import * as React from 'react';

interface ArticleBodyProps extends Pick<Article, 'body'> {}

const ArticleBody: React.FC<ArticleBodyProps> = ({ body }) => {
  if (!body) return;
  return (
    <div id="article-body" className={styles.articleBody}>
      {documentToReactComponents(body.json, {
        ...richTextOptions,
        renderNode: {
          ...richTextOptions.renderNode,
          [BLOCKS.EMBEDDED_ASSET]: (node, children: React.ReactNode) => {
            const img = (body as any).links.assets.block.find(
              (i: any) => i.sys.id === node.data.target.sys.id
            );
            return <Image src={img?.url} alt={img.description} />;
          },
        },
      })}
    </div>
  );
};

export default ArticleBody;
