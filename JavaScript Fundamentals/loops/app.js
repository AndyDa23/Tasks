function calculateSums() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  let sumFor = 0;
  let sumWhile = 0;
  let sumDoWhile = 0;

  // Используем for
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sumFor += i;
    }
  }
  console.log(`Сумма четных чисел (for): ${sumFor}`);

  // Используем while
  let i = a;
  while (i <= b) {
    if (i % 2 === 0) {
      sumWhile += i;
    }
    i++;
  }
  console.log(`Сумма четных чисел (while): ${sumWhile}`);

  // Используем do while
  i = a;
  do {
    if (i % 2 === 0) {
      sumDoWhile += i;
    }
    i++;
  } while (i <= b);
  console.log(`Сумма четных чисел (do while): ${sumDoWhile}`);
}