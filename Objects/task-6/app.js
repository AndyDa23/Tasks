function filterValidPoints(points) {
    return points.filter(point => point.x !== null && point.x !== undefined && point.y !== null && point.y !== undefined);
}

// Пример использования
const points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];
const validPoints = filterValidPoints(points);

console.log(validPoints); // [{x: 1, y: 2}, {x: 3, y: 4}]
