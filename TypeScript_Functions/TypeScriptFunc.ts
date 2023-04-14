
//function that tells whether a number is even or odd
function getNum(num: number): string{
    if (num % 2 != 0){
        return "is odd"
    }else{
        return "it is even"
    }
}
console.log(getNum(3))

// fizz-Buzz function in typescript
function fizzBuzz(num: number): string{
    if (num % 3 == 0 && num % 5 ==0){
        return "Fizz-buzz"
    }else if (num % 3 == 0){
        return "Fizz"
    }else if (num%5==0) {
        return "Buzz"
    }
    else{
        return "The number is " + num
    }
}
console.log(fizzBuzz(27))

// converting  pounds to kg
function poundsToKg(pounds: number){
    let Kg = pounds * 0.45359237;
    return Kg;
}
console.log(poundsToKg(3))

// converting inches to centimeters
function InchesToCm(inches: number){
    let centimeters = inches * 2.54;
    return centimeters;
}
console.log(InchesToCm(3))

// converting fahrenheit to celsius
function fahrenheitToCels(fahrenheit: number){
    let celsius = fahrenheit  - 32 * 5/9;
    return celsius;
}
console.log(fahrenheitToCels(3))

// converting feet to meters
function feetTometers(feet: number){
    let meters = feet * 0.3048;
    return meters;
}
console.log(feetTometers(3));