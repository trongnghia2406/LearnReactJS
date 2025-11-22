// object destructuring
const person = {
    name: 'John',
    age: 25,
    address: '123 Main St'
}
const { name, age } = person;
const { address: addr } = person;

console.log(name); // Output: John
console.log(age);  // Output: 25
console.log(addr); // Output: 123 Main St

// array destructuring
const city = ['HCM', 'Hanoi', 'Danang', 'Hue'];
const [city1, city2, city3] = city;
const [x, y, , z] = city;
console.log(x, y, z); // Output: HCM, Hanoi, Hue
console.log(city1, city2, city3); // Output: HCM, Hanoi, Danang
// ternary operator
let num = 10;
const res = (x > 5) ? 'Greater than 5' : 'Less than or equal to 5';
console.log(res); // Output: Greater than 5