import { Box, ChakraProvider, Container, Heading, Button, ColorModeProvider, useColorModeValue, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa'
import './App.css';

function Navigation() {
  return (
    <ChakraProvider>
      <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
          HELLO! IM UNDER THE WATER, PLEASE HELP ME, here too much raining. WOOOOOOO!!!
        </Box>
      </Container>
    </ChakraProvider>
  );
}


function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('green', 'orange ');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return(
    <IconButton size="md" 
    fontSize="lg"
    color={iconColor}
    aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
    variant="ghost"
    onClick={toggleColorMode}
    icon={<SwitchIcon />}
    _focus={{boxShadow: 'none'}}
    />
  );
}



function Description() {

  const DesParagraphs = [
    { text: "Junior разработчик" },
    { text: "· изучаю React 🌀" },
    { text: "· Python 🐍" },
    { text: "· щепотка Linux 🐧" },
    { text: "· щепотка C 🤌" },
    { text: "· люблю Computer Science 🖥" },
    { text: "· мечтаю научиться работать на Rust 😅 и Go 🦦" },
  ];
  return (
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1} p={3} mb={6} align="center">
        <Heading as="h2" color="white" variant="page-title">
          Danial Malaiev
          {DesParagraphs.map((DesParagraph, index) => (
            <p key={index} style={{ fontSize: "20px", marginBottom: "8px" }}>
              {DesParagraph.text}
            </p>
          ))}
        </Heading>
      </Box>
    </Box>
  );
}



function App() {

  return (
    <div className="App">

      <ColorModeProvider>

      </ColorModeProvider>

      <Navigation />
      <Description />

    </div>
  );
}

export default App;