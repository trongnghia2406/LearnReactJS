const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = [...firstArr, ...secondArr];
const fourthArr = [...secondArr, ...firstArr];
console.log(thirdArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(fourthArr); // Output: [4, 5, 6, 1, 2, 3]

let languages = ['JavaScript', 'Python', 'Ruby'];
// languages.push("Java");
languages = [...languages, 'Java'];
// languages.unshift('C++');
languages = ['C++', ...languages];

const vehicle = {
    brand: 'Toyota',
    type: 'car',
    color: 'red'
};
const updatedVehicle = {
    year: 2020,
    model: 'Corolla',
    color: 'blue',
};
const mergedVehicle = { ...vehicle, ...updatedVehicle };
console.log(mergedVehicle);
// Output: { brand: 'Toyota', type: 'car', color: 'blue', year: 2020, model: 'Corolla' }
const person = {
    name: 'Alice',
    age: 30,
    address: "HCM"
};
const changePerson = { ...person, age: 31, address: "HN" };

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6