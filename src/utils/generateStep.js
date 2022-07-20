import {
    DIRECTION_RIGHT,
    DIRECTION_DOWN,
    DIRECTION_LEFT,
    DIRECTION_UP,
    GRID_SCALE
} from "../constants/LABYRINTH";
import randomInteger from "./randomInteger";


export function generateStep(start) {
    const availibleSteps = [];
    if (start.x < GRID_SCALE - 1) {
        availibleSteps.push({
            x: start.x + 1,
            y: start.y,
            direction: DIRECTION_RIGHT
        })
    }
    if (start.x > 0) {
        availibleSteps.push({
            x: start.x - 1,
            y: start.y,
            direction: DIRECTION_LEFT
        })
    }
    if (start.y < GRID_SCALE - 1) {
        availibleSteps.push({
            x: start.x,
            y: start.y + 1,
            direction: DIRECTION_DOWN
        })
    }
    if (start.y > 0) {
        availibleSteps.push({
            x: start.x,
            y: start.y - 1,
            direction: DIRECTION_UP
        })
    }
    return availibleSteps[randomInteger(availibleSteps.length)]
}