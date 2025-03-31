const colors = ["red", "green", "blue"];

function checkColor(color) {
    return colors.indexOf(color);
}

const color = prompt("Введите цвет: red, green, blue");

const index = checkColor(color);

if (index === 0) {
    alert("0");
    console.log("0");
} else if (index === 1) {
    alert("1");
    console.log("1");
} else if (index === 2) {
    alert(" 3");
    console.log("3");
} else if (index === -1) {
    alert("-1");
    console.log("-1");
} else {
    alert("Ошибка");
    console.log("Ошибка");
}