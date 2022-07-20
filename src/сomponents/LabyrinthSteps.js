import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { STEPS } from '../constants/LABYRINTH';
import LabyrinthStep from './LabyrinthStep';
import { generateStep } from '../utils/generateStep';
import { setSteps } from '../store/labyrinthSlice';

export default function LabyrinthSteps() {
    const startCell = useSelector((state) => state.labyrinth.startCell);
    const allSteps = useSelector((state) => state.labyrinth.stepsArr);
    const dispatch = useDispatch();

    useEffect(() => {
        if (startCell) {
            let allSteps = [generateStep(startCell)];
            for (let i = 0; i < STEPS - 1; i++) {
                let step = generateStep(allSteps[i]);
                allSteps.push(step)
            }
            dispatch(setSteps(allSteps))
        }
        return () => { dispatch(setSteps([])); }
    }, [dispatch, startCell]);

    return (
        <Div>
            {
                allSteps && allSteps.length
                    ? allSteps.map((item, index) =>
                        <LabyrinthStep direction={item.direction} key={index}/>
                    )
                    : null
            }
        </Div>
    )
}

const Div = styled.div`
    margin-top: 5vh;
    width: 50vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
`