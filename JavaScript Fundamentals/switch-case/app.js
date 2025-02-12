let n = prompt('Введите число от 1 до 9');

switch (n) {
    case '1':
        alert('Один');
        break;
    case '2':
        alert('Два');
        break;
    case '3':
        alert('Три');
        break;
    case '4':
        alert('Четыре');
        break;
    case '5':
        alert('Пять');
        break;
    case '6':
        alert('Шесть');
        break;
    case '7':
        alert('Семь');
        break;
    case '8':
        alert('Восемь');
        break;

    case '9':
        alert('Девять');
        break;
    default:
        alert('Число не входит в диапазон от 1 до 9');
        break;
}