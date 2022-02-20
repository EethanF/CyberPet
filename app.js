// const hunger = document.getElementById("hunger").innerHtml = `hunger: ${this._hunger}`;
// const thirst = document.getElementById("thirst").innerHtml = `thirst: ${this._hunger}`;
// const energy = document.getElementById("energy").innerHtml = `energy: ${this._hunger}`;
let input = document.querySelector("input");
let namePet = document.getElementById("name");
let animal = document.getElementById("animal");
let createPet = document.getElementById("createPet")

createPet.addEventListener(`click`, () =>{
    if (petType = "Dog"){
        namePet = new Dog(name);
    }else if (petType = "Cat"){
        namePet = new Cat(name);
    }else if (petType = "Bunny"){
        namePet = new Bunny(name);
    }
})




class Pet{
    constructor(name, animal){
        this._name = name;
        this._animal = animal;
        this._happiness = 50;
        this._hunger = 50;
        this._thirst =  50;
    }
    get name(){
        return this._name;
    }
    get petType(){
        return this._petType
    }
    get thirst(){
        return this._thirst;
    }
    get hunger(){
        return this._hunger;
    }
    get happiness(){
        return this._happiness;
    }
    play(){
        if (this._energy==0) {
            console.log(`${this._name} is to tired to play :(`);
        } else {
            console.log(`${this._name} is playing!`);
            console.log(`${this._name} is happier!`);
        }
    }
    feed(){
        if (this._hunger==100) {
            console.log(`${this._name} is hungry`);
        } else if (this._hunger == 0) {
            console.log(`${this._name} seems to be full`);
        } else {
            console.log(`${this._name} seems satisfied for now`);
        }
    }
    hydrate(){
        if (this._thirst==100) {
            console.log(`${this._name} ran away to find water`);
        } else {
            console.log(`${this._name} is hydrated!`);
            console.log(`${this._name}'s thirst level is ${this._thirst}`);
        }
    }
}


class Dog extends Pet{
    constructor(name){
        super(name);
        this._animal = "dog";
    }
}

class Cat extends Pet{
    constructor(name){
        super(name);
        this._animal = "cat";
    }
}

class Bunny extends Pet{
    constructor(name){
        super(name);
        this._animal = "bunny";
    }
}




// class Turtle extends Pet{
//     constructor(name){
//         super(name);
//         this._animal = "turtle";
//     }
// }


