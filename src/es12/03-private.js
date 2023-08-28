class user {
    constructor(name){
        this.name = name;
    }
    //metods
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.gretting());

//setters getters

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    //metods
    #speak(){
        return 'Hello';
    }
    getting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);