// Определение массива
let arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// Функция для нахождения чисел меньше 5
function minim(a) {
    let res = [];
    for (let n of a) {
        if (n < 5) {
            res.push(n);
        }
    }
    return res;
}

// Функция для нахождения позиций элементов с максимальными и минимальными значениями
function maxMin(a) {
    let max_p = a.indexOf(Math.max(...a));
    let min_p = a.indexOf(Math.min(...a));
    return [max_p, min_p];
}

// Функция для нахождения элементов, превышающих среднее арифметическое массива
function sr(a) {
    let total = 0;
    for (let n of a) {
        total += n;
    }
    let avg = total / a.length;
    let res = [];
    for (let n of a) {
        if (n > avg) {
            res.push(n);
        }
    }
    return res;
}

// Функция для подсчета положительных и отрицательных чисел
function posNeg(a) {
    let pos = 0;
    let neg = 0;
    for (let n of a) {
        if (n > 0) {
            pos += 1;
        } else if (n < 0) {
            neg += 1;
        }
    }
    return [pos, neg];
}

// Тестирование функций
console.log("Числа меньше 5:", minim(arr));
console.log("Позиции элементов с максимальными и минимальными значениями:", maxMin(arr));
console.log("Элементы, превышающие среднее арифметическое:", sr(arr));
console.log("Количество положительных и отрицательных чисел:", posNeg(arr));