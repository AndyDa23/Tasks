const n = 10; 
const array = Array.from({ length: n }, (_, i) => i + 1);

// Метод 1: Цикл for
console.log("Цикл for:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Метод 2: Цикл while
console.log("Цикл while:");
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// Метод 3: Цикл do...while
console.log("Цикл do...while:");
i = 0;
do {
    console.log(array[i]);
    i++;
} while (i < array.length);

// Метод 4: Цикл for...in
console.log("Цикл for...in:");
for (let index in array) {
    console.log(array[index]);
}

// Метод 5: Цикл for...of
console.log("Цикл for...of:");
for (let value of array) {
    console.log(value);
}

// Метод 6: Метод forEach
console.log("Метод forEach:");
array.forEach(function(value) {
    console.log(value);
});

// Метод 7: Метод map
console.log("Метод map:");
array.map(function(value) {
    console.log(value);
});

// Метод 8: Доп метод
console.log("Метод join:");
console.log(array.join(" <!=!> "));


// Мнение: Лично мне понравился доп метод JOIN, объединяет все элементы массива в строку, разделенные указанным разделителем.
