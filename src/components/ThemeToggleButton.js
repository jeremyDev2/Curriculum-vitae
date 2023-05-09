import { Button, useColorMode } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';

function ThemeToggleButton() {
    const theme = useTheme();
    const ligthColor = theme.colors.gray[100];
    const darkColor = theme.colors.gray[800];
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? darkColor : ligthColor}
      </Button>
    );
  }


export default ThemeToggleButton