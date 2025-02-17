const colors = ["red", "green", "blue"];

function checkColor(color) {
    return colors.indexOf(color);
}

const color = prompt("Введите цвет: red, green, blue");

const index = checkColor(color);

if (index === 0) {
    alert("Первый элемент массива");
    console.log("Первый элемент массива");
} else if (index === 1) {
    alert("Второй элемент массива");
    console.log("Второй элемент массива");
} else if (index === 2) {
    alert("Третий элемент массива");
    console.log("Третий элемент массива");
} else if (index === -1) {
    alert("Такого цвета нет в массиве");
    console.log("Такого цвета нет в массиве");
} else {
    alert("Ошибка");
    console.log("Ошибка");
}