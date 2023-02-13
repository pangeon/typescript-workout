import {Circle, Figure2D, Rectangle, RightTriangle, Shape, Square} from "./interfaces/Shape";
const PI = 3.14;

const getCircleArea = (circle: Circle): number => {
    const { radius } = circle;
    return radius * radius * PI;
}
const getRectangleArea = (rectangle: Rectangle): number => {
    const { length, width } = rectangle;
    return length * width;
}
const getSquareArea = (square: Square): number => {
    const { width } = square;
    return getRectangleArea({length: width, type: Figure2D.Rectangle, width});
}
const getRightTriangleArea = (rightTriangle: RightTriangle): number => {
    const { base, height } = rightTriangle;
    return (base * height) / 2;
}

const getArea = (shape: Shape): number => {
    switch (shape.type) {
        case 'circle': return getCircleArea(shape as Circle);
        case 'rectangle': return getRectangleArea(shape as Rectangle);
        case 'square': return getSquareArea(shape as Square);
        case 'rightTriangle': return getRightTriangleArea(shape as RightTriangle);
        default: break;
    }
    return 0;
};

const circle: Circle = {radius: 4, type: Figure2D.Circle};
const rectangle: Rectangle = {length: 7, width: 4, type: Figure2D.Rectangle};
const square: Square = {width: 5, type: Figure2D.Square};
const rightTriangle: RightTriangle = {base: 9, height: 4, type: Figure2D.RightTriangle};

console.log({...circle, area: getArea(circle)});
console.log({...rectangle, area: getArea(rectangle)});
console.log({...square, area: getArea(square)});
console.log({...rightTriangle, area: getArea(rightTriangle)});