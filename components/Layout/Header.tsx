import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Kbd,
  useColorMode,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HEADER_HEIGHT } from 'utils/constants';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  return (
    <Box
      h={`${HEADER_HEIGHT}px`}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      className="bg-blur"
      bg={useColorModeValue('rgba(255,255,255,0.72)', 'rgba(29,29,31,0.72)')}
      borderBottom="1px"
      borderStyle="solid"
      borderColor={useColorModeValue('rgba(0,0,0,0.16)', 'rgba(255,255,255,0.24)')}
      shadow="xs"
    >
      <Container h="full">
        <Flex justifyContent="space-between" alignItems="center" h="full">
          <Box>
            <Link href="/">
              <Box textAlign="center" fontWeight="bold" fontSize="20px" cursor="pointer">
                Tips Depot
              </Box>
            </Link>
          </Box>
          <HStack>
            <Box>
              <Button
                onClick={() =>
                  toast({ title: 'Coming Soon!', isClosable: true, position: 'bottom', status: 'success' })
                }
              >
                <HStack>
                  <Box>
                    <SearchIcon />
                  </Box>
                  <Box display={{ base: 'none', md: 'block' }}>Search...</Box>
                  <Box display={{ base: 'none', md: 'block' }}>
                    <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
                  </Box>
                </HStack>
              </Button>
            </Box>
            <Box>
              <IconButton
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                rounded="full"
                aria-label="toggle-color-mode"
              ></IconButton>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
