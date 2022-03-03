const createDog = document.getElementById("dog")
const createCat = document.getElementById("cat")


createDog.addEventListener(`click`, () =>{
    let newAnimal = prompt("enter name: ");
    console.log(`You have a new dog! Say hello to ${newAnimal}!`);
    document.getElementById("animalImg").innerHTML=`<div id='imgBox'> <h1>${newAnimal}</h1> <img src='images/dogPic.png' id='catImg'/> </div>`
    console.log(new Dog(newAnimal)); 
});

createCat.addEventListener(`click`, () =>{
    let newAnimal = prompt("enter name: ");
    console.log(`You have a new cat! Say hello to ${newAnimal}!`);
    document.getElementById("animalImg").innerHTML=`<div id='imgBox'> <h1>${newAnimal}</h1> <img src='images/catPic.png' id='catImg'/> </div>`
    console.log(new Cat(newAnimal));
});



class Pet{
    constructor(name, animal){
        this._name = name;
        this._animal = animal;
        this._happiness = 0;
        this._hunger = 40;
        this._thirst =  40;
    }
    get name(){
        return this._name;
    }
    get animal(){
        return this._animal
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
        this._hunger+=20;
        this._thirst+=20;
        this._happiness+=20;
        if (this._happiness<=0){
            console.log(`Hapiness level: ${this._happiness}`)
            console.log("You should play with them!")
        }
        else if(this._happiness>=100){
            console.log(`Hapiness level: ${this._happiness}`)
            console.log("They're to tired to play!")
        }
        else{
            console.log(`Hapiness level: ${this._happiness}`)
            console.log("I think they enjoyed that!")
        }
    }
    feed(){
        this._hunger-=20;
        if (this._hunger<=0){
            console.log(`Hunger level: ${this._hunger}`)
            console.log("They're full, maybe you should play with them!")
        }
        else if(this._hunger>=100){
            console.log(`Hunger level: ${this._hunger}`)
            console.log("They're hungry maybe you should feed them.")
        }
        else{
            console.log(`Hunger level: ${this._hunger}`)
            console.log("I think they enjoyed that!")
        }
    }
    hydrate(){
        this._thirst-=20;
        this._happiness-=20;
        if (this._thirst<=0){
            console.log(`thirst level: ${this._thirst}`)
            console.log("They're full, maybe you should play with them!")
        }
        else if(this._thirst>=100){
            console.log(`thirst level: ${this._thirst}`)
            console.log("They're thirsty maybe you should give them some water.")
        }
        else{
            console.log(`thirst level: ${this._thirst}`)
            console.log("I think they enjoyed that!")
        }
    }
}



class Dog extends Pet{
    constructor(name){
        super(name);
        this._animal = "Dog";
    }
}

class Cat extends Pet{
    constructor(name){
        super(name);
        this._animal = "Cat";
    }
}


