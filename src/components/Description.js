import { Box, Heading } from '@chakra-ui/react';
import { color } from 'framer-motion';


function Description() {

  const DesParagraphs = [
    { text: "Junior разработчик" },
    { text: "· изучаю React 🌀" },
    { text: "· щепотка Python 🐍" },
    { text: "· администрировал на Linux/Windows 🐧" },
    { text: "· щепотка C 🤌" },
    { text: "· люблю Computer Science 🖥" },
    { text: "· мечтаю научиться работать на Rust 😅 и Go 🦦" },
  ];
  

  return (
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1} p={3} mb={6} align="center">
          <Heading as="h2" variant="page-title">
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


export default Description