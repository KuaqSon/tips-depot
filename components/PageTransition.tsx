import { SlideFade } from '@chakra-ui/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return <SlideFade in>{children}</SlideFade>;
}
