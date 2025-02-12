
// For
let a = 2;
let b = 10;
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(`Сумма четных чисел от ${a} до ${b} равна ${sum}`);

// While
let j = a;
let sum2 = 0;

while (j <= b) {
  if (j % 2 === 0) {
    sum2 += j;
  }

  j++;
}

console.log(`Сумма четных чисел от ${a} до ${b} равна ${sum2}`);

// Do while
i = a;
sum = 0;

do {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
} while (i <= b);

console.log(`Сумма четных чисел от ${a} до ${b} равна ${sum}`);