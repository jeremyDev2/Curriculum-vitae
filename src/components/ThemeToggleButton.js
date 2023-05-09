import { Button, useColorMode } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function ThemeToggleButton() {
    const theme = useTheme();
    const ligthColor = theme.colors.gray[100];
    const darkColor = theme.colors.gray[800];
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Button onClick={toggleColorMode}>
        <MoonIcon boxSize={4} />
      </Button>
    );
  }


export default ThemeToggleButton