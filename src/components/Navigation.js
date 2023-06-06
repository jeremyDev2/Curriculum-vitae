import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

function Navigation() {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('gray.100', 'gray.800');

  return (
    <Container mt={14}>
      <Box id='navBox' display="flex" justifyContent="space-between" borderRadius="lg" bg="#323135" p={4} mb={6} color={colorMode === 'light' ? textColor : ''} >


        <Link href='https://github.com/warconsular' isExternal color="#4078c0">
          GitHub <ExternalLinkIcon w={5} />
        </Link>


        <Link href='https://www.linkedin.com/in/dan-malaiev-186b81254/' isExternal color="#0e76a8">
          Linkedin <ExternalLinkIcon w={5}/>
        </Link>


        <Link href='mailto:daniil.malaev3@gmail.com' isExternal color="#BB001B">
          Gmail <ExternalLinkIcon w={5}/>
        </Link>



        <Link href='https://www.hackerrank.com/danil_malaev3' isExternal color="#34A853">
          HackerRank <ExternalLinkIcon w={5}/>
        </Link>


        <Link href='https://t.me/war_consular' isExternal color="#0088CC">
          Telegram<ExternalLinkIcon w={5}/> 
        </Link>


      </Box>
    </Container>
  );
}


export default Navigation