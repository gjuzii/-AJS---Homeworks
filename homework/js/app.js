
//Assignment 1

const First = {    
    name: "Sara",
    surname: "Gjuzelova",
    age: 25
};

const Second = { 
    name:"Anastazija",
    surname:" Ristomanova",
    age: 26 
};

console.log(First);
console.log(Second);

const newTogether = Object.assign(First, Second);
console.log(newTogether);

//bonus

const First1 = {    
    name: "Sara",
    surname: "Gjuzelova",
    age: 25
};

const Second2 = { 
    name:"Anastazija",
    surname:" Ristomanova",
    age: 26 
};

const array = Object.assign([First1, Second2]);
console.log(array);


//asingment 2
function Student(firstName, lastName, street, number, city, currentSubject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street; 
    this.number = number; 
    this.city = city 
    this.currentSubject = currentSubject
    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
    this.getAddress = () => {
        return `${this.city} ${this.street} ${this.number}`;
    }    
}

let sara = new Student ("Sara", "Gjuzelova", "Bahar Mois", 7, "Skopje");
console.log(`${sara.getFullName()} is a resident on ${sara.getAddress()}`);

//Assignment 3

let newRecipe = document.getElementById('name');
let newIngredients = document.getElementById('ingredients');
let newInstructions = document.querySelector('#instructions');
let newBtn = document.getElementById('submit');

newBtn.addEventListener('click', function(event){
    event.preventDefault();
    let name = newRecipe.value;
    let ingredients = newIngredients.value;
    let instructions = newInstructions.value;
    
    printFunc(name, ingredients, instructions);
});

let recipesArray = [];

let printFunc = (name, ingredients, instructions) => {
    
    let recipe = {
        newName: name,
        newIngredients: ingredients,
        newInstructions: instructions,
    }
    let recipeObj = Object.create(recipe);
    recipesArray.push = (recipeObj);
    console.log(recipesArray);
}




