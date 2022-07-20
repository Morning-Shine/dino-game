import React from 'react';
import styled from '@emotion/styled';
import LabyrinthCell from './LabyrinthCell';
import LabyrinthSteps from './LabyrinthSteps';
import { GRID_SCALE } from '../constants/LABYRINTH';
import fillGrid from '../utils/fillGrid';


export default function LabyrinthCont() {
    const cells = fillGrid(GRID_SCALE);

    return (
        <Cont>
            <Div>
                {cells.map((cell) =>
                    <LabyrinthCell
                        key={`${cell.x}${cell.y}`}
                        x={cell.x}
                        y={cell.y}
                    />)}
            </Div>
            <LabyrinthSteps />
        </Cont>

    )
}


const Cont = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Div = styled.div`
    width: 50vh;
    height: 50vh;
    min-width: min-content;
    min-height: min-content;
    margin-top: 10vh;
    display: grid;
    grid-template-columns: repeat(${GRID_SCALE}, 1fr);
    grid-template-rows: repeat(${GRID_SCALE}, 1fr);
`