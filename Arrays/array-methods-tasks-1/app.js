const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersModifiedArray = document.getElementById('numbersModifiedArray');

document.getElementById('modifiedArrayButton').addEventListener('click', () => {
    numbers.splice(4, 1, 0, 0, 0);
    numbersModifiedArray.innerHTML = numbers.join(', ');
});