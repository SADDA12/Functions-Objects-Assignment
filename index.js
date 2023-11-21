// Function Basics: Write a function called addNumbers that takes two parameters and returns their sum.
function addNumbers(a,b) {
    return a + b

}
console.log(addNumbers(3,8))

// Object Creation: Create an object called person with properties name, age, and gender. Assign values to these properties and print the object.
let person = {
    name:"Sam",
    age: 10, 
    gender: "female"
}
console.log(person)

// Function with Object Parameter: Write a function called printPerson that takes a person object as a parameter and prints out their name, age, and gender.
let Person = {
    name: "Samuel",
    age: 20,
    gender: "Male"
}

function printPerson(Person){
    console.log(Person.name)
    console.log(Person.age)
    console.log(Person.gender)
}
printPerson(Person)

// Object Modification: Create a function called incrementAge that takes a person object as a parameter and increments the age property by 1.
let persoN = {
    name:"kofi",
    age: 24,
    gender: "male"
}
function incrementAge(persoN) {
        persoN.age += 1
    console.log(persoN.age)
}
incrementAge(persoN)

// Object Cloning: Write a function called cloneObject that takes an object as a parameter and returns a new object with the same properties and values.
let meal = {
    food: "jollof",
    drink: "fanta",
    price: 100
}
function cloneObject(meal){
    return meal
    Object.assign(newMeal,meal)
    console.log(newMeal)
}
console.log(cloneObject(meal))


// Object Comparison: Create two person objects, compare them, and print whether they are equal or not based on their properties.
let person1 = {
    weight: "100kg",
    height: "6ft",
    complexion: "dark"
}

let person2 = {
    weight: "100kg",
    height: 6,
    complexion: "dark"
}

function compareObjects(person1,person2){
    return(
        person1.weight === person2.weight &&
        person1.height === person2.height &&
        person1.complexion === person2.complexion
    )
}

if (compareObjects(person1,person2)) {
    console.log("Both objects are equal")
}
else{console.log("objects are not equal")}

// Function as Object Property: Create an object called calculator with properties add and subtract, which are functions that take two parameters and perform the respective operations.
let calculator = {
    add: function add(a,b) {
        return a + b
    },
    subtract: function subtract(x,y) {
        return x - y
    }
}

console.log(calculator.add(5,5))
console.log(calculator.subtract(13,7))

// Object Looping: Write a function called printObject that takes an object as a parameter and prints out all its key-value pairs.
let me = {
    name: "Ama",
    age: 30,
    location: "Kumasi"
}

function printObject(me){
    for (let key in me) {
        return me
    }

}
console.log(printObject(me))

// Object Deletion: Create a function called deleteProperty that takes an object and a property name as parameters and deletes that property from the object.
let boy = {
    name: "kofi",
    age: 5,
    location: "Ghana"
}

function deleteProperty(boy,name) {
    delete(boy.name)
}
console.log(deleteProperty(boy,name))
console.log(boy)

// Deep Object Cloning: Write a function called deepClone that takes an object as a parameter and returns a new object with all nested objects cloned as well.
let house = {
    color: "cream",
    storey: 2,
    rooms: {
        bedroom: 4,
        livingRoom: 1,
        storeRoom: 2
    }
}

function deepClone(house){
    let newHouse = structuredClone(house)
    return newHouse
}
console.log(deepClone(house))