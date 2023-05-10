import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons'

function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();

    return (
      <Button onClick={toggleColorMode}>
        <MoonIcon boxSize={4} />
      </Button>
    );
  }

export default ThemeToggleButton