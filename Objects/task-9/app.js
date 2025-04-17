function Intersection(obj1, obj2) {
    const result = {};
    
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
            result[key] = obj1[key];
        }
    }
    
    return result;
}
const person1 = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
};

const person2 = {
    name: "Person",
    age: 123,
    salary: 2000.00, 
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Romania" 
};

const intersectionResult = Intersection(person1, person2);
console.log(intersectionResult);
