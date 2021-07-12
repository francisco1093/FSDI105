const person = {
    name:"Jesus",
    age:27,
    student: true,
    birthday: function(){
        return new Date().getFullYear()-this.age;
    }
}

console.log(person.birthday());

class Task{

    constructor(name, priority){
        this.name=name;
        this.priority=priority;
    }
}

const task1 = new Task("HW","HIGH");
const task2 = new Task("Play","HIGH");
const task3 = new Task("Running","Medium");

console.log(task1);
console.log(task2);
console.log(task3);

const client = {
    name:"jesus",
    type:"Premium",
    data:{
        address:{
            city:"TJ",
            country:"Mexico"
        },
        account:{
            user:"jesus@gamil.com",
            pw:"pw"
        }
    },
    hobbies:{
        music:[]
    }
}

console.log(client);

let{ name, type} = client;
console.log(name,type);
let {data:{address:{city,country}}}=client;
console.log(city,country);
let {data:{account:{user,pw}}}=client;
console.log(user,pw);

let{hobbies:{music}}=client;
console.log(music[2]);


const band="Metallica", genre="Heavy Metal", song="Ender Sandman";

const metallica = {band, genre, song};
console.log(metallica);


const students = [
    {name:"Joe",age:27},
    {name:"Joe",age:27},
    {name:"Joe",age:27},
    {name:"Joe",age:27},
    {name:"Joe",age:27},
    {name:"Joe",age:27}
]

console.log(students);

//
const older = students.filter(s=>s.age>25);
console.log(older);

const andrea = students.find(s=>s.name==="Andrea");
console.log(andrea);

let total= students.reduce((totalAge, s)=>{
    return totalAge+s.age;
},0);
console.log(total/students.length);

var lion = {
    name:"simba",
    foodType:"carnivore",
    kingOfTheJungle:true
}
console.log(lion);

var monkey = {
    name:"Rafiki",
    foodType:"carnivore",
    kingOfTheJungle:false
}
console.log(monkey);

//object constructor
class Animal {
    constructor(name, foodType, kingOfTheJungle) {
        this.name = name;
        this.foodType=foodType;
        this.kingOfTheJungle=kingOfTheJungle;
    }
}

var lionC = new Animal("Simba", "Carnivore",true);
var monkeyC = new Animal("Rafiki", "Carnivore",false);





