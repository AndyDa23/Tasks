const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersModifiedArray = document.getElementById('numbersModifiedArray');

document.getElementById('modifiedArrayButton').addEventListener('click', () => {
    numbersModifiedArray.innerHTML = numbers.map((num, index) => index === 4 || index === 5 || index === 6 ? 0 : num).join(', ');
});