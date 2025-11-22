class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAddress() {
        return this.address;
    }
}
const person1 = new Person("Alice", 30);
console.log("Person1", person1);
person1.address = "123 Main St";
console.log("Address:", person1.getAddress());
// inheritance
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`;
    }
}
const student1 = new Student("Bob", 20, "S12345");
console.log("Student1 Info:", student1.getStudentInfo());