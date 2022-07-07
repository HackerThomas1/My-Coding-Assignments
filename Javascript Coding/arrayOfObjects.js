const car1 = {
    name: "Mustang GT",
    color: "blue",
    price: 65000
}

const car2 = {
    name: "Bugatti",
    color: "Gold",
    price: 2000000

}

const car3 = {
    name: "Lemon",
    color: "Rusty",
    price: 3
}

let carCollection = {
    car1,
    car2,
    car3
}

carCollection.push{
    {
        name: "BMW",
        color: "Brown",
        price: 8000
    }
}
console.log(carCollection);