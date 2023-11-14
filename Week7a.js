class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    getName() {
        return this.name;
    }
    getYear() {
        return this.year;
    }
}


// Declaring a car object Miata
const miata = new Car("Mazda Miata", 2024);

//using the object
console.log("My car is " + miata.getName());
console.log("A " + miata.getYear() + " model");
