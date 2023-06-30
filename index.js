/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const length = document.getElementById('length');
const volume = document.getElementById('volume');
const mass = document.getElementById('mass');
const input = document.getElementById('input');
let num = '';

// get value from input
input.addEventListener("change", function(e){
    num = e.target.value;
    console.log(num);
});

function convert(){
    
    //calculations for each unit
    let metersToFeet = (num * 3.281).toFixed(3); 
    let feetToMeters = (num / 3.281).toFixed(3);
    let litersToGallons = (num * 0.264).toFixed(3);
    let gallonsToLiters = (num / 0.264).toFixed(3);
    let kilosToPounds = (num * 2.024).toFixed(3);
    let poundsToKilos = (num / 2.024).toFixed(3);
    
    // strings that will print in the paragraph elements
    input.value = '';
    let string1 = `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetToMeters} meters`;
    let string2 = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`;
    let string3 = `${num} kilograms = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilograms`;
    
    length.innerHTML = string1;
    volume.innerHTML = string2;
    mass.innerHTML = string3;
}