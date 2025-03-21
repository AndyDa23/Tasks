const arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
console.log("Исходный массив:", arr);

function uniqualSorted(a) {
    const uniqueSet = new Set(a);
    const uniqueArray = Array.from(uniqueSet); 
    return uniqueArray.sort((a, b) => a - b); 
}

const result = uniqualSorted(arr);
console.log("Уникальный и отсортированный массив:", result);
