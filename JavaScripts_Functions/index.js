// pounds to Kg
function poundsToKg(pounds){
    return pounds * 0.45359237;
}
console.log(poundsToKg());

// arrow function
let poundsToKg = (pounds) => {return pounds * 0.4559237}


// function to convert Inches to cm
function inchesToCm(inches){
    return inches * 2.54;
}

console.log(inchesToCm());
// arrow function to convert inches to cm
let inchesToCm = (inches) => {return inches * 2.54}

// function to convert fah to celsius
function fahTocelsius(fah){
    return fah - 32 * 5/9;
}
console.log(fahTocelsius);

// arrow function
let fah = (fah) => {return fah -32 * 5/9}

// function to convert feet to meters
function feetToMeters(feet){
    return feet * 0.3048;
}
// arrow function converting feet to meters
console.log(feetToMetters(feet))
let feetToMeters = (feet) => {return feet * 0.3048}