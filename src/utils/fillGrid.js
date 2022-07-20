
export default function fillGrid(scaleStep) {
    let grid = [];
    for (let i = 0; i < scaleStep; i++) {
        for (let j = 0; j < scaleStep; j++) {
            const item = { x: j, y: i };
            grid.push(item);
        }
    }
    return grid;
}