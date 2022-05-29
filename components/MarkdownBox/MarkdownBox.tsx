import Blockquote from 'components/MarkdownBox/utilities/Blockquote';
import Break from 'components/MarkdownBox/utilities/Break';
import Code from 'components/MarkdownBox/utilities/Code';
import Heading1 from 'components/MarkdownBox/utilities/Heading1';
import Heading2 from 'components/MarkdownBox/utilities/Heading2';
import Heading3 from 'components/MarkdownBox/utilities/Heading3';
import Heading4 from 'components/MarkdownBox/utilities/Heading4';
import Heading5 from 'components/MarkdownBox/utilities/Heading5';
import Heading6 from 'components/MarkdownBox/utilities/Heading6';
import MdImage from 'components/MarkdownBox/utilities/MdImage';
import MdHref from 'components/MarkdownBox/utilities/MdHref';
import MdUnorderedList from 'components/MarkdownBox/utilities/MdUnorderedList';
import MdOrderedList from 'components/MarkdownBox/utilities/MdOrderedList';
import MdParagraph from 'components/MarkdownBox/utilities/MdParagraph';
import MdTable from 'components/MarkdownBox/utilities/MdTable';
import MdTableHead from 'components/MarkdownBox/utilities/MdTableHead';
import MdTableBody from 'components/MarkdownBox/utilities/MdTableBody';
import MdTableRow from 'components/MarkdownBox/utilities/MdTableRow';
import InlineCode from 'components/MarkdownBox/utilities/InlineCode';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Td, Th } from '@chakra-ui/react';

const components = {
  a: MdHref,
  blockquote: Blockquote,
  code: Code,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  hr: Break,
  img: MdImage,
  inlineCode: InlineCode,
  ol: MdOrderedList,
  p: MdParagraph,
  pre: (props: any) => <div {...props} />,
  table: MdTable,
  tbody: MdTableBody,
  thead: MdTableHead,
  tr: MdTableRow,
  th: ({ children }: { children: React.ReactNode }) => <Th>{children}</Th>,
  td: ({ children }: { children: React.ReactNode }) => <Td>{children}</Td>,
  ul: MdUnorderedList,
};

export default function MarkdownBox({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
}
