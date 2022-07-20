import React from 'react';
import styled from '@emotion/styled';
import { FONT_ARTICLE, FONT_HEADER } from '../constants/CSS_COLORS';
import { useDispatch, useSelector } from 'react-redux';
import { setStart, blockClick, setResult } from '../store/labyrinthSlice';


export default function BtnNewGame() {
    const visibility = useSelector((state) => state.labyrinth.isBlockClick);
    const dispatch = useDispatch();


    return (visibility
        ? <Btn
            onClick={() => {
                dispatch(setStart());
                dispatch(blockClick(false));
                dispatch(setResult(null));
            }}
        >новая игра</Btn>
        : null
    )

}

const Btn = styled.button`
    font-family: 'Exo 2', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(180deg, rgb(255, 202, 150) 45%, rgb(251, 184, 117) 55%);
    border: 1px solid ${FONT_ARTICLE};
    border-radius: 1vh;
    height: 5vh;
    width: 15vw;
    font-size: 3vh;
    overflow: hidden;
    margin: 3vh;
    color: ${FONT_ARTICLE};
    cursor: pointer;
    &:hover{
        color: ${FONT_HEADER};
    }
`
