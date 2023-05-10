import { Box, Container, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';


function Navigation() {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('gray.100', 'gray.800');

  return (
    <Container>
      <Box id='navBox' borderRadius="lg" bg="#323135" p={3} mb={6} align="center" color={colorMode === 'light' ? textColor : ''} >
        <Breadcrumb>

          <BreadcrumbItem>
            <Link href='https://github.com/warconsular' isExternal color="#4078c0" ml={7}>
              GitHub<ExternalLinkIcon mx="2px" />
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href='https://www.linkedin.com/in/dan-malaiev-186b81254/' isExternal color="#0e76a8">
              Linkedin<ExternalLinkIcon mx="2px" />
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href='mailto:daniil.malaev3@gmail.com' isExternal color="#BB001B">
              Gmail<ExternalLinkIcon mx="2px" />
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href='https://www.hackerrank.com/danil_malaev3' isExternal color="#34A853">
              HackerRank<ExternalLinkIcon mx="2px" />
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href='https://t.me/war_consular' isExternal color="#0088CC">
              Telegram<ExternalLinkIcon mx="2px" />
            </Link>
          </BreadcrumbItem>

        </Breadcrumb>
      </Box>
    </Container>
  );
}


export default Navigation