export default function randomInteger(max) {
    let random = Math.random() * max;
    return Math.floor(random);
}