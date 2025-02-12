// with NOT

let start = 18;
let end = 30;

let age = prompt('Введите ваш возраст: ');

if (!(age >= start && age <= end)) {
  alert(`Возвраст - ${age} НЕ соответсвуют нашим требованиям `);
} else {
  alert(`Возвраст - ${age} Отлично подходит`);
}


// without NOT

/*
let start = 18;
let end = 30;

let age = prompt('Введите ваш возраст: ');

if (age < start || age > end) {
    alert(`Возвраст - ${age} НЕ соответсвуют нашим требованиям`);
} else {
  alert(`Возвраст - ${age} Отлично подходит`);
}*/