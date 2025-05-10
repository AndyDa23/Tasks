let person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
      phone: "112",
      email: "email@domain.com"
    },
    address: "Moldova"
  };
  
  // Обновляем номер телефона
  person.contacts.phone = "+37312345678";
  
  // Удаляем поле адреса
  delete person.address;
  
  // Выводим обновленный объект в консоль
  console.log(person);
  