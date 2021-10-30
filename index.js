class Person {
  // Need constructor in class
  constructor(name, age) {
    // Adding an underscore signals to your team that it is a private variable or function.
    // Meant more so your team member doesn't mess up the code potentially.
    this._name = name;
    this._age = age;
    this._job = "";
  }

  // Right way to do this is create methods within the class
  // Getters
  getName = () => {
    return this._name;
  };

  getAge = () => {
    return this._name;
  };
  // Setters
  setJob = (job) => {
    return (this._job = job);
  };
}

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }
  getAddress = () => {
    return this.address;
  };
  getPrice = () => {
    return this.price;
  };
  getResidents = () => {
    return this.residents;
  };
  addResident = (resident) => {
    this.residents.push(resident);
  };
}

// Name Age
// "John" 24

const person1 = new Person("John", 19);
const person2 = new Person("Mary", 27);

console.log(person2.getName());
console.log(person1.getName());

const pedro = new Person("Pedro", 25);
const david = new Person("David", 28);
const miranda = new Person("Miranda", 19);

const house = new House("Random street", 280000, [pedro, david]);

house.addResident(miranda);
console.log(house.getResidents());

const house2 = new House("Random place", 500000, []);
house2.addResident(pedro);
pedro.setJob("Doctor");

console.log(house2.getResidents());

// Example of inheritance
// A programmar is a person. It can have access to all the person's methods and variables.
class Programmar extends Person {
  constructor(name, age, company, salary, language) {
    // Super basically says we want to extend values from our parent class "Person"
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = () => {
    console.log(
      // this.getName() comes from the Person class
      `Hello, I am a programmar. My name is ${this.getName()} and I work for ${
        this.company
      }`
    );
  };
}

const programmar = new Programmar("Pedro", 19, "Twitch", 1000000, "JavaScript");
programmar.sayHi();

// 4 Pillars of object oriented programming

// Abstraction.
// The principle of focusing on what is important and conscious ignorance of irrelevant details.
// This is what you do when you identify, create, organize, and establish relationships between objects.
// Its goal is to describe the system and how each object’s responsibility is related to
// another in terms of features that the customer wanted.

// Encapsulation.
//The principle of hiding information and behavior implementations.
// This is what you do to reduce an object’s public and protected behaviors down to its most specific responsibility or interface.
// Its goal is to expose only the interfaces that highlights an object’s purpose in life, nothing more and nothing less.

// Inheritance
// The principle of acquiring features from existing interfaces be that of other objects or existing interfaces.
// This is what you do to reuse behaviors of other objects without actually copying their logic.
// Its primary goal is reuse and specialization of behaviors.

// Polymorphism
// The principle of changing objects or modifying their interfaces.
// This is what you do to consistently change an object’s existing behavior(s) or introducing new behavior(s).
// Its primary goal is to avoid duplication of interfaces (similar but not identical).

// Use the following fundamental rules in O-O as your mental guide:

// Everything is an object.
// Each object does one thing and must do it well.
// Objects ask for help, not information.
