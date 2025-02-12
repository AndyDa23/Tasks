let userName = prompt("Login", '');

if (userName === 'AndyDa23') {
  let pass = prompt('Password', '');

  if (pass === '0000') {
    alert('Hello! ' + userName);
  } else if (pass === '' || pass === null) {
    alert('operation canceled');
  } else {
    alert('ОШИБКА! Неверный пароль');
  }

} else if (userName === '' || userName === null) {
  alert('operation canceled');
} else {
  alert('Я вас не знаю');
}
