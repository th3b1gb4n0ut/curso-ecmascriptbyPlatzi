// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user = {username: 'Oscar', age: 34}
let { username, age } = user 
console.log(username, user.age);

// spread operator

let person = {name: 'Oscar', age: 28 }
let country = 'MX';

let data = { id: 1, ...person, country } // con los tres puntos traemos el 
//todo lo que hay dentro del objeto sin necesidad de llamar nada mas; y incluso, 
//agregandole mas recursos para luego intregarlos todos en un solo objeto
console.log(data);

//rest 

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);




