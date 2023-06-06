import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function ThemeToggleButton() {
  const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} ml={4} position="fixed">
      { colorMode === 'light' ? 
      (<MoonIcon boxSize={4} />) : (<SunIcon boxSize={4} />)
      }
    </Button>
  );
}

export default ThemeToggleButton