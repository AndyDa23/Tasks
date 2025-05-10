const person = {
    name: "Андрей",
    age: 21,
    salary: 5000,
    contacts: {
        email: "andrew@gmail.com",
        phone: "+123456789"
    },
    address: {
        city: "Бельцы",
        street: "Пушкина, 10"
    },

    // Геттеры для свойств
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
    getSalary() {
        return this.salary;
    },
    getContacts() {
        return this.contacts;
    },
    getAddress() {
        return this.address;
    }
};

console.log(person.getName());
console.log(person.getAge()); 
console.log(person.getSalary()); 
console.log(person.getContacts()); 
console.log(person.getAddress()); 
