import styled from '@emotion/styled';
import { Box } from "@chakra-ui/react";


const Bio = styled.p`
@font-face {
  font-family: 'Acme';
  src: url(../fonts/acme-latin-400-normal.woff) format('truetype');
}
font-family: 'Acme';
margin-top: 40px;
font-size: 20px;

`;


function Vitae() {

    return (
        <Box flexGrow={1} p={3} mb={2} textAlign="left" ml="32%" mr="30%">
            <Bio fontFamily='Acme'>
                
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                
            </Bio>
        </Box>
    )
}

export default Vitae