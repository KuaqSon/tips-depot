import Blockquote from 'components/MarkdownBox/utilities/Blockquote';
import Code from 'components/MarkdownBox/utilities/Code';
import Heading1 from 'components/MarkdownBox/utilities/Heading1';
import Heading2 from 'components/MarkdownBox/utilities/Heading2';
import Heading3 from 'components/MarkdownBox/utilities/Heading3';
import Heading4 from 'components/MarkdownBox/utilities/Heading4';
import Heading5 from 'components/MarkdownBox/utilities/Heading5';
import Heading6 from 'components/MarkdownBox/utilities/Heading6';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const components = {
  // a: MarkdownLink,
  blockquote: Blockquote,
  code: Code,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  // hr: ThematicBreak,
  // img: Image,
  // inlineCode: InlineCode,
  // ol: OrderedList,
  // p: Paragraph,
  // pre: (props) => <div {...props} />,
  // table: Table,
  // tbody: TableBody,
  // thead: TableHead,
  // ul: List,
};

export default function MarkdownBox({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
}
