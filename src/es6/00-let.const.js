var lastName = "David";

lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits =  ()  => {
    if(true) {
        var fruit1 = 'apple'; //function scope
        let fruit2 = 'kiwi'; // block scope (solo funciona adentro del if)
        const fruit3 = 'banana'; 
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();