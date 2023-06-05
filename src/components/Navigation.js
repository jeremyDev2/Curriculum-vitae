import { Box, Container, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';


function Navigation() {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('gray.100', 'gray.800');

  return (
    <Container>
      <Box id='navBox' borderRadius="lg" bg="#323135" p={4} mb={6}   color={colorMode === 'light' ? textColor : ''} >
        <Breadcrumb display="flex">
          <BreadcrumbItem>
            <Link href='https://github.com/warconsular' isExternal color="#4078c0" ml={7}>
              GitHub
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem  >
            <Link href='https://www.linkedin.com/in/dan-malaiev-186b81254/' isExternal color="#0e76a8">
              Linkedin
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href='mailto:daniil.malaev3@gmail.com' isExternal color="#BB001B">
              Gmail
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href='https://www.hackerrank.com/danil_malaev3' isExternal color="#34A853">
              HackerRank
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem >
            <Link href='https://t.me/war_consular' isExternal color="#0088CC">
              Telegram
            </Link>
          </BreadcrumbItem>

        </Breadcrumb>
      </Box>
    </Container>
  );
}


export default Navigation