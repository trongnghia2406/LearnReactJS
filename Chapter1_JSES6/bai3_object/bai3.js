// object
let person = {
    name: "Alice",
    age: 30,
    getAddress: function () {
        return this.address;
    }
}
console.log("Person", person);
person.address = "123 Main St";
console.log("Address:", person.getAddress());
console.log(person.age);
// arrays
let students = [
    { name: "Bob", age: 20, studentId: "S12345" },
    { name: "Charlie", age: 22, studentId: "S67890" }
];
console.log("Students", students[0].name);