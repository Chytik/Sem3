function findMinPositive(arr) {
    const positiveNumbers = arr.filter(num => num > 0);
    return positiveNumbers.length > 0 ? Math.min(...positiveNumbers) : null;
}
console.log(findMinPositive([-1, 2, 3, -4, 5])); 


function createBooleanMatrix(stringMatrix) {
    return stringMatrix.map(row => 
        row.map(element => element.length % 2 !== 0)
    );
}
const stringMatrix = [
    ["hello", "world"],
    ["foo", "bar", "baz"],
    ["test", "example"]
];
console.log(createBooleanMatrix(stringMatrix));


function sumOfDigits(num) {
    return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);
}
function areSumsEqual(tuple) {
    return sumOfDigits(tuple[0]) === sumOfDigits(tuple[1]);
}
const myTuple = [123, 321];
console.log(areSumsEqual(myTuple)); 


const Nucleotide = {
    Adenine: 'Adenine',
    Guanine: 'Guanine',
    Cytosine: 'Cytosine',
    Uracil: 'Uracil'
};
console.log(Nucleotide.Adenine); 


class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super();
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super();
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}
const myDog = new Dog();
const myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);


/*const Nucleotide = {
    Adenine: 'Adenine',
    Guanine: 'Guanine',
    Cytosine: 'Cytosine',
    Uracil: 'Uracil'
};
class NucleotideInfo {
    constructor(type, molecularWeight, properties) {
        this.type = type; 
        this.molecularWeight = molecularWeight; 
        this.properties = properties;
    }
}
const adenineInfo = new NucleotideInfo(Nucleotide.Adenine, 135.13, { hydrophilic: true, aromatic: true });
console.log(JSON.stringify(adenineInfo, null, 2));*/