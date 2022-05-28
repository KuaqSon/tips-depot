import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';

export interface BreadcrumbBarProps {
  links: Array<{
    href: string;
    label: string;
  }>;
}

export default function BreadcrumbBar({ links }: BreadcrumbBarProps) {
  return (
    <Box>
      <Breadcrumb spacing="8px">
        {links.map((l, idx) => (
          <BreadcrumbItem key={idx}>
            <BreadcrumbLink href={l.href} as={Link}>
              {l.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
}
