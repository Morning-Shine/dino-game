import React from 'react';
import styled from '@emotion/styled';
import { FONT_ARTICLE } from '../constants/CSS_COLORS';
import { DESCRIPTION } from '../constants/LABYRINTH_ABOUT';


export default function AboutLabyrinth() {
    return (
        <Cont>
            <H2>
                Об игре
            </H2>
            <P>
                {DESCRIPTION}
            </P>
        </Cont>
    )
}

const Cont = styled.section`
    color: ${FONT_ARTICLE};    
`;

const H2 = styled.h2`
    text-align: center;
`;

const P = styled.p`
    font-weight: bold;
    width: 80%;
    margin: 0 auto;
    line-height: 150%;
`