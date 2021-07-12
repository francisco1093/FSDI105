console.log("Executed!...");

// object literal 
const salon = {
    name: "The Fashion Pet",
    phone: "555-555-555",
    address:{
        city:"Tijuana",
        av:"Lago",
        number:"1234"
    },
    pets:[]
}

// console.log(salon);
let {name,phone,address:{city,av,number}} = salon;
// console.log(city);


var counter  = 1;
class Pet {
    constructor(name,age,type,breed,gender,service,allergy,ownersName,contactPhone){
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.allergy = allergy;
        this.ownersName = ownersName;
        this.contactPhone = contactPhone;
        this.id = counter++; 
    }
}


const scooby = new Pet("Scooby",27,"Dog","Dane","Male","Full Service", "none","Shaggy","555-555-555");
console.log(scooby);

const scooby2 = new Pet("Scooby2",27,"Dog","Dane","Male","Full Service","none","Shaggy","555-555-555");
console.log(scooby2);

const scooby3 = new Pet("Scooby3",27,"Dog","Dane","Male","Full Service","none","Shaggy","555-555-555");
console.log(scooby2);

const scooby4 = new Pet("Scooby4",27,"Dog","Dane","Male","Full Service","none","Shaggy","555-555-555");
console.log(scooby2);

salon.pets.push(scooby);
salon.pets.push(scooby2);
salon.pets.push(scooby3);
salon.pets.push(scooby4);



const petNameInput =  document.getElementById("petName");
const petAgeInput =  document.getElementById("petAge");
const petTypeInput =  document.getElementById("petType");
const petBreedInput =  document.getElementById("petBreed");
const petGenderInput =  document.getElementById("petGender");
const petServiceInput =  document.getElementById("petServices");
const petAllergyInput =  document.getElementById("petAllergy");
const petOwnerNameInput =  document.getElementById("petOwnerName");
const petOwnerContactPhoneInput =  document.getElementById("petOwnerContactPhone");

function registerPet () {
    if(checkinputvalues()){
        var newPet = new Pet(
            petNameInput.value,
            Number(petAgeInput.value),
            petTypeInput.value,
            petBreedInput.value,
            petGenderInput.value,
            petServiceInput.value,
            petAllergyInput.value,
            petOwnerNameInput.value,
            petOwnerContactPhoneInput.value
        );
        salon.pets.push(newPet);
        clear();
        displayTable(newPet);
    }
}

function checkinputvalues() {
    if(petNameInput.value === ""){
        alert("Insert the pet name");
        return false;
    }
    if(petAgeInput.value === ""){
        alert("Insert the pet age");
        return false;
    }
    if(petTypeInput.value === ""){
        alert("Insert the pet type");
        return false;
    }
    if(petBreedInput.value === ""){
        alert("Insert the pet breed");
        return false;
    }
    if(petGenderInput.value === ""){
        alert("Insert the pet gender");
        return false;
    }
    if(petServiceInput.value === ""){
        alert("Insert the service");
        return false;
    }
    if(petAllergyInput.value === ""){
        alert("Insert the pet allergy");
        return false;
    }
    if(petOwnerNameInput.value === ""){
        alert("Insert the owners name");
        return false;
    }
    if(petOwnerContactPhoneInput.value === ""){
        alert("Insert the owners contact phone");
        return false;
    }


    return true;
}

function clear() {
    petNameInput.value = "";
    petAgeInput.value = "";
    petTypeInput.value = "";
    petBreedInput.value = "";
    petGenderInput.value = "";
    petServiceInput.value = "";
    petAllergyInput.value = "";
    petOwnerNameInput.value = "";
    petOwnerContactPhoneInput .value = "";
}

// display on the console the oldest pet and the youngest pet.



function displayTable(aPet) {
    var tbody = document.getElementById("rowPet");
    var row = `
    <tr id = "${aPet.id}">
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.type}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.allergy}</td>
        <td>${aPet.ownersName}</td>
        <td>${aPet.contactPhone}</td>
        <td class="buttonDelete"><button class = "btn btn-danger" onclick="deletePet(${aPet.id})"><i class="fas fa-trash-alt"></i></button></td>
    </tr>`;
    tbody.innerHTML+=row
}

function displayPets(pets) {    
    pets.forEach(pet => {
        displayTable(pet);
    });
}
function refreshTable(){
    var tbody = document.getElementById("rowPet");
    tbody.innerHTML=""
}


function deletePet(petID) {
    console.log("delete pet id : " + petID);
    var tr = $("#"+petID);
    salon.pets.splice(
        salon.pets.forEach(pet=>{
            if(pet.id === petID) 
                return salon.pets.indexOf(pet);
        })
        ,1
    );
    tr.remove();
}

function searchPet() {
    var ss = $("#petSearch").val();
    var searchString = ss.toLowerCase();
    console.log(searchString);
    $("tr").removeClass("highlight");
    $("#msg").hide();
    if(searchString === ""){
        // refreshTable();
        // displayPets(salon.pets);
    } else {
        var petHighlight = false;
        salon.pets.forEach(pet=> { 
            if(pet.name.toLowerCase().includes(searchString) ||
                pet.type.toLowerCase().includes(searchString) || 
                pet.gender.toLowerCase().includes(searchString) || 
                pet.breed.toLowerCase().includes(searchString)||
                pet.service.toLowerCase().includes(searchString)||
                pet.allergy.toLowerCase().includes(searchString)||
                pet.ownersName.toLowerCase().includes(searchString)
                ){
                    $("#" + pet.id).addClass("highlight");
                    petHighlight = true;
            } 
        });
        if(!petHighlight){
            $("#msg").show();
        }
        // refreshTable();
        // displayPets(newArray);

    }
}

function init(){
    console.log("init()");
    displayPets(salon.pets);
}

window.onload = init();
// window.addEventListener('load', init(), false); 