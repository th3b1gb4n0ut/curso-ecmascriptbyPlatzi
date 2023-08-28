const user = { username: 'th3b1gb4n0ut', age: 20, country: 'MX' }
const { username, ...values } = user;

console.log(username);
console.log(values);