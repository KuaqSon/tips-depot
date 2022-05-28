import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  Kbd,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HEADER_HEIGHT } from 'utils/constants';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

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
              <Button>
                <HStack>
                  <Box>
                    <SearchIcon />
                  </Box>
                  <Box>Search...</Box>
                  <Box>
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
