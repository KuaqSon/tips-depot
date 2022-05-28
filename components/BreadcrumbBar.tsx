import { ChevronRightIcon } from '@chakra-ui/icons';
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
      <Breadcrumb color="gray.600" fontSize="14px" spacing="8px" separator={<ChevronRightIcon color="gray.400" />}>
        {links.map((l, idx) => (
          <BreadcrumbItem key={idx}>
            <BreadcrumbLink href={l.href} as={Link}>
              <Box cursor="pointer" transition="all .3s" _hover={{ color: 'link' }}>
                {l.label}
              </Box>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
}
