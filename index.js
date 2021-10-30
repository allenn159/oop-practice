class Person {
  // Need constructor in class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Right way to do this is create methods within the class

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.name;
  };
}

// Name Age
// "John" 24

const person1 = new Person("John", 19);
const person2 = new Person("Mary", 27);

console.log(person2.getName());
console.log(person1.getName());
