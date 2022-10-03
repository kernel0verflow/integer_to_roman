// Globals
let decimalInput = document.querySelector("#decimal");
let romanInput = document.querySelector("#roman");
let errorOutput = document.querySelector(".error");

// Event Listeners
decimalInput.addEventListener("keyup", () => {
    let num = decimalInput.value;
    if(isNaN(num)) {
        errorOutput.innerText = `ERROR: Input must be a number!`
        return false;
    }
    errorOutput.innerText = "";
    var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
    };
    var result = '';

    for(let i in roman) {
        while(num >= roman[i]) {
            result += i;
            num -= roman[i];
        }
    }
    romanInput.value = result;
});
