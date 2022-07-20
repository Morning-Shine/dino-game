import { ANSWER_RIGHT, ANSWER_WRONG } from "../constants/LABYRINTH"


export default function checkAnswer(x, y, rightAnswerCoords) {
    if (x === rightAnswerCoords.x && y === rightAnswerCoords.y) return ANSWER_RIGHT
    else return ANSWER_WRONG
}