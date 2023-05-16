import styled from '@emotion/styled';
import { Box, Text } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'


const Bio = styled.p`
@font-face {
  font-family: 'Acme';
  src: url(../fonts/acme-latin-400-normal.woff) format('truetype');
}
font-family: 'Acme';
font-size: 20px;
`;


function Vitae() {

    return (
        <Box flexGrow={1} p={3} mb={2} textAlign="left" ml="33%" mr="30%">
            <Bio fontFamily='Acme'>
                <p style={{ marginBottom: '50px' }}>Меня зовут - Даниил. 24y.o. Junior разработчик.   Энтузиаст. Киноман.</p>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    Пролог📕
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <p>Ярко помню момент, когда впервые посмотрел фильм - "Назад в будущее". Меня настолько поразил этот фильм и образ жизни обычного человека, который создал машину времени, что в моей голове поселилась мысль о том, что я хочу <Text fontSize='3xl' display='inline'>быть таким же.</Text> Хочу изобретать что-то великое и гениальное. Тогда всё сублимировалось игральными конструкторами и прочим... Но из головы всегда не выходила одна мысль - изобрести или приложить руку к чему-то великому. Шли университетские годы и постепенно из моей головы эта мечта перешла в подсознание, а всплыла в относительно недавнее время. И не как это часто бывает в момент драмматического отчаяния, а в обычном телефонном разговоре с матерью😀</p>
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    О разработке 💻
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <p>Интерес к программированию проявлял с средней школы(помню, как раздобыл диск с курсом от Евгения Попова по HTML и CSS - это было единственным инструментом изучения), однако сделать разработку своей профессией решил только в относительно недавнее время. Все мои знания и все проекты, которые были мной созданы - это результат моего интереса и энтузиазма только к некоторому количеству направлений, что говорит о том, что я лично для себя не ограничиваю горизонты технологий/проектов/языков с которыми в перспективе мог бы работать. Я люблю опыт, а еще больше работать и приносить своими умениями пользу.</p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    Чего я хочу? 👨‍💻
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <p style={{ marginBottom: '20px' }}> Мне всегда нравилось изучать новое и самое главное - изучать больше, можно сказать от этого растет моё эго(в самом безобидном смысле этого слова) 👀.</p>
                        </AccordionPanel>
                    </AccordionItem>


                    <p style={{ marginBottom: '20px' }}>В коллективе, считаю, важны нетоксичные взаимоотношения, отсутсвие недосказанностей и дружеский вайб.🏝</p>
                </Accordion>
            </Bio>
        </Box>
    )
}

export default Vitae