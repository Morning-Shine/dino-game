import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import startImage from '../img/start.png';
import resultImage from '../img/right_result.png';
import {
    BORDER_MAIN, BGRD_1, BGRD_2, BGRD_3,
    COLOR_RIGHT, COLOR_WRONG
} from '../constants/CSS_COLORS';
import { blockClick, setResult } from '../store/labyrinthSlice';
import { useDispatch, useSelector } from 'react-redux';
import checkAnswer from '../utils/checkAnswer';
import { ANSWER_RIGHT, ANSWER_WRONG } from '../constants/LABYRINTH';


export default function LabyrinthCell({ x, y }) {
    const [answer, setAnswer] = useState(null);
    const dispatch = useDispatch();

    const startCell = useSelector((state) => state.labyrinth.startCell);
    const isStart = x === startCell.x && y === startCell.y;

    const isBlockClick = useSelector((state) => state.labyrinth.isBlockClick);
    const allSteps = useSelector((state) => state.labyrinth.stepsArr);
    const rightAnswerCoords = allSteps[allSteps.length - 1];

    const startImg = (isStart
        ? <ImgStart src={startImage} alt='Start' />
        : null);

    const resImg = (isBlockClick && x === rightAnswerCoords.x && y === rightAnswerCoords.y
        ? <ImgRes src={resultImage} alt='result' />
        : null
    )
    const cursor = !isBlockClick ? 'pointer' : 'none'
    const className = answer || ''

    useEffect(() => setAnswer(null), [startCell]);

    return (
        <Cont
            style={{ cursor }}
            className={className}
            onClick={() => {
                if (!isBlockClick) {
                    const result = checkAnswer(x, y, rightAnswerCoords);
                    setAnswer(result);
                    dispatch(setResult(result));
                    dispatch(blockClick(true));
                }
            }
            }
        >
            {startImg}
            {resImg}
        </Cont >
    )
}

const Cont = styled.div`
    position: relative;
    border: 1px solid ${BORDER_MAIN};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5vh;
    border-radius: 5px;
    background: linear-gradient(180deg, ${BGRD_1} 45%, ${BGRD_2} 80%, ${BGRD_3} 100%);
    box-shadow: 3px 3px 4px 0px rgba(34, 60, 80, 0.2);
    &.${ANSWER_RIGHT} {
        border: 1px solid ${COLOR_RIGHT};
    }
    &.${ANSWER_WRONG} {
        border: 1px solid ${COLOR_WRONG};
    }
`

const ImgStart = styled.img`
    width: 7vh;
`

const ImgRes = styled.img`
    width: 3vh;
    top: 1vh;
    right: 1vh;
    position: absolute;
`