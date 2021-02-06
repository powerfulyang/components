import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames';
import {
  BlockQuote,
  Code,
  Heading,
  Link,
  List,
  ListItem,
  Paragraph,
  Table,
} from './MarkdownElement';
import './index.scss';

export type MarkdownWrapProps = {
  source: string;
  className?: string;
};

export const MarkdownWrap: FC<MarkdownWrapProps> = ({ source, className }) => {
  return (
    <ReactMarkdown
      className={classNames('markdown_body', className)}
      plugins={[remarkGfm]}
      renderers={{
        code: Code,
        heading: Heading,
        link: Link,
        blockquote: BlockQuote,
        list: List,
        listItem: ListItem,
        table: Table,
        paragraph: Paragraph,
      }}
    >
      {source}
    </ReactMarkdown>
  );
};
