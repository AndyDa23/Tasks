let colors = ["white", "blue", "yellow", "black", "red", "green"];

let [firstColor, secondColor, ...otherColors] = colors;

console.log("Первый элемент " , firstColor );   // Output: "white"
console.log("Второй элемент " , secondColor);  // Output: "blue"
console.log("Остальные элементы " , otherColors); // Output: ["yellow", "black", "red", "green"]
