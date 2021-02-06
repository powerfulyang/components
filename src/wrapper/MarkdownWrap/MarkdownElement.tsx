import React, { FC, memo, ReactNode, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import classNames from 'classnames';
import { Icon, IconTag, ShowQrCode, CurrentPageQrCode, Tooltip } from '@/components';
import './index.scss';

type CodeProps = {
  value: string;
  language: string;
};
export const Code: FC<CodeProps> = memo(({ value = '', language }) => {
  const [showLanguage] = useState(language || 'javascript');
  return (
    <SyntaxHighlighter showLineNumbers language={showLanguage} style={style}>
      {value}
    </SyntaxHighlighter>
  );
});

export enum HeadingEnum {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
}

const H1: FC = ({ children }) => {
  return (
    <h1 className="flex justify-center h-auto m-4">
      <span className="heading1">
        <span className="prefix" />
        <span className="content">{children}</span>
        <span className="suffix" />
      </span>
    </h1>
  );
};

const Head = (level: number, children: ReactNode) => {
  switch (level) {
    case HeadingEnum.H1:
      return <H1>{children}</H1>;
    case HeadingEnum.H2:
      return <h2>{children}</h2>;
    case HeadingEnum.H3:
      return (
        <h3>
          <span>{children}</span>
        </h3>
      );
    case HeadingEnum.H4:
      return <h4>{children}</h4>;
    default:
      return children;
  }
};

export const Heading: FC<{ level: number }> = memo(({ level, children }) => {
  return <>{Head(level!, children)}</>;
});

export const Link: FC<{ href: string }> = ({ href, children }) => {
  return (
    <a rel="noreferrer" target="_blank" href={href}>
      {children}
    </a>
  );
};

export const BlockQuote: FC = ({ children }) => {
  return <blockquote className="blockquote">{children}</blockquote>;
};

export const List: FC<{ depth: number; ordered: boolean }> = (props) => {
  if (props.children![0].props.checked !== null) {
    return <ul className="task_list_parent">{props.children}</ul>;
  }
  if (props.ordered) {
    return <ul className="list_ordered">{props.children}</ul>;
  }
  if (props.depth % 2 === 0) {
    return <ul className="list_even">{props.children}</ul>;
  }
  return <ul className="list_odd">{props.children}</ul>;
};

export const ListItem: FC<{ checked: null | boolean; ordered: boolean; index: number }> = (
  props,
) => {
  return (
    <li
      className={classNames({
        task_list: props.checked !== null,
      })}
    >
      {props.checked === true && (
        <div className="icon">
          <Icon type="icon-yiwancheng" className="done" />
        </div>
      )}
      {props.checked === false && (
        <div className="icon">
          <Icon type="icon-weiwancheng" className="undone" />
        </div>
      )}
      {props.ordered && (
        <span className="text-blue-600 pr-2 text-sm font-medium">{props.index + 1}.</span>
      )}
      <span
        className={classNames(
          {
            content_done: props.checked,
            content_undone: !props.checked,
          },
          'list_content',
        )}
      >
        {props.children}
      </span>
    </li>
  );
};

export const Table: FC = (props) => {
  return <table className="table">{props.children}</table>;
};

type NodeType = 'paragraph' | 'text' | 'html';

type NodePosition = {
  start: { line: number; column: number; offset: number };
  end: { line: number; column: number; offset: number };
};

type Node = {
  type: NodeType;
  children: Node[];
  value: string;
  position: NodePosition;
};

export const Paragraph: FC<{ node: Node }> = (props) => {
  const text = props.node.children[0].value;
  if (text?.startsWith('tags=>')) {
    const tags = text.trim().replace('tags=>', '').split('|');
    return (
      <div className="my-4 lg:ml-6 sm:ml-2">
        {tags.map((tag) => (
          <IconTag key={tag} value={tag} />
        ))}
      </div>
    );
  }
  if (text?.startsWith('post=>')) {
    const info = text.trim().replace('post=>', '').split('|');
    const author = info[0];
    const postDate = info[1];
    const wordCount = info[2];
    const viewCount = info[3];
    const avatar = info[4];
    return (
      <div className="post_info">
        <span className="author">
          <Icon type="icon-author" />
          <span className="post_info_comment">{author}</span>
        </span>
        <span className="date">
          <Icon type="icon-date" />
          <span className="post_info_comment">发表于{postDate}</span>
        </span>
        <span className="word_count">
          <Icon type="icon-count" />
          <span className="post_info_comment">文字总数{wordCount}</span>
        </span>
        <span className="view_count">
          <Icon type="icon-view_count" />
          <span className="post_info_comment">被{viewCount}人临幸</span>
        </span>
        <span className="qrcode">
          <Tooltip title={<CurrentPageQrCode image={avatar} />}>
            <ShowQrCode>
              <a className="post_info_comment">手机上打开</a>
            </ShowQrCode>
          </Tooltip>
        </span>
      </div>
    );
  }
  return <p>{props.children}</p>;
};
