import { GRID_SCALE } from "../constants/LABYRINTH";
import randomInteger from "./randomInteger";


export default function setStartCell() {
    return { x: randomInteger(GRID_SCALE), y: randomInteger(GRID_SCALE) }
}