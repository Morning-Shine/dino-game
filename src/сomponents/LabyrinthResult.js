import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { MSG_SUCCESS, MSG_ERROR } from '../constants/LABYRINTH_ABOUT';
import { ANSWER_RIGHT, ANSWER_WRONG } from '../constants/LABYRINTH';
import successImg from '../img/right_answer.png';
import errorImg from '../img/wrong_answer.png';
import { COLOR_RIGHT, COLOR_WRONG } from '../constants/CSS_COLORS';
import BtnNewGame from './BtnNewGame';


export default function LabyrinthResult() {
    const result = useSelector((state) => state.labyrinth.result);

    let img;
    let msg;
    let className;
    switch (result) {
        case ANSWER_RIGHT:
            img = <Img src={successImg} alt='success!' />;
            msg = MSG_SUCCESS;
            className = ANSWER_RIGHT;
            break;
        case ANSWER_WRONG:
            img = <Img src={errorImg} alt='wrong' />;
            msg = MSG_ERROR;
            className = ANSWER_WRONG;
            break;
        default:
            img = null;
            msg = null;
            className = ''
            break;
    }

    return (
        <Cont>
            {img}
            <P className={className}>
                {msg}
            </P>
            <BtnNewGame />
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Img = styled.img`
    width: 20vh;
    margin-bottom: 5vh;
    margin-top: 15vh;
`
const P = styled.p`
    font-weight: bold;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    &.${ANSWER_RIGHT} {
        color: ${COLOR_RIGHT};
    }
    &.${ANSWER_WRONG} {
        color: ${COLOR_WRONG};
    }
`