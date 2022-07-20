import React from 'react';
import styled from '@emotion/styled';
import arrowRight from '../img/arrow_right.png';
import arrowDown from '../img/arrow_down.png';
import arrowLeft from '../img/arrow_left.png';
import arrowTop from '../img/arrow_top.png';
import { 
    DIRECTION_RIGHT,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
    DIRECTION_UP
} from '../constants/LABYRINTH';


export default function LabyrinthStep({ direction }) {
    let stepImg;
    // eslint-disable-next-line default-case
    switch (direction) {
        case DIRECTION_RIGHT:
            stepImg = arrowRight;
            break;
        case DIRECTION_DOWN:
            stepImg = arrowDown;
            break;
        case DIRECTION_LEFT:
            stepImg = arrowLeft;
            break;
        case DIRECTION_UP:
            stepImg = arrowTop;
            break;

    }

    return (
        <Cont>
            <Img src={stepImg} alt={direction} />
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const Img = styled.img`
    width: 6vh;
    margin: 0.5vh;
`