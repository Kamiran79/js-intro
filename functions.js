//console.log("test if it is working");


const chicken = "chicken";
console.log(`process ${chicken}`);

const nuggatizer = (animal) => {
    return `processed ${animal}`;
}

console.log(nuggatizer(`Cow`));

const dogBreed = (breed) => {
    return `My favorite dog breed is ${breed.toUpperCase()}`;
}

console.log(dogBreed(`lab`));

//challenge 1

//write a function that take any number and returns that number 42.

const anyNumber = (num) => {
    return num + 42;
}

console.log(anyNumber(3));


//challenge 2
//write 

const myAge = (age) => {
    return 2099 - age;
}

console.log(myAge(1979));